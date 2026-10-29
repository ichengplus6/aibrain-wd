# 问道信息 · 公司官网

以用户为中心，构建企业的第二增长引擎 —— 问道信息（用户中心增长咨询）公司官网。

> 本仓库只放**公司官网**。产品站（aibrain · 为 CEO 搭建第二大脑）在 `ichengplus6/aibrainpw`，两者独立部署、互不混入。

## 文件

```
index.html          # 全站单页（8 个章节 + 页脚）
assets/site.css     # 视觉系统与响应式
assets/site.js      # 导航反色、移动菜单、滚动渐入
.nojekyll           # 关闭 GitHub Pages 的 Jekyll 处理
```

纯静态，无构建、无依赖、无外部 CDN。

## 本地预览

```bash
python3 -m http.server 8080
# 打开 http://127.0.0.1:8080
```

## 内容结构

01 时代命题 → 02 核心主张（第二增长引擎）→ 03 方法论（问道四步：问 · 道 · 行 · 伴）→ 04 服务体系 → 05 合作边界 → 06 问道观察 → 07 关于问道 → 08 开始对话 → 页脚。

## 联系方式

- 电话：17612092024
- 邮箱：anyio@foxmail.com

## 备案

粤ICP备18140663号，位于页面最底部居中，链接至工信部备案系统。

> 页脚版权行目前仅显示品牌名「问道信息」，备案主体全称待补，须与备案信息一致。

## 部署

- **GitHub Pages**：Settings → Pages → Source 选 `Deploy from a branch`，分支 `main`、目录 `/ (root)`。
- **Vercel / Netlify**：Framework Preset 选 `Other`，无构建命令，输出目录填 `.`。
- **自有服务器 / OSS / CDN**：根目录文件整体上传即可。

## 维护

源工程在本地工作区，`dist/aibrainxin/` 是本站点的成品目录；改动验证后用 `scripts/sync-github.sh aibrainxin` 同步到本仓库。
