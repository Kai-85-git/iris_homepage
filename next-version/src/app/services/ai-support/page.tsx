import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '生成AIツール活用サポートサービス | IRIS',
  description:
    '生成AIツール活用サポートサービス - ChatGPT、Midjourney、Runwayなど各種生成AIツールの効果的な活用をマンツーマンでサポート',
};

const supportContents = [
  {
    title: '📝 ChatGPT活用',
    items: [
      '効果的なプロンプト作成技術',
      '業務別活用事例の紹介',
      'GPTsの活用方法',
    ],
  },
  {
    title: '🎨 画像生成AI',
    items: [
      'Midjourney、StableDiffusion活用法',
      '高品質な画像生成のコツ',
      '商用利用時の注意点',
    ],
  },
  {
    title: '🎬 動画生成AI',
    items: [
      'Runwayの活用法',
      '効果的な動画コンテンツ制作',
      'マーケティング活用事例',
    ],
  },
  {
    title: '🔗 ツール連携',
    items: [
      '複数ツールの組み合わせ活用',
      'ワークフロー最適化',
      '効率的な作業プロセス構築',
    ],
  },
];

const caseStudies = [
  {
    title: '📌 ご相談内容',
    content:
      'AIを活用して採用動画（CM）を作成したい。ChatGPTで台本作成、Midjourneyで画像生成、Runwayで動画編集など、各AIツールの具体的な使い方と、それらを組み合わせた制作プロセスを学びたい。',
    supportTitle: '🛠️ サポート内容',
    supportItems: [
      'ChatGPTで採用CMのシナリオ・台本作成方法',
      'Midjourneyで背景画像・キャラクター生成手順',
      'Runwayで動画編集・エフェクト追加の実践',
      '各ツールの使い方をステップバイステップで指導',
    ],
    bgColor: 'bg-[#e8f4f8]',
  },
  {
    title: '📌 ご相談内容',
    content:
      '日本語で制作した動画を、英語を話すアバターが説明する形式に変換したい。AIアバターを使用して、多言語対応の説明動画を作成し、海外向けのマーケティングや教育コンテンツとして活用したい。',
    supportTitle: '🛠️ サポート内容',
    supportItems: [
      'ChatGPT・Geminiで翻訳・スクリプト作成',
      'HeyGenでアバター動画の作成手順',
      '多言語対応の音声同期テクニック',
      '各ツールの使い方と連携方法を指導',
    ],
    bgColor: 'bg-[#f3e8ff]',
  },
];

const flowSteps = [
  {
    step: 'STEP 1',
    title: 'ヒアリング',
    description:
      '現在の業務内容、課題、目標を詳しくお聞かせください。AIツールの活用可能性を一緒に検討します。',
    color: 'text-primary',
  },
  {
    step: 'STEP 2',
    title: 'カスタマイズ',
    description:
      'お客様の業務に最適化したAIツールの組み合わせとワークフローを設計します。',
    color: 'text-success',
  },
  {
    step: 'STEP 3',
    title: '実践指導',
    description:
      '実際の業務を想定した実践的なトレーニングを行い、確実にスキルを身につけていただきます。',
    color: 'text-error',
  },
];

const faqs = [
  {
    question: 'どのようなAIツールを学べますか？',
    answer:
      'ChatGPT、Claude、Geminiなどの対話型AI、Midjourney、Stable Diffusion、DALL-E3などの画像生成AI、Runway、HeyGenなどの動画生成AI、その他お客様のニーズに応じた最新のAIツールに対応しています。',
  },
  {
    question: '初心者でも受講できますか？',
    answer:
      'もちろん受講可能です。AIツールの基本的な使い方から、実際の業務での活用方法まで、お客様のレベルに合わせて丁寧にサポートいたします。パソコンの基本操作ができれば問題ありません。',
  },
  {
    question: '受講期間や頻度はどのくらいですか？',
    answer:
      'お客様のニーズに応じて柔軟に対応いたします。単発での受講から、週1回・月数回の定期的な受講まで可能です。1回あたり1時間程度です。',
  },
  {
    question: 'オンラインでの受講は可能ですか？',
    answer:
      'はい、可能です。Zoom、Teams、Google Meetなどのオンラインツールを使用して、画面共有をしながら実践的な指導を行います。全国どこからでも受講いただけます。',
  },
  {
    question: '受講に必要な準備はありますか？',
    answer:
      'パソコンとインターネット環境があれば大丈夫です。特定のAIツールを使用する場合は、事前にアカウント作成をお願いすることがあります。必要な準備については、受講前に詳しくご案内いたします。',
  },
];

export default function AiSupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-bg-light">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-center mb-8">
            生成AIツール活用サポートサービス
          </h1>
          <p className="text-center text-lg text-body mb-12">
            ChatGPT、Midjourney、Runwayなど、各種生成AIツールの効果的な活用をマンツーマンでサポート
          </p>
          <div className="text-center">
            <Image
              src="/img/ai_support.jpg"
              alt="生成AIツール活用サポートサービス"
              width={600}
              height={400}
              className="max-w-full md:max-w-[600px] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-8">
              サービス概要
            </h2>

            <div className="mb-12">
              <p className="text-lg leading-relaxed text-body mb-6">
                現代のビジネスにおいて、生成AIツールの活用は競争優位性を築く重要な要素となっています。しかし、多様なツールが存在し、それぞれの特性や最適な使い方を理解するのは容易ではありません。
              </p>
              <p className="text-lg leading-relaxed text-body mb-6">
                本サービスでは、お客様の業務や創作活動に最適化したAIツールの使い方を、マンツーマンで丁寧にサポートいたします。単なる操作方法の説明ではなく、実際の業務に即した実践的なスキルを身につけていただけます。
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-heading text-center mb-8">
              サポート内容
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {supportContents.map((content) => (
                <div key={content.title} className="service-detail-card">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    {content.title}
                  </h4>
                  <ul className="space-y-2">
                    {content.items.map((item) => (
                      <li key={item} className="pl-6 relative">
                        <span className="absolute left-0 text-success">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/#contact" className="btn-primary">
                お問い合わせはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-bg-light">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-4">
              受講例
            </h2>
            <p className="text-center text-lg text-body mb-12">
              実際にサポートした事例をご紹介します
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="service-detail-card border border-gray-light"
                >
                  <div className="bg-[#f8f9fa] p-5 rounded-md mb-5">
                    <h5 className="font-semibold text-heading mb-3">
                      {study.title}
                    </h5>
                    <p className="text-body leading-relaxed">{study.content}</p>
                  </div>

                  <div className={`${study.bgColor} p-5 rounded-md`}>
                    <h5 className="font-semibold text-heading mb-3">
                      {study.supportTitle}
                    </h5>
                    <ul className="space-y-2">
                      {study.supportItems.map((item) => (
                        <li key={item} className="pl-6 relative">
                          <span className="absolute left-0 text-primary">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
              サービスフロー
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              {flowSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="service-detail-card text-center relative"
                >
                  <h4 className={`text-xl font-bold ${step.color} mb-4`}>
                    {step.step}
                    <br />
                    <span className="text-lg font-semibold text-heading">
                      {step.title}
                    </span>
                  </h4>
                  <p className="text-body leading-relaxed">{step.description}</p>

                  {index < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 text-2xl text-primary animate-pulse">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
              よくある質問
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="border border-gray-light rounded-lg"
                >
                  <summary className="p-6 cursor-pointer font-semibold text-heading bg-bg-light rounded-lg">
                    {faq.question}
                  </summary>
                  <div className="p-6 text-body leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-light">
        <div className="container">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-8">
              お問い合わせ
            </h2>
            <p className="text-lg leading-relaxed text-body mb-12">
              AIツールの活用について、お気軽にご相談ください。お客様の業務に最適なソリューションをご提案いたします。
            </p>
            <Link href="/#contact" className="btn-primary">
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
