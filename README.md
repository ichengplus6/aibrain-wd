# 问道信息 · 公司官网

以用户为中心，构建企业的第二增长引擎 —— 问道信息（用户中心增长咨询）官网。

## 这是什么

纯静态站点，无构建、无依赖、无外部 CDN。仓库根目录即站点根目录：

```
index.html            # 公司官网（8 个章节 + 页脚）
aibrain.html          # aibrain 产品介绍页（为 CEO 搭建第二大脑）
assets/site.css       # 官网视觉系统与响应式
assets/site.js        # 导航反色、移动菜单、滚动渐入
assets/aibrain.css    # 产品页样式
assets/aibrain.js     # 产品页交互
.nojekyll             # 关闭 GitHub Pages 的 Jekyll 处理
```

## 本地预览

```bash
python3 -m http.server 8080
# 打开 http://127.0.0.1:8080
```

直接双击 `index.html` 也能看，只是 `file://` 下部分浏览器行为略有差异。

## 内容结构

01 时代命题 → 02 核心主张（第二增长引擎）→ 03 方法论（问道四步：问 · 道 · 行 · 伴）→ 04 服务体系 → 05 合作边界 → 06 问道观察 → 07 关于问道 → 08 开始对话 → 页脚。

## 联系方式

- 电话：17612092024
- 邮箱：anyio@foxmail.com

## 备案

粤ICP备18140663号，位于页面最底部居中，链接至工信部备案系统。

> 注：页脚版权行目前仅显示品牌名「问道信息」，备案主体全称待补，须与备案信息一致。

## 部署

仓库根目录可直接托管：

- **GitHub Pages**：Settings → Pages → Source 选 `Deploy from a branch`，分支 `main`、目录 `/ (root)`。
- **Vercel / Netlify / Cloudflare Pages**：导入本仓库，Framework Preset 选 `Other`，无需构建命令，输出目录填 `.`。
- **自有服务器 / OSS / CDN**：把根目录文件整体上传即可。

## 维护约定

站点源文件在本地工作区维护，构建产物发布到本仓库。改样式改内容都在源工程里做，验证通过后同步根目录的 `index.html` 与 `assets/`。
