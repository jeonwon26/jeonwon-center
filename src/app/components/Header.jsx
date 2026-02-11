import Link from "next/link";
import Image from "next/image";

const nav = [
  { name: "센터소개", href: "/intro" },
  { name: "활동이야기", href: "/activities" },
  { name: "공지사항", href: "/notices" },
  { name: "오시는 길", href: "/location" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
         <div className="h-12 w-12 relative">
  <Image
    src="/logo.png"
    alt="전원해운지역아동센터 로고"
    fill
    className="object-contain"
  />
</div>

          <span className="font-semibold tracking-tight">전원해운지역아동센터</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-full text-sm text-gray-700 hover:bg-amber-50 hover:text-gray-900 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 로그인 버튼은 나중에 Clerk로 교체 */}
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-full text-sm border border-gray-200 hover:bg-gray-50 transition">
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
}
