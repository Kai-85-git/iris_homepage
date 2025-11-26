'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const ThreeSphere = dynamic(() => import('./ThreeSphere'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[500px] h-[500px] bg-bg-light rounded-lg animate-pulse" />
  ),
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 bg-gradient-to-br from-bg-light to-white"
    >
      <div className="container flex flex-wrap items-center justify-between gap-8">
        <div className="flex-1 min-w-[320px]">
          <div className="h-[280px] relative mb-4 md:h-[240px] lg:h-[280px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 600 280"
              className="font-sans"
            >
              <text
                x="0"
                y="45"
                fontSize="70"
                fontWeight="700"
                className="stroke-text line1"
              >
                効率を上げる
              </text>
              <text
                x="0"
                y="130"
                fontSize="70"
                fontWeight="700"
                className="stroke-text line2"
              >
                生成AIで中小企業
              </text>
              <text
                x="0"
                y="215"
                fontSize="70"
                fontWeight="700"
                className="stroke-text line3"
              >
                に革新を
              </text>
            </svg>
          </div>
          <p className="text-gray-500 mb-10 leading-relaxed text-xl">
            個人・中小企業に向けサポートします
          </p>
          <Link href="#contact" className="btn-primary">
            まずは相談してみる
          </Link>
        </div>

        <div className="flex-1 min-w-[320px] flex justify-center">
          <ThreeSphere />
        </div>
      </div>
    </section>
  );
}
