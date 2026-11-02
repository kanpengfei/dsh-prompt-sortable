<h1 align="center">dsh-prompt-sortable</h1>

<div align="center">

**中文** · [English](docs/README.en.md)

**将所有重复的Prompt变成模板。**<br>
点击一下即可注入到对话框中。

> **这是 [FeatherHunter/dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) 的 fork（MIT 许可）**，
> 在原版基础上新增**自定义模板拖拽排序**：设置页里每行自定义模板前多一个 ⠿ 手柄，
> 按住拖动即可调整自定义模板之间的顺序，松手自动保存；预制模板与用量排序逻辑不受影响。

你的 ⭐ 是我夜空中最亮的星。

*Stop copy-pasting — one click, template in chat.*

[![版本](https://img.shields.io/npm/v/dsh-prompt?label=%E7%89%88%E6%9C%AC&color=2563EB)](https://www.npmjs.com/package/dsh-prompt) [![下载量](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.npmjs.org%2Fdownloads%2Fpoint%2Flast-month%2Fdsh-prompt&query=%24.downloads&label=%E4%B8%8B%E8%BD%BD%E9%87%8F&suffix=%2F%E6%9C%88&color=059669)](https://www.npmjs.com/package/dsh-prompt) [![最近更新](https://img.shields.io/github/last-commit/FeatherHunter/dsh-prompt?label=%E6%9C%80%E8%BF%91%E6%9B%B4%E6%96%B0&color=7C3AED)](https://github.com/FeatherHunter/dsh-prompt/commits/main) [![提交数](https://img.shields.io/github/commit-activity/m/FeatherHunter/dsh-prompt?label=%E6%8F%90%E4%BA%A4%E6%95%B0&color=DB2777)](https://github.com/FeatherHunter/dsh-prompt/graphs/commit-activity) [![期待你参与](https://img.shields.io/badge/%E6%9C%9F%E5%BE%85%E4%BD%A0%E5%8F%82%E4%B8%8E-EA580C.svg)](https://github.com/FeatherHunter/dsh-prompt/issues)

</div>

<div align="center">

## 安装 <sub>INSTALL</sub>

</div>

<div align="center">

前置要求：[DSH](https://www.npmjs.com/package/@deepseek-ai/dsh)（DeepSeek Harness）。

</div>

```bash
# ① 安装 DSH CLI（已装跳过）
npm install -g @deepseek-ai/dsh

# ② 安装 dsh-prompt-sortable —— --profile 必填：装进你实际使用的 DSH 入口对应的 profile
#    （装错 profile 等于没装，重启多少次都不会加载）
# 推荐：插件市场里搜 dsh-prompt-sortable 一键安装；或命令行从 GitHub 直装：
dsh plugin --profile desktop add github:kanpengfei/dsh-prompt-sortable
#     或者
dsh plugin --profile web add github:kanpengfei/dsh-prompt-sortable
```

<div align="center">

安装完成后重启一次DSH。

**👇 装完重启，输入框左侧多出这枚按钮就是成功。**

<img src="assets/readme/01-install-ready.png" width="720" alt="安装成功后输入框左侧的 Prompt 按钮" style="border:1px solid #30363d;border-radius:6px">

</div>
