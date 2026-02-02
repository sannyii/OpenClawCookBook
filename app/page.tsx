import Link from 'next/link';
import { Bilingual } from '../components/Bilingual';

export default function HomePage() {
  return (
    <main className="layout layout--single">
      <div className="content">
        <section className="hero">
          <span className="badge">OpenClaw Docs</span>
          <h1>
            <Bilingual
              zh="OpenClaw 系统化学习手册"
              en="A Structured Handbook for OpenClaw"
            />
          </h1>
          <p>
            <Bilingual
              zh="从零开始、循序渐进地理解 OpenClaw 引擎与游戏数据结构，覆盖构建流程、运行时架构、资源管线与二次开发。"
              en="Learn OpenClaw step by step, covering the build pipeline, runtime architecture, asset system, and extensibility."
            />
          </p>
          <div className="grid">
            <div className="card">
              <h3>
                <Bilingual zh="快速入口" en="Quick entry" />
              </h3>
              <p>
                <Bilingual
                  zh="阅读文档首页，先建立整体心智模型。"
                  en="Start with the overview to build your mental model first."
                />
              </p>
              <Link href="/docs" className="badge">
                <Bilingual zh="进入文档" en="Go to docs" />
              </Link>
            </div>
            <div className="card">
              <h3>
                <Bilingual zh="系统化分析" en="System analysis" />
              </h3>
              <p>
                <Bilingual
                  zh="从模块关系、数据流、渲染与音频栈逐层拆解。"
                  en="Dive into modules, data flow, rendering, and audio stacks." 
                />
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <h2>
            <Bilingual zh="为什么是这份文档" en="Why this documentation" />
          </h2>
          <p>
            <Bilingual
              zh="OpenClaw 是一个内容驱动、资源格式复杂的开源项目。我们把资料拆成短小的步骤，并提供中英文切换，让你可以像阅读 TypeScript 或 Vue 文档一样循序渐进。"
              en="OpenClaw is content-driven and has a rich asset pipeline. This handbook breaks the system into incremental steps with bilingual toggles, similar to TypeScript or Vue docs."
            />
          </p>
        </section>
      </div>
    </main>
  );
}
