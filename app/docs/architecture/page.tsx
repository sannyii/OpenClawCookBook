import { Bilingual } from '../../../components/Bilingual';

export default function ArchitecturePage() {
  return (
    <div>
      <h1>
        <Bilingual zh="架构：一帧的旅程" en="Architecture: The journey of a frame" />
      </h1>

      <section className="section">
        <h2>
          <Bilingual zh="1. 主循环" en="1. Main loop" />
        </h2>
        <p>
          <Bilingual
            zh="OpenClaw 的主循环通常包含：输入采样 → 逻辑更新 → 物理/碰撞 → 渲染提交 → 音频刷新。每个子系统通过统一的时间步长或可变步长协调。"
            en="The main loop typically samples input → updates logic → resolves physics/collisions → submits rendering → updates audio. Each subsystem synchronizes via fixed or variable time steps."
          />
        </p>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="2. 模块分层" en="2. Layered modules" />
        </h2>
        <div className="grid">
          <div className="card">
            <h3>
              <Bilingual zh="平台抽象" en="Platform abstraction" />
            </h3>
            <p>
              <Bilingual
                zh="封装窗口、输入与文件系统，使引擎核心不依赖具体平台。"
                en="Wrap windowing, input, and file system to keep core logic platform-agnostic."
              />
            </p>
          </div>
          <div className="card">
            <h3>
              <Bilingual zh="渲染栈" en="Rendering stack" />
            </h3>
            <p>
              <Bilingual
                zh="从资源纹理到精灵批次，再到最终的帧缓冲输出。"
                en="From textures to sprite batches and finally the frame buffer output."
              />
            </p>
          </div>
          <div className="card">
            <h3>
              <Bilingual zh="音频栈" en="Audio stack" />
            </h3>
            <p>
              <Bilingual
                zh="解析音效与音乐，维护声道、优先级与空间化。"
                en="Parse SFX and music, manage channels, priorities, and spatialization."
              />
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="3. 数据流" en="3. Data flow" />
        </h2>
        <p>
          <Bilingual
            zh="关卡数据通常驱动实体创建：加载关卡 → 解析实体描述 → 生成游戏对象 → 注册到各系统。实体的组件化设计允许渲染、碰撞、AI 等系统同时订阅。"
            en="Level data drives entity creation: load level → parse entity descriptors → spawn objects → register with subsystems. Component-based design allows rendering, collisions, and AI to subscribe simultaneously."
          />
        </p>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="4. 调试与可观测性" en="4. Debugging & observability" />
        </h2>
        <p>
          <Bilingual
            zh="典型的调试流程是添加帧内统计（FPS、渲染批次、加载耗时），并提供可视化覆盖层检查碰撞框与实体状态。"
            en="A standard workflow adds frame stats (FPS, batch count, load timing) plus visual overlays for hitboxes and entity state."
          />
        </p>
      </section>
    </div>
  );
}
