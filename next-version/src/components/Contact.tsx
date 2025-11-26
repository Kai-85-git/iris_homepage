'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';

const inquiryTypes = [
  '生成AI導入支援・アドバイザー',
  '生成AI活用サポート',
  '生成AI研修',
  'AIチャットボット開発',
  'その他',
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formspree.io/f/xnnvyped', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      form.reset();
      alert('お問い合わせを送信しました。ありがとうございます。');
    } catch {
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className="text-left border-l-4 border-primary pl-4 mb-8 text-2xl md:text-[28px] font-bold text-[#333333]">
          お問い合わせ
        </h2>

        <p className="mb-8 text-xl reveal">
          <span className="whitespace-nowrap">個人事業主・中小企業で</span>
          生成AIを導入したいけどどうしたらいいかわからない。
        </p>

        <p className="mb-8 text-xl reveal">
          <span className="whitespace-nowrap">生成AIツールを使用して</span>
          <span className="whitespace-nowrap">少しでも業務効率化したい。</span>
          <br className="md:hidden" />
          というのがあればお問い合わせください。
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] mx-auto px-4 reveal"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block font-medium text-heading mb-2">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="山田　太郎"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block font-medium text-heading mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="taro@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="type" className="block font-medium text-heading mb-2">
              お問い合わせの種類
            </label>
            <select id="type" name="type" className="form-input" required>
              <option value="">選択してください</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block font-medium text-heading mb-2"
            >
              お問い合わせの内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="form-input min-h-[150px] resize-y"
              placeholder="お問い合わせ内容を入力してください。"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-8 bg-primary text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '送信中...' : '送信'}
          </button>
        </form>
      </div>
    </section>
  );
}
