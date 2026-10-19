import type { Metadata } from "next"
import { Train, Bus, Car, MapPin, ParkingCircle } from "lucide-react"
import SiteHeader from "../site-header"
import VillageMap, { type Place } from "./village-map"

export const metadata: Metadata = { title: "오시는 길 · 가일마을에서 하룻밤" }

// 마을회관 좌표·주소: 카카오맵 '가곡1리마을회관' 검색 결과. 나머지는 OpenStreetMap 기준.
const ADDRESS = "경북 안동시 풍천면 가일선원길 34"
const places: Place[] = [
  { name: "가곡1리 마을회관", lat: 36.5723, lng: 128.5267 },
  { name: "경북도청", lat: 36.5754, lng: 128.5052 },
  { name: "안동역·안동터미널", lat: 36.5744, lng: 128.676 },
]

const ways = [
  {
    icon: Train,
    title: "기차 · 안동역",
    body: "중앙선 KTX-이음·ITX-마음·무궁화호가 서는 안동역에서 내립니다. 역 바로 옆이 안동터미널이라 버스·택시로 갈아타기 편합니다.",
  },
  {
    icon: Bus,
    title: "고속·시외버스 · 안동터미널",
    body: "서울·대구 등에서 오는 버스는 안동터미널에 도착합니다. 경북도청 시외버스정류장도 마을과 가깝습니다.",
  },
  {
    icon: Car,
    title: "택시 · 자가용",
    body: "안동역·터미널에서 차로 약 20분, 경북도청 신도시에서는 약 2km 거리입니다. 내비게이션에 ‘가일선원길 34’(가곡1리 마을회관)를 입력하세요.",
  },
  {
    icon: Bus,
    title: "시내버스",
    body: "안동터미널에서 풍산·풍천 방면 211번 시내버스가 다닙니다. 배차가 길어 내릴 정류장과 시간은 예약 확정 때 함께 안내해 드립니다.",
  },
]

export default function DirectionsPage() {
  return (
    <main className="min-h-screen break-keep bg-[#f6f1e7] text-[#2b2a26]">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-4 py-12">
        <p className="text-xs tracking-[0.3em] text-[#6b675d]">DIRECTIONS</p>
        <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">오시는 길</h1>
        <p className="mt-3 flex items-center gap-2 text-[#4a463e]">
          <MapPin className="h-4 w-4 shrink-0 text-[#4f6b3a]" /> 집결 장소: 가곡1리 마을회관 ({ADDRESS})
        </p>

        <div className="mt-6 h-[420px] overflow-hidden rounded-2xl bg-[#e6dfcf] shadow-sm">
          <VillageMap places={places} />
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <a
            href={`https://map.kakao.com/link/search/${encodeURIComponent(ADDRESS)}`}
            target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-[#fee500] px-4 py-2 font-medium text-[#191919] hover:brightness-95"
          >
            카카오맵에서 보기
          </a>
          <a
            href={`https://map.naver.com/p/search/${encodeURIComponent(ADDRESS)}`}
            target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-[#03c75a] px-4 py-2 font-medium text-white hover:brightness-95"
          >
            네이버 지도에서 보기
          </a>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-bold">찾아오는 방법</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {ways.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm">
              <Icon className="h-5 w-5 text-[#4f6b3a]" />
              <h3 className="mt-2 font-medium">{title}</h3>
              <p className="mt-1 text-sm text-[#6b675d]">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3 rounded-2xl border border-[#ddd5c3] p-5 text-sm text-[#4a463e]">
          <ParkingCircle className="h-5 w-5 shrink-0 text-[#4f6b3a]" />
          <p>
            마을길이 좁아 차량은 1~2대로 함께 타고 오시길 부탁드립니다. 주차 위치는 예약 확정 문자로 안내합니다.
            돌아가는 길에는 같은 풍천면의 하회마을에 들러도 좋습니다.
          </p>
        </div>
      </section>
    </main>
  )
}
