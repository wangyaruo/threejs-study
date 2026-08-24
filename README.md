# threejs-study

Three.js 学习记录项目，基于 Vite 搭建。

## 技术栈

- [Three.js](https://threejs.org/) `^0.185.1`
- [Vite](https://vitejs.dev/) `^8.2.0`

## 运行

```bash
npm install
npm run dev
```

## 提交记录

| 日期 | 提交 | 内容 |
| --- | --- | --- |
| 2026-07-31 | `960981b` first commit | 使用 Vite 初始化 hello-world 项目，安装 three 依赖，在 `src/main-01.js` 中引入 Three.js 并打印 THREE 对象验证安装成功 |
| 2026-07-31 | `ab98654` docs: 添加README文档，记录项目技术栈与提交历史 | 新增 README.md，记录技术栈、运行方式和提交历史 |
| 2026-07-31 | `a32579a` feat: 创建场景并添加红色立方体网格 | 创建 Scene 场景，使用 BoxGeometry + MeshBasicMaterial 创建红色立方体网格并添加到场景中 |
| 2026-07-31 | `1f15536` docs: 更新提交记录文档 | 根据 git log 更新 README.md 的提交记录表格 |
| 2026-08-14 | `a822fe2` feat: 初始化摄像机并调整代码格式 | 初始化 PerspectiveCamera 透视摄像机并设置位置，调整 `src/main-01.js` 代码格式 |
| 2026-08-14 | `f93b85e` docs: 更新提交记录文档 | 根据 git log 更新 README.md 的提交记录表格 |
| 2026-08-18 | `f828401` feat: 创建渲染器并渲染场景 | 在 `index.html` 中添加 canvas 元素，使用 WebGLRenderer 创建渲染器并设置尺寸，渲染场景与摄像机 |
| 2026-08-20 | `26559a5` feat: 远近裁剪面 | 将透视摄像机的 near 参数从 0.1 调整为 2，学习近裁剪面与远裁剪面对渲染的影响 |
