# IRIS 生成AIサービス – コーポレートサイト

## プロジェクト概要

* **目的**: 個人事業主・中小企業向けに生成AI導入コンサルティング事業を紹介する LP (Landing Page) を構築し、問い合わせ獲得を最大化する。
* **主要機能**:
  1. ヒーローセクションに Three.js 3D アニメーション付きキャッチコピーと CTA ボタン
  2. プロフィール紹介（SNS リンク付き）
  3. サービス概要（3種類: 生成AIツール活用サポート、GPTs・Dify開発、生成AI顧問）
  4. 各サービスの詳細ページ
  5. お問い合わせフォーム（Formspree 連携）
* **対象ユーザー**: 個人事業主、スタートアップ、中小企業経営者
* **成果物**: 静的サイト（4ページ構成）

---

## 技術スタック

### フロントエンド

* **HTML5**: セマンティックタグ活用、アクセシビリティ対応
* **CSS3**: Flexbox / Grid レイアウト、Media Queries、カスタムプロパティ、アニメーション
* **JavaScript (ES2021)**: バニラ JS + Three.js
* **Three.js (v128)**: ヒーローセクションの 3D アニメーション球体（Perlin ノイズシェーダー）
* **フォント**: Google Fonts `Noto Sans JP` (400, 500, 700)
* **アイコン**: カスタム PNG 画像

### 外部サービス

* **Formspree**: お問い合わせフォーム送信バックエンド
* **Google Fonts CDN**: フォント配信

### デプロイ

* GitHub Pages / Vercel 静的ホスティング

---

## ディレクトリ構造

```
project-root/
├── index.html                    # メインランディングページ (~436行)
├── CLAUDE.md                     # プロジェクトドキュメント
├── favicon.ico                   # ファビコン
├── css/
│   ├── style.css                 # メインスタイルシート (~1,008行)
│   └── gpts-dify-service.css     # サービス詳細ページ用スタイル (~362行)
├── js/
│   ├── main.js                   # メイン JavaScript (~406行)
│   └── gpts-dify-service.js      # サービスページ用 JavaScript (~216行)
├── pages/
│   ├── ai-advisor-service.html   # 生成AI顧問 詳細ページ (~519行)
│   ├── gpts-dify-service.html    # GPTs・Dify開発 詳細ページ (~371行)
│   └── ai-support-service.html   # 生成AIツール活用 詳細ページ (~525行)
└── img/
    ├── favicon.png               # ロゴ画像
    ├── ai_support.jpg            # AIサポートサービス画像
    ├── pc.jpg                    # GPTs/Dify サービス画像
    ├── training.jpg              # AI顧問サービス画像
    ├── X.png                     # X (Twitter) アイコン
    ├── note.png                  # note アイコン
    ├── YouTube.png               # YouTube アイコン
    └── LINE.png                  # LINE アイコン
```

---

## ページ構成

### メインページ (`index.html`)

| セクション | ID | 目的 | 主な要素 |
|-----------|-----|------|---------|
| ヘッダー | - | ナビゲーション | `.header`, `.header__nav`, `.header__toggle` |
| ヒーロー | `#hero` | ファーストビュー・CTA | `.hero__title` (SVGアニメーション), `.hero__cta`, `.hero__canvas` (Three.js) |
| プロフィール | `#profile` | 専門家紹介 | `.profile__name`, `.profile__bio`, `.profile__social` |
| サービス | `#services` | 提供サービス一覧 | `.services__grid`, `.service-card` (3枚) |
| お問い合わせ | `#contact` | フォーム | `#contactForm`, `.form-group`, `.form-submit` |
| フッター | - | ナビ・SNS・著作権 | `.footer__menu`, `.footer__social` |

### サービス詳細ページ (`/pages/`)

| ページ | 内容 |
|--------|------|
| `ai-support-service.html` | 生成AIツール活用サポート（ChatGPT、画像生成AI、動画生成AI、ツール連携） |
| `gpts-dify-service.html` | GPTs・Dify開発（カスタムGPTs、Difyワークフロー、開発フロー6ステップ） |
| `ai-advisor-service.html` | 生成AI顧問（月1研修、社内導入提案、質問対応、データ整備） |

---

## デザインシステム

### CSS カスタムプロパティ

```css
/* カラーパレット */
--color-primary: #0545B3       /* CTA・リンク */
--color-primary-dark: #01367F  /* ホバー */
--color-heading: #0B0B0B       /* 見出し */
--color-body: #444             /* 本文 */
--color-bg-light: #F9FAFB      /* 背景 */
--color-white: #FFFFFF
--color-gray-light: #E5E7EB
--color-success: #10B981       /* チェックマーク */
--color-error: #EF4444         /* エラー */

/* シャドウ */
--shadow-sm: 0 1px 2px rgb(0 0 0 / 5%)
--shadow-md: 0 2px 4px rgb(0 0 0 / 8%)
--shadow-lg: 0 4px 8px rgb(0 0 0 / 12%)

/* レイアウト */
--container-max: 1200px
--container-padding: clamp(1rem, 4vw, 2rem)
```

### タイポグラフィ

* 見出し: `clamp(2.4rem, 1.5vw + 2rem, 4rem)`
* 本文: `1rem / 1.6`（日本語可読性優先）

### レスポンシブブレイクポイント

| 画面サイズ | 対応 |
|-----------|------|
| > 1024px | デスクトップ（2カラムレイアウト） |
| 768px - 1024px | タブレット（一部1カラム） |
| < 768px | モバイル（ハンバーガーメニュー、1カラム） |
| < 480px | 小型モバイル（フォントサイズ調整） |

---

## JavaScript 機能

### main.js

| 機能 | 説明 |
|------|------|
| ナビゲーション | ハンバーガーメニュートグル、スムーススクロール、モバイルメニュー自動閉じ |
| スクロール効果 | ヘッダーシャドウ変化（100px+）、IntersectionObserver によるフェードイン |
| Three.js 3D 球体 | Perlin ノイズシェーダー、マウストラッキング、自動回転、リサイズ対応 |
| フォーム送信 | Formspree 連携、送信中状態表示、ボタン無効化 |
| テキストアニメーション | SVG ストロークアニメーション（タイトル3行） |

### gpts-dify-service.js

| 機能 | 説明 |
|------|------|
| スクロールアニメーション | カード、FAQ、事例のスタガーアニメーション |
| パララックス効果 | ヒーロー画像の 0.3x スクロールパララックス |
| リップルエフェクト | CTA ボタンのクリック時波紋効果 |
| ホバーインタラクション | カードの拡大・移動効果 |

---

## コーディング規約

### 基本ルール

1. **2 スペースインデント** (HTML/CSS/JS)
2. セミコロンは JS 末尾に必須
3. クラス名は **BEM** (Block__Element--Modifier) で記述
4. 画像ファイル名は `kebab-case`
5. コメントは日本語で簡潔に

### 命名規則

| 種類 | 例 | 規則 |
|------|-----|------|
| HTML ID | `#hero`, `#contactForm` | セクション単位、英小文字 |
| CSS クラス | `.service-card__image` | BEM 記法 |
| CSS 変数 | `--color-primary` | `--type-detail` |
| JS 変数 | `contactForm`, `heroCanvas` | camelCase |
| ファイル | `ai-support-service.html` | kebab-case |

### 禁止事項

* インライン CSS (style 属性) の使用
* `<br>` 連続使用による余白調整
* 未使用画像・CSS クラスの残置
* Three.js 以外の外部ライブラリ追加（要相談）

---

## アニメーションクラス

### 基本アニメーション

```css
.animate-fadeInUp    /* 下からフェードイン */
.animate-fadeIn      /* フェードイン */
.animate-slideInLeft /* 左からスライドイン */
.animate-slideInRight/* 右からスライドイン */
.animate-scaleIn     /* 拡大フェードイン */
```

### スクロールトリガー

```css
.reveal              /* 下からフェードイン（スクロール時） */
.reveal-left         /* 左からスライド */
.reveal-right        /* 右からスライド */
.reveal-scale        /* 拡大 */
.stagger-list        /* リストアイテムの順次アニメーション */
```

---

## 開発ワークフロー

1. **ローカル開発**: VS Code + Live Server 拡張
2. **変更実装**: HTML/CSS/JS を直接編集
3. **テスト**: Chrome DevTools でモバイル/デスクトップ確認
4. **パフォーマンス**: Lighthouse でスコア計測
5. **コミット**: Conventional Commits 形式
6. **デプロイ**: `main` ブランチ push → 自動公開

### よく使うコマンド

```bash
# 開発サーバー起動 (Live Server)
code .

# Git 操作
git add .
git commit -m "feat: 機能追加の説明"
git push origin main
```

---

## 重要な制約・注意事項

* 画像・文章はクライアント提供 or ライセンス確認済みの素材を使用
* フォーム送信は Formspree を使用（`https://formspree.io/f/xwpkdvra`）
* 日本語テキストは全角記号を使用（カンマ「，」ピリオド「。」）
* Three.js は CDN から読み込み（v128）
* ビルドプロセスなし（静的ファイルのみ）

---

## ファイル編集ガイド

### 新しいサービスページを追加する場合

1. `/pages/` に新規 HTML ファイルを作成
2. `gpts-dify-service.css` と `gpts-dify-service.js` をリンク
3. `index.html` のサービスセクションにカードを追加
4. ナビゲーションリンクを更新

### スタイル変更する場合

1. `css/style.css` のカスタムプロパティを確認
2. 既存のクラスを再利用（BEM 記法）
3. レスポンシブ対応を忘れずに

### JavaScript 機能追加する場合

1. `js/main.js`（メインページ）または `js/gpts-dify-service.js`（詳細ページ）に追加
2. IntersectionObserver パターンを参考に
3. RequestAnimationFrame でアニメーション最適化

---

## 参考資料

* [MDN – HTML セマンティック要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element)
* [MDN – Flexbox ガイド](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [Google Fonts – Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)
* [Three.js ドキュメント](https://threejs.org/docs/)
* [Formspree ドキュメント](https://formspree.io/docs/)

---

**最終更新**: 2025年11月

> この CLAUDE.md はプロジェクトの現在の状態を反映しています。変更が生じた場合は本ファイルを更新してください。
