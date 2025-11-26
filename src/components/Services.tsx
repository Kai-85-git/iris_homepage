'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const services = [
  {
    title: '生成AIツール活用サポート',
    description:
      'ChatGPT、Midjourney、Runwayなど、各種生成AIツールの効果的な活用をマンツーマンでサポートします。お客様の業務や創作活動に最適化した使い方から、ツール間の連携方法まで、実践的なスキルを身につけていただけます。',
    image: '/img/ai_support.jpg',
    features: [
      '週1回1時間の個別サポート（月4回）',
      '各ツールの基本操作から応用まで',
      'ツール間の連携方法指導',
      'お客様の用途に合わせたカスタマイズ提案',
    ],
    href: '/services/ai-support',
  },
  {
    title: 'GPTs・Dify開発',
    description:
      'ビジネス効率化と価値創造のため、OpenAIのGPTsとDifyを活用したカスタムAIソリューションを開発します。お客様の具体的なニーズに合わせ、最適なAIを迅速かつ確実に提供。',
    image: '/img/pc.jpg',
    features: [
      'ChatGPTのGPTs開発',
      'Difyワークフロー開発',
      '業務プロセスの自動化設計',
      '導入後の運用サポート',
    ],
    href: '/services/gpts-dify',
  },
  {
    title: '生成AI顧問',
    description:
      '個人事業主・中小企業の皆様へ、AI活用でビジネス課題を解決します。AIが必須の現代、最新技術の導入・活用は難題です。「生成AI顧問サービス」が、お客様の事業内容や課題に寄り添い、最適な生成AIの導入から活用までをトータルでサポートします。',
    image: '/img/training.jpg',
    features: [
      '月1回の研修',
      '社内導入と活用提案',
      '生成AIに関する質問回答',
      '社内データ整備（AI時代に合わせるため）',
    ],
    href: '/services/ai-advisor',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-bg-light" ref={sectionRef}>
      <div className="container">
        <h2 className="text-left border-l-4 border-primary pl-4 mb-8 text-2xl md:text-[28px] font-bold text-[#333333]">
          サービス内容
        </h2>

        <p className="mb-8 text-xl">
          個人事業主から中小企業まで、幅広いニーズにお応えします
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-[200px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#333333] mb-4">
                  {service.title}
                </h3>

                <p className="text-body leading-relaxed mb-6 text-base">
                  {service.description}
                </p>

                <ul className="mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="pl-6 relative mb-2 text-body text-base leading-relaxed"
                    >
                      <span className="absolute left-0 text-success font-bold">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="block w-full py-3 px-6 bg-primary text-white text-center font-medium rounded-lg shadow-sm transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-md mt-auto"
                >
                  詳しく見る
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
