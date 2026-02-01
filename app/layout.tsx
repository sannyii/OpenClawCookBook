import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LanguageProvider } from '../components/LanguageProvider';
import { LanguageToggle } from '../components/LanguageToggle';

export const metadata: Metadata = {
  title: 'OpenClaw Cookbook',
  description: 'Progressive documentation for the OpenClaw project.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <LanguageProvider>
          <header className="header">
            <div className="brand">
              <Link href="/">OpenClaw CookBook</Link>
            </div>
            <LanguageToggle />
          </header>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
