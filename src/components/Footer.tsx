import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { href: '/#hero', label: 'ホーム' },
  { href: '/#profile', label: 'プロフィール' },
  { href: '/#services', label: 'サービス' },
  { href: '/#contact', label: 'お問い合わせ' },
];

const socialLinks = [
  { href: 'https://x.com/KaiArt4', icon: '/img/X.png', label: 'X (Twitter)' },
  { href: 'https://note.com/generative_ai', icon: '/img/note.png', label: 'note' },
  { href: 'https://www.youtube.com/@kai_promptengineer03', icon: '/img/YouTube.png', label: 'YouTube' },
  { href: 'https://lin.ee/k1ZjVDa', icon: '/img/LINE.png', label: 'LINE' },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-[#333333] text-white">
      <div className="container">
        <nav className="mb-8">
          <ul className="flex justify-center flex-wrap gap-4 md:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white opacity-80 transition-opacity duration-300 hover:opacity-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg"
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          ))}
        </div>

        <p className="text-center opacity-60 text-sm">
          &copy; 2025 IRIS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
