'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const socialLinks = [
  { href: 'https://x.com/KaiArt4', icon: '/img/X.png', label: 'X (Twitter)' },
  { href: 'https://note.com/generative_ai', icon: '/img/note.png', label: 'note' },
  { href: 'https://www.youtube.com/@kai_promptengineer03', icon: '/img/YouTube.png', label: 'YouTube' },
  { href: 'https://lin.ee/k1ZjVDa', icon: '/img/LINE.png', label: 'LINE' },
];

export default function Profile() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="profile" className="py-20 bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className="text-left border-l-4 border-primary pl-4 mb-8 text-2xl md:text-[28px] font-bold text-[#333333]">
          プロフィール
        </h2>

        <div className="max-w-[45%] md:max-w-[80%] sm:max-w-full reveal">
          <p className="font-bold mb-2 text-xl">粉川　海</p>

          <div className="flex gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>

          <p className="text-gray-500 mb-4 text-xl">
            生成AIの専門家として、皆様の成功をサポートします
          </p>

          <p className="mb-4 text-xl">
            「AIって何から始めればいいの？」
            <br />
            そんなお悩みをお持ちの企業様へ。
          </p>

          <p className="mb-4 text-xl">
            私は御社の働き方を根本から変える生成AIを活用して企業の生産性を劇的に向上させる、そんな使命感をもって活動しています。
          </p>

          <p className="mb-4 text-xl">
            3年間の実績とココナラ100件以上の成功事例を基に、確実で持続的な成長をサポートするパートナーとして貢献します。
          </p>

          <p className="mb-4 text-xl">
            お客様の期待を上回る価値を必ず提供いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
