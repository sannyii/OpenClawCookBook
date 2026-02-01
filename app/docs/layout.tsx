import { Sidebar } from '../../components/Sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="layout">
      <Sidebar />
      <div className="content">{children}</div>
    </main>
  );
}
