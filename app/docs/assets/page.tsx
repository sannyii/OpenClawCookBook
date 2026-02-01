import { Bilingual } from '../../../components/Bilingual';

export default function AssetsPage() {
  return (
    <div>
      <h1>
        <Bilingual zh="资源管线：从数据到画面" en="Asset Pipeline: From data to pixels" />
      </h1>

      <section className="section">
        <h2>
          <Bilingual zh="资源类型总览" en="Asset types overview" />
        </h2>
        <ul>
          <li>
            <Bilingual
              zh="关卡：描述地图、敌人、触发器与脚本入口。"
              en="Levels: define maps, enemies, triggers, and script entry points."
            />
          </li>
          <li>
            <Bilingual zh="纹理：精灵图、UI、特效。" en="Textures: spritesheets, UI, effects." />
          </li>
          <li>
            <Bilingual zh="音频：音效与背景音乐。" en="Audio: sound effects and background music." />
          </li>
          <li>
            <Bilingual zh="配置：实体属性、武器数值、AI 参数。" en="Config: entity stats, weapons, AI parameters." />
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="加载路径" en="Loading path" />
        </h2>
        <p>
          <Bilingual
            zh="资源加载通常分为两级：文件系统读取 → 解析为运行时结构。引擎会维护缓存表，避免重复解析。"
            en="Assets are typically loaded in two phases: file system read → parse into runtime structures. The engine maintains caches to avoid repeated parsing."
          />
        </p>
        <div className="callout">
          <Bilingual
            zh="建议建立一张“资源 → 解析器 → 运行时对象”的索引表，方便定位问题。"
            en="Maintain an index mapping asset → parser → runtime object for faster debugging."
          />
        </div>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="版本兼容策略" en="Version compatibility" />
        </h2>
        <p>
          <Bilingual
            zh="为了兼容旧版资源，解析器应优先容错并输出结构化警告，而不是立即失败。升级时再通过工具进行批量修复。"
            en="To keep compatibility with legacy assets, parsers should be tolerant and emit structured warnings. Upgrade assets later via tools rather than failing at runtime."
          />
        </p>
      </section>
    </div>
  );
}
