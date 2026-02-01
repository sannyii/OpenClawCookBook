'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/docs', label: '文档首页 / Overview' },
  { href: '/docs/getting-started', label: '起步 / Getting Started' },
  { href: '/docs/architecture', label: '架构 / Architecture' },
  { href: '/docs/assets', label: '资源管线 / Asset Pipeline' },
  { href: '/docs/runtime', label: '运行时 / Runtime' },
  { href: '/docs/modding', label: '模组 / Modding' },
  { href: '/docs/build', label: '构建 / Build' },
  { href: '/docs/reference', label: '参考 / Reference' }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <h2>OpenClaw Docs</h2>
      <nav>
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={active ? 'active' : ''}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
