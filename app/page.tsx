import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery"
import BookingForm from "./booking-form"
import { Footprints, CupSoda, Moon, Salad, Users, Car, ShieldCheck } from "lucide-react"

const mediaItems = [
  { id: 1, type: "image", title: "가일마을 고택", desc: "안동권씨 집성마을의 생활문화", url: "/images/gotaek.jpeg", span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2" },
  { id: 2, type: "image", title: "논밭과 농로", desc: "재료의 출처를 듣는 길", url: "/images/farm.jpeg", span: "md:col-span-2 md:row-span-3 sm:col-span-1 sm:row-span-2" },
  { id: 3, type: "image", title: "가곡지와 마을숲", desc: "짧게 걷고 오래 쉬는 곳", url: "/images/pond.jpeg", span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2" },
  { id: 4, type: "image", title: "고택과 돌담", desc: "마을의 시간을 느끼는 길", url: "/images/wall.jpeg", span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2" },
  { id: 5, type: "image", title: "쉼터에서 차 한 잔", desc: "차 향을 고르고 천천히 마시기", url: "/images/tea.png", span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2" },
  { id: 6, type: "image", title: "참나물 비빔밥", desc: "함께 만드는 둘째 날 점심", url: "/images/bibimbap.png", span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2" },
]

const highlights = [
  { icon: Footprints, title: "돌담과 들판 걷기", desc: "고택 외관과 농경지 가장자리를 천천히" },
  { icon: CupSoda, title: "쉼터에서 차 한 잔", desc: "진행자가 우려 주는 차로 낮 휴식" },
  { icon: Moon, title: "마을에서 하룻밤", desc: "저녁은 체험 없이 편히 쉬는 시간" },
  { icon: Salad, title: "참나물 비빔밥", desc: "아이는 씻고 담고, 어른은 칼과 불" },
]

const days = [
  {
    label: "첫째 날 · 마을을 알아가는 오후",
    items: [
      ["13:00", "도착 · 안내 · 사전 설문", "마을회관"],
      ["13:40", "돌담길 · 고택 외관 산책", "마을길"],
      ["14:40", "농경지 관찰 · 재료 이야기", "농로 가장자리"],
      ["15:40", "차 끓여 마시기 · 낮 휴식", "무더위쉼터"],
      ["17:00", "숙소 이동 · 자유시간", "숙소"],
      ["18:30", "저녁 식사 · 가벼운 이야기", "식사 공간"],
    ],
  },
  {
    label: "둘째 날 · 함께 만드는 점심",
    items: [
      ["08:00", "아침 식사 · 짐 정리", "숙소"],
      ["09:30", "가곡지 짧은 산책 · 자연 관찰", "가곡지 산책길"],
      ["10:40", "참나물 비빔밥 재료 손질·만들기", "마을회관"],
      ["12:10", "함께 만든 점심 식사", "식사 공간"],
      ["13:10", "휴식 · 사후 설문 · 소감", "마을회관"],
      ["14:00", "마무리 · 출발", "집결 장소"],
    ],
  },
]

export default function Page() {
  return (
    <main className="min-h-screen break-keep bg-[#f6f1e7] text-[#2b2a26]">
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[520px] overflow-hidden bg-[#fbf3dc]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/cover.png" alt="가일마을 풍경 삽화" className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf3dc] via-[#fbf3dc]/70 to-transparent md:via-transparent" />
        <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-center px-4">
          <p className="text-xs tracking-[0.3em] text-[#6b675d]">GAIL VILLAGE · 안동 풍천면</p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-6xl">
            가일마을에서<br />하룻밤
          </h1>
          <p className="mt-4 max-w-xs text-base text-[#4a463e] sm:max-w-sm sm:text-lg">
            고택을 걷고, 차를 마시고, 참나물 비빔밥을 함께 만드는 1박 2일
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#booking" className="rounded-full bg-[#4f6b3a] px-6 py-3 text-sm font-medium text-white hover:bg-[#435c31]">
              예약하기
            </a>
            <a href="#schedule" className="rounded-full border border-[#2b2a26]/30 bg-white/50 px-6 py-3 text-sm font-medium hover:bg-white/80">
              일정 보기
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">걷고 · 쉬고 · 마시고 · 함께 밥을 만듭니다</h2>
        <p className="mt-2 text-[#6b675d]">한 번에 4~6명. 서로 얼굴을 익힐 만큼만 모입니다.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm">
              <Icon className="h-6 w-6 text-[#4f6b3a]" />
              <h3 className="mt-3 font-medium">{title}</h3>
              <p className="mt-1 text-sm text-[#6b675d]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#efe8da]">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="마을 둘러보기"
          description="사진을 눌러 크게 보고, 끌어서 순서를 바꿔 보세요"
        />
      </section>

      {/* Schedule */}
      <section id="schedule" className="mx-auto max-w-5xl scroll-mt-8 px-4 py-16">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">1박 2일 일정</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {days.map((day) => (
            <div key={day.label} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#4f6b3a]">{day.label}</h3>
              <ol className="mt-4 space-y-3">
                {day.items.map(([time, what, where]) => (
                  <li key={time} className="flex gap-4 text-sm">
                    <span className="w-12 shrink-0 font-mono text-[#8a8577]">{time}</span>
                    <span className="flex-1">{what}</span>
                    <span className="shrink-0 text-[#8a8577]">{where}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#ddd5c3] p-5">
            <Users className="h-5 w-5 text-[#4f6b3a]" />
            <h3 className="mt-2 font-medium">한 회차 4~6명</h3>
            <p className="mt-1 text-sm text-[#6b675d]">보호자와 아이 모두 포함. 가족 한두 팀 또는 친구 한 모임.</p>
          </div>
          <div className="rounded-2xl border border-[#ddd5c3] p-5">
            <Car className="h-5 w-5 text-[#4f6b3a]" />
            <h3 className="mt-2 font-medium">차량은 1~2대로</h3>
            <p className="mt-1 text-sm text-[#6b675d]">마을길이 좁아 되도록 함께 타고 들어와 주세요. 안동역·도청신도시에서 접근.</p>
          </div>
          <div className="rounded-2xl border border-[#ddd5c3] p-5">
            <ShieldCheck className="h-5 w-5 text-[#4f6b3a]" />
            <h3 className="mt-2 font-medium">마을 예절</h3>
            <p className="mt-1 text-sm text-[#6b675d]">고택은 주민의 생활공간이라 밖에서만 둘러봅니다. 우천·폭염 시 실내 대체 활동.</p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="scroll-mt-8 bg-[#2f3a28] py-16 text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">예약 신청</h2>
          <p className="mt-2 text-sm text-white/70">신청 후 운영자가 연락드려 일정과 참가비를 확정합니다.</p>
          <BookingForm />
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-[#8a8577]">
        가일마을 1박 2일 프로그램 · 2026 농촌관광특론
      </footer>
    </main>
  )
}
