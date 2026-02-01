import { Bilingual } from '../../../components/Bilingual';

export default function ReferencePage() {
  return (
    <div>
      <h1>
        <Bilingual zh="参考速查" en="Reference" />
      </h1>

      <section className="section">
        <h2>
          <Bilingual zh="术语对照" en="Terminology" />
        </h2>
        <div className="grid">
          <div className="card">
            <strong>Level / 关卡</strong>
            <p>
              <Bilingual zh="关卡数据集合" en="Level data collection" />
            </p>
          </div>
          <div className="card">
            <strong>Actor / 实体</strong>
            <p>
              <Bilingual zh="可交互对象" en="Interactive object" />
            </p>
          </div>
          <div className="card">
            <strong>Asset / 资源</strong>
            <p>
              <Bilingual zh="外部文件（纹理、音频等）" en="External files (textures, audio, etc.)" />
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="分析清单" en="Analysis checklist" />
        </h2>
        <ul>
          <li>
            <Bilingual zh="确认主循环与子系统更新顺序。" en="Verify main loop and subsystem update order." />
          </li>
          <li>
            <Bilingual zh="列出所有资源类型、解析器与缓存策略。" en="List asset types, parsers, and caching strategies." />
          </li>
          <li>
            <Bilingual zh="整理运行时配置与调试参数。" en="Organize runtime configs and debug flags." />
          </li>
          <li>
            <Bilingual zh="构建最小复现关卡与调试工具链。" en="Build a minimal repro level and debugging toolchain." />
          </li>
        </ul>
      </section>
    </div>
  );
}
