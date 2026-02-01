import { Bilingual } from '../../../components/Bilingual';

export default function ModdingPage() {
  return (
    <div>
      <h1>
        <Bilingual zh="模组与扩展" en="Modding & Extensions" />
      </h1>

      <section className="section">
        <h2>
          <Bilingual zh="扩展原则" en="Extension principles" />
        </h2>
        <p>
          <Bilingual
            zh="优先扩展数据而非改动代码：调整关卡配置、脚本入口与素材即可带来新的玩法。"
            en="Prefer data-driven extensions over code changes: level configs, scripts, and assets can deliver new gameplay."
          />
        </p>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="模组包结构" en="Mod package structure" />
        </h2>
        <ul>
          <li>
            <Bilingual zh="/levels：新增关卡" en="/levels: new stages" />
          </li>
          <li>
            <Bilingual zh="/sprites：替换或新增精灵" en="/sprites: override or add sprites" />
          </li>
          <li>
            <Bilingual zh="/audio：新音效与音乐" en="/audio: new SFX and music" />
          </li>
          <li>
            <Bilingual zh="/scripts：自定义脚本逻辑" en="/scripts: custom logic" />
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="兼容性提示" en="Compatibility tips" />
        </h2>
        <div className="callout">
          <Bilingual
            zh="保持与官方资源路径一致，优先使用覆盖机制，避免修改核心引擎接口。"
            en="Match official asset paths and use overrides where possible; avoid altering core engine APIs."
          />
        </div>
      </section>
    </div>
  );
}
