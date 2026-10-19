"use client"
import { useEffect, useRef } from "react"

export type Place = { name: string; lat: number; lng: number }

type KakaoMaps = {
  load: (cb: () => void) => void
  LatLng: new (lat: number, lng: number) => unknown
  LatLngBounds: new () => { extend: (p: unknown) => void }
  Map: new (el: HTMLElement, opts: { center: unknown; level: number }) => { setBounds: (b: unknown) => void }
  Marker: new (opts: { map: unknown; position: unknown; title: string }) => unknown
  CustomOverlay: new (opts: { map: unknown; position: unknown; content: string; yAnchor: number }) => unknown
}
declare global {
  interface Window { kakao?: { maps: KakaoMaps } }
}

const KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY

export default function VillageMap({ places }: { places: Place[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!KEY) return
    const draw = () => {
      const maps = window.kakao!.maps
      maps.load(() => {
        if (!ref.current) return
        const map = new maps.Map(ref.current, { center: new maps.LatLng(places[0].lat, places[0].lng), level: 7 })
        const bounds = new maps.LatLngBounds()
        for (const p of places) {
          const pos = new maps.LatLng(p.lat, p.lng)
          new maps.Marker({ map, position: pos, title: p.name })
          new maps.CustomOverlay({
            map,
            position: pos,
            yAnchor: 2.6,
            content: `<div style="padding:2px 8px;border-radius:999px;background:#2f3a28;color:#fff;font-size:12px;white-space:nowrap">${p.name}</div>`,
          })
          bounds.extend(pos)
        }
        map.setBounds(bounds)
      })
    }
    if (window.kakao?.maps) return draw()
    const s = document.createElement("script")
    s.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KEY}&autoload=false`
    s.onload = draw
    document.head.appendChild(s)
  }, [places])

  if (!KEY) {
    // ponytail: no Kakao key yet → OpenStreetMap embed (keyless). Set NEXT_PUBLIC_KAKAO_MAP_KEY to switch.
    const v = places[0]
    const bbox = [v.lng - 0.05, v.lat - 0.03, v.lng + 0.05, v.lat + 0.03].join(",")
    return (
      <iframe
        title="가일마을 위치 지도"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${v.lat},${v.lng}`}
        className="h-full w-full"
        loading="lazy"
      />
    )
  }
  return <div ref={ref} className="h-full w-full" role="img" aria-label="가일마을과 주변 교통 거점 지도" />
}
