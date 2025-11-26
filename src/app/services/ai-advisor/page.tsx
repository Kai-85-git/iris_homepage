import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '生成AI顧問サービス | IRIS',
  description:
    '生成AI顧問サービス - 個人事業主・中小企業向けAI活用でビジネス課題を解決、最適な生成AIの導入から活用までをトータルサポート',
};

const supportContents = [
  {
    title: '📚 月1回の研修',
    items: [
      '最新AI技術トレンドの共有',
      '実践的な活用ワークショップ',
      '業界別事例研究',
      'Q&Aセッション',
    ],
  },
  {
    title: '🏢 社内導入と活用提案',
    items: [
      '現状業務の詳細分析',
      'AI導入計画の策定',
      '段階的な実装サポート',
      '効果測定と改善提案',
    ],
  },
  {
    title: '💬 随時質問対応',
    items: [
      'チャット・メールでの即時対応',
      '技術的トラブルサポート',
      '活用方法の個別相談',
      '新しいアイデアの検討',
    ],
  },
  {
    title: '📊 社内データ整備',
    items: [
      'AI活用に向けたデータ監査',
      'データベース構造の最適化',
      '知識管理システムの構築',
      'セキュリティ対策の提案',
    ],
  },
];

const flowSteps = [
  {
    step: 1,
    title: '初回相談',
    description:
      'お客様の現状と課題をヒアリングし、最適なAI導入計画を提案いたします。',
    color: 'bg-primary',
  },
  {
    step: 2,
    title: '契約・開始',
    description:
      'サービス内容にご納得いただけましたら、契約を結び、定期サポートを開始します。',
    color: 'bg-success',
  },
  {
    step: 3,
    title: '継続サポート',
    description:
      '月1回の研修、随時の質問対応、社内導入支援を通じて、AI活用を推進します。',
    color: 'bg-error',
  },
];

const faqs = [
  {
    question: '顧問サービスと個別サポートの違いは何ですか？',
    answer:
      '顧問サービスは長期的なパートナーシップを前提とした包括的なサポートです。月1回の定期研修、社内データ整備、継続的な導入支援など、企業のAI活用を総合的にサポートします。一方、個別サポートは特定のツールの使い方を学ぶ短期的なサービスです。',
  },
  {
    question: '最低契約期間はどのくらいですか？',
    answer:
      '最低契約期間は3ヶ月です。AI導入は短期間での成果が難しいため、継続的なサポートを通じて確実な成果を出していただくためです。3ヶ月後は月単位での契約更新が可能です。',
  },
  {
    question: 'どのような業界・規模の企業に対応していますか？',
    answer:
      '個人事業主から従業員数50名程度の中小企業まで幅広く対応しています。業界については、製造業、サービス業、IT、コンサルティング、クリエイティブ業界など、様々な分野での実績があります。',
  },
  {
    question: '月1回の研修はオンラインでも可能ですか？',
    answer:
      'はい、オンラインでの研修にも対応しています。Zoom、Teams、Google Meetなどを使用し、画面共有やデモンストレーションを交えた実践的な研修を行います。対面での研修も可能です。',
  },
  {
    question: '社内データ整備では具体的に何をしてもらえますか？',
    answer:
      '現在のデータ管理状況の診断、AI活用に適したデータベース構造の提案、ナレッジベースの構築支援、セキュリティ対策の提案などを行います。お客様の業務に合わせてカスタマイズしたデータ整備プランを作成いたします。',
  },
  {
    question: '料金体系について教えてください',
    answer:
      '料金は企業規模やサポート内容によって異なります。初回相談は無料ですので、まずはお客様の状況をお聞かせください。その上で、最適なプランと料金をご提案いたします。',
  },
];

export default function AiAdvisorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-bg-light">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-center mb-8">
            生成AI顧問サービス
          </h1>
          <p className="text-center text-lg text-body mb-12">
            個人事業主・中小企業の皆様へ、AI活用でビジネス課題を解決、最適な生成AIの導入から活用までをトータルサポート
          </p>
          <div className="text-center">
            <Image
              src="/img/training.jpg"
              alt="生成AI顧問サービス"
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
                AI技術の急速な進歩により、生成AIは現代ビジネスにおいて必須のツールとなりました。しかし、「どこから始めればよいかわからない」「自社に最適な活用方法が見つからない」といったお悩みを抱える企業様が多いのも現実です。
              </p>
              <p className="text-lg leading-relaxed text-body mb-6">
                本サービスでは、お客様の事業内容や課題を深く理解し、最適な生成AIソリューションの導入から社内への浸透、継続的な活用支援まで、長期的なパートナーとしてサポートいたします。
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
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-20 bg-bg-light">
        <div className="container">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
              サービス利用の流れ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {flowSteps.map((step) => (
                <div key={step.step} className="service-detail-card text-center">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-heading mb-4">
                    {step.title}
                  </h3>
                  <p className="text-body leading-relaxed">{step.description}</p>
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

            <div className="space-y-4 mb-12">
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

            <div className="bg-bg-light p-8 rounded-lg text-center mb-12">
              <h4 className="text-xl font-bold text-heading mb-4">
                初回相談無料
              </h4>
              <p className="text-body mb-4">
                まずはお客様の現状と課題をお聞かせください
              </p>
              <p className="text-sm text-body">※最低契約期間：3ヶ月</p>
            </div>

            <div className="text-center">
              <Link href="/#contact" className="btn-primary">
                無料相談を申し込む
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
