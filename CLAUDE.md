# IRIS 生成AIサービス – コーポレートサイト

## プロジェクト概要

* **目的**: 個人事業主・中小企業向けに生成AI導入コンサルティング事業を紹介する LP (Landing Page) を構築し、問い合わせ獲得を最大化する。
* **主要機能**:

  1. ヒーローセクションに強いキャッチコピーと CTA ボタン
  2. プロフィール紹介
  3. サービス概要 (GPTs/Dify 開発 & 生成AI顧問)
  4. お問い合わせフォーム (名前・メール・件名・本文)
* **対象ユーザー**: 個人事業主、スタートアップ、中小企業経営者
* **成果物**: 静的サイト (`index.html`, `css/style.css`, `js/main.js`) + 画像・ファビコン

imageサイト参照を参考にして作成すること
@project-root/img/home.png

---

## 技術スタック

### フロントエンド

* **HTML5**: セマンティックタグ活用
* **CSS3**: Flexbox / Grid レイアウト、Media Queries、カスタムプロパティ
* **JavaScript (ES2021)**: 依存ライブラリなし (バニラ JS)
* **フォント**: Google Fonts `Noto Sans JP`, system 代替
* **アイコン**: \[Heroicons/Lucide] CDN or SVG 直接埋め込み

### バックエンド

* なし (フォーム送信は外部サービス or `mailto:` を仮実装)

### デプロイ

* GitHub Pages / Vercel 静的ホスティング

---

## ページ構造

```
project-root/
├── index.html        # メインページ
├── css/
│   └── style.css     # すべてのスタイル定義
├── js/
│   └── main.js       # スクロールアニメーション等
├── img/
│   ├── hero-illustration.svg
│   └── service-laptop.jpg
└── favicon.ico
```

---

## セクション設計

| ID          | 目的                     | 主な要素 & クラス例                       |
| ----------- | ---------------------- | --------------------------------- |
| `#hero`     | ファーストビュー・CTA           | `.hero__title`, `.hero__cta`      |
| `#profile`  | 専門家プロフィール紹介            | `.profile__name`, `.profile__bio` |
| `#services` | 提供サービス説明               | `.service-card` (2 枚)             |
| `#contact`  | お問い合わせフォーム             | `<form id="contactForm">`         |
| `footer`    | コピーライト & ナビ (ページ上部と共通) | `.footer-nav`                     |

---

## デザインガイドライン

* **カラーパレット**

  * `--color-primary`: #0545B3 (CTA・リンク)
  * `--color-primary-dark`: #01367F (ホバー)
  * `--color-heading`: #0B0B0B
  * `--color-body`: #444
  * `--color-bg-light`: #F9FAFB
* **タイポグラフィ**

  * 見出し: `font-size: clamp(2.4rem, 1.5vw + 2rem, 4rem);`
  * 本文: `1rem / 1.6`; 行間は日本語可読性を優先
* **レイアウト**

  * 最大幅 `1200px` センター寄せ (`margin-inline: auto`)
  * コンテンツパディング `clamp(1rem, 4vw, 2rem)`
  * ナビゲーションはデスクトップで水平、モバイルでハンバーガー
* **ボタン**

  * 丸み `border-radius: 0.5rem`、影 `box-shadow: 0 2px 4px rgb(0 0 0 / 8%)`
  * ホバーで `transform: translateY(-2px)` & シャドウ拡大
* **レスポンシブ**

  * ブレイクポイント: 768px / 1024px
  * 主要レイアウトを `flex-direction: column` に切替

---

## コーディング規約

### 基本ルール

1. **2 スペースインデント** (HTML/CSS/JS)
2. セミコロンは JS 末尾に必須
3. クラス名は **BEM** (Block\_Element--Modifier) で記述
4. 画像ファイル名は `kebab-case`
5. コメントは日本語で簡潔に

### 命名規則

| 種類      | 例                    | 規則              |
| ------- | -------------------- | --------------- |
| HTML ID | `#hero`              | セクション単位、英小文字    |
| CSS 変数  | `--color-primary`    | `--type-detail` |
| JS 変数   | `contactForm`        | camelCase       |
| ファイル    | `service-laptop.jpg` | kebab-case      |

### 禁止事項

* インライン CSS (style 属性) の使用
* `<br>` 連続使用による余白調整
* 未使用画像・CSS クラスの残置

---

## 開発ワークフロー

1. **探索 (Explore)**: `home.png` デザイン解析、必要画像を抽出
2. **計画 (Plan)**: セクションごとの HTML ワイヤーフレームを作成
3. **実装 (Implement)**:

   * `index.html` にセマンティックタグ配置
   * `style.css` でカラー・レイアウト実装
   * `main.js` でナビのスクロール & フォームバリデーション
4. **テスト (Test)**:

   * モバイル/デスクトップ表示確認 (Chrome DevTools)
   * Lighthouse でパフォーマンス & アクセシビリティ計測
5. **コミット (Commit)**: Conventional Commits
6. **デプロイ (Deploy)**: `main` ブランチ push → GitHub Pages 自動公開

---

## よく使うコマンド

```bash
# 開発サーバー (Live Server 拡張を推奨)
code .

# Lint/Formatter (オプション)
npm run lint   # stylelint, eslint 実行
npm run format # prettier
```

---

## テスト方針

* **ユニットテスト**: 対象外 (静的サイトのため)
* **E2E テスト**: `Cypress` を導入し、フォーム送信動作のみ自動化 (任意)
* **カバレッジ目標**: ー

---

## 重要な制約・注意事項

* 画像・文章はクライアント提供 or ライセンス確認済みの素材を使用
* フォーム送信時は **reCAPTCHA** などボット対策を検討
* 日本語テキストは全角記号を使用（例：カンマ「，」ピリオド「。」）

---

## 参考資料

* [MDN – HTML セマンティック要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element)
* [MDN – Flexbox ガイド](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [Google Fonts – Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)

---

**最後に**

> この CLAUDE.md は『CLAUDE.md 作成ガイドライン』に従い、情報は必要最小限かつ構造化して記述しています。変更点が生じた場合は本ファイルを更新し、常に最新状態を保ってください。
