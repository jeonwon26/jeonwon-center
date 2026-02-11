import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-neutral-900">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* LEFT */}
          <div className="lg:col-span-4">
            <div className="overflow-hidden shadow-sm">
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

          {/* CENTER */}
          <div className="lg:col-span-4 lg:pt-12">
            <div className="overflow-hidden shadow-sm">
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

          {/* RIGHT */}
          <div className="lg:col-span-4 lg:pt-6">
            <div className="overflow-hidden shadow-sm">
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
                  className="inline-flex items-center gap-2 border bor
