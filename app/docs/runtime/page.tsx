import { Bilingual } from '../../../components/Bilingual';

export default function RuntimePage() {
  return (
    <div>
      <h1>
        <Bilingual zh="运行时：游戏在做什么" en="Runtime: What the game does" />
      </h1>

      <section className="section">
        <h2>
          <Bilingual zh="实体生命周期" en="Entity lifecycle" />
        </h2>
        <p>
          <Bilingual
            zh="实体通常经历：创建 → 初始化组件 → 加入场景 → 每帧更新 → 销毁回收。核心是确保数据驱动的生成逻辑可预测且可复现。"
            en="Entities go through: spawn → component init → scene registration → per-frame update → destruction. The key is deterministic, data-driven spawning."
          />
        </p>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="渲染节奏" en="Render cadence" />
        </h2>
        <p>
          <Bilingual
            zh="渲染通常分为：背景层 → 角色/敌人 → 前景层 → UI。通过批处理减少 draw call，并使用摄像机跟随角色。"
            en="Rendering is staged as: background → actors/enemies → foreground → UI. Batching reduces draw calls while a camera follows the player."
          />
        </p>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="输入与手感" en="Input & feel" />
        </h2>
        <p>
          <Bilingual
            zh="平台动作游戏的手感来自输入缓冲、跳跃宽限帧以及动画状态同步。确保输入采样与物理步长一致是关键。"
            en="Platformer feel relies on input buffering, jump grace frames, and animation sync. Keep input sampling aligned with physics steps."
          />
        </p>
      </section>
    </div>
  );
}
