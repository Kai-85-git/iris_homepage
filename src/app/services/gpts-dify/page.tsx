import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GPTs・Dify開発サービス | IRIS',
  description:
    'GPTs・Dify開発サービス - OpenAIのGPTsとDifyを活用したカスタムAIソリューションを開発',
};

const developmentContents = [
  {
    title: '🤖 ChatGPTのGPTs開発',
    items: [
      '業務特化型GPTsの構築',
      'カスタム知識ベースの統合',
      '外部APIとの連携機能',
      '使用方法のトレーニング提供',
    ],
  },
  {
    title: '⚡ Difyワークフロー開発',
    items: [
      '複雑な業務フローの自動化',
      'マルチモーダル対応（テキスト・画像・音声）',
      '各種ツール・データベース連携',
      'カスタムUI/UXデザイン',
    ],
  },
];

const useCases = [
  {
    title: '📋 営業支援システム',
    description:
      '顧客情報を基にした提案書の自動生成、フォローアップメールの作成支援',
  },
  {
    title: '📚 社内FAQ システム',
    description:
      '社内文書を学習させた質問応答システム、新人研修サポート',
  },
  {
    title: '🎨 コンテンツ制作支援',
    description:
      'ブログ記事、SNS投稿、マーケティング資料の自動生成',
  },
  {
    title: '💼 業務プロセス最適化',
    description: 'データ分析、レポート作成、承認フローの自動化',
  },
];

const developmentFlow = [
  {
    step: 1,
    title: 'ヒアリング・要件定義',
    description:
      'お客様の業務課題やニーズを詳しくヒアリングし、最適なソリューションを提案いたします。',
  },
  {
    step: 2,
    title: '設計・プロトタイプ',
    description:
      'ワークフロー設計とプロトタイプを作成し、お客様に確認いただきます。',
  },
  {
    step: 3,
    title: '開発・実装',
    description:
      '承認いただいた設計に基づき、GPTsまたはDifyワークフローを開発いたします。',
  },
  {
    step: 4,
    title: 'テスト・調整',
    description:
      '実際のデータでテストを行い、必要に応じて調整・改善いたします。',
  },
  {
    step: 5,
    title: '納品・トレーニング',
    description:
      'システムを納品し、使用方法のトレーニングを実施いたします。',
  },
  {
    step: 6,
    title: 'サポート・保守',
    description:
      '運用開始後も継続的なサポートとメンテナンスを提供いたします。',
  },
];

const faqs = [
  {
    question: 'GPTsとDifyの違いは何ですか？',
    answer:
      'GPTsはChatGPTの機能拡張で、シンプルな質問応答や知識ベース連携に適しています。Difyはより複雑なワークフローやマルチモーダル対応、外部システム連携が必要な場合に適しています。お客様の要件に応じて最適なプラットフォームをご提案いたします。',
  },
  {
    question: 'プログラミング知識は必要ですか？',
    answer:
      'お客様側でのプログラミング知識は不要です。GPTsやDifyはローコード・ノーコードプラットフォームのため、開発後の運用は直感的な操作で行えます。必要に応じて操作方法のトレーニングも提供いたします。',
  },
  {
    question: '既存のシステムとの連携は可能ですか？',
    answer:
      'はい、可能です。API連携やWebhook機能を活用して、既存のCRM、ERP、データベースなどとの連携を実現できます。具体的な連携方法については、ヒアリング時に詳しくお聞かせください。',
  },
  {
    question: 'セキュリティは大丈夫ですか？',
    answer:
      'セキュリティ対策は重要視しています。機密情報の取り扱い、アクセス制御、データ暗号化など、適切なセキュリティ対策を実装いたします。また、必要に応じてプライベート環境での構築も可能です。',
  },
  {
    question: '開発後のサポート体制はどうなっていますか？',
    answer:
      '納品後も継続的なサポートを提供いたします。運用中のトラブル対応、機能追加・改善、定期的なメンテナンスなど、お客様の安心運用をサポートいたします。サポートプランはご相談ください。',
  },
  {
    question: '料金体系はどのようになっていますか？',
    answer:
      'プロジェクトの規模や複雑さに応じて、個別にお見積りさせていただきます。初期開発費用の他、運用サポート費用も含めた総合的なコストをご提案いたします。まずはお気軽にご相談ください。',
  },
];

export default function GptsDifyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-bg-light">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-center mb-8">
            GPTs・Dify開発サービス
          </h1>
          <p className="text-center text-lg text-body mb-12">
            ビジネス効率化と価値創造のため、OpenAIのGPTsとDifyを活用したカスタムAIソリューションを開発
          </p>
          <div className="text-center">
            <Image
              src="/img/pc.jpg"
              alt="GPTs・Dify開発サービス"
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
                ChatGPTの進化により、GPTsやDifyなどのローコード・ノーコードプラットフォームが注目を集めています。これらのツールを活用することで、プログラミング知識がなくても高度なAIソリューションを構築することが可能になりました。
              </p>
              <p className="text-lg leading-relaxed text-body mb-6">
                本サービスでは、お客様の具体的なニーズをヒアリングし、最適なGPTsまたはDifyワークフローを設計・開発いたします。単純な質問応答から複雑な業務プロセスの自動化まで、幅広いソリューションを提供します。
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-heading text-center mb-8">
              開発内容
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {developmentContents.map((content) => (
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

            <h3 className="text-xl md:text-2xl font-bold text-heading text-center mb-8">
              活用事例
            </h3>

            <div className="bg-bg-light p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase) => (
                  <div key={useCase.title} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-heading mb-4">
                      {useCase.title}
                    </h4>
                    <p className="text-body leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg text-center mb-12">
              <h4 className="text-xl font-bold text-heading mb-4">
                開発期間：2〜4週間
              </h4>
              <p className="text-body mb-2">※プロジェクトの複雑さにより変動</p>
              <p className="text-body">導入後のサポート・メンテナンスも承ります</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Flow */}
      <section className="py-20 bg-bg-light">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
              開発フロー
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {developmentFlow.slice(0, 3).map((step) => (
                <div key={step.step} className="service-detail-card">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-heading mb-4">
                    {step.title}
                  </h4>
                  <p className="text-body leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {developmentFlow.slice(3).map((step) => (
                <div key={step.step} className="service-detail-card">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-heading mb-4">
                    {step.title}
                  </h4>
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
              GPTs・Dify開発について、お気軽にご相談ください。お客様のビジネスに最適なAIソリューションをご提案いたします。
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
