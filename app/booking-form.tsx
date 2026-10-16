"use client"
import { useState } from "react"

const field = "mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none [color-scheme:dark]"

type Booking = { date: string; adults: number; kids: number; name: string; phone: string; memo: string }

export default function BookingForm() {
  const [adults, setAdults] = useState(2)
  const [kids, setKids] = useState(2)
  const [done, setDone] = useState<Booking | null>(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")
  const total = adults + kids
  const tooFew = total < 4
  const tooMany = total > 6
  const tomorrow = new Date(Date.now() + 864e5).toISOString().slice(0, 10)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (tooFew || tooMany || sending) return
    const f = new FormData(e.currentTarget)
    const booking: Booking = {
      date: String(f.get("date")),
      adults,
      kids,
      name: String(f.get("name")),
      phone: String(f.get("phone")),
      memo: String(f.get("memo") ?? ""),
    }
    const url = process.env.NEXT_PUBLIC_SHEET_URL
    if (!url) return setError("예약 시트 주소가 설정되지 않았습니다 (.env.local의 NEXT_PUBLIC_SHEET_URL).")
    setSending(true)
    setError("")
    try {
      // Apps Script web apps don't send CORS headers: no-cors + text/plain gets the row in, but the response is unreadable.
      await fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(booking) })
      setDone(booking)
    } catch {
      setError("전송에 실패했습니다. 인터넷 연결을 확인하고 다시 시도해 주세요.")
    } finally {
      setSending(false)
    }
  }

  if (done) {
    return (
      <div className="mt-8 rounded-2xl bg-white/10 p-6">
        <h3 className="font-serif text-xl font-bold">신청이 접수되었습니다</h3>
        <dl className="mt-4 grid grid-cols-[6rem_1fr] gap-y-2 text-sm">
          <dt className="text-white/60">도착일</dt><dd>{done.date} 13:00 (1박 2일)</dd>
          <dt className="text-white/60">인원</dt><dd>어른 {done.adults}명 · 아이 {done.kids}명</dd>
          <dt className="text-white/60">대표자</dt><dd>{done.name} · {done.phone}</dd>
          {done.memo && (<><dt className="text-white/60">요청사항</dt><dd>{done.memo}</dd></>)}
        </dl>
        <button onClick={() => setDone(null)} className="mt-6 text-sm underline text-white/70 hover:text-white">
          다시 작성하기
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-5">
      <label className="block text-sm">
        도착일 (첫째 날 13:00 마을회관 집결)
        <input type="date" name="date" required min={tomorrow} className={field} />
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label className="block text-sm">
          어른
          <input type="number" min={1} max={6} value={adults} onChange={(e) => setAdults(Number(e.target.value))} className={field} />
        </label>
        <label className="block text-sm">
          아이
          <input type="number" min={0} max={5} value={kids} onChange={(e) => setKids(Number(e.target.value))} className={field} />
        </label>
      </div>
      <p className={`text-sm ${tooFew || tooMany ? "text-amber-300" : "text-white/60"}`} aria-live="polite">
        총 {total}명 · {tooFew ? "한 회차는 최소 4명부터 진행합니다" : tooMany ? "한 회차는 최대 6명까지입니다" : "참가 가능한 인원입니다"}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          대표자 이름
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm">
          연락처
          <input name="phone" type="tel" required autoComplete="tel" pattern="0\d{1,2}-?\d{3,4}-?\d{4}" placeholder="010-0000-0000" className={field} />
        </label>
      </div>

      <label className="block text-sm">
        요청사항 (알레르기, 아이 나이, 차량 대수 등)
        <textarea name="memo" rows={3} className={field} />
      </label>

      <label className="flex items-start gap-2 text-sm text-white/80">
        <input type="checkbox" required className="mt-1" />
        고택은 밖에서만 둘러보며, 마을에서는 조용히 이동하는 데 동의합니다. 참가 전·후 짧은 익명 설문에 참여합니다.
      </label>

      <button
        type="submit"
        disabled={tooFew || tooMany || sending}
        className="w-full rounded-full bg-[#c9a96e] py-3 font-medium text-[#2b2a26] hover:bg-[#d6b97f] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sending ? "보내는 중…" : "예약 신청하기"}
      </button>
      {error && <p className="text-sm text-amber-300" role="alert">{error}</p>}
    </form>
  )
}
