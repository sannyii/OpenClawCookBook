import { Bilingual } from '../../../components/Bilingual';

export default function BuildPage() {
  return (
    <div>
      <h1>
        <Bilingual zh="构建与运行" en="Build & Run" />
      </h1>

      <section className="section">
        <h2>
          <Bilingual zh="构建步骤（模板）" en="Build steps (template)" />
        </h2>
        <p>
          <Bilingual
            zh="由于无法直接访问仓库源码，本节给出通用的 CMake/Make 构建模板。实际命令请根据仓库脚本替换。"
            en="Since repo access is blocked, this provides a generic CMake/Make template. Replace with the repository-specific scripts once available."
          />
        </p>
        <ul>
          <li>
            <Bilingual zh="安装依赖（SDL/OpenAL 等）" en="Install dependencies (SDL/OpenAL, etc.)" />
          </li>
          <li>
            <Bilingual zh="配置构建目录" en="Configure build directory" />
          </li>
          <li>
            <Bilingual zh="编译并运行可执行文件" en="Compile and run the executable" />
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <Bilingual zh="运行参数" en="Runtime flags" />
        </h2>
        <p>
          <Bilingual
            zh="通常会包含分辨率、全屏、调试模式、资源路径等启动参数。建议在文档中维护一张参数表。"
            en="Typical flags include resolution, fullscreen, debug mode, and asset paths. Maintain a runtime flag table in docs."
          />
        </p>
      </section>
    </div>
  );
}
