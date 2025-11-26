'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/#hero', label: 'ホーム' },
  { href: '/#profile', label: 'プロフィール' },
  { href: '/#services', label: 'サービス' },
  { href: '/#contact', label: 'お問い合わせ' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const target = document.getElementById(targetId);
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <nav className="py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            IRIS
          </Link>

          {/* Mobile menu button */}
          <button
            className="flex flex-col gap-1 md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <span
              className={`w-6 h-0.5 bg-heading transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-heading transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-heading transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-heading font-medium py-2 transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          <ul
            className={`md:hidden fixed top-[60px] left-0 right-0 bg-white flex-col p-6 shadow-md transition-transform duration-300 ${
              isMenuOpen ? 'flex translate-x-0' : 'hidden -translate-x-full'
            }`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-heading font-medium py-3 transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
