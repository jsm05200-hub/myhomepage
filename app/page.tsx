import Link from "next/link"
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery"
import BookingForm from "./booking-form"
import SiteHeader from "./site-header"
import { Footprints, CupSoda, Moon, Salad, Users, Car, ShieldCheck, Star, Quote } from "lucide-react"

// 사진: Unsplash 무료 이미지(핫링크), 마지막 장은 자체 삽화
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=70&auto=format&fit=crop`
const teaTrends = [
  {
    tag: "#커피대신차",
    title: "요즘 2030은\n카페에서 차를 고른다",
    desc: "건강과 취향을 중시하는 20~30대를 중심으로 차 소비가 늘고 있습니다.",
    source: "한국경제 · 2026.06.06",
    img: unsplash("1531969179221-3946e6b5a5e7"),
  },
  {
    tag: "#티오마카세",
    title: "차를 코스로 즐기는\n‘차마카세’",
    desc: "1인 2만~4만 원에 차 3~4종과 다과를 곁들이는 차 코스가 인기입니다.",
    source: "코메디닷컴 · 2024.03.14",
    img: unsplash("1546852199-2d8e8c4aaada"),
  },
  {
    tag: "#티하우스",
    title: "카페가 질렸다면,\n차 마시러 떠나는 여행",
    desc: "한옥 찻집과 차 박람회가 SNS에서 ‘가 볼 곳’으로 공유됩니다.",
    source: "중앙일보 · 2026.09.18 외 SNS 게시물",
    img: unsplash("1631682477691-9021a9218860"),
  },
  {
    tag: "#가일마을",
    title: "500년 고택 마을,\n쉼터에서 마시는 차 한 잔",
    desc: "돌담길을 걷고 난 오후, 진행자가 우려 주는 차로 쉬어 갑니다.",
    source: "가일마을 1박 2일 프로그램",
    img: "/images/tea.png",
    ours: true,
  },
]

const teaCompare = [
  ["장소", "도심 찻집·티룸", "500년 고택 마을의 쉼터"],
  ["구성", "차 코스 1~2시간", "걷기 → 차 → 하룻밤 → 함께 만든 밥"],
  ["규모", "매장 좌석 기준", "한 회차 4~6명, 진행자가 직접 우려 줌"],
  ["남는 것", "사진 한 장", "오늘의 장면을 그린 그림과 마을 이야기"],
]

// 예시 후기: 첫 회차 운영 후 사후 설문에서 공개 동의한 실제 소감으로 바꿉니다.
const reviews = [
  { name: "김○원", group: "아이 동반 가족 · 4명", rating: 5, best: "참나물 비빔밥", text: "아이들이 직접 나물을 씻고 그릇에 담으면서 너무 즐거워했어요. 다음에 또 올 거예요." },
  { name: "안○주", group: "친구 모임 · 3명", rating: 5, best: "쉼터에서 차 한 잔", text: "차 마시는 시간이 정말 좋았어요. 돌담길을 천천히 걷고 쉼터에서 쉬니까 일상 걱정이 잠깐 사라졌어요." },
  { name: "신○호", group: "부부 · 2명", rating: 4, best: "돌담과 들판 걷기", text: "고택 이야기를 들으며 걷는 코스가 마음에 들었어요. 서두르지 않는 일정이라 부모님 모시고 다시 오고 싶어요." },
  { name: "박○린", group: "아이 동반 가족 · 5명", rating: 5, best: "마을에서 하룻밤", text: "저녁에 따로 체험이 없어서 오히려 좋았어요. 조용한 마을에서 가족끼리 이야기를 많이 나눴습니다." },
  { name: "이○서", group: "연인 · 2명", rating: 5, best: "쉼터에서 차 한 잔", text: "도시 찻집과는 분위기가 완전히 달라요. 이 프로그램이 정말 맘에 들었어요." },
  { name: "최○우", group: "친구 모임 · 4명", rating: 4, best: "참나물 비빔밥", text: "참나물 향이 이렇게 좋은 줄 몰랐어요. 밭에서 본 재료로 점심을 만드는 흐름이 좋았습니다." },
]
const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)

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
      <SiteHeader />
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
      <section id="program" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
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

      {/* Tea trend */}
      <section id="tea" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
        <p className="text-xs tracking-[0.3em] text-[#6b675d]">WHY TEA, WHY NOW</p>
        <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">요즘, 차 한 잔을 찾아 떠납니다</h2>
        <p className="mt-2 text-[#6b675d]">SNS와 기사에서 보이는 차 문화의 흐름을 가일마을의 쉼터로 가져왔습니다.</p>
        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4">
          {teaTrends.map((t, i) => (
            <article
              key={t.tag}
              className={`relative aspect-[4/5] overflow-hidden ${t.ours ? "ring-4 ring-[#c9a96e]" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
              <div className="relative flex h-full flex-col p-4 text-white">
                <span className="text-xs font-bold tracking-wider">
                  {t.ours ? "OUR PICK" : `PICK ${String(i + 1).padStart(2, "0")}`}
                </span>
                <span className="mt-1 w-fit rounded-full bg-white/20 px-2 py-0.5 text-[11px] backdrop-blur">{t.tag}</span>
                <h3 className="mt-auto whitespace-pre-line text-base font-bold leading-snug sm:text-xl">{t.title}</h3>
                <p className="mt-2 hidden text-xs text-white/80 sm:block">{t.desc}</p>
                <p className="mt-2 text-[10px] text-white/60">{t.source}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-2 text-right text-[10px] text-[#8a8577]">사진: Unsplash · 마지막 장은 프로그램 삽화</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#ddd5c3]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#efe8da]">
              <tr>
                <th className="w-20 p-3 font-medium sm:w-28"></th>
                <th className="p-3 font-medium text-[#6b675d]">도심의 차 체험</th>
                <th className="p-3 font-medium text-[#4f6b3a]">가일마을의 차 시간</th>
              </tr>
            </thead>
            <tbody>
              {teaCompare.map(([k, city, gail]) => (
                <tr key={k} className="border-t border-[#ddd5c3]">
                  <th className="p-3 font-medium">{k}</th>
                  <td className="p-3 text-[#6b675d]">{city}</td>
                  <td className="p-3 font-medium">{gail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
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
            <p className="mt-1 text-sm text-[#6b675d]">마을길이 좁아 되도록 함께 타고 들어와 주세요. 안동역·터미널에서 차로 약 20분.</p>
            <Link href="/directions" className="mt-2 inline-block text-sm font-medium text-[#4f6b3a] underline">오시는 길 보기 →</Link>
          </div>
          <div className="rounded-2xl border border-[#ddd5c3] p-5">
            <ShieldCheck className="h-5 w-5 text-[#4f6b3a]" />
            <h3 className="mt-2 font-medium">마을 예절</h3>
            <p className="mt-1 text-sm text-[#6b675d]">고택은 주민의 생활공간이라 밖에서만 둘러봅니다. 우천·폭염 시 실내 대체 활동.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-16 bg-[#efe8da] py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#6b675d]">REVIEWS</p>
              <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">다녀간 분들의 이야기</h2>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 fill-[#c9a96e] text-[#c9a96e]" />
              <span className="font-serif text-3xl font-bold">{avgRating}</span>
              <span className="text-sm text-[#6b675d]">/ 5 · 후기 {reviews.length}개</span>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <article key={r.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-0.5" aria-label={`별점 ${r.rating}점`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-[#c9a96e] text-[#c9a96e]" : "text-[#ddd5c3]"}`} />
                  ))}
                </div>
                <Quote className="mt-4 h-5 w-5 text-[#ddd5c3]" />
                <p className="mt-1 flex-1 text-[15px] leading-relaxed">{r.text}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[#efe8da] pt-4 text-sm">
                  <div>
                    <p className="font-medium">{r.name}</p>
                    <p className="text-xs text-[#8a8577]">{r.group}</p>
                  </div>
                  <span className="rounded-full bg-[#eef2e8] px-3 py-1 text-xs text-[#4f6b3a]">{r.best}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#8a8577]">
            후기는 사후 설문에서 공개에 동의한 참가자의 소감을 싣습니다. 현재는 첫 회차 운영 전 예시 후기입니다.
          </p>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="scroll-mt-16 bg-[#2f3a28] py-16 text-white">
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
