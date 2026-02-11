import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-5xl px-4">
        <section className="py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            전원해운지역아동센터
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            배움·돌봄·성장을 바탕으로 지역 아동의 밝은 내일을 함께 만들어갑니다.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="/activities"
              className="px-5 py-3 rounded-full bg-amber-200 text-gray-900 font-medium hover:bg-amber-300 transition"
            >
              활동이야기 보기
            </a>
            <a
              href="/intro"
              className="px-5 py-3 rounded-full border border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              센터 소개
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
