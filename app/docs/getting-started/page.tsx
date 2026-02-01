import { Bilingual } from '../../../components/Bilingual';

export default function GettingStartedPage() {
  return (
    <div>
      <h1>
        <Bilingual zh="起步：理解 OpenClaw" en="Getting Started: Understanding OpenClaw" />
      </h1>

      <section className="section">
        <h2>
          <Bilingual zh="项目目标" en="Project goals" />
        </h2>
        <p>
          <Bilingual
            zh="OpenClaw 的核心目标是复刻并现代化经典平台动作游戏的运行时，引擎需要兼容原有资源格式，同时提供跨平台运行能力。"
            en="OpenClaw aims to recreate and modernize a classic platformer runtime, keeping compatibility with original asset formats while enabling cross-platform execution."
          />
        </p>
        <p>
          <Bilingual
            zh="因此整个项目可以被理解为：一个专门面向特定游戏数据的引擎 + 工具链，而非通用型游戏引擎。"
            en="The project is best viewed as a data-specific engine plus tooling, not a general-purpose game engine."
          />
        </p>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="代码组织的心智模型" en="Mental model for code organization" />
        </h2>
        <ul>
          <li>
            <Bilingual
              zh="Core：主循环、时间步进、状态机。"
              en="Core: main loop, time stepping, and state management."
            />
          </li>
          <li>
            <Bilingual
              zh="Systems：渲染、音频、输入、物理、AI。"
              en="Systems: rendering, audio, input, physics, AI."
            />
          </li>
          <li>
            <Bilingual
              zh="Data：资源解析、文件系统、缓存。"
              en="Data: asset parsing, file system, caching."
            />
          </li>
          <li>
            <Bilingual
              zh="Tools：资源提取、调试、编辑器脚本。"
              en="Tools: extraction, debugging, and editor scripts."
            />
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="快速阅读指南" en="Quick reading guide" />
        </h2>
        <div className="callout">
          <Bilingual
            zh="建议先看“架构”章节理解一帧内发生了什么，再看“资源管线”理解数据如何流入运行时，最后阅读“构建”与“参考”章节动手实践。"
            en="Start with Architecture to understand a single frame, then Asset Pipeline for data flow, and finally Build/Reference to get hands-on."
          />
        </div>
      </section>
    </div>
  );
}
