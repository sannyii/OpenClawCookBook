import { Bilingual } from '../../components/Bilingual';

export default function DocsHomePage() {
  return (
    <div>
      <div className="hero">
        <span className="kicker">Documentation</span>
        <h1>
          <Bilingual zh="OpenClaw 文档首页" en="OpenClaw Documentation Home" />
        </h1>
        <p>
          <Bilingual
            zh="这套文档以“先建立心智模型、再拆解模块、最后落到实践”的顺序编排，帮助你系统理解 OpenClaw。"
            en="The docs are organized as: mental model → module breakdown → hands-on practice, so you can learn OpenClaw systematically."
          />
        </p>
        <div className="callout">
          <Bilingual
            zh="说明：当前环境无法直接访问 GitHub 与头条链接，因此文档中的源码细节以公开资料与常见开源游戏引擎结构为基础，待获得仓库访问后可进一步校对与补充。"
            en="Note: The environment cannot access GitHub or Toutiao links, so code-level details are inferred from public knowledge and common engine patterns. Validate and extend once repo access is available."
          />
        </div>
      </div>

      <section className="section">
        <h2>
          <Bilingual zh="你将学到什么" en="What you will learn" />
        </h2>
        <ul>
          <li>
            <Bilingual
              zh="OpenClaw 的目标、运行范围与项目边界。"
              en="Project goals, scope, and boundaries of OpenClaw."
            />
          </li>
          <li>
            <Bilingual
              zh="引擎层次结构：主循环、渲染、音频、输入、资源加载。"
              en="Engine layers: main loop, rendering, audio, input, and asset loading."
            />
          </li>
          <li>
            <Bilingual
              zh="资源管线与数据格式的认知框架。"
              en="A framework for understanding asset pipelines and data formats."
            />
          </li>
          <li>
            <Bilingual
              zh="如何搭建构建、运行、调试与二次开发环境。"
              en="How to build, run, debug, and extend the project."
            />
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="文档路线图" en="Documentation roadmap" />
        </h2>
        <div className="grid">
          <div className="card">
            <h3>
              <Bilingual zh="起步" en="Getting started" />
            </h3>
            <p>
              <Bilingual
                zh="建立整体理解：项目结构、源码组织、依赖关系。"
                en="Understand layout, source organization, and dependencies."
              />
            </p>
          </div>
          <div className="card">
            <h3>
              <Bilingual zh="架构" en="Architecture" />
            </h3>
            <p>
              <Bilingual
                zh="从输入到渲染，追踪一次游戏帧。"
                en="Follow a single frame from input to rendering."
              />
            </p>
          </div>
          <div className="card">
            <h3>
              <Bilingual zh="资源管线" en="Asset pipeline" />
            </h3>
            <p>
              <Bilingual
                zh="梳理关卡、纹理、音频、脚本等数据的加载与解析。"
                en="Map how levels, textures, audio, and scripts are loaded and parsed."
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
