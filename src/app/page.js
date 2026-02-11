import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-neutral-900">
      <Header />

      {/* HERO: 잡지 느낌 3단 그리드 */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* LEFT: big photo */}
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/sample-1.jpg"
                alt="센터 활동 사진"
                width={900}
                height={1200}
                className="h-[520px] w-full object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-xs italic text-neutral-600">
              2026-02 · 겨울방학 프로그램
            </p>
          </div>

          {/* CENTER: small photo */}
          <div className="lg:col-span-4 lg:pt-12">
            <div className="overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/sample-2.jpg"
                alt="센터 공간 사진"
                width={900}
                height={900}
                className="h-[320px] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs italic text-neutral-600">
              월영동 · 센터 공간과 일상
            </p>
          </div>

          {/* RIGHT: small photo + intro */}
          <div className="lg:col-span-4 lg:pt-6">
            <div className="overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/sample-1.jpg"
                alt="센터 프로그램 사진"
                width={900}
                height={900}
                className="h-[320px] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs italic text-neutral-600">
              아이들의 성장 기록
            </p>

            <div className="mt-8 space-y-4 text-sm leading-7 text-neutral-700">
              <p className="text-neutral-800">
                전원해운지역아동센터는 아이들의 일상과 배움을 안전하게
                이어갈 수 있도록 돌봄과 프로그램을 운영합니다.
              </p>
              <p>
                매달 활동 소식을 사진과 함께 기록하고,
                학부모와 지역사회에 투명하게 공유합니다.
              </p>
              <p className="text-neutral-600">
                위치: 창원시 마산합포구 월영동
              </p>

              <div className="pt-2">
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-xs text-neutral-800 hover:bg-white"
                >
                  이번 달 활동 보러가기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 아래 섹션: 최신 활동/공지 (심플하게) */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Latest Activities */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between">
              <h2 className="text-lg font-semibold tracking-tight">
                최신 활동내용
              </h2>
              <Link
                href="/activities"
                className="text-xs text-neutral-600 hover:text-neutral-900"
              >
                더보기 →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* 카드 1 */}
              <Link
                href="/activities"
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white/40 hover:bg-white"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/sample-2.jpg"
                    alt="활동 썸네일"
                    width={900}
                    height={700}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-neutral-600">2026-02</p>
                  <p className="mt-2 text-sm text-neutral-900">
                    겨울방학 프로그램 운영
                  </p>
                  <p className="mt-2 text-xs text-neutral-600 line-clamp-2">
                    만들기·체험·기초학습 등 아이들 맞춤 프로그램을 진행했습니다.
                  </p>
                </div>
              </Link>

              {/* 카드 2 */}
              <Link
                href="/activities"
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white/40 hover:bg-white"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/sample-1.jpg"
                    alt="활동 썸네일"
                    width={900}
                    height={700}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-neutral-600">2026-01</p>
                  <p className="mt-2 text-sm text-neutral-900">
                    새해 맞이 자치회의
                  </p>
                  <p className="mt-2 text-xs text-neutral-600 line-clamp-2">
                    아이들이 직접 의견을 내고 한 달 활동을 함께 정했습니다.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Latest Notices */}
          <div className="lg:col-span-5">
            <div className="flex items-end justify-between">
              <h2 className="text-lg font-semibold tracking-tight">
                공지사항
              </h2>
              <Link
                href="/notices"
                className="text-xs text-neutral-600 hover:text-neutral-900"
              >
                더보기 →
              </Link>
            </div>

            <div className="mt-6 rounded-3xl border border-neutral-200 bg-white/40 p-6">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start justify-between gap-6">
                  <span className="text-neutral-900">
                    2월 프로그램 운영 안내
                  </span>
                  <span className="text-xs text-neutral-600">2026-02</span>
                </li>
                <li className="flex items-start justify-between gap-6">
                  <span className="text-neutral-900">
                    귀가 시간 및 안전 안내
                  </span>
                  <span className="text-xs text-neutral-600">2026-02</span>
                </li>
                <li className="flex items-start justify-between gap-6">
                  <span className="text-neutral-900">
                    후원금/후원물품 감사 안내
                  </span>
                  <span className="text-xs text-neutral-600">2026-01</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 text-xs leading-6 text-neutral-600">
              ※ 메뉴 중 <span className="text-neutral-800">센터소개/공지사항/오시는길</span> 페이지를
              아직 안 만들었으면 링크 클릭 시 404가 날 수 있어. 원하면 다음 턴에서
              그 3개 페이지도 통코드로 같이 만들어서 연결해줄게.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-12">
        <div className="border-t border-neutral-200 pt-8 text-xs text-neutral-600">
          <p>전원해운지역아동센터 · 창원시 마산합포구 월영동</p>
          <p className="mt-2">© {new Date().getFullYear()} JEONWON-HAEWOON</p>
        </div>
      </footer>
    </main>
  );
}
