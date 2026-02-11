import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-[#FAF7F2]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="로고" width={36} height={36} />
            <span className="text-sm font-semibold tracking-tight text-black/90">
              전원해운지역아동센터
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
            <Link href="/activities" className="hover:text-black">활동내용</Link>
            <Link href="/notices" className="hover:text-black">공지사항</Link>
          </nav>

          <Link
            href="/activities"
            className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            활동내용 보기
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-black/90 md:text-5xl">
              아이들의 성장에<br />
              따뜻한 하루를 더합니다
            </h1>

            <p className="mt-5 text-lg text-black/70">
              아이들의 성장을 함께합니다.
              전원해운지역아동센터는 방과 후 돌봄과
              다양한 체험 활동을 통해 아이들의 성장을 지원합니다.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/activities"
                className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                이번 달 활동 보기
              </Link>
              <Link
                href="/location"
                className="rounded-2xl border border-black/20 px-6 py-3 text-sm font-semibold text-black/80"
              >
                오시는 길
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/sample-1.jpg"
              alt="센터 활동 사진"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
