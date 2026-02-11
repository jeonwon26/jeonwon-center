import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-10">
      <div className="flex items-start justify-between gap-6">
        {/* 잡지 타이틀 느낌: 로고 대신 텍스트 워드마크 */}
        <Link href="/" className="leading-tight">
          <div className="text-2xl font-semibold tracking-tight">
            전원해운지역아동센터
          </div>
          <div className="mt-2 text-sm text-neutral-600">
            아이들의 성장을 함께합니다
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-6 text-sm text-neutral-700">
          <Link href="/about" className="hover:text-neutral-900">
            센터소개
          </Link>
          <Link href="/activities" className="hover:text-neutral-900">
            활동내용
          </Link>
          <Link href="/notices" className="hover:text-neutral-900">
            공지사항
          </Link>
          <Link href="/location" className="hover:text-neutral-900">
            오시는길
          </Link>
        </nav>
      </div>
    </header>
  );
}
