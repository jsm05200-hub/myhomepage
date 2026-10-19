import Link from "next/link"

const links = [
  ["/#program", "프로그램"],
  ["/#tea", "차 트렌드"],
  ["/#schedule", "일정"],
  ["/#reviews", "후기"],
  ["/directions", "오시는 길"],
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#ddd5c3] bg-[#f6f1e7]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 text-sm">
        <Link href="/" className="mr-auto font-serif font-bold">가일마을에서 하룻밤</Link>
        {links.map(([href, label]) => (
          <Link key={href} href={href} className="hidden text-[#4a463e] hover:text-[#2b2a26] sm:inline">{label}</Link>
        ))}
        <Link href="/directions" className="text-[#4a463e] hover:text-[#2b2a26] sm:hidden">오시는 길</Link>
        <Link href="/#booking" className="rounded-full bg-[#4f6b3a] px-4 py-1.5 font-medium text-white hover:bg-[#435c31]">예약</Link>
      </nav>
    </header>
  )
}
