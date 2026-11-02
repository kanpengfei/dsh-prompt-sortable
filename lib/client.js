window.__ModuleLoader__.load({
	id: "dsh-prompt-sortable",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region src/client/templates.ts
		const PRESET_TEMPLATES = [
			{
				id: "fp",
				name: "第一性原理拆解",
				nameEn: "First Principles",
				domain: "思考框架",
				stage: "执行前",
				action: ["拆解"],
				labels: [
					"思考框架",
					"执行前",
					"拆解"
				],
				builtin: true,
				body: [
					"请用第一性原理分析以下主题，按编号结构化输出，结论先行：",
					"1. 这个问题的基本组成单元是什么？",
					"2. 哪些是真正不可改变的真理（而非假设）？",
					"3. 如果去掉所有既有假设，问题本身还剩下什么？",
					"4. 有哪些被大多数人默认为常识、但其实可以颠覆的？",
					"5. 基于以上推演给出你的原创见解，并说明它与主流看法的差异。",
					"主题："
				].join("\n")
			},
			{
				id: "socratic",
				name: "苏格拉底式追问",
				nameEn: "Socratic Questioning",
				domain: "思考框架",
				stage: "执行前",
				action: ["检验"],
				labels: [
					"思考框架",
					"执行前",
					"检验"
				],
				builtin: true,
				body: [
					"请用苏格拉底式追问帮助我思考，按编号结构化输出：",
					"1. 先复述我当前的观点或核心假设；",
					"2. 提出 3 个最有力的质疑；",
					"3. 找出一个我尚未考虑到的视角；",
					"4. 如果你是深思熟虑的对话者，你会问我哪几个我没想到的问题？",
					"5. 追问结束后，把整个过程浓缩成一个更精准的问题。",
					"主题："
				].join("\n")
			},
			{
				id: "deep",
				name: "深度多维分析",
				nameEn: "Deep Analysis",
				domain: "思考框架",
				stage: "执行前",
				action: ["归因"],
				labels: [
					"思考框架",
					"执行前",
					"归因"
				],
				builtin: true,
				body: [
					"请从多个维度深度分析以下主题，按编号结构化输出，结论先行：",
					"1. 本质是什么？",
					"2. 有哪些常见的误解？",
					"3. 支持和反对的证据分别是什么？",
					"4. 这个问题的边界在哪里（什么情况下它不再成立）？",
					"5. 如果你必须做出一个判断，会是什么？",
					"6. 你最强的那个结论，弱点在哪里？",
					"主题："
				].join("\n")
			},
			{
				id: "adversarial",
				name: "对抗式审查",
				nameEn: "Adversarial Review",
				domain: "思考框架",
				stage: "执行前",
				action: ["检验"],
				labels: [
					"思考框架",
					"执行前",
					"检验"
				],
				builtin: true,
				body: [
					"请对以下方案/结论做对抗式审查（红队角色），先给一段结论摘要，再按编号展开：",
					"1. 找出其中最强的 5 个假设，逐一论证它们可能如何失效；",
					"2. 构造最可能推翻它的 3 个反例或失败场景；",
					"3. 指出其中隐藏的认知偏差与利益相关方视角的盲区；",
					"4. 给出「如果这个方案失败，最可能的原因是什么」的排序清单；",
					"5. 最后给出：在何种条件下你才会认为它是错的——以及何种证据能让你改变立场。",
					"方案 / 结论："
				].join("\n")
			},
			{
				id: "decision",
				name: "决策博弈分析",
				nameEn: "Decision Analysis",
				domain: "思考框架",
				stage: "执行前",
				action: ["决策"],
				labels: [
					"思考框架",
					"执行前",
					"决策"
				],
				builtin: true,
				body: [
					"你是一位冷静的决策分析师。请分析我的处境，按编号结构化输出（你的选择仅作参考，重点是分析过程）：",
					"1. 列出每个选项最坏的结果是什么；",
					"2. 每个选项最好的结果是什么；",
					"3. 最可能的结果是什么；",
					"4. 如果 10 年后回头看，我可能会后悔什么；",
					"5. 有没有哪条路是「没有回头路」的；",
					"6. 给出你本人的选择并说明理由；再指出我可能忽略的第三个选项。",
					"我的处境（选项与背景）："
				].join("\n")
			},
			{
				id: "premortem",
				name: "事前验尸",
				nameEn: "Pre-mortem",
				domain: "思考框架",
				stage: "执行前",
				action: ["决策"],
				labels: [
					"思考框架",
					"执行前",
					"决策"
				],
				builtin: true,
				body: [
					"假设以下方案/项目已经在一年后彻底失败。请以「事后回溯」的方式写失败分析，按编号结构化输出：",
					"1. 按可能性从高到低列出 8 个失败原因；",
					"2. 对前 3 个原因，给出现在就能做的预防措施；",
					"3. 指出哪些早期信号现在就该监控；",
					"4. 最后说明：这个方案是否从一开始就有致命缺陷。",
					"方案描述："
				].join("\n")
			},
			{
				id: "feynman",
				name: "费曼技巧",
				nameEn: "Feynman Technique",
				domain: "思考框架",
				stage: "执行后",
				action: ["理解"],
				labels: [
					"思考框架",
					"执行后",
					"理解"
				],
				builtin: true,
				body: [
					"请用费曼技巧确认我是否真正理解了以下概念，按编号结构化输出：",
					"1. 用最简单的语言、面向完全不懂的人解释这个概念（禁止术语）；",
					"2. 给出 2 个生动类比和 2 个反例；",
					"3. 指出我理解中的错误或不准确之处；",
					"4. 设计 3 个判断题检验我是否真的懂了。",
					"概念：",
					"我的理解（可选）："
				].join("\n")
			},
			{
				id: "fivewhys",
				name: "五个为什么",
				nameEn: "Five Whys",
				domain: "思考框架",
				stage: "执行中",
				action: ["归因"],
				labels: [
					"思考框架",
					"执行中",
					"归因"
				],
				builtin: true,
				body: ["针对以下问题，请连续追问五个「为什么」，每层基于上一层的事实回答，最后区分根本原因与表层触发因素并给出解决方向：", "问题描述："].join("\n")
			},
			{
				id: "mece",
				name: "MECE 拆解",
				nameEn: "MECE Decomposition",
				domain: "思考框架",
				stage: "执行前",
				action: ["拆解"],
				labels: [
					"思考框架",
					"执行前",
					"拆解"
				],
				builtin: true,
				body: [
					"请用 MECE 原则拆解以下问题，按编号结构化输出：",
					"1. 给出 3~6 个相互独立（Mutually Exclusive）的分类维度；",
					"2. 每个维度下列出所有子项，确保完全穷尽（Collectively Exhaustive）；",
					"3. 指出拆解中可能的遗漏与重叠；",
					"4. 给出按重要性排序后的关键子问题清单。",
					"问题："
				].join("\n")
			},
			{
				id: "bias",
				name: "认知偏差检查",
				nameEn: "Cognitive Bias Check",
				domain: "思考框架",
				stage: "执行前",
				action: ["检验"],
				labels: [
					"思考框架",
					"执行前",
					"检验"
				],
				builtin: true,
				body: [
					"请审查以下推理/计划/结论中的认知偏差，按编号结构化输出：",
					"1. 列出可能影响它的偏差（确认偏误、沉没成本、可得性、锚定、乐观/悲观偏差、群体思维等），并指出具体证据；",
					"2. 对每条偏差，给出「如何检验是否真的受影响」的方法；",
					"3. 给出一个反事实检验：如果结论被证明是错的，最可能因为哪条偏差？",
					"推理 / 计划 / 结论："
				].join("\n")
			},
			{
				id: "learnpath",
				name: "学习路线设计",
				nameEn: "Learning Path",
				domain: "学习",
				stage: "执行前",
				action: ["路线"],
				labels: [
					"学习",
					"执行前",
					"路线"
				],
				builtin: true,
				body: [
					"请为以下领域/技能设计一条从零到可实战的学习路线，按编号结构化输出：",
					"1. 按阶段拆分（入门→进阶→实战），每个阶段给出学习目标；",
					"2. 每个阶段推荐 2~3 个核心主题和练习方式；",
					"3. 指出常见的「伪学习陷阱」（只收藏不练习等）；",
					"4. 给出一个 30 天内可完成的最小闭环，以及检验掌握程度的基准。",
					"领域 / 技能：",
					"当前水平（可选）：",
					"目标（可选）："
				].join("\n")
			},
			{
				id: "concept",
				name: "概念澄清",
				nameEn: "Concept Clarification",
				domain: "学习",
				stage: "执行前",
				action: ["概念"],
				labels: [
					"学习",
					"执行前",
					"概念"
				],
				builtin: true,
				body: [
					"请帮我彻底理解以下概念，按编号结构化输出：",
					"1. 一句话定义 + 一个最小例子；",
					"2. 它与常见相近概念的本质区别（各给一个对比场景）；",
					"3. 这个概念在什么情况下不适用（边界）；",
					"4. 给出 3 个由浅入深的练习场景让我检验理解。",
					"概念：",
					"相近概念（可选，不知道可留空，AI 自行选常见相近概念对比）："
				].join("\n")
			},
			{
				id: "quiz",
				name: "AI 反向考验",
				nameEn: "AI Quiz",
				domain: "学习",
				stage: "执行后",
				action: ["考验"],
				labels: [
					"学习",
					"执行后",
					"考验"
				],
				builtin: true,
				body: [
					"请通过出题检验我是否真正理解了以下主题/交付内容：",
					"1. 设计选择题/判断题/简答题/案例题（由浅入深）；",
					"2. 我作答后指出错误与盲区；",
					"3. 直到回答正确、知识点无盲区后再确认交付。",
					"主题 / 交付内容："
				].join("\n")
			},
			{
				id: "codereview",
				name: "代码审查",
				nameEn: "Code Review",
				domain: "工程",
				stage: "执行前",
				action: ["审查"],
				labels: [
					"工程",
					"执行前",
					"审查"
				],
				builtin: true,
				body: [
					"请审查以下代码，先给总体结论，再按严重程度排序输出，每个问题附具体修改建议（含示例代码）：",
					"1. 正确性：潜在 bug、边界条件、并发/异步问题；",
					"2. 安全：注入、鉴权、敏感信息、依赖风险；",
					"3. 可维护性：命名、结构、重复、可读性；",
					"4. 性能：明显的低效点。",
					"代码过长时可分段审查，但最终汇总为一页结论。",
					"代码 / 文件 / 技术栈："
				].join("\n")
			},
			{
				id: "testdesign",
				name: "测试用例设计",
				nameEn: "Test Design",
				domain: "工程",
				stage: "执行中",
				action: ["测试"],
				labels: [
					"工程",
					"执行中",
					"测试"
				],
				builtin: true,
				body: [
					"请为以下功能设计测试用例，按编号结构化输出：",
					"1. 正常路径用例（含输入/预期输出）；",
					"2. 边界与极端值用例；",
					"3. 异常与错误处理用例；",
					"4. 并发/重复/幂等场景（如适用）；",
					"5. 指出哪些用例最容易漏、以及对应的风险。",
					"功能描述："
				].join("\n")
			},
			{
				id: "refactor",
				name: "重构方案",
				nameEn: "Refactoring Plan",
				domain: "工程",
				stage: "执行中",
				action: ["重构"],
				labels: [
					"工程",
					"执行中",
					"重构"
				],
				builtin: true,
				body: [
					"请为以下代码提出重构方案，按编号结构化输出：",
					"1. 指出当前结构的主要问题（职责、耦合、可测试性）；",
					"2. 给出目标结构（抽象与拆分建议，含示例）；",
					"3. 按「小步重构」顺序列出步骤，每一步可独立提交且行为不变；",
					"4. 指出哪些重构有风险、需要测试保护。",
					"代码 / 模块："
				].join("\n")
			},
			{
				id: "explain",
				name: "解释代码",
				nameEn: "Explain Code",
				domain: "工程",
				stage: "执行中",
				action: ["解读"],
				labels: [
					"工程",
					"执行中",
					"解读"
				],
				builtin: true,
				body: [
					"请解释以下代码，按编号结构化输出：",
					"1. 这段代码做什么（一句话）；",
					"2. 逐段讲解执行流程与关键数据结构；",
					"3. 指出其中「为什么这样写」的设计取舍；",
					"4. 指出潜在问题与改进点；",
					"5. 用一句话概括它在我更大的系统里扮演的角色。",
					"代码："
				].join("\n")
			},
			{
				id: "blindspot",
				name: "盲区检查",
				nameEn: "Blind Spot Pass",
				domain: "执行",
				stage: "执行前",
				action: ["启动"],
				labels: [
					"执行",
					"执行前",
					"启动"
				],
				builtin: true,
				body: [
					"在我开始以下任务之前，请帮我做一次盲区检查，按编号结构化输出：",
					"1. 我可能遗漏的关键变量有哪些？",
					"2. 潜在的风险与最容易忽略的影响因素？",
					"3. 哪些点需要提前决策、哪些可以后置？",
					"4. 给我一个 3 分钟内可完成的快速检查清单。",
					"我的计划（目标 / 约束）："
				].join("\n")
			},
			{
				id: "snapshot",
				name: "零丢失快照",
				nameEn: "Zero-loss Snapshot",
				domain: "执行",
				stage: "执行中",
				action: ["固化"],
				labels: [
					"执行",
					"执行中",
					"固化"
				],
				builtin: true,
				body: [
					"请执行一次「零丢失快照」：",
					"1. 把我们从会话开始至今的关键信息，按「目的地 / 约束与偏好 / 已确认的决定 / 待决问题 / 雾区（隐约可见但还不清晰）」五类逐条列出——不压缩、不合并，宁可啰嗦不可省略；",
					"2. 每条标注出处（引用我原话）；",
					"3. 单独列一节「可疑遗漏」：凡是我提过但你觉得与主线无关、太模糊或像执行细节而没纳入的，全部摆出并写明理由；",
					"4. 列完后停下等我逐条核对，确认后再落盘。"
				].join("\n")
			},
			{
				id: "kickoff",
				name: "任务启动",
				nameEn: "Task Kickoff",
				domain: "执行",
				stage: "执行前",
				action: ["启动"],
				labels: [
					"执行",
					"执行前",
					"启动"
				],
				builtin: true,
				body: [
					"在开始以下任务之前，请先确认起点并澄清细节，按编号结构化输出：",
					"1. 最终目标（要做什么）；",
					"2. 当前进度（目前想到哪一步）；",
					"3. 经验水平（新手 / 有经验 / 专家）；",
					"4. 不熟悉的地方；",
					"5. 成功的标准；",
					"6. 通过提问澄清细节（成功标准之外还有哪些约束、有哪些风险现在就该知道）。",
					"最终目标：",
					"当前进度（可选）：",
					"经验水平（新手 / 有经验 / 专家）：",
					"不熟悉的地方（可选）："
				].join("\n")
			},
			{
				id: "prototype",
				name: "原型验证",
				nameEn: "Prototype Validate",
				domain: "执行",
				stage: "执行前",
				action: ["启动"],
				labels: [
					"执行",
					"执行前",
					"启动"
				],
				builtin: true,
				body: [
					"请为以下主题/想法做原型验证，每轮输出保持克制（方向概要即可，不要太长）：",
					"1. 给出 2~4 个方向差距很大的候选方案；",
					"2. 每个方向给出最小的验证方式（怎么快速试错）；",
					"3. 由我选择和反馈，几轮后逐步收敛到满意的方向；",
					"4. 收敛后给出下一步的执行计划要点。",
					"主题 / 想法："
				].join("\n")
			},
			{
				id: "plan",
				name: "执行计划",
				nameEn: "Execution Plan",
				domain: "执行",
				stage: "执行前",
				action: ["启动"],
				labels: [
					"执行",
					"执行前",
					"启动"
				],
				builtin: true,
				body: [
					"请为以下目标制定执行计划，按编号结构化输出（时间安排是可调整的草案）：",
					"1. 明确步骤（含顺序与依赖）；",
					"2. 时间安排（每步预计时长/里程碑）；",
					"3. 所需资源和工具；",
					"4. 交付物和验收标准；",
					"5. 风险和应对方案。",
					"目标：",
					"约束（可选）："
				].join("\n")
			},
			{
				id: "deviation",
				name: "记录偏离",
				nameEn: "Deviation Log",
				domain: "执行",
				stage: "执行中",
				action: ["记录"],
				labels: [
					"执行",
					"执行中",
					"记录"
				],
				builtin: true,
				body: [
					"请担任我的过程记录员（多轮持续角色）：从现在起，在每次交互后更新一份简洁的偏离记录，按编号结构化：",
					"1. 遇到了什么新的情况？",
					"2. 为什么改变了方案？",
					"3. 做了哪些关键决定？",
					"4. 对结果有什么影响？",
					"每次只输出「新增/变更」条目，不要重复已记录内容。"
				].join("\n")
			},
			{
				id: "retro",
				name: "过程复盘",
				nameEn: "Retrospective",
				domain: "执行",
				stage: "执行后",
				action: ["复盘"],
				labels: [
					"执行",
					"执行后",
					"复盘"
				],
				builtin: true,
				body: [
					"请帮我复盘刚刚完成的以下任务/项目，按编号结构化输出：",
					"1. 整体步骤回顾（实际 vs 计划的差异）；",
					"2. 使用的资料和工具；",
					"3. 遇到的困难；",
					"4. 解决思路与可复用经验；",
					"5. 如果重来一次，哪些地方会做得不同？",
					"任务 / 项目："
				].join("\n")
			}
		];
		function getPresetById(id) {
			return PRESET_TEMPLATES.find((t) => t.id === id);
		}
		//#endregion
		//#region src/client/template-library.ts
		const MAX_PIN = 5;
		/** 输入分隔符：逗号（中英）/顿号/空白 */
		const LABEL_SEP = /[,，、\s]+/;
		/** 回落词：空标签回落（#19 R2 D4；不是归属维度，见自定义页签语义）。
		*  #141 身份：它在读写两侧都是**存量中文拼写**，读侧归一到范围身份 'custom'
		*  （见 label-identity.ts 的 LegacyChineseStorageAdapter）—— 但它本身是数据值，显示与落盘都不翻译、不改写。 */
		const LABEL_FALLBACK = "自定义";
		const STORE_URL$1 = "/_dsh/dsh-prompt/store";
		const PUT_URL = "/_dsh/dsh-prompt/customs/put";
		const DELETE_URL = "/_dsh/dsh-prompt/customs/delete";
		const BUMP_URL = "/_dsh/dsh-prompt/usage/bump";
		const PINNED_URL = "/_dsh/dsh-prompt/pinned/set";
		const HIDE_URL = "/_dsh/dsh-prompt/hide/set";
		const HOVER_TRIGGER_URL = "/_dsh/dsh-prompt/trigger/set";
		const ORDER_URL = "/_dsh/dsh-prompt/order/set";
		const cache$1 = {
			customs: [],
			usage: {},
			pinned: [],
			lastUsed: null,
			hidePreset: true,
			hoverTrigger: true,
			customOrder: []
		};
		let storeLoaded = false;
		let loadPromise$1 = null;
		let loadRetried$1 = false;
		const storeListeners = /* @__PURE__ */ new Set();
		function notifyStore() {
			storeListeners.forEach((fn) => {
				try {
					fn();
				} catch (e) {}
			});
		}
		/** 订阅存储变更（React 侧用 effect 订阅 + refresh；返回取消函数）。 */
		function subscribeStore(fn) {
			storeListeners.add(fn);
			return () => {
				storeListeners.delete(fn);
			};
		}
		async function fetchJSON$1(url, init) {
			try {
				if (typeof fetch === "undefined") return null;
				const res = await fetch(url, init);
				if (!res.ok) return null;
				return await res.json();
			} catch (e) {
				return null;
			}
		}
		/** 路由名（日志里只记这个枚举，不记 URL 原文；与事件清单的 route 取值一一对应）。 */
		const ROUTE_NAMES = {
			[PUT_URL]: "customs.put",
			[DELETE_URL]: "customs.delete",
			[BUMP_URL]: "usage.bump",
			[PINNED_URL]: "pinned.set",
			[HIDE_URL]: "hide.set",
			[ORDER_URL]: "order.set",
			[HOVER_TRIGGER_URL]: "trigger.set"
		};
		/** 拉取 host 快照并装入缓存（失败 → 保持内存默认 + 记事件，不读旧 localStorage；#91 起失败补一次 2500ms 延迟重拉，与 remote 同构）。 */
		function ensureLoaded() {
			if (storeLoaded) return Promise.resolve();
			if (loadPromise$1) return loadPromise$1;
			loadPromise$1 = (async () => {
				const startedAt = Date.now();
				const data = await fetchJSON$1(STORE_URL$1);
				if (data && data.ok && data.value) {
					const v = data.value;
					if (Array.isArray(v.customs)) cache$1.customs = v.customs;
					if (v.usage && typeof v.usage === "object") cache$1.usage = v.usage;
					if (Array.isArray(v.pinned)) cache$1.pinned = v.pinned.filter((x) => typeof x === "string");
					if (Array.isArray(v.customOrder)) cache$1.customOrder = v.customOrder.filter((x) => typeof x === "string");
					cache$1.lastUsed = typeof v.lastUsed === "string" ? v.lastUsed : null;
					cache$1.hidePreset = normalizeHidePreset(v.hidePreset);
					cache$1.hoverTrigger = normalizeHoverTrigger(v.hoverTrigger);
					logEvent$6("store.snapshot.ok", {
						customs: cache$1.customs.length,
						pinned: cache$1.pinned.length,
						latencyMs: Date.now() - startedAt
					});
				} else {
					logEvent$6("store.snapshot.fail", {
						reason: typeof fetch === "undefined" ? "no-fetch" : "http-or-json-fail",
						latencyMs: Date.now() - startedAt
					});
					if (!loadRetried$1) {
						loadRetried$1 = true;
						try {
							if (typeof setTimeout === "function") {
								const tid = setTimeout(() => {
									loadPromise$1 = null;
									storeLoaded = false;
									ensureLoaded().catch(() => void 0);
								}, 2500);
								try {
									if (tid && typeof tid.unref === "function") tid.unref();
								} catch (e) {}
							}
						} catch (e) {}
					}
				}
				storeLoaded = true;
				notifyStore();
			})().finally(() => {});
			return loadPromise$1;
		}
		/** 落盘形状（#23：只写 labels；旧 tag 与占位三件套不写回，读时映射即可，不双写）
		*  #159：color 经 {...rest} 原样透传 —— 有意为之：存量逐字节不变、带外值绝不改写回存储
		*  （回落只发生在读侧 inkColorOf，不回写）。 */
		function toHostShape(t) {
			const rest = { ...t };
			delete rest.tag;
			delete rest.domain;
			delete rest.stage;
			delete rest.action;
			return {
				...rest,
				labels: templateLabels(t)
			};
		}
		/** fire-and-forget 落盘（失败记事件，不回滚内存、不抛给 UI）。 */
		function persist(url, body) {
			try {
				if (typeof fetch === "undefined") return;
				fetch(url, {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(body)
				}).then(() => void 0, (e) => {
					logEvent$6("store.persist.fail", {
						route: ROUTE_NAMES[url] ?? "unknown",
						errorHash: String(e && e.message || e)
					});
				});
			} catch (e) {}
		}
		function loadUsage() {
			return { ...cache$1.usage };
		}
		function bumpUsage(id) {
			cache$1.usage[id] = (cache$1.usage[id] || 0) + 1;
			cache$1.lastUsed = id;
			notifyStore();
			persist(BUMP_URL, { id });
		}
		/** 最近一次使用的模板 id（智能模式「最近使用」候选；无 → null） */
		function loadLastUsed() {
			return cache$1.lastUsed;
		}
		function loadPinned() {
			return [...cache$1.pinned];
		}
		/** 读侧归一：只有显式 false 是展示，其余一律屏蔽（缺键/非法值/存量脏数据全部回落 true）。 */
		function normalizeHidePreset(v) {
			return v === false ? false : true;
		}
		/** 当前是否屏蔽预制（读走内存缓存，与 loadPinned 同构）。 */
		function loadHidePreset() {
			return cache$1.hidePreset;
		}
		/** 翻转/设置屏蔽（内存先行 + notifyStore 刷 UI，再 fire-and-forget 落 host）。 */
		function saveHidePreset(hide) {
			cache$1.hidePreset = hide === false ? false : true;
			notifyStore();
			persist(HIDE_URL, { hide: cache$1.hidePreset });
		}
		/** 自定义顺序位（-1 = 未登记）。 */
		function customOrderIndexOf(id) {
			const arr = cache$1.customOrder;
			if (!Array.isArray(arr) || arr.length === 0) return -1;
			return arr.indexOf(id);
		}
		/**
		* 两个自定义模板之间的比较：顺序表优先，未登记的按 createdAt 追加在后。
		* 口径：用户顺序完全优先 —— 用量与置顶都不参与自定义模板之间的排序（与上游 #68 的用量降序区分开）。
		*/
		function compareCustomOrder(a, b) {
			const ai = customOrderIndexOf(a.id);
			const bi = customOrderIndexOf(b.id);
			if (ai >= 0 && bi >= 0) return ai - bi;
			if (ai >= 0) return -1;
			if (bi >= 0) return 1;
			return (a.createdAt || 0) - (b.createdAt || 0);
		}
		/** 按给定顺序重排列表里的自定义项（非自定义项占位不动；未登记项按 createdAt 垫后）——拖拽过程中的实时预览。 */
		function applyCustomOrderView(list, orderIds) {
			const slots = [];
			const items = [];
			list.forEach((x, i) => {
				if (!x.builtin) {
					slots.push(i);
					items.push(x);
				}
			});
			if (items.length < 2) return list;
			const pos = /* @__PURE__ */ new Map();
			(orderIds || []).forEach((id, i) => pos.set(id, i));
			const ordered = items.slice().sort((a, b) => {
				const pa = pos.has(a.id) ? pos.get(a.id) : Number.MAX_SAFE_INTEGER;
				const pb = pos.has(b.id) ? pos.get(b.id) : Number.MAX_SAFE_INTEGER;
				if (pa !== pb) return pa - pb;
				return (a.createdAt || 0) - (b.createdAt || 0);
			});
			const out = list.slice();
			slots.forEach((slot, k) => {
				out[slot] = ordered[k];
			});
			return out;
		}
		/** 落盘（内存先行 + notifyStore 刷 UI，再 fire-and-forget 发 host）；去非法项、去重、保序。 */
		function saveCustomOrder(ids) {
			const seen = /* @__PURE__ */ new Set();
			const next = [];
			for (const x of ids || []) {
				if (typeof x !== "string" || !x || seen.has(x)) continue;
				seen.add(x);
				next.push(x);
			}
			cache$1.customOrder = next;
			notifyStore();
			persist(ORDER_URL, { ids: next });
		}
		/** 屏蔽过滤（纯函数）：hide=true 去掉 builtin（无 builtin 键视为自定义），不改原数组。 */
		function applyHidePreset(list, hide) {
			if (!hide) return [...list];
			return list.filter((x) => !x.builtin);
		}
		/** 读侧归一：只有显式 false 是「仅点击」，其余一律悬浮触发（缺键/非法值/存量脏数据全部回落 true）。 */
		function normalizeHoverTrigger(v) {
			return v === false ? false : true;
		}
		/** 当前是否悬浮触发（true=悬浮开菜单；false=仅点击开菜单）。 */
		function loadHoverTrigger() {
			return cache$1.hoverTrigger;
		}
		/** 设置触发方式（内存先行 + notifyStore 刷底栏/设置页两处 UI，再 fire-and-forget 落 host）。 */
		function saveHoverTrigger(hover) {
			cache$1.hoverTrigger = hover === false ? false : true;
			notifyStore();
			persist(HOVER_TRIGGER_URL, { hover: cache$1.hoverTrigger });
		}
		/** 全部模板（预制 + 自定义） */
		function allTemplates() {
			return [...PRESET_TEMPLATES, ...cache$1.customs];
		}
		/** id 索引（#171：O(T)→O(1)；全部写入口都重赋 cache.customs，故以数组 identity 为失效键） */
		let idIndexCache = null;
		function getTemplate(id) {
			if (idIndexCache?.list !== cache$1.customs) {
				const map = /* @__PURE__ */ new Map();
				for (const t of allTemplates()) map.set(t.id, t);
				idIndexCache = {
					list: cache$1.customs,
					map
				};
			}
			return idIndexCache.map.get(id);
		}
		/** 字数（按码点，CJK 一字计一） */
		function labelLen(s) {
			return Array.from(s).length;
		}
		/**
		* 模板标签：预制 = labels（回填值，恒 3 个）；自定义 = 自选 labels。
		* 读时兼容旧形状：labels 缺失/为空 → 预制按领域+阶段+动作机械派生（#19 R2 D3 公式），
		* 自定义取旧单 tag 为首元、空则回落「自定义」（#19 R2 D4；旧占位三件套直接丢弃）。
		*/
		function templateLabels(t) {
			const own = t.labels;
			if (Array.isArray(own) && own.length > 0) return [...own];
			if (t.builtin) {
				const derived = [
					t.domain,
					t.stage,
					...t.action || []
				].filter((x) => typeof x === "string");
				if (derived.length > 0) return derived;
			} else {
				const tag = (t.tag || "").trim();
				if (tag) return [tag];
			}
			return [LABEL_FALLBACK];
		}
		/** 标签命中（筛选共用；单选语义：包含所选标签即命中，#19 R3 D5） */
		function matchLabel(t, label) {
			return templateLabels(t).indexOf(label) >= 0;
		}
		/** 已有词（自定义标签输入的选取来源：预制 23 词 + 在用自定义词，去重保序） */
		function allKnownLabels() {
			const seen = /* @__PURE__ */ new Set();
			const out = [];
			const push = (l) => {
				if (l && !seen.has(l)) {
					seen.add(l);
					out.push(l);
				}
			};
			for (const t of PRESET_TEMPLATES) templateLabels(t).forEach(push);
			for (const t of cache$1.customs) templateLabels(t).forEach(push);
			return out;
		}
		/** 归一化：拆分 → 去首尾空 → 去空 → 去重（保序）。空标签与重复是自动清理项，不是错误。 */
		function normalizeLabels(input) {
			const parts = Array.isArray(input) ? input.slice() : typeof input === "string" ? input.split(LABEL_SEP) : [];
			const seen = /* @__PURE__ */ new Set();
			const out = [];
			for (const p of parts.flatMap((x) => String(x).split(LABEL_SEP))) {
				const w = p.trim();
				if (!w || seen.has(w)) continue;
				seen.add(w);
				out.push(w);
			}
			return out;
		}
		/**
		* 校验（保存时阻断并行内提示，不静默截断）：
		* 空输入 → 回落 ['自定义']（#19 R2 D4）；超长 → 阻断；超数 → 阻断。
		* #141 起不再有保留词：任何 1–10 字的词都能建（'任意' 从此是普通用户词，地图 #134 第二轮对抗结论已采纳）。
		*/
		function validateLabels(input) {
			const cleaned = normalizeLabels(input);
			if (cleaned.length === 0) return {
				ok: true,
				labels: [LABEL_FALLBACK]
			};
			for (const w of cleaned) {
				const n = labelLen(w);
				if (n < 1 || n > 10) return {
					ok: false,
					error: "labelTooLong"
				};
			}
			if (cleaned.length > 3) return {
				ok: false,
				error: "labelsTooMany"
			};
			return {
				ok: true,
				labels: cleaned
			};
		}
		const HEX_RE = /^#[0-9a-fA-F]{6}$/;
		/** sRGB 单通道线性化（WCAG 2.2 相对亮度定义里的第一步） */
		function linearize(v) {
			const s = v / 255;
			return s <= .04045 ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4);
		}
		/** 六位 hex（带 #）判定：大小写都收（存储回原样，不归一） */
		function isHexColor(v) {
			return typeof v === "string" && HEX_RE.test(v);
		}
		/** WCAG 相对亮度 L = 0.2126R + 0.7152G + 0.0722B（入参须是合法 hex） */
		function relativeLuminance(hex) {
			return .2126 * linearize(parseInt(hex.slice(1, 3), 16)) + .7152 * linearize(parseInt(hex.slice(3, 5), 16)) + .0722 * linearize(parseInt(hex.slice(5, 7), 16));
		}
		/** 可读性判据：形状合法 **且** L 落在裸 3:1 带内 */
		function isReadableInk(v) {
			if (!isHexColor(v)) return false;
			const l = relativeLuminance(v);
			return l >= .17602 && l <= .3;
		}
		/**
		* 写入口守卫：合法原样返回，非法 / 带外 / 空 ⇒ undefined（＝未选颜色）。
		* 不吸附、不补默认白、不改大小写 —— 改写用户数据是 ADR-0007 明令禁止的。
		*/
		function sanitizeInkColor(v) {
			return isReadableInk(v) ? v : void 0;
		}
		/**
		* 读侧唯一入口：模板 → 能用的颜色或 undefined。
		* 存储里可能是手改 / 外部写入的带外值，这里一律回落成「未选颜色」（跟随主题、无描边）；
		* 回落只发生在内存里，**不回写存储**。消费颜色的地方（小列表 / 大列表 / 设置页）都走这里。
		*/
		function inkColorOf(t) {
			return sanitizeInkColor(t ? t.color : void 0);
		}
		/**
		* #162 读侧唯一入口：这个模板的名字要不要描边。
		* 规则只有两条：① **只有选了颜色才有描边可言**（未选颜色恒 false —— 用户口径「不选颜色的 prompt
		* 不提供描边」）；② 存储里 `outline: false` 才是关，缺键（含 #162 之前的全部存量）＝开。
		* 只认严格的 false，`'false'` / 0 / 其它杂值一律当作开 —— 读侧不做语义猜测（与 inkColorOf 同精神）。
		*/
		function inkOutlineOf(t) {
			if (inkColorOf(t) === void 0) return false;
			return t ? t.outline !== false : true;
		}
		/** #178 R2：光标标记 —— 正文里写 {{cursor}} 表示「插入后光标停这儿」；第一个生效，其余在插入时删除。 */
		const CURSOR_MARKER = "{{cursor}}";
		/** #178 R2：剥掉正文里所有光标标记，并给出第一个标记在**剥后文本**中的偏移（插入后的光标目标）。
		*  无标记 → caret = null（插入文本与旧版逐字符一致：#181 起走单笔 insertText，光标落在插入文本之后；
		*  宿主能力不足时降级为整框 setDraft、光标置尾）。
		*  标记不参与任何展示、检索与评分；标记以外的字（含换行、空格）逐字节原样。 */
		function stripCursorMarkers(body) {
			const parts = (body == null ? "" : String(body)).split(CURSOR_MARKER);
			return {
				text: parts.join(""),
				caret: parts.length > 1 ? parts[0].length : null
			};
		}
		/** 检索串（面板搜索与 /prompt 触发源共用）：名称/英文名/正文/领域/阶段/动作/标签（旧找法不断）
		*  #178 R2：正文先剥光标标记 —— 搜索不能把 {{cursor}} 当关键词命中。 */
		function templateHaystack(t) {
			return (t.name + " " + (t.nameEn || "") + " " + stripCursorMarkers(t.body || "").text + " " + (t.domain || "") + " " + (t.stage || "") + " " + (t.action || []).join(" ") + " " + templateLabels(t).join(" ")).toLowerCase();
		}
		/**
		* #178 R1：保存路径的正文清洗 —— 只削「行首/行尾的空格与 tab」，**保留所有换行**（含正文开头/结尾的空行）。
		* 旧实现用的是 body.trim()：它会把首尾换行一并吃掉，于是「正文顶部的空行」「结尾的空行」存不下来。
		* 之所以不引入 \n 转义语言：真换行本来就能存能插，存量正文里的 C:\new、/\n/ 等字面文本不能被解码误伤
		* （见 docs/adr/0010 与 ADR-0007 的「用户数据逐字节不变」价值观）。
		*/
		function trimBodyEdges(body) {
			return (body == null ? "" : String(body)).replace(/^[ \t]+|[ \t]+$/g, "");
		}
		/** #178 R1：展示用首行 —— 先剥光标标记，再取第一个**非空**行（行首尾空白削掉）；正文以空行开头时不产生空简介。 */
		function firstLineIntro(body) {
			const lines = stripCursorMarkers(body).text.split("\n");
			for (let i = 0; i < lines.length; i++) {
				const line = lines[i].trim();
				if (line) return line;
			}
			return "";
		}
		/** #178 R1：展示用单行预览 —— 先剥光标标记，再把空白（含换行）压成单空格并削首尾；远程大卡简介与设置页展开预览用。 */
		function oneLinePreview(body) {
			return stripCursorMarkers(body).text.split(/\s+/).filter((x) => !!x).join(" ");
		}
		/** 排序（#68 决议 2026-09-15）：设置页与 /prompt 忽略置顶，只按用量计数降序 → 末键。
		*  置顶仅悬浮列表生效（见 sortedTemplatesBottomUp）。用量仅供排序，不显示数字（显示由 #69/#71 落地）。
		*  #22 决议中“设置页置顶绝对优先”一句被本票推翻；降序方向本身维持（管理面与菜单首屏例外，见 #22 Q2/Q6）。 */
		function sortedTemplates(list) {
			const usage = cache$1.usage;
			return [...list].sort((a, b) => {
				if (!a.builtin && !b.builtin) return compareCustomOrder(a, b);
				const d = (usage[b.id] || 0) - (usage[a.id] || 0);
				if (d !== 0) return d;
				return tieBreakOrder(a, b);
			});
		}
		/** 统一末键（#22：三面 bottom-up 共用）——置顶原始顺序（预制按 final.md 定稿顺序，自定义按 createdAt） */
		const presetOrderMap = new Map(PRESET_TEMPLATES.map((t, i) => [t.id, i]));
		function tieBreakOrder(a, b) {
			const aCustom = a;
			const bCustom = b;
			const aBuilt = !!a.builtin;
			const bBuilt = !!b.builtin;
			if (aBuilt && bBuilt) return (presetOrderMap.get(a.id) ?? 9999) - (presetOrderMap.get(b.id) ?? 9999);
			if (!aBuilt && !bBuilt) return (aCustom.createdAt || 0) - (bCustom.createdAt || 0);
			return aBuilt ? -1 : 1;
		}
		/** bottom-up 排序（#68 终式 2026-09-15）：置顶簇在底部聚拢，分区内维持 bottom-up。
		*  - 一级分区：非置顶在上、置顶在下（置顶簇整体占底部连续段，不再按用量散插）——
		*    本票推翻 #22“用量主键、置顶只做同分 tie-break”（该式导致不同用量下置顶必散）。
		*  - 二级：分区内用量升序（0→max，max 最靠底；置顶簇内最常用置顶在非常底部，
		*    非置顶中最常用紧贴置顶簇之上）。
		*  - 三级：置顶簇内同用量时按 pin 顺序（维持 #22 原式）。
		*  - 末键：预制原始顺序 / 自定义创建时间（tieBreakOrder，维持 #22 原式）。
		*  设置页与 /prompt 不走此函数（走 sortedTemplates，忽略置顶）。
		*/
		function sortedTemplatesBottomUp(list) {
			const usage = cache$1.usage;
			const pinned = cache$1.pinned;
			const isPinned = (id) => pinned.indexOf(id) >= 0;
			const pinIdx = (id) => pinned.indexOf(id);
			return [...list].sort((a, b) => {
				if (!a.builtin && !b.builtin) return compareCustomOrder(a, b);
				const ap = isPinned(a.id), bp = isPinned(b.id);
				if (ap !== bp) return ap ? 1 : -1;
				const ua = usage[a.id] || 0, ub = usage[b.id] || 0;
				if (ua !== ub) return ua - ub;
				if (ap && bp) {
					const pa = pinIdx(a.id), pb = pinIdx(b.id);
					if (pa !== pb) return pa - pb;
				}
				return tieBreakOrder(a, b);
			});
		}
		/** 置顶切换（置顶数 ≤5）；返回是否成功（超限返回 false） */
		function togglePin(id) {
			const pinned = [...cache$1.pinned];
			const i = pinned.indexOf(id);
			if (i >= 0) pinned.splice(i, 1);
			else if (pinned.length >= MAX_PIN) return {
				pinned,
				ok: false
			};
			else pinned.push(id);
			cache$1.pinned = pinned;
			notifyStore();
			persist(PINNED_URL, { ids: pinned });
			return {
				pinned: [...pinned],
				ok: true
			};
		}
		function isPinned(id) {
			return cache$1.pinned.indexOf(id) >= 0;
		}
		/**
		* 新增自定义模板（#23）。
		* labels 接受数组或单字符串（单字符串兼容旧调用：视为一个标签）。
		* 先归一化+校验，不合法直接抛错——面板侧已做行内校验先行，此处是契约守卫，不静默截断。
		* 落盘新形状（只写 labels，不写旧 tag 与占位三件套）。
		* #159：color 可选；未选（缺参 / 非法 / 带外）时**根本不写这个键** —— 不是写默认白。
		* #162：outline 可选；**只在「有颜色且用户关掉描边」时写 `false`**，其余一律不写键（默认态零改动）。
		*/
		function addCustom(name, labels, body, color, outline) {
			const checked = validateLabels(labels);
			if (!checked.ok) throw new Error("[dsh-prompt] invalid labels: " + checked.error);
			const t = {
				id: "c" + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36),
				name,
				nameEn: "",
				labels: checked.labels,
				body,
				builtin: false,
				createdAt: Date.now()
			};
			const ink = sanitizeInkColor(color);
			if (ink !== void 0) t.color = ink;
			if (ink !== void 0 && outline === false) t.outline = false;
			cache$1.customs = [...cache$1.customs, t];
			notifyStore();
			persist(PUT_URL, { template: toHostShape(t) });
			return t;
		}
		/** 更新自定义模板（#23：labels 数组或单字符串；兼容旧 patch.tag，折算为单标签）。
		*  #159：patch.color 是写入口 —— 合法（带内六位 hex）原样落；非法 / 空 / 带外落回「未选颜色」
		*  （删键，不吸附到最近的合法色）；缺参（undefined）表示这一项不改。
		*  #162：patch.outline —— `false` 表示用户关掉描边（只在**有颜色**时落键）；`true` / 缺参一律不写键。
		*  清空颜色的同时把 `outline` 一并删掉：无颜色＝无描边，不留孤儿数据。 */
		function updateCustom(id, patch) {
			cache$1.customs = cache$1.customs.map((t) => {
				if (t.id !== id) return t;
				const next = { ...t };
				if (patch.name !== void 0) next.name = patch.name;
				const incoming = patch.labels !== void 0 ? patch.labels : patch.tag;
				if (incoming !== void 0) {
					const checked = validateLabels(incoming);
					if (!checked.ok) throw new Error("[dsh-prompt] invalid labels: " + checked.error);
					next.labels = checked.labels;
					delete next.tag;
				}
				if (patch.body !== void 0) next.body = patch.body;
				if (patch.color !== void 0) {
					const ink = sanitizeInkColor(patch.color);
					if (ink === void 0) {
						delete next.color;
						delete next.outline;
					} else next.color = ink;
				}
				if (patch.outline !== void 0) {
					const hasInk = inkColorOf(next) !== void 0;
					if (hasInk && patch.outline === false) next.outline = false;
					else if (hasInk) delete next.outline;
				}
				persist(PUT_URL, { template: toHostShape(next) });
				return next;
			});
			notifyStore();
		}
		/** 删除自定义模板（仅限 builtin=false）；返回是否成功 */
		function removeCustom(id) {
			const next = cache$1.customs.filter((t) => t.id !== id);
			if (next.length === cache$1.customs.length) return false;
			cache$1.customs = next;
			cache$1.pinned = cache$1.pinned.filter((p) => p !== id);
			if (cache$1.customOrder.indexOf(id) >= 0) {
				cache$1.customOrder = cache$1.customOrder.filter((x) => x !== id);
				persist(ORDER_URL, { ids: cache$1.customOrder });
			}
			notifyStore();
			persist(DELETE_URL, { id });
			persist(PINNED_URL, { ids: cache$1.pinned });
			return true;
		}
		/** 复制预制为自定义（#23：标签照搬预制派生串，最多 3 个天然合规）。
		*  #141 裁决：'（副本）' 拼进 name **落进用户数据**，一律不动 —— 它既不是铬、也不是身份键，
		*  是用户数据的一部分；要本地化只能「新建那一刻按当前语言取一次」，已存数据永不改写。
		*  #142 边缘裁决 a：grep 确认无把后缀 parse 回的代码（仅本行拼进去），故加可选 suffix 参数 ——
		*  调用方（panel handleCopy）传 tr(lang, STR.copySuffix)，缺省仍是 '（副本）'（既有调用与回归不动）；
		*  已存 name 永不改写（切语言不回写）。store 不 import i18n/locale，后缀由调用方按订阅 lang 取。 */
		function copyPresetToCustom(id, suffix) {
			const src = getPresetById(id);
			if (!src) return null;
			const tail = typeof suffix === "string" ? suffix : "（副本）";
			return addCustom(src.name + tail, templateLabels(src), src.body);
		}
		/** 记一条日志事件。出口只有一个：日志能力装进 globalThis.__dshPromptLog 的那个实例。
		*  走槽而不是 import 的原因：本仓既有回归脚本会把客户端模块逐个转译后单独 require
		*  （scripts/.rt-tmp/*.cjs），而单文件 bundle 里也没有可用的模块内 require——槽是两边都能用的唯一机制。
		*  能力缺席时是空操作，绝不因为记日志失败而影响功能。 */
		function logEvent$6(event, fields) {
			try {
				const log = globalThis.__dshPromptLog;
				if (log && typeof log.log === "function") log.log(event, fields);
			} catch (e) {}
		}
		//#endregion
		//#region src/client/panel-visibility.ts
		/**
		* 面板显隐布尔 + hover 手势标记（UI 瞬态）（#171 N6：可 import 者 —— entry-button、index、template-browser）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 面板开合状态（入口按钮 ↔ 面板共享，模块级 + 订阅）
		*/
		let panelOpen = false;
		const listeners$2 = /* @__PURE__ */ new Set();
		let closeTimer = null;
		function isPanelOpen() {
			return panelOpen;
		}
		/**
		* #112 hover-click 同手势标记：入口按钮 hover 开窗时打点，click 凭它区分
		* “同手势跟进单击（保持开，防闪关）”与“稳态明确单击（取反，可手动关）”。
		* 读一次消费一次——第二次 click 即走取反；超窗视为稳态（过期不算同手势）；
		* 关窗即手势结束——任何关窗都清点，不留给下一次开窗（code-review Spec c1）。
		*/
		let hoverOpenedAt = 0;
		function noteHoverOpen() {
			hoverOpenedAt = Date.now();
		}
		function takeHoverOpen(graceMs) {
			if (hoverOpenedAt === 0) return false;
			const age = Date.now() - hoverOpenedAt;
			hoverOpenedAt = 0;
			return age <= graceMs;
		}
		function setPanelOpen(v) {
			if (panelOpen !== v) {
				panelOpen = v;
				if (!v) hoverOpenedAt = 0;
				listeners$2.forEach((fn) => {
					try {
						fn(v);
					} catch (e) {}
				});
			}
		}
		/** 面板 hover 自动关窗在弹窗打开期间应抑制（#14 回归） */
		let hoverCloseSuppressed = false;
		function setHoverCloseSuppressed(v) {
			hoverCloseSuppressed = v;
			if (v && closeTimer !== null) {
				clearTimeout(closeTimer);
				closeTimer = null;
			}
		}
		/**
		* #179 触发方式（全局设置，缺省=悬浮触发）：true=悬浮开/离开延迟关（#12 既定行为，一字不动）；
		* false=仅点击触发 —— 入口 onMouseEnter 不再开窗，且所有 hover 排关失效
		* （四条排关位：入口 leave / 根节点 leave / 远程根 leave / #14 补关），只保留显式关闭。
		* 本文件仍是纯 UI 瞬态位：值由 index.ts 从 template-library 的 host 快照读入后同步过来，
		* 不在 panel-visibility 里 import store（保住 #171 N6 的 import 边界）。
		*/
		let hoverTriggerEnabled = true;
		function isHoverTriggerEnabled() {
			return hoverTriggerEnabled;
		}
		function setHoverTriggerEnabled(on) {
			const next = on !== false;
			if (hoverTriggerEnabled === next) return;
			hoverTriggerEnabled = next;
			if (!next) cancelPanelClose();
		}
		/** hover 离开后延迟关窗（短暂计时，防止从按钮移动到列表之间的误关） */
		function schedulePanelClose(ms) {
			if (!hoverTriggerEnabled) return;
			if (hoverCloseSuppressed) return;
			if (closeTimer !== null) clearTimeout(closeTimer);
			closeTimer = setTimeout(() => setPanelOpen(false), ms);
		}
		/** 取消待执行的延迟关窗（鼠标进入列表/按钮时调用） */
		function cancelPanelClose() {
			if (closeTimer !== null) {
				clearTimeout(closeTimer);
				closeTimer = null;
			}
		}
		function onPanelOpen(fn) {
			listeners$2.add(fn);
			return () => {
				listeners$2.delete(fn);
			};
		}
		//#endregion
		//#region src/client/remote-mode.ts
		/** 默认值：总闸默认关（#85 US8）；大小默认 5 档（3x，用户拍板起步即大）；方向偏好默认自动；密度默认 A */
		const REMOTE_DEFAULTS = {
			enabled: false,
			size: 5,
			orientation: "auto",
			density: "a"
		};
		/** 大小校验：1–10 整数（纯函数） */
		function isRemoteSize(v) {
			return typeof v === "number" && isFinite(v) && Math.floor(v) === v && v >= 1 && v <= 10;
		}
		/** 档位校验（纯函数） */
		function isRemoteTier(v) {
			return v === "small" || v === "medium" || v === "large";
		}
		/** 方向偏好校验（纯函数） */
		function isRemoteOrientationPref(v) {
			return v === "auto" || v === "landscape" || v === "portrait";
		}
		/** 密度档校验（纯函数，#90） */
		function isRemoteDensity(v) {
			return v === "a" || v === "b";
		}
		/** 归一化：未知形状一律回默认（纯函数；宿主旧数据/手改坏文件走此；旧三档按 large→2、其余→1 迁入） */
		function normalizeRemotePrefs(input) {
			try {
				const o = input || {};
				let size = REMOTE_DEFAULTS.size;
				if (isRemoteSize(o.size)) size = o.size;
				else if (o.font === "large" || o.control === "large") size = 2;
				else if (isRemoteTier(o.font) || isRemoteTier(o.control)) size = 1;
				return {
					enabled: o.enabled === true,
					size,
					orientation: isRemoteOrientationPref(o.orientation) ? o.orientation : REMOTE_DEFAULTS.orientation,
					density: isRemoteDensity(o.density) ? o.density : REMOTE_DEFAULTS.density
				};
			} catch (e) {
				return { ...REMOTE_DEFAULTS };
			}
		}
		const STORE_URL = "/_dsh/dsh-prompt/store";
		const SET_URL = "/_dsh/dsh-prompt/remote/set";
		const ROUTE_NAME = "remote.set";
		let cache = { ...REMOTE_DEFAULTS };
		let remoteLoaded = false;
		let loadPromise = null;
		let loadRetried = false;
		let persistFailed = false;
		let persistMessage = "";
		const listeners$1 = /* @__PURE__ */ new Set();
		/**
		* 旧版（2026-10-02 那版）把进入前的方向写进 localStorage `__dshPromptPreRemote`，
		* 退出或崩溃重启时据此把方向改回进入值。改判后本键再无消费者，
		* 若不清掉，下次加载仍会命中旧的崩溃恢复分支把用户最后选的方向翻回去——正是本次要治的病。
		* 故启动时无条件删一次（幂等、无网络、失败静默），键名只作字符串常量留档。
		*/
		const LEGACY_PRE_REMOTE_KEY = "__dshPromptPreRemote";
		/** 删掉遗留进入快照键（缺席存储或被禁写时静默 no-op） */
		function purgeLegacySnapshot() {
			try {
				const g = globalThis;
				const s = g && g.localStorage;
				if (s && typeof s.removeItem === "function") s.removeItem(LEGACY_PRE_REMOTE_KEY);
			} catch (e) {}
		}
		/** 缓存的整机方向（null = 未知，走视口回落） */
		let envOrientation = null;
		/** 桥永久缺席（本会话内不再做推测性查询；用户显式锁定不受影响，照调照报） */
		let envUnsupported = false;
		/** 读环境方向缓存（返回拷贝；null 即未知） */
		function getEnvOrientation() {
			return envOrientation ? { ...envOrientation } : null;
		}
		/** 写环境方向缓存（非法输入忽略，不抛；成功写入同时解除缺席标记） */
		function setEnvOrientation(v) {
			try {
				const o = v && v.orientation;
				if (o !== "landscape" && o !== "portrait") return;
				envOrientation = {
					orientation: o,
					source: "system",
					updatedAt: Date.now()
				};
				envUnsupported = false;
			} catch (e) {}
		}
		/** 记桥缺席（本会话跳过推测性查询；已缓存的值一并作废，避免拿 stale 冒充现值） */
		function markEnvUnsupported() {
			envUnsupported = true;
			envOrientation = null;
		}
		/** 预热在途（同刻只发一次；查询期间不重复打桥） */
		let envWarmInFlight = null;
		/**
		* 刷新环境方向缓存（#110 陈旧值修复，2026-10-03）。
		*
		* 为什么必须有这个：缓存是内存态、无 TTL，而唯一的读取方（远程大面板）按设计永不碰桥——
		* 于是「谁负责刷新」全落在外部动作上。原先只有设置页挂载会问一次，于是有两种坏结局：
		* 1. 用户不进设置页就开远程 → `auto` 只能回落视口比例（桌面浏览器视口恒定一个形状，等于没有信号）；
		* 2. 更糟的是沿用上一次缓存下来的旧值——系统后来转过了，插件仍按旧值显示、并把它标成「整机」，
		*    那是**在说谎**，比回落更伤信任（用户原话：「进入远程模式就自动选择的是竖屏，感觉好奇怪」）。
		*
		* 故把刷新钉在两个用户动作上：**开启远程模式**、**插件启动且远程已开**（刷新/崩溃恢复后重进）。
		* 两者都只读不写、零 OS 副作用、不闪屏。
		*
		* query 由调用方注入（与 systemOrientation 的 fetch 注入同体例）：本模块不引依赖，仍是零 import 叶子。
		* 缺席负缓存语义不变——桥确认 unsupported 后本会话不再做推测性查询。
		*/
		function warmEnvOrientation(query) {
			if (envWarmInFlight) return envWarmInFlight;
			if (typeof query !== "function") return Promise.resolve();
			if (envUnsupported) return Promise.resolve();
			envWarmInFlight = (async () => {
				try {
					const r = await query();
					if (r && r.ok === true && (r.orientation === "landscape" || r.orientation === "portrait")) {
						setEnvOrientation({ orientation: r.orientation });
						notifyRemote();
						return;
					}
					if (r && r.error && r.error.code === "unsupported") markEnvUnsupported();
				} catch (e) {}
			})().finally(() => {
				envWarmInFlight = null;
			});
			return envWarmInFlight;
		}
		function notifyRemote() {
			listeners$1.forEach((fn) => {
				try {
					fn();
				} catch (e) {}
			});
		}
		/** 订阅远程偏好变更（React 侧用 effect 订阅；返回取消函数） */
		function subscribeRemote(fn) {
			listeners$1.add(fn);
			return () => {
				listeners$1.delete(fn);
			};
		}
		/** 同步读（内存真相来源；初始默认 = 直接切换语义） */
		function getRemotePrefs() {
			return { ...cache };
		}
		/** 持久化失败状态（当次有效、下次恢复默认并明示 → UI 据此展示明示行） */
		function getRemotePersistState() {
			return {
				failed: persistFailed,
				message: persistMessage
			};
		}
		function isRemoteLoaded() {
			return remoteLoaded;
		}
		async function fetchJSON(url, init) {
			try {
				if (typeof fetch === "undefined") return null;
				const res = await fetch(url, init);
				if (!res.ok) return null;
				return await res.json();
			} catch (e) {
				return null;
			}
		}
		/** 拉取 host 快照并装入缓存（失败 → 恢复默认 + 明示，不读 localStorage，不静默） */
		function ensureRemoteLoaded() {
			if (remoteLoaded) return Promise.resolve();
			if (loadPromise) return loadPromise;
			loadPromise = (async () => {
				const startedAt = Date.now();
				const data = await fetchJSON(STORE_URL);
				if (data && data.ok && data.value) {
					const v = data.value;
					const raw = v.remote !== void 0 ? v.remote : v.global;
					if (raw !== void 0) {
						cache = normalizeRemotePrefs(raw.enabled !== void 0 ? raw : {
							enabled: raw.remoteEnabled,
							font: raw.remoteFont,
							control: raw.remoteControl,
							orientation: raw.remoteOrientation !== void 0 ? raw.remoteOrientation : raw.orientation,
							density: raw.remoteDensity !== void 0 ? raw.remoteDensity : raw.density
						});
						persistFailed = false;
						persistMessage = "";
						purgeLegacySnapshot();
						logEvent$5("store.snapshot.ok", {
							customs: 0,
							pinned: 0,
							latencyMs: Date.now() - startedAt
						});
					} else cache = { ...REMOTE_DEFAULTS };
				} else {
					cache = { ...REMOTE_DEFAULTS };
					persistFailed = true;
					persistMessage = "remote-load-fail";
					logEvent$5("store.snapshot.fail", {
						reason: "remote-unreachable",
						latencyMs: Date.now() - startedAt
					});
					if (!loadRetried) {
						loadRetried = true;
						try {
							if (typeof setTimeout === "function") {
								const tid = setTimeout(() => {
									loadPromise = null;
									remoteLoaded = false;
									ensureRemoteLoaded().catch(() => void 0);
								}, 2500);
								try {
									if (tid && typeof tid.unref === "function") tid.unref();
								} catch (e) {}
							}
						} catch (e) {}
					}
				}
				remoteLoaded = true;
				notifyRemote();
			})().finally(() => {});
			return loadPromise;
		}
		/** fire-and-forget 落盘（失败记事件 + 置明示位，不回滚内存） */
		function persistRemote() {
			try {
				if (typeof fetch === "undefined") {
					persistFailed = true;
					persistMessage = "no-fetch";
					notifyRemote();
					return;
				}
				fetch(SET_URL, {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						enabled: cache.enabled,
						size: cache.size,
						orientation: cache.orientation,
						density: cache.density
					})
				}).then(async (res) => {
					if (!res.ok) {
						persistFailed = true;
						persistMessage = "host-" + res.status;
						logEvent$5("store.persist.fail", {
							route: ROUTE_NAME,
							errorHash: "http-" + res.status
						});
						notifyRemote();
						return;
					}
					try {
						const data = await res.json();
						if (!data || data.ok !== true) {
							persistFailed = true;
							persistMessage = "host-rejected";
							logEvent$5("store.persist.fail", {
								route: ROUTE_NAME,
								errorHash: "rejected"
							});
							notifyRemote();
							return;
						}
					} catch (e) {}
					persistFailed = false;
					persistMessage = "";
					notifyRemote();
				}, (e) => {
					persistFailed = true;
					persistMessage = "unreachable";
					logEvent$5("store.persist.fail", {
						route: ROUTE_NAME,
						errorHash: String(e && e.message || e)
					});
					notifyRemote();
				});
			} catch (e) {}
		}
		function applyPatch(patch) {
			const next = normalizeRemotePrefs({
				...cache,
				...patch
			});
			cache = next;
			persistRemote();
			notifyRemote();
			return { ...next };
		}
		/** 总闸：开/关（开=大、关=小；不许大/小直接互切由调用方保证——本函数只做二值切换）
		* #110 改判：进出只翻 enabled 一个键，**不碰方向**。
		* 会话内选的方向（插件偏好与整机屏幕）退出后原样保持，用户锁定的优先级高于「回到进入前」。 */
		function setRemoteEnabled(on) {
			const next = applyPatch({ enabled: !!on });
			logEvent$5("settings.remote.toggle", {
				on: next.enabled,
				size: next.size
			});
			return { ...next };
		}
		/**
		* 跨插件页内 API（#93）：globalThis.__dshPromptSetRemote 的实现本体。
		*
		* - 入参：boolean 或 { enabled: boolean }；其余键一律忽略（只动总闸；
		*   size / orientation / density 请走跨插件 HTTP API：POST /_dsh/dsh-prompt/remote/set）。
		* - 路径：复用 setRemoteEnabled（内为 normalizeRemotePrefs→applyPatch→既有订阅通知），
		*   事件沿用既有 settings.remote.toggle，无新事件名。
		* - 并发：多写 last-write-wins（后写覆盖先写，无锁；与 host 侧 storage-json 双写语义一致）。
		* - 无鉴权立场：UI 偏好低风险，仅靠页内同源 + host 侧同源围栏，不另加 token（见 lib/index.js）。
		*/
		function setRemoteFromExternal(input) {
			let on;
			if (typeof input === "boolean") on = input;
			else if (input && typeof input === "object" && typeof input.enabled === "boolean") on = input.enabled;
			else return { ...cache };
			if (on === void 0) return { ...cache };
			return setRemoteEnabled(on);
		}
		try {
			globalThis.__dshPromptSetRemote = setRemoteFromExternal;
		} catch (e) {}
		/** 统一大小 1–10 档（越界钳制取整；非法输入拒绝） */
		function setRemoteSize(n) {
			const v = typeof n === "number" && isFinite(n) ? Math.min(10, Math.max(1, Math.round(n))) : NaN;
			if (!isRemoteSize(v)) return { ...cache };
			const next = applyPatch({ size: v });
			logEvent$5("settings.remote.size", {
				on: next.enabled,
				size: next.size
			});
			return { ...next };
		}
		/** 方向偏好（自动/横屏锁定/竖屏锁定三档，纯插件，持久化；覆盖视口推导） */
		function setRemoteOrientation(pref) {
			if (!isRemoteOrientationPref(pref)) return { ...cache };
			const next = applyPatch({ orientation: pref });
			logEvent$5("settings.remote.orientation", {
				on: next.enabled,
				orientation: next.orientation
			});
			return { ...next };
		}
		/** 密度档（#90）：两段手动切换，默认 A；非法拒绝（原值不动，不落盘不记事件）；切档页码归零由调用方执行 */
		function setRemoteDensity(d) {
			if (!isRemoteDensity(d)) return { ...cache };
			const next = applyPatch({ density: d });
			logEvent$5("settings.remote.density", {
				on: next.enabled,
				density: next.density
			});
			return { ...next };
		}
		/** 记一条日志事件（槽机制与 template-library.ts/settings-page.ts 同构；能力缺席时空操作） */
		function logEvent$5(event, fields) {
			try {
				const log = globalThis.__dshPromptLog;
				if (log && typeof log.log === "function") log.log(event, fields);
			} catch (e) {}
		}
		//#endregion
		//#region src/client/remote-grid.ts
		/**
		* 解析有效方向（#110 检测统一，纯函数）：
		* 显式偏好赢；auto 取环境方向缓存（整机桥已知值）；缓存缺席/非法回落视口推导。
		* 调用方传已算好的视口方向（面板侧用监听值、设置页用现算值），本函数只做优先级裁决。
		*/
		function resolveEffectiveOrientation(pref, env, viewport) {
			try {
				if (pref === "landscape" || pref === "portrait") return pref;
				if (env === "landscape" || env === "portrait") return env;
				if (viewport === "landscape" || viewport === "portrait") return viewport;
				return "landscape";
			} catch (e) {
				return "landscape";
			}
		}
		/** 密度归一化：非法/缺键回默认 A（纯函数，不抛） */
		function normalizeRemoteDensity(v) {
			return v === "b" ? "b" : "a";
		}
		/** 密度→每页槽位数：A=12，B=8（纯函数） */
		function remotePageSizeFor(density) {
			return normalizeRemoteDensity(density) === "b" ? 8 : 12;
		}
		/** 横屏列数（A 横 4×3 / 竖 3×4；B 横 4×2 / 竖 2×4；缺省 A 现状值） */
		function remoteColsFor(orientation, density = "a") {
			if (normalizeRemoteDensity(density) === "b") return orientation === "portrait" ? 2 : 4;
			return orientation === "portrait" ? 3 : 4;
		}
		/** 行数（A 横 3 / 竖 4；B 横 2 / 竖 4；缺省 A 现状值） */
		function remoteRowsFor(orientation, density = "a") {
			if (normalizeRemoteDensity(density) === "b") return orientation === "portrait" ? 4 : 2;
			return orientation === "portrait" ? 4 : 3;
		}
		/**
		* 按视口比例自适应切方向（恒开、零宿主依赖）：
		* 宽不小于高即横屏，否则竖屏；非法输入回横屏（调用方兜底，不抛）。
		*/
		function deriveRemoteOrientation(width, height) {
			try {
				const w = typeof width === "number" ? width : NaN;
				const hgt = typeof height === "number" ? height : NaN;
				if (!isFinite(w) || !isFinite(hgt) || w <= 0 || hgt <= 0) return "landscape";
				return w >= hgt ? "landscape" : "portrait";
			} catch (e) {
				return "landscape";
			}
		}
		/**
		* 统一大小倍数表（2026-10-03 用户拍板改步进）：1 档=100%，之后每档 +50%，
		* 即 100 / 150 / 200 / 250 / 300 / 350 / 400 / 450 / 500 / 550，等距步进、档档手感一致。
		* 原为 +25% 步进、上限 325%（2026-09-29 两次调优收敛）；远程诉求是「拿远了也点得中、看得清」，
		* 后半段 25% 的增量在串流画面下与前一段手感几乎无差、顶到 325% 仍不够大，故步进加粗一倍。
		*/
		const REMOTE_SIZE_SCALES = [
			1,
			1.5,
			2,
			2.5,
			3,
			3.5,
			4,
			4.5,
			5,
			5.5
		];
		/** 档位→倍数：非法回默认 5 档（3x） */
		function remoteSizeScale(size) {
			const v = typeof size === "number" && isFinite(size) ? Math.min(10, Math.max(1, Math.round(size))) : NaN;
			return REMOTE_SIZE_SCALES[(v >= 1 && v <= 10 ? v : 5) - 1];
		}
		/** 宿主基准字号变量（#160 改锚：自家面只吃一遍——锚到宿主内容字变量，它已由 #92 字桥按档位同步；各调用方不得另起第二套基准） */
		const BASE_FONT_VAR = "var(--dsh-content-font-size, 14px)";
		/**
		* 缩放根收敛点（#116，不计成本的一致性收敛；纯函数，可转译断言）：
		* #160 改锚后恒返基准变量、不再乘档——档位只由 #92 字桥写进 --dsh-content-font-size
		* 这唯一一处，自家面只吃一遍（此前 calc(42px × 3) = 126px 的复乘即以此消除）。
		* 各调用方只传开关与档位（签名保留，防调用方分叉），不手写表达式，防多处拷贝漂移。
		* 注意：设置页子树内必须用宿主变量基重算，禁用 `1em` 基——`1em` 在缩放祖先里会复乘（double-scale）。
		*/
		function scaledBaseFontSize(enabled, size) {
			return BASE_FONT_VAR;
		}
		/**
		* 控制面倍数（2026-09-29 晚用户拍板去封顶：档位自由变大——入口/齿轮/智能卡跟内容面吃同一全额，
		* 不再另设更小的封顶（2026-10-03 步进加粗后 10 档为 5.5x）；小窗挤爆风险由用户认）。
		*/
		function remoteChromeScale(size) {
			return remoteSizeScale(size);
		}
		/**
		* 宿主内容字 px（#92 野路子，纯函数）：
		* round(remoteSizeScale(size) * 14)，非法（非有限数值）回 14（宿主默认内容字号）。
		* 只返数值、不拼单位、不碰 DOM（落点/单位拼接归 host-content-font.ts）。
		*/
		function hostContentFontPx(size) {
			try {
				if (typeof size !== "number" || !isFinite(size)) return 14;
				return Math.round(remoteSizeScale(size) * 14);
			} catch (e) {
				return 14;
			}
		}
		/** 页码归一化（NaN/越界钳制，不抛） */
		function normalizeRemotePage(page, totalPages) {
			const total = typeof totalPages === "number" && isFinite(totalPages) && totalPages > 0 ? Math.floor(totalPages) : 1;
			const p = typeof page === "number" && isFinite(page) ? Math.floor(page) : 0;
			if (p < 0) return 0;
			if (p > total - 1) return total - 1;
			return p;
		}
		/**
		* 十二槽分页（纯函数，bottom-up 首屏语义）：
		* - 每页恒十二槽，不满补空位；页码越界钳制；空输入仍给一页全空位（高度稳定）。
		* - 不减行：行列只由方向决定，与内容多少、视口大小无关。
		* - 首屏即最常用（2026-09-29 用户拍板）：输入为 bottom-up 升序（最常用在末尾），
		*   页码从最重要一端取——page=0 取末尾 per 条，页内保持升序（最重要在该页底部）；
		*   不满页空位补在顶部（内容贴底，高度稳定）。
		*/
		function computeRemoteView(input) {
			const orientation = input.orientation === "portrait" ? "portrait" : "landscape";
			const density = normalizeRemoteDensity(input.density);
			const cols = remoteColsFor(orientation, density);
			const rows = remoteRowsFor(orientation, density);
			const per = remotePageSizeFor(density);
			const ids = Array.isArray(input.ids) ? input.ids.filter((x) => typeof x === "string") : [];
			const total = ids.length;
			const totalPages = Math.max(1, Math.ceil(total / per));
			const page = normalizeRemotePage(input.page, totalPages);
			const end = Math.max(0, total - page * per);
			const start = Math.max(0, end - per);
			const slice = ids.slice(start, end);
			const emptiesCount = per - slice.length;
			const slots = [];
			for (let i = 0; i < per; i++) if (i < emptiesCount) slots.push({
				kind: "empty",
				order: i
			});
			else slots.push({
				kind: "template",
				order: i,
				id: slice[i - emptiesCount]
			});
			const sizeScale = remoteSizeScale(input.enabled ? input.size : 1);
			input.hostCaps;
			return {
				orientation,
				cols,
				rows,
				per,
				total,
				totalPages,
				page,
				slots,
				cards: slice.length,
				empties: per - slice.length,
				bottomBar: {
					hasPrev: page > 0,
					hasNext: page < totalPages - 1,
					pageText: String(page + 1) + "/" + String(totalPages),
					searchOpen: !!input.searchOpen
				},
				fontScale: sizeScale,
				controlScale: sizeScale,
				threshold: {
					masterEnabled: !!input.enabled,
					hostPending: false,
					hostNote: ""
				}
			};
		}
		/**
		* 【#141 裁决｜远程标签域死码已清】#132 移除远程标签区之后，本模块这两样东西生产不可达：
		*   · REMOTE_TAG_EXCLUDE_LIST（去留表）：与悬浮云的去留表逐字重复，现已单点收敛到 label-identity.ts
		*     的 EXCLUDED_LABEL_WORDS（+ 身份视图 EXCLUDED_LABEL_KEYS）；
		*   · remoteTagOptions()：返回 ['全部', ...] 的**显示串**数组 —— 纯模型里硬编码中文铬，
		*     与「身份-显示分离」正面冲突（选中的身份本就是 ScopeKey 'all'，显示由词表按语言解析）。
		* 全仓唯一消费者是 scripts/test-issue-83.cjs，本票连它一起改按 label-identity.ts 断言。
		* 远程标签域若将来复活，去留与身份从 label-identity.ts 取，不要再抄一份表。 */
		//#endregion
		//#region src/client/locale.ts
		/**
		* 归一语言标签：zh* → zh；形如 BCP47 的已知非中文标签 → en（与 dsh-plugin-update 同构）；
		* 空/垃圾/非字符串 → def。大小写不敏感，下划线视作横线。
		* 非 BCP47 垃圾（如 '123'）→def（旧 getLang 会落 en，此处有意收敛到 zh，与 update 包同构）。
		*/
		function normalizeLangTag(tag, def = "zh") {
			if (typeof tag !== "string") return def;
			const s = tag.trim().toLowerCase().replace(/_/g, "-");
			if (!s) return def;
			if (s === "zh" || s.startsWith("zh-")) return "zh";
			if (s === "en" || s.startsWith("en-")) return "en";
			if (/^[a-z]{2,3}(-[a-z0-9]+)*$/.test(s)) return "en";
			return def;
		}
		/** 读 html[lang]；缺席/异常回 null（只读，永不写）。 */
		function readDocumentLang() {
			try {
				const v = globalThis.document?.documentElement?.lang;
				return typeof v === "string" && v.trim() ? v : null;
			} catch (e) {
				return null;
			}
		}
		/** 读 navigator.languages（逐条过滤）＋ navigator.language；缺席/异常回空数组。 */
		function readNavigatorLangs() {
			try {
				const nav = globalThis.navigator;
				if (!nav) return [];
				const out = [];
				const list = nav.languages;
				if (Array.isArray(list)) {
					for (const c of list) if (typeof c === "string" && c.trim()) out.push(c);
				}
				if (typeof nav.language === "string" && nav.language.trim()) out.push(nav.language);
				return out;
			} catch (e) {
				return [];
			}
		}
		/**
		* 解出当前语言。纯函数（只读全局信号），无信号/任何异常落默认（默认 zh 保历史行为）。
		* 不传 override 时，已安装的宿主服务适配器即为隐式覆盖（宿主快照比 DOM 更新鲜，见 research §5）。
		*/
		function resolveLocale(override, def = "zh") {
			const src = override != null ? override : service || void 0;
			if (src != null) {
				if (typeof src === "object") try {
					const fn = src.getActive;
					if (typeof fn === "function") {
						const v = fn.call(src);
						if (typeof v === "string" && v.trim()) return normalizeLangTag(v, def);
					}
				} catch (e) {}
				else if (typeof src === "string" && src.trim()) return normalizeLangTag(src, def);
			}
			const docLang = readDocumentLang();
			if (docLang !== null) return normalizeLangTag(docLang, def);
			const navs = readNavigatorLangs();
			if (navs.length) return normalizeLangTag(navs[0], def);
			return def;
		}
		/** 宿主语言面适配器（installLocaleService 装入）；未安装即 null。 */
		let service = null;
		/** 宿主服务订阅（全模块至多一个）；无面在册时释放。 */
		let serviceUnsub = null;
		/** html[lang] 观察者（全模块至多一个）；最后一个面退订即断开。 */
		let observer = null;
		const entries = /* @__PURE__ */ new Set();
		/** 把新值投给所有变了的订阅者：先全部算出，再逐个投（某个面抛错不拖垮其余面）。 */
		function notifyAll() {
			const pending = [];
			for (const e of [...entries]) {
				let next;
				try {
					next = resolveLocale();
				} catch (err) {
					continue;
				}
				if (next !== e.last) pending.push([e, next]);
			}
			for (const [e, next] of pending) {
				e.last = next;
				try {
					e.cb(next);
				} catch (err) {}
			}
		}
		function ensureObserver() {
			if (observer) return;
			try {
				const g = globalThis;
				const docEl = g.document?.documentElement;
				const MO = g.MutationObserver;
				if (!docEl || typeof MO !== "function") return;
				const obs = new MO(() => notifyAll());
				obs.observe(docEl, {
					attributes: true,
					attributeFilter: ["lang"]
				});
				observer = obs;
			} catch (e) {
				observer = null;
			}
		}
		function releaseObserver() {
			try {
				if (observer && typeof observer.disconnect === "function") observer.disconnect();
			} catch (e) {}
			observer = null;
		}
		function ensureServiceSub() {
			if (serviceUnsub || !service) return;
			try {
				const fn = service.subscribe;
				if (typeof fn !== "function") return;
				const un = fn.call(service, () => notifyAll());
				serviceUnsub = typeof un === "function" ? un : null;
			} catch (e) {
				serviceUnsub = null;
			}
		}
		function releaseServiceSub() {
			try {
				if (typeof serviceUnsub === "function") serviceUnsub();
			} catch (e) {}
			serviceUnsub = null;
		}
		/**
		* 订阅语言变化：html[lang] 变（兜底，永远在册）或宿主服务发布时投递新语言。
		* 模块级单例 —— 多个面共用一个观察者与一个服务订阅，不是每面一套。
		* 返回 unsubscribe：退订该面；最后一个面退订时断开观察者与服务订阅（无泄漏）。
		* 无 DOM / 无宿主面的环境安全降级：只记回调、永不触发，不抛。
		*/
		function subscribeLocale(cb) {
			if (typeof cb !== "function") return () => void 0;
			const entry = {
				cb,
				last: resolveLocale()
			};
			entries.add(entry);
			ensureObserver();
			ensureServiceSub();
			let done = false;
			return () => {
				if (done) return;
				done = true;
				entries.delete(entry);
				if (entries.size === 0) {
					releaseObserver();
					releaseServiceSub();
				}
			};
		}
		/**
		* 装上宿主语言面适配器（index.ts 把 ctx.get('locale') 包成 { getActive, subscribe } 后调用）。
		* 有面在册才真的订它（无面时零订阅）。返回卸载函数：摘服务并回落 html[lang]，供 ctx.effect 收尾。
		*/
		function installLocaleService(next) {
			releaseServiceSub();
			const installed = next && typeof next === "object" ? next : null;
			service = installed;
			if (installed && entries.size > 0) ensureServiceSub();
			notifyAll();
			return () => {
				if (service !== installed) return;
				service = null;
				releaseServiceSub();
				notifyAll();
			};
		}
		//#endregion
		//#region src/client/strings.ts
		/**
		* 双语词表 STR/tr（Strings，解析已收口 locale）（#171 N6：可 import 者 —— entry-button、index、label-identity、remote-sheet、settings-links、settings-page、smart-card、template-browser、workspace-picker）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 双语词表与兼容入口（中文为主，html[lang] 跟随）
		*
		* #137 起语言解析与订阅收口在 ./locale（normalizeLangTag / resolveLocale / subscribeLocale）；
		* 本模块只留词表面（STR / tr）与 getLang 兼容薄壳 —— 新代码请直接用 ./locale，
		* 不要经这个历史入口（它保留只是为了不动既有调用点的表面签名）。
		*/
		/** @deprecated #137：兼容薄壳，内部走 resolveLocale（签名与默认值 zh 不变）。新代码用 ./locale 的 resolveLocale。 */
		function getLang() {
			return resolveLocale();
		}
		function tr(lang, m) {
			return lang === "zh" ? m.zh : m.en;
		}
		const STR = {
			panelTitle: {
				zh: "Prompt",
				en: "Prompt"
			},
			templatesToggleHint: {
				zh: "点击展开/收起模板列表",
				en: "Click to expand or collapse the template list"
			},
			sectionName: {
				zh: "提示词模板",
				en: "Prompt Templates"
			},
			entryBtn: {
				zh: "Prompt",
				en: "Prompt"
			},
			add: {
				zh: "新增自定义模板",
				en: "Add custom template"
			},
			addShort: {
				zh: "新增",
				en: "Add"
			},
			searchPh: {
				zh: "搜索模板…",
				en: "Search templates…"
			},
			tabAll: {
				zh: "全部",
				en: "All"
			},
			tabBefore: {
				zh: "执行前",
				en: "Before"
			},
			tabDuring: {
				zh: "执行中",
				en: "During"
			},
			tabAfter: {
				zh: "执行后",
				en: "After"
			},
			tabCustom: {
				zh: "自定义",
				en: "Custom"
			},
			domainAll: {
				zh: "全领域",
				en: "All domains"
			},
			presetCount: {
				zh: "预制",
				en: "Preset"
			},
			scopePreset: {
				zh: "预制",
				en: "Preset"
			},
			showPreset: {
				zh: "展示预制模板",
				en: "Show presets"
			},
			hidePreset: {
				zh: "屏蔽预制模板",
				en: "Hide presets"
			},
			hidePresetToggle: {
				zh: "屏蔽预制模板",
				en: "Hide preset templates"
			},
			hidePresetHint: {
				zh: "打开后列表与标签云不再展示预制模板",
				en: "When on, preset templates are hidden from the list and label cloud"
			},
			triggerRowLabel: {
				zh: "触发方式",
				en: "Trigger mode"
			},
			switchToClick: {
				zh: "点击触发",
				en: "Click to open"
			},
			switchToHover: {
				zh: "悬浮触发",
				en: "Hover to open"
			},
			triggerNowHover: {
				zh: "当前：悬浮触发",
				en: "Hover now"
			},
			triggerNowClick: {
				zh: "当前：点击触发",
				en: "Click now"
			},
			triggerTitleHover: {
				zh: "当前：悬浮触发，点击切换为点击触发",
				en: "Now hover-to-open; click to switch to click-to-open"
			},
			triggerTitleClick: {
				zh: "当前：点击触发，点击切换为悬浮触发",
				en: "Now click-to-open; click to switch to hover-to-open"
			},
			triggerHint: {
				zh: "缺省悬浮即开；切到点击触发后，鼠标划过不再闪烁，只有点击才开。",
				en: "Hover opens the menu by default. With click-to-open, only a click opens it — an accidental pointer pass no longer flickers."
			},
			customCount: {
				zh: "自定义",
				en: "Custom"
			},
			labelFallback: {
				zh: "自定义",
				en: "Custom"
			},
			copySuffix: {
				zh: "（副本）",
				en: " (copy)"
			},
			goSettings: {
				zh: "设置 → 模板管理",
				en: "Settings → Templates"
			},
			goSettingsShort: {
				zh: "模板管理",
				en: "Templates"
			},
			goSettingsFail: {
				zh: "没打开设置：走 ⚙ → 提示词模板",
				en: "Settings not opened: use ⚙ → Prompt Templates"
			},
			edit: {
				zh: "编辑",
				en: "Edit"
			},
			del: {
				zh: "删除",
				en: "Delete"
			},
			copy: {
				zh: "复制",
				en: "Copy"
			},
			pin: {
				zh: "置顶/取消置顶",
				en: "Pin/Unpin"
			},
			noMatch: {
				zh: "无匹配模板",
				en: "No matching templates"
			},
			addTitle: {
				zh: "新增自定义模板",
				en: "Add custom template"
			},
			editTitle: {
				zh: "编辑自定义模板",
				en: "Edit custom template"
			},
			namePh: {
				zh: "模板名称",
				en: "Template name"
			},
			colorLabel: {
				zh: "文字颜色",
				en: "Text color"
			},
			colorDefault: {
				zh: "默认（跟随主题，无描边）",
				en: "Default (follows theme, no outline)"
			},
			colorHue: {
				zh: "色相",
				en: "Hue"
			},
			colorShade: {
				zh: "灰掉的格子看不清，不能选",
				en: "greyed cells are unreadable and cannot be picked"
			},
			colorHexPh: {
				zh: "或输入十六进制色值（#rrggbb）",
				en: "Or enter a hex value (#rrggbb)"
			},
			colorOutOfBand: {
				zh: "该颜色在深色或浅色主题下对比度不足，请换一档深浅。",
				en: "This color lacks contrast in one theme — pick another shade."
			},
			colorField: {
				zh: "文字颜色",
				en: "Text color"
			},
			colorDefaultShort: {
				zh: "默认",
				en: "Default"
			},
			colorPreview: {
				zh: "预览",
				en: "Preview"
			},
			colorPreviewSample: {
				zh: "模板名字长这样",
				en: "Your template name"
			},
			colorDone: {
				zh: "完成",
				en: "Done"
			},
			colorOutline: {
				zh: "文字描边",
				en: "Text outline"
			},
			colorWallHint: {
				zh: "所列颜色均通过深色与浅色主题的可读性校验，可直接点选。",
				en: "All colors shown are verified for readability in both dark and light themes."
			},
			labelsPh: {
				zh: "添加标签（逗号/空格/顿号分隔，回车确认）",
				en: "Add labels (comma/space separated, Enter to confirm)"
			},
			labelsHint: {
				zh: "最多 3 个，每条 1–10 字；可从已有词里选，也可新造",
				en: "At most 3 labels, 1–10 chars each; pick existing or invent new"
			},
			labelsTooMany: {
				zh: "最多 3 个标签",
				en: "At most 3 labels"
			},
			labelTooLong: {
				zh: "每条标签 1–10 字",
				en: "Each label 1–10 chars"
			},
			removeLabel: {
				zh: "移除标签",
				en: "Remove label"
			},
			labelPicker: {
				zh: "标签选择",
				en: "Pick tags"
			},
			labelDone: {
				zh: "完成",
				en: "Done"
			},
			bodyPh: {
				zh: "Prompt 正文（≤10000 字）",
				en: "Prompt body (≤10000 chars)"
			},
			bodyHint: {
				zh: "换行会原样保留（包括开头和结尾的空行，只忽略首尾空格与制表符）。把 {{cursor}} 放进正文，插入后光标会停在那儿；只认第一个，其余会被删掉。",
				en: "Line breaks are kept exactly as written — including blank lines at the start or end; only edge spaces and tabs are ignored. Put {{cursor}} in the body and the caret lands there after inserting; only the first one counts, the rest are removed."
			},
			cancel: {
				zh: "取消",
				en: "Cancel"
			},
			save: {
				zh: "保存",
				en: "Save"
			},
			addOk: {
				zh: "添加",
				en: "Add"
			},
			nameRequired: {
				zh: "名称必填",
				en: "Name is required"
			},
			bodyTooLong: {
				zh: "正文超过 10000 字上限",
				en: "Body exceeds 10000 chars"
			},
			delTitle: {
				zh: "删除确认",
				en: "Confirm delete"
			},
			delMsg: {
				zh: "确定删除自定义模板",
				en: "Delete custom template"
			},
			nameQuote: {
				zh: "「{name}」",
				en: "“{name}”"
			},
			delUnrecover: {
				zh: "此操作不可撤销。",
				en: "This cannot be undone."
			},
			delOk: {
				zh: "删除",
				en: "Delete"
			},
			pinFull: {
				zh: "置顶已达上限（5 个）",
				en: "Pin limit reached (5)"
			},
			insertHint: {
				zh: "点击即插入",
				en: "Click to insert"
			},
			usageTitle: {
				zh: "已使用 {n} 次",
				en: "Used {n} times"
			},
			rowExpandHint: {
				zh: "点击展开/收起简介",
				en: "Click to expand or collapse the summary"
			},
			dragToReorder: {
				zh: "拖拽排序",
				en: "Drag to reorder"
			},
			close: {
				zh: "关闭",
				en: "Close"
			},
			plusGlyph: {
				zh: "＋",
				en: "+"
			},
			smartToggle: {
				zh: "智能模式悬浮卡（输入匹配时推荐模板；默认关）",
				en: "Smart card (recommends templates while typing; off by default)"
			},
			smartToggleHint: {
				zh: "默认关；打开后仅在输入匹配时出卡",
				en: "Off by default; when on, the card appears on match"
			},
			smartDot: {
				zh: "智能模式 · 拖动调整位置；输入匹配时出卡",
				en: "Smart mode · drag to move; card appears on match"
			},
			smartTitle: {
				zh: "智能推荐",
				en: "Smart suggest"
			},
			smartHint: {
				zh: "点击即填入",
				en: "Click to insert"
			},
			smartFill: {
				zh: "点击填入",
				en: "Insert"
			},
			smartDismiss: {
				zh: "收起（继续输入可再次出现）",
				en: "Dismiss (reappears as you type)"
			},
			smartRecent: {
				zh: "最近使用",
				en: "Recently used"
			},
			smartCommon: {
				zh: "常用模板",
				en: "Common templates"
			},
			smartCommonSuffix: {
				zh: "·常用",
				en: "·Common"
			},
			smartScoreSuffix: {
				zh: "·分{n}",
				en: "·Score {n}"
			},
			gitHubRepo: {
				zh: "GitHub 仓库",
				en: "GitHub repo"
			},
			feedback: {
				zh: "反馈故障",
				en: "Report issue"
			},
			starTip: {
				zh: "你的 ⭐是我夜空中最亮的星。",
				en: "Your ⭐ is the brightest star in my night sky."
			},
			feedbackTip: {
				zh: "提交反馈、建议和意见🌹",
				en: "Feedback, suggestions and ideas — all welcome 🌹"
			},
			logToggle: {
				zh: "调试日志",
				en: "Debug log"
			},
			logToggleHint: {
				zh: "关闭只停信息与调试两级，错误与告警始终记录。",
				en: "Off stops only info and debug; errors and warnings are always recorded."
			},
			logGroup: {
				zh: "诊断日志",
				en: "Diagnostics"
			},
			logWhere: {
				zh: "落点：~/.dsh/logs/dsh-prompt/",
				en: "Location: ~/.dsh/logs/dsh-prompt/"
			},
			smartGroup: {
				zh: "智能推荐",
				en: "Smart suggestions"
			},
			remoteGroup: {
				zh: "远程模式-配合网易UU远程等手机App",
				en: "Remote mode"
			},
			remoteToggle: {
				zh: "远程模式-配合网易UU远程等手机App",
				en: "Remote mode"
			},
			remoteSize: {
				zh: "大小",
				en: "Size"
			},
			remoteSizeMin: {
				zh: "1档",
				en: "1"
			},
			remoteSizeMax: {
				zh: "10档",
				en: "10"
			},
			remoteSizeValue: {
				zh: "{n}档·{p}%",
				en: "{n} · {p}%"
			},
			remotePersistFail: {
				zh: "持久化失败：本次选择当次有效，下次恢复默认并请重试。",
				en: "Persist failed: this choice works for now, defaults return next time — please retry."
			},
			remoteOrientation: {
				zh: "方向偏好",
				en: "Orientation"
			},
			remoteOrientationHint: {
				zh: "自动跟整机方向，无桥时跟视口；锁定先切整机方向，失败只锁自家布局。",
				en: "Auto follows the system display, falling back to viewport without a bridge; a lock tries the system display first, falling back to our own layout."
			},
			remoteOrientationAuto: {
				zh: "自动",
				en: "Auto"
			},
			remoteOrientationLandscape: {
				zh: "横屏",
				en: "Landscape"
			},
			remoteOrientationPortrait: {
				zh: "竖屏",
				en: "Portrait"
			},
			remoteOrientationBusy: {
				zh: "正在切换整机方向…",
				en: "Switching system orientation…"
			},
			remoteOrientationOsFail: {
				zh: "整机未改变，已锁定自家布局（原因：{code}）。",
				en: "System display unchanged; own layout locked (reason: {code})."
			},
			remoteNeedOn: {
				zh: "需先开启远程模式",
				en: "Turn on remote mode first"
			},
			remoteEffectiveNow: {
				zh: "当前：{orient}（{source}）",
				en: "Now: {orient} ({source})"
			},
			remoteSourceSystem: {
				zh: "整机",
				en: "system display"
			},
			remoteSourceViewport: {
				zh: "视口",
				en: "viewport"
			},
			remoteLockedOrientation: {
				zh: "锁定为{orient}",
				en: "Locked to {orient}"
			},
			remoteDensity: {
				zh: "宫格密度",
				en: "Grid density"
			},
			remoteDensityA: {
				zh: "12宫格",
				en: "12"
			},
			remoteDensityB: {
				zh: "8宫格",
				en: "8 large"
			},
			remoteHostPending: {
				zh: "整机待宿主",
				en: "Waiting on host"
			},
			remoteSystemOrientation: {
				zh: "整机跟手转（需宿主 H1）",
				en: "Rotate whole system (needs host H1)"
			},
			remoteSystemOrientationHint: {
				zh: "宿主支持时一键切外部系统横竖屏；缺席只灰这一行，总闸照常可用。",
				en: "One tap rotates the outside system when the host supports it; when absent only this row is greyed and the master switch still works."
			},
			remoteSystemFont: {
				zh: "整机字号跟随（需宿主 H2）",
				en: "System font follow (needs host H2)"
			},
			remoteSystemFontHint: {
				zh: "宿主支持时整机字号一起走；缺席先放大自家面并明示。",
				en: "The whole system follows when the host supports it; when absent our own surface still enlarges."
			},
			remoteConfigKey: {
				zh: "远程设置",
				en: "Remote settings"
			},
			remoteConfigKeyFallbackHint: {
				zh: "打开设置页远程段",
				en: "Opens the settings remote section"
			},
			sidebarExpand: {
				zh: "展开右侧边栏",
				en: "Expand right sidebar"
			},
			sidebarCollapse: {
				zh: "折叠右侧边栏",
				en: "Collapse right sidebar"
			},
			dockCollapse: {
				zh: "收起工具条",
				en: "Collapse toolbar"
			},
			dockExpand: {
				zh: "展开工具条",
				en: "Expand toolbar"
			},
			workspaceLeftExpand: {
				zh: "展开左侧工作区",
				en: "Expand left workspace"
			},
			workspaceLeftCollapse: {
				zh: "折叠左侧工作区",
				en: "Collapse left workspace"
			},
			workspacePicker: {
				zh: "选择会话",
				en: "Pick session"
			},
			pickerSearch: {
				zh: "搜索：标题 + 工作区名…",
				en: "Search: title + workspace…"
			},
			pickerLoading: {
				zh: "加载中…",
				en: "Loading…"
			},
			pickerCancel: {
				zh: "取消等待",
				en: "Cancel"
			},
			pickerRetry: {
				zh: "整面重试",
				en: "Retry"
			},
			pickerEmpty: {
				zh: "真无会话：当前没有任何可用会话",
				en: "No sessions available"
			},
			pickerEmptySearch: {
				zh: "搜无结果：换个关键词（不回退全量）",
				en: "No matches — try another keyword"
			},
			pickerProbeFail: {
				zh: "探测缺席：宿主机会面不可用，原地重试",
				en: "Host surface unavailable — retry here"
			},
			pickerSwitchFail: {
				zh: "切换失败：留屏，可原地重试",
				en: "Switch failed — retry here"
			},
			pickerSwitchFailBadge: {
				zh: "切换失败",
				en: "Failed"
			},
			pickerSwitching: {
				zh: "正在切换",
				en: "Switching"
			},
			pickerCurrent: {
				zh: "当前",
				en: "Current"
			},
			pickerBlank: {
				zh: "空白",
				en: "Blank"
			},
			pickerUntitled: {
				zh: "（空白会话）",
				en: "(Blank session)"
			},
			pickerUngrouped: {
				zh: "未归属",
				en: "Ungrouped"
			},
			pickerUnassignedShort: {
				zh: "散",
				en: "misc"
			},
			pickerWorkspaces: {
				zh: "工作区",
				en: "Workspaces"
			},
			pickerSessions: {
				zh: "会话",
				en: "Sessions"
			},
			pickerPrev: {
				zh: "上一页",
				en: "Previous"
			},
			pickerNext: {
				zh: "下一页",
				en: "Next"
			},
			pickerOpBar: {
				zh: "翻页与关闭",
				en: "Paging and close"
			},
			logExport: {
				zh: "导出日志",
				en: "Export log"
			},
			logCopyPath: {
				zh: "复制路径",
				en: "Copy path"
			},
			logClear: {
				zh: "清空日志",
				en: "Clear log"
			},
			logClearConfirm: {
				zh: "确认清空",
				en: "Confirm clear"
			},
			logClearAsk: {
				zh: "再点一次「确认清空」会删掉今天以前的日志文件（正在排查的证据也会一起删掉）。",
				en: "Click \"Confirm clear\" again to delete log files from before today — including any evidence you are collecting."
			},
			logSwitchOn: {
				zh: "日志已开启（信息与调试也会记录）。",
				en: "Logging enabled (info and debug are recorded too)."
			},
			logSwitchOff: {
				zh: "日志已关闭：错误、告警与关键轨迹（启动、面板打开等）仍会记录。",
				en: "Logging disabled: errors, warnings and key traces (startup, panel open, …) are still recorded."
			},
			logSwitchFail: {
				zh: "开关未保存，仍按原值：",
				en: "Switch not saved, previous value kept: "
			},
			logExportSaved: {
				zh: "已导出到下载目录：",
				en: "Exported to your downloads: "
			},
			logExportDownloadBlocked: {
				zh: "浏览器拦下了下载，请改用「复制正文」：",
				en: "The browser blocked the download — use \"Copy text\" instead: "
			},
			logExportEmpty: {
				zh: "当天还没有日志文件（开关关闭时只有错误、告警与关键轨迹会落盘）。",
				en: "No log file for today yet (with the switch off, only errors, warnings and key traces are written)."
			},
			logExportFail: {
				zh: "导出失败：",
				en: "Export failed: "
			},
			logPathCopied: {
				zh: "已复制日志文件路径：",
				en: "Log file path copied: "
			},
			logPathFail: {
				zh: "拿不到日志路径，请改用「导出日志」。",
				en: "Could not resolve the log path — use \"Export log\" instead."
			},
			logClearOk: {
				zh: "已删除历史日志",
				en: "Deleted past log files: "
			},
			logClearNone: {
				zh: "没有可删的历史日志（今天这一份会保留）。",
				en: "No past log files to delete (today's file is kept)."
			},
			logClearFail: {
				zh: "清空失败，请稍后再试。",
				en: "Clear failed, please try again."
			},
			logWorking: {
				zh: "处理中…",
				en: "Working…"
			},
			logDropped: {
				zh: "日志管道已丢弃条数：",
				en: "Entries dropped by the log pipeline: "
			},
			logUnavailable: {
				zh: "日志能力当前不可用（宿主未接通）。",
				en: "Logging is currently unavailable (host not reachable)."
			},
			logBytes: {
				zh: "字节",
				en: "bytes"
			},
			bytesParen: {
				zh: "（{v}）",
				en: "({v})"
			},
			logFiles: {
				zh: "个文件",
				en: "file(s)"
			},
			logReasonHost: {
				zh: "宿主不可达",
				en: "host unreachable"
			},
			logReasonRejected: {
				zh: "宿主拒绝写入",
				en: "host rejected the write"
			},
			logReasonTimeout: {
				zh: "宿主超时未应答",
				en: "host timed out"
			},
			logReasonStale: {
				zh: "已有更新的开关操作，本次作废",
				en: "a newer switch action superseded this one"
			},
			logReasonOther: {
				zh: "未知原因",
				en: "unknown reason"
			},
			remoteInputKey: {
				zh: "遥控输入（实时镜子）",
				en: "Remote input (live mirror)"
			},
			remoteInputTitle: {
				zh: "✎ 遥控输入",
				en: "✎ Remote input"
			},
			remoteInputSub: {
				zh: "实时镜子 · 自动同步当前会话草稿",
				en: "Live mirror · auto-syncs current draft"
			},
			remoteInputPh: {
				zh: "在此输入…自动同步到当前会话输入框（去抖串行 setDraft）",
				en: "Type here… auto-syncs to current input (debounced serial setDraft)"
			},
			remoteInputSend: {
				zh: "➤ 发送（禁用）",
				en: "➤ Send (disabled)"
			},
			remoteInputSendTitle: {
				zh: "宿主未给提交面",
				en: "No host submit surface"
			},
			remoteInputExplicitMain: {
				zh: "草稿已同步，去大屏那头发起发送",
				en: "Draft synced — send from the big screen"
			},
			remoteInputExplicitSub: {
				zh: "宿主未提供提交面，此键恒禁用、绝不伪造回车。",
				en: "No host submit surface; this key stays disabled, never fakes Enter."
			},
			remoteInputStale: {
				zh: "会话已切换，本框已停写（防串写），请重开。",
				en: "Session switched; writes paused to avoid cross-talk. Reopen."
			},
			remoteInputMeta: {
				zh: "实时镜子 · 去抖300ms串行 · session校验 · 组词中延迟",
				en: "Live mirror · 300ms debounced serial · session check · IME deferred"
			},
			remoteInputChars: {
				zh: "{n}字",
				en: "{n} chars"
			},
			remoteModelKey: {
				zh: "模型切换（休眠中）",
				en: "Model switch (dormant)"
			},
			remoteModelTitle: {
				zh: "▤ 模型切换",
				en: "▤ Model switch"
			},
			remoteModelEmpty: {
				zh: "宿主暂无模型面（首次出现会提示一次）",
				en: "No host model surface yet (first appearance shows once)"
			}
		};
		const SCOPE_PRESET = "preset";
		const SCOPE_CUSTOM = "custom";
		/** 别名表：键 = 全小写的读入形（查表时对 readForm 结果再 .toLowerCase()）；值 = 规范身份。 */
		const SCOPE_ALIASES = {
			all: "all",
			"全部": "all",
			preset: SCOPE_PRESET,
			"预置": SCOPE_PRESET,
			"预制": SCOPE_PRESET,
			custom: SCOPE_CUSTOM,
			"自定义": SCOPE_CUSTOM
		};
		/** 读入形：非串 → ''；全角空格/不换行空格压半角 → trim（保大小写；大小写不敏感仅用于别名查表时的二次小写）。 */
		function readForm(raw) {
			if (typeof raw !== "string") return "";
			return raw.replace(/[\u3000\u00A0]/g, " ").trim();
		}
		/**
		* 键读入（通用）：别名（查表大小写不敏感）→ 范围身份；其余非空串 → 用户词身份（trim 后原文，保大小写）；
		* 空/垃圾 → null。**不拒绝建词**：任何非空词都合法。
		* 用户词身份=trim 后原文（保大小写）；大小写不敏感仅用于范围别名查表；
		* P1 身份直存必须用本函数，禁止另起小写归一。
		*/
		function normalizeKey(raw) {
			const s = readForm(raw);
			if (!s) return null;
			const hit = SCOPE_ALIASES[s.toLowerCase()];
			return hit === void 0 ? s : hit;
		}
		/** 范围选中态（范围钮点击的产物）。 */
		function scopeSelection(key) {
			return {
				kind: "scope",
				key
			};
		}
		/** 用户词选中态（行动云里那个词，原文即身份）。 */
		function wordSelection(word) {
			return {
				kind: "word",
				word
			};
		}
		/** 无选择 = null，或范围 'all'（#70：'全部' 归一到 null，两种写法同一态）。 */
		function isNoFilter(sel) {
			if (sel === null || sel === void 0) return true;
			return sel.kind === "scope" && sel.key === "all";
		}
		/** 范围钮选中态：'all' 钮 = 无选择态；'preset'/'custom' 钮 = 同身份即选中。 */
		function selectionActive(sel, key) {
			if (key === "all") return isNoFilter(sel);
			if (!sel || sel.kind !== "scope") return false;
			return sel.key === key;
		}
		/** 用户词选中态：同词即选中（原文逐字比对）。 */
		function wordActive(sel, word) {
			return !!sel && sel.kind === "word" && sel.word === word;
		}
		/** 点范围钮：'all' 恒归一到 null；点已选项回 null（toggle）；点他项切过去。 */
		function toggleScope(sel, key) {
			if (key === "all") return null;
			return selectionActive(sel, key) ? null : scopeSelection(key);
		}
		/** 点行动词：点已选项回 null（toggle）；否则切到该词身份。 */
		function toggleWord(sel, word) {
			return wordActive(sel, word) ? null : wordSelection(word);
		}
		/**
		* 存量中文值的读侧适配器（#134 v3：具名 CanonicalKey，不用无名映射）。
		* 只做 trim + 别名查表（大小写不敏感）+ 「预置/预制」别名（外加 '自定义'→'custom' 这类范围身份）；
		* 不做迁移写 —— 存储里的 '自定义' 读成身份 'custom'，写回去仍是 '自定义'（写侧根本拿不到旧拼写）。
		* P0 生产未接线（故意）：scope 不持久化、标签不归一；P1 身份直存时由存储层调用 toCanonical/toStorage，本票仅钉住契约。
		*/
		const LegacyChineseStorageAdapter = {
			toCanonical: normalizeKey,
			toStorage(key) {
				return key;
			}
		};
		/**
		* 行动云/远程标签域的**去留词存量拼写**（与改前那份表逐字一致）。
		* 'all' 是非标签哨兵；'自定义' 是空标签回落词（store.LABEL_FALLBACK）在数据里的写法；
		* 其余 7 词是领域/阶段数据词。**比对一律用拼写**（数据词不归一，见模块头注释）。
		*/
		const EXCLUDED_LABEL_WORDS = [
			"all",
			"思考框架",
			"学习",
			"工程",
			"执行",
			"执行前",
			"执行中",
			"执行后",
			"自定义"
		];
		EXCLUDED_LABEL_WORDS.map((w) => LegacyChineseStorageAdapter.toCanonical(w));
		/** 云/远程标签域去留判定：数据词**原文**命中存量拼写表即出局（不归一，语义逐字不动）。 */
		function isExcludedLabel(word) {
			return EXCLUDED_LABEL_WORDS.indexOf(word) >= 0;
		}
		/**
		* 预制词英译表（#145）：预制模板派生标签（4 领域 + 3 阶段 + 16 行动词）的**显示形**。
		*
		* 边界（与 ADR-0006 §1 同一套身份-显示分离）：
		*   · 只翻**预制词**（词表由本仓拥有）；**用户词永不翻**（原文即身份，folksonomy 不进词表）；
		*   · 本表只服务显示位，逻辑位（matchLabel / isExcludedLabel / 评分 / 落盘）继续用中文原文；
		*   · 表里没有的原样返回 —— 新增预制词忘了登记时，表现为"少翻一个词"，而不是把用户词翻错。
		* 条目选择按"云行胶囊不加宽太多"取舍：优先短词（如 归因→Attribution、固化→Freeze）。
		*/
		const PRESET_WORD_EN = {
			"思考框架": "Thinking",
			"学习": "Learning",
			"工程": "Engineering",
			"执行": "Execution",
			"执行前": "Before",
			"执行中": "During",
			"执行后": "After",
			"拆解": "Decompose",
			"检验": "Verify",
			"归因": "Attribution",
			"决策": "Decide",
			"理解": "Understand",
			"路线": "Roadmap",
			"概念": "Concepts",
			"考验": "Quiz",
			"审查": "Review",
			"测试": "Test",
			"重构": "Refactor",
			"解读": "Explain",
			"启动": "Kickoff",
			"固化": "Freeze",
			"记录": "Log",
			"复盘": "Retrospect"
		};
		/** 单个数据词的显示形：en 且命中预制词表 → 英文；其余（zh / 用户词 / 表外词）→ 原文原样。 */
		function displayWord(word, lang) {
			if (lang !== "en") return word;
			const hit = PRESET_WORD_EN[word];
			return hit === void 0 ? word : hit;
		}
		/**
		* #142 回落词显示映射 + #145 预制词英译（只读展示位专用，逻辑位一律不用）。
		* templateLabels(t) 里**全等** LABEL_FALLBACK（'自定义'，===，大小写敏感）的段换成 tr(lang, STR.labelFallback)；
		* 预制词段走 displayWord；其余段原文原样（大小写不动，遵 #134 code-review 结论：用户词保大小写）。
		* 存储与全部比较（matchLabel/isExcludedLabel/过滤/评分/落盘）继续用原值，本函数永不回写。
		* 循环依赖检查（2026-10-09）：template-library.ts 仅 import ./templates，strings.ts 仅 import ./locale，
		* 均不 import keys —— keys → store/templates + keys → i18n/locale 单向，无环（tsc + 转译测试双重验证）。
		* 门禁口径（#138）：这些位置是**数据词**（dataWords 剔除），故英译后 en 铬无 CJK 断言不受影响，
		* 也不进 P1 溢出预算（预算只卡铬键）。
		*/
		function displayLabels(t, lang) {
			return templateLabels(t).map((seg) => {
				if (seg === "自定义") return tr(lang, STR.labelFallback);
				return displayWord(seg, lang);
			});
		}
		/** 标签串显示形（展示共用；分隔符 '/'，与 store.labelString 同口径，仅回落段与预制词跟语言）。 */
		function displayLabelString(t, lang, sep = "/") {
			return displayLabels(t, lang).join(sep);
		}
		//#endregion
		//#region src/client/template-browser.ts
		function getReact() {
			if (typeof require === "function") try {
				return require("react");
			} catch (e) {}
			if (typeof globalThis !== "undefined" && globalThis.React) return globalThis.React;
			return null;
		}
		/**
		* 插件标志（灯泡）单一定义 —— 模板浏览头行（本文件两条分支）与配置页头行（settings-links.ts）共用。
		* 放在 template-browser.ts 而不是新开模块：本仓每个回归脚本都自己列一遍要转译的客户端模块，
		* 往 template-browser.ts 这条被普遍加载的路径上新增 import 边会让既有脚本全部找不到模块；
		* 导出比新模块代价小，且保住「标志只有一份定义」。改标志只改这里。
		*/
		function PromptMark(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const s = props && props.size || 15;
			return h("svg", {
				width: s,
				height: s,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "var(--dsw-specific-accent,#f0a45c)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				style: { flex: "none" }
			}, [
				h("path", {
					key: "a",
					d: "M15 14c.2-1 .7-1.7 1.5-2.5C17.5 10.6 18 9.3 18 8a6 6 0 1 0-12 0c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"
				}),
				h("path", {
					key: "b",
					d: "M9 18h6"
				}),
				h("path", {
					key: "c",
					d: "M10 22h4"
				}),
				h("path", {
					key: "d",
					d: "M18.5 2.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z"
				})
			]);
		}
		/**
		* #165 屏蔽图标（眼睛）：底栏「展示/屏蔽预制模板」与设置页行首图标共用这一份几何（#179 追加设置行用法）。
		* 睁眼=accent 橙（当前屏蔽中，点它展示）、闭眼斜线=dim 灰（当前展示中，点它藏起）。
		*/
		function PresetEyeIcon(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const s = props && props.size || 14;
			const color = props && props.open ? "var(--dsw-specific-accent,#f0a45c)" : "var(--dsw-alias-label-tertiary)";
			const kids = props && props.open ? [h("path", {
				key: "o",
				d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
			}), h("circle", {
				key: "p",
				cx: 12,
				cy: 12,
				r: 3
			})] : [
				h("path", {
					key: "o1",
					d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"
				}),
				h("path", {
					key: "o2",
					d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"
				}),
				h("path", {
					key: "o3",
					d: "M14.12 14.12a3 3 0 1 1-4.24-4.24"
				}),
				h("line", {
					key: "o4",
					x1: 1,
					y1: 1,
					x2: 23,
					y2: 23
				})
			];
			return h("svg", {
				width: s,
				height: s,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: color,
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				style: {
					flex: "none",
					display: "block"
				}
			}, kids);
		}
		/**
		* #179 触发方式图标（鼠标指针）：底栏「点击触发/悬浮触发」钮与设置页「触发方式」行首共用这一份几何。
		* 仅点击触发（click 模式）时走 accent 橙（状态可见），悬浮触发时为 dim 灰。
		*/
		function TriggerPointerIcon(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const s = props && props.size || 14;
			return h("svg", {
				width: s,
				height: s,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: props && props.clickOnly ? "var(--dsw-specific-accent,#f0a45c)" : "var(--dsw-alias-label-tertiary)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				style: {
					flex: "none",
					display: "block"
				}
			}, [h("path", {
				key: "p",
				d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
			}), h("path", {
				key: "q",
				d: "M13 13l6 6"
			})]);
		}
		/**
		* 底栏动作式幽灵胶囊（#165 屏蔽钮 / #179 触发方式钮同款外形）：按钮永不整块发黄，状态只走图标双色；
		* hover/active/focus 反馈由 `BAR_UI_CSS` 统一注入（内联表达不了伪类）。
		*/
		const GHOST_PILL_STYLE = {
			display: "inline-flex",
			alignItems: "center",
			gap: 4,
			padding: "4px 12px",
			borderRadius: 8,
			border: "1px solid var(--dsw-alias-border-l1)",
			background: "transparent",
			color: "var(--dsw-alias-label-tertiary)",
			cursor: "pointer",
			fontFamily: "var(--dsw-font-family)",
			fontSize: "0.85em",
			whiteSpace: "nowrap",
			flex: "none"
		};
		/**
		* #179 触发方式状态按钮（底栏与设置页共用）：幽灵胶囊 + 指针图标 + 状态式文案。
		* - 按钮正文 = 当前状态（悬浮中「当前：悬浮触发」，点击中「当前：点击触发」），一眼看出当前在哪档；
		* - title/aria = 状态 + 去向（「当前：…，点击切换为…」），读屏与悬停都能确认点后去哪；
		* - aria-pressed=true 表示「当前=仅点击触发」（读屏与静态/渲染门禁都认这一位）；
		* - 点它 = 切到另一种触发方式（内存先行 + notifyStore 自动回刷底栏/设置页两处）；
		* - data-dsh-prompt-trigger 供门禁/测试定位；data-dsh-prompt-chrome 让设置入口的排己逻辑继续生效。
		* 注意：文案由调用方传入的 lang 决定（与父面同一份 lang 状态），本组件不自己订阅语言。
		*/
		function TriggerModeButton(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const hover = props.hover !== false;
			const labelKey = hover ? "triggerNowHover" : "triggerNowClick";
			const titleKey = hover ? "triggerTitleHover" : "triggerTitleClick";
			const label = tr(props.lang, STR[labelKey]);
			const title = tr(props.lang, STR[titleKey]);
			return h("button", {
				type: "button",
				style: { ...GHOST_PILL_STYLE },
				"data-dsh-prompt-trigger": "1",
				"data-dsh-prompt-trigger-mode": hover ? "hover" : "click",
				"data-dsh-prompt-chrome": labelKey,
				"aria-pressed": hover ? "false" : "true",
				title,
				"aria-label": title,
				onMouseDown: keepComposerFocus,
				onClick: () => {
					try {
						saveHoverTrigger(!hover);
					} catch (e) {}
				}
			}, TriggerPointerIcon({ clickOnly: !hover }), " " + label);
		}
		function actionCloudLabels() {
			return allKnownLabels().filter((l) => !isExcludedLabel(l));
		}
		/** #61 真根因（宿主源码实证：dsh-client-ui-conversation 包）。
		* 1) 会话输入框是 Lexical contenteditable div，根本没有 textarea —— 旧的 textarea 扫描全瞎；
		* 2) useInput 是裸 selector hook（renderer 的 bindSnapshotSelector 产物：裸函数，
		*    无 getState/getSnapshot/subscribe），只能在组件 render 内调用，事件回调里根本读不到 store。
		* 两条路全瞎 ⇒ setDraft(模板正文) 整框覆盖（宿主 setDraft 语义即全文替换、光标置尾）。
		* 真修复只信两样活的东西：
		* - H（hook 草稿）：render 内合法订阅到的已提交草稿，引用 chip 的存储形精确；
		* - D（DOM 活读）：点击瞬间 contenteditable 的 innerText 级文本 + getSelection 活光标，
		*   含 IME 组词中尚未提交的文字。
		* 合并铁律：看得见的不丢 —— D 非空即信 D（唯二例外：读不到 D 信 H；H 含引用 chip 时信 H 保编码）。 */
		const CHIP_RE = /[\uE100-\uE11D\uFFFC]/;
		/** render 内订阅到的已提交草稿（面板打开期间由 DraftTap 保持新鲜；设置页无桥，不写）。 */
		let tapDraft = "";
		let tapSeen = false;
		/** render 内订阅输入桥。只能在 render 里调 useInput(selector)：它是裸 hook，
		* 事件回调/ effect 里调即抛（这就是 Q3 删掉的分支死因）。调用点只此一处。 */
		function DraftTap(props) {
			const react = getReact();
			if (!react) return null;
			let ok = false;
			let d = "";
			try {
				d = props.useInput((s) => s && s.draft || "");
				ok = true;
			} catch (e) {}
			(react.useLayoutEffect || react.useEffect)(() => {
				if (ok) {
					tapDraft = typeof d === "string" ? d : "";
					tapSeen = true;
				}
			});
			return null;
		}
		/** 用户最后摸过的输入元（作曲家 editable 或 textarea，#61 前版只记后者故全瞎）。 */
		let lastFocusEl = null;
		let focusTrackArmed = false;
		let armedDoc = null;
		/** #76：挂输入区事件监听（focusin 记最后摸过的框、selectionchange 采落点）。
		*  插件启动即调用一次 —— 采样必须早于用户打字。 */
		function armInputFocusTrack() {
			try {
				const doc = typeof document !== "undefined" ? document : null;
				if (focusTrackArmed && armedDoc === doc) return;
				focusTrackArmed = true;
				armedDoc = doc;
				if (doc && typeof doc.addEventListener === "function") {
					doc.addEventListener("focusin", (e) => {
						try {
							const t = e && e.target;
							if (!t || !t.tagName) return;
							try {
								if (t.closest && (t.closest("[data-dsh-prompt-modal]") || t.closest("[data-dsh-prompt-modal-root]"))) return;
							} catch (err) {}
							if (t.tagName === "TEXTAREA") {
								lastFocusEl = t;
								return;
							}
							try {
								if (t.getAttribute && t.getAttribute("contenteditable") === "true" && t.closest && t.closest("[data-composer-card]")) lastFocusEl = t;
							} catch (err) {}
							sampleCaret();
						} catch (err) {}
					}, true);
					doc.addEventListener("selectionchange", () => {
						sampleCaret();
					});
				}
				sampleCaret();
			} catch (err) {}
		}
		let caretSample = null;
		/** 作曲家是否持有焦点（根自身或根内元素是 activeElement）。 */
		function composerFocused(root) {
			try {
				if (typeof document === "undefined" || !root) return false;
				const ae = document.activeElement;
				if (!ae) return false;
				if (ae === root) return true;
				try {
					return !!(root.contains && root.contains(ae));
				} catch (e) {
					return false;
				}
			} catch (e) {
				return false;
			}
		}
		/** 采样一次落点。只在作曲家持有焦点时写 —— 失焦后选择可能已被归一化，
		*  那种值不是"用户意图"，不能覆盖编辑期的采样。
		*  先做 O(1) 预检再查 DOM：selectionchange 是全页级的，页面里任何输入框动光标都会触发，
		*  热点路径上不能每次都去 querySelectorAll。 */
		function sampleCaret() {
			try {
				if (typeof document === "undefined") return;
				const ae = document.activeElement;
				if (!ae) return;
				let editable = false;
				try {
					editable = ae.isContentEditable === true;
				} catch (e) {
					editable = false;
				}
				if (!editable) try {
					editable = !!(ae.getAttribute && ae.getAttribute("contenteditable") === "true");
				} catch (e) {
					editable = false;
				}
				if (!editable) return;
				for (const r of composerRoots()) {
					if (!composerFocused(r)) continue;
					const read = readEditable(r);
					caretSample = {
						root: r,
						text: read.text,
						caret: read.caret
					};
					return;
				}
			} catch (e) {}
		}
		/** 作曲家可编辑根：宿主 Lexical 编辑器绑定的 contenteditable（自家弹窗已排除）。 */
		function composerRoots() {
			try {
				if (typeof document === "undefined" || !document.querySelectorAll) return [];
				const out = [];
				const push = (el) => {
					try {
						if (el.closest && (el.closest("[data-dsh-prompt-modal]") || el.closest("[data-dsh-prompt-modal-root]"))) return;
					} catch (e) {}
					if (out.indexOf(el) < 0) out.push(el);
				};
				try {
					const scoped = document.querySelectorAll("[data-composer-card] [contenteditable=\"true\"]");
					for (let i = 0; i < scoped.length; i++) push(scoped[i]);
				} catch (e) {}
				if (out.length === 0) try {
					const all = document.querySelectorAll("[contenteditable=\"true\"]");
					for (let i = 0; i < all.length; i++) push(all[i]);
				} catch (e) {}
				return out;
			} catch (e) {
				return [];
			}
		}
		const BLOCK_TAGS = {
			P: 1,
			DIV: 1,
			LI: 1,
			UL: 1,
			OL: 1,
			H1: 1,
			H2: 1,
			H3: 1,
			H4: 1,
			H5: 1,
			H6: 1,
			BLOCKQUOTE: 1,
			PRE: 1,
			SECTION: 1,
			ARTICLE: 1,
			HEADER: 1,
			FOOTER: 1
		};
		/** 把 caret（from 里的下标）映射到 to 里的同义位置。
		*  两份草稿的可见字符完全一致（调用方已保证），差异只在换行 —— 落点靠两件事定位：
		*  1) 光标前有多少个可见字符（唯一的锚点）；
		*  2) 光标相对换行的侧向：紧跟着一个可见字符 ⇒ 落点属于"那一行"，目标处整段跨过换行，
		*     别停在空行上；否则（光标后面是换行/文末）⇒ 只按左侧已有的换行数跨，保住"行尾"语义。
		*  from === to 时是恒等映射。 */
		function mapCaret(from, caret, to) {
			const end = Math.max(0, Math.min(caret, from.length));
			let visible = 0;
			let newlinesBefore = 0;
			for (let i = 0; i < end; i++) if (from.charCodeAt(i) === 10) newlinesBefore++;
			else {
				visible++;
				newlinesBefore = 0;
			}
			const beforeVisible = end < from.length && from.charCodeAt(end) !== 10;
			let j = 0;
			let seen = 0;
			while (j < to.length && seen < visible) if (to.charCodeAt(j) === 10) j++;
			else {
				seen++;
				j++;
			}
			let run = 0;
			while (j + run < to.length && to.charCodeAt(j + run) === 10) run++;
			return Math.max(0, Math.min(j + (beforeVisible ? run : Math.min(newlinesBefore, run)), to.length));
		}
		/** 抑制解除后补关窗判定（纯函数，可单测；真 bug 修复的决策位）。
		* 背景：抑制期间（弹窗开/搜索聚焦与组词/远程搜索态）`schedulePanelClose` 直接丢弃、不排计时；
		* 若弹窗在指针已离场后关闭，此后永再无 mouseleave → 面板永久开着。补排仅当四者齐备：
		* 紧凑浮层（hover 语义面）、无其他抑制理由、指针有 hover 能力、指针已不在入口键/浮层内。
		* 键盘（指针在内 → 不排）、触屏（无 hover 能力 → 不排）、仍在输入（有其他抑制理由 → 不排）
		* 一律沿旧行为；误判的最坏情况也只是“没修”，修不坏。 */
		function shouldCompensateClose(opts) {
			if (!opts.compact) return false;
			if (opts.otherSuppressed) return false;
			if (!opts.hoverCapable) return false;
			return !opts.entryHovered && !opts.rootHovered;
		}
		/** 读一个元素是否处于 :hover（只读探测；任何异常一律按“不在”处理，由调用方决定 fail-safe 方向）。 */
		function matchesHover(el) {
			try {
				return !!(el && typeof el.matches === "function" && el.matches(":hover"));
			} catch (e) {
				return false;
			}
		}
		/** 读一个可编辑根的纯文本与活光标（同一套块映射，文本与光标同源，绝不错位）。
		* 文本≈宿主 clipboardText（段落↔\n，空段落即空行）；光标=当前 selection 锚点，无选择即末尾。
		* 尾部换行：末空块多计出的那一个先去掉；剩下的只截光标之后的 —— 光标落在尾部空行里即用户所敲，
		* 无框内有效选择时沿旧行为全截（防编辑器装饰空块污染）。
		* 元素锚点按宿主自己的规则解：offset 是该元素子节点下标 —— 越过末子节点 → 元素末尾，
		* 否则 → 该子节点的起点（#76；旧实现"取首个 run 的起或末"会把块边界的落点翻到上一行）。 */
		function readEditable(root) {
			let text = "";
			try {
				const runs = [];
				const bounds = /* @__PURE__ */ new Map();
				const childStart = /* @__PURE__ */ new Map();
				const kids = root && root.childNodes ? Array.prototype.slice.call(root.childNodes) : [];
				const pushRun = (s, node) => {
					if (!s) return;
					runs.push({
						node,
						start: text.length,
						len: s.length
					});
					text += s;
				};
				const elementKids = (el) => {
					try {
						return el && el.childNodes ? Array.prototype.slice.call(el.childNodes) : [];
					} catch (e) {
						return [];
					}
				};
				if (!kids.some((k) => k && k.nodeType === 1)) pushRun(root.textContent || "", null);
				else {
					const sep = () => {
						if (text.length === 0) return;
						if (text.charCodeAt(text.length - 1) !== 10) text += "\n";
					};
					const forceBreak = () => {
						if (text.length === 0) return;
						text += "\n";
					};
					/** 走一个元素节点：记 bounds 与 childStart，再递归其子节点。 */
					const walkElement = (el) => {
						const tag = String(el && el.tagName || "").toUpperCase();
						const ch = elementKids(el);
						if (BLOCK_TAGS[tag] === 1) {
							sep();
							const start = text.length;
							childStart.set(el, start);
							for (const c of ch) walkNode(c);
							bounds.set(el, {
								start,
								end: text.length
							});
							if (text.length === start) forceBreak();
						} else if (ch.length === 0) try {
							pushRun(el.textContent || "", el);
						} catch (e) {}
						else {
							childStart.set(el, text.length);
							for (const c of ch) walkNode(c);
						}
					};
					const walkNode = (k) => {
						if (!k) return;
						if (k.nodeType === 3) {
							childStart.set(k, text.length);
							pushRun(k.nodeValue || "", k);
							return;
						}
						if (k.nodeType !== 1) return;
						if (String(k.tagName || "").toUpperCase() === "BR") {
							childStart.set(k, text.length);
							forceBreak();
							return;
						}
						walkElement(k);
					};
					for (const c of kids) walkNode(c);
					bounds.set(root, {
						start: 0,
						end: text.length
					});
					try {
						const lastKid = kids.length > 0 ? kids[kids.length - 1] : null;
						const lastTag = String(lastKid && lastKid.tagName || "").toUpperCase();
						if (lastKid && lastKid.nodeType === 1 && BLOCK_TAGS[lastTag] === 1 && String(lastKid.textContent || "") === "") text = text.replace(/\n$/, "");
					} catch (e) {}
				}
				let caret = text.length;
				let selInside = false;
				try {
					const g = typeof window !== "undefined" ? window : globalThis;
					const sel = g && typeof g.getSelection === "function" ? g.getSelection() : null;
					const an = sel && sel.rangeCount > 0 ? sel.anchorNode : null;
					if (an && root.contains) {
						let inside = false;
						try {
							inside = root.contains(an);
						} catch (e) {}
						if (inside) {
							const hit = anchorToOffset(an, sel && typeof sel.anchorOffset === "number" ? sel.anchorOffset : 0);
							if (typeof hit === "number" && hit >= 0) {
								caret = hit;
								selInside = true;
							}
						}
					}
					function anchorToOffset(an, ao) {
						if (an && an.nodeType === 3) {
							for (const r of runs) if (r.node === an) return r.start + Math.max(0, Math.min(ao, r.len));
							return -1;
						}
						const b = bounds.get(an);
						if (b) {
							const ch = elementKids(an);
							if (ao >= ch.length) return b.end;
							const cs = childStart.get(ch[ao]);
							if (typeof cs === "number" && cs >= 0) return cs;
							return b.end;
						}
						for (const r of runs) if (r.node === an) return ao > 0 ? r.start + r.len : r.start;
						for (const r of runs) try {
							if (an && an.contains && an.contains(r.node)) return ao > 0 ? r.start + r.len : r.start;
						} catch (e) {}
						return -1;
					}
				} catch (e) {}
				if (selInside) text = text.slice(0, caret) + text.slice(caret).replace(/\n+$/, "");
				else text = text.replace(/\n+$/, "");
				return {
					text,
					caret: Math.max(0, Math.min(caret, text.length))
				};
			} catch (e) {
				return {
					text: "",
					caret: 0
				};
			}
		}
		/** 选当前作曲家根：焦点命中的 > 用户最后摸过的 > 首个非空 > 首个。 */
		function pickEditable() {
			const roots = composerRoots();
			if (roots.length === 0) return null;
			try {
				if (typeof document !== "undefined" && document) {
					const ae = document.activeElement;
					if (ae && roots.indexOf(ae) >= 0) return ae;
				}
			} catch (e) {}
			try {
				if (lastFocusEl && roots.indexOf(lastFocusEl) >= 0) return lastFocusEl;
			} catch (e) {}
			try {
				for (const r of roots) try {
					if (readEditable(r).text) return r;
				} catch (e) {}
			} catch (e) {}
			return roots[0];
		}
		/** 把焦点送到指定的作曲家根（#180：插入前与尾部兜底共用；根必须还是当前该用的那个）。 */
		function focusComposerRoot(el) {
			if (el && typeof el.focus === "function") try {
				el.focus({ preventScroll: true });
			} catch (e2) {
				try {
					el.focus();
				} catch (e3) {}
			}
		}
		/** 把焦点送回作曲家（宿主 input.left 自家按钮同款 keepFocus 语义）。 */
		function focusComposer() {
			try {
				if (typeof document === "undefined") return;
				focusComposerRoot(pickEditable());
			} catch (e) {}
		}
		/** 保焦（行/入口 mousedown）：只拦焦点转移，click 照常；焦点已在面板内（搜索框）
		* 或编辑器内时绝不抢焦点 —— 抢了会 blur 搜索框，#34 的 hover 抑制一松面板就误关。 */
		function keepComposerFocus(e) {
			sampleCaret();
			try {
				if (e && typeof e.preventDefault === "function") e.preventDefault();
			} catch (err) {}
			try {
				if (typeof document === "undefined") return;
				const ae = document.activeElement;
				if (ae && ae.closest && typeof ae.closest === "function") try {
					if (ae.closest("[data-dsh-prompt-panel-root]") || ae.closest("[data-dsh-prompt-modal-root]") || ae.closest("[data-dsh-prompt-modal]")) return;
				} catch (err) {}
				if (ae && ae.getAttribute && typeof ae.getAttribute === "function") try {
					if (ae.getAttribute("contenteditable") === "true") return;
				} catch (err) {}
				if (ae && ae.tagName === "TEXTAREA") return;
				focusComposer();
			} catch (err) {}
		}
		/** 决议当前草稿与插入点（#61 真修复 + #76 落点与换行保真）。
		*  H=宿主模型草稿（render 内订阅，宿主自己的 clipboard 投影），D=点击瞬间的 DOM 活读。
		*  文本：#76 —— 可见字符一致、只有换行形态有别时，信 H。理由在宿主源码里：setDraft 按 \n
		*  切段、段间补一个 \n，模型才是行结构的真值；DOM 只是渲染表象（空块、装饰器、末尾 BR
		*  都可能凭空多出或吞掉换行）。真机日志实证过 H 与 D 长度分歧（D 少 1–9 字符）。
		*  落点：作曲家持焦点 → 活读（看得见的）；已失焦 → 编辑期采样（selectionchange 留下）；
		*  都没有 → 活读兜底。真机实证失焦后选择会被归一化到上一行末尾，字就插错了行。
		*  #180：root 一并带回 —— 插入前要恢复焦点时，必须对准"决议这份草稿时读的那个根"。 */
		function resolveDraft() {
			const norm = (s) => (s || "").replace(/\r\n?/g, "\n");
			const H = norm(tapDraft);
			const root = pickEditable();
			if (root) {
				let d = "";
				let live = -1;
				try {
					const r = readEditable(root);
					d = norm(r.text);
					live = Math.max(0, Math.min(r.caret, d.length));
				} catch (e) {}
				let caret = live;
				let caretSrc = composerFocused(root) ? "live" : "live-blur";
				if (live < 0) {
					caret = d.length;
					caretSrc = "end";
				}
				if (!composerFocused(root) && caretSample && caretSample.root === root) {
					const st = norm(caretSample.text);
					if (d.length > 0 && st.length > d.length && st.startsWith(d) && /^\n*$/.test(st.slice(d.length))) d = st;
					caret = mapCaret(st, caretSample.caret, d || st);
					caretSrc = "sample";
				}
				if (!d) {
					if (H) return {
						text: H,
						caret: H.length,
						caretSrc: "end",
						root
					};
					return {
						text: "",
						caret: 0,
						caretSrc,
						root
					};
				}
				if (!H) return {
					text: d,
					caret,
					caretSrc,
					root
				};
				if (H === d) return {
					text: H,
					caret,
					caretSrc,
					root
				};
				if (CHIP_RE.test(H)) return {
					text: H,
					caret: H.length,
					caretSrc: "end",
					root
				};
				if (H.replace(/\n/g, "") === d.replace(/\n/g, "")) {
					const dTail = (/(\n*)$/.exec(d) || [])[1] || "";
					const hTail = (/(\n*)$/.exec(H) || [])[1] || "";
					let text = H;
					if (dTail.length > 0 && caret >= d.length - dTail.length && dTail.length !== hTail.length) text = H.slice(0, H.length - hTail.length) + dTail;
					return {
						text,
						caret: mapCaret(d, caret, text),
						caretSrc,
						root
					};
				}
				return {
					text: d,
					caret,
					caretSrc,
					root
				};
			}
			if (H) return {
				text: H,
				caret: H.length,
				caretSrc: "end",
				root
			};
			try {
				if (typeof document !== "undefined" && document.querySelectorAll) {
					const tas = document.querySelectorAll("textarea");
					for (let i = 0; i < tas.length; i++) {
						const ta = tas[i];
						try {
							if (ta.closest && (ta.closest("[data-dsh-prompt-modal]") || ta.closest("[data-dsh-prompt-modal-root]"))) continue;
						} catch (e) {}
						const v = ta.value || "";
						if (v) {
							let p = v.length;
							try {
								if (typeof ta.selectionStart === "number" && ta.selectionStart > 0) p = ta.selectionStart;
							} catch (e) {}
							return {
								text: v,
								caret: p,
								caretSrc: "legacy",
								root
							};
						}
					}
				}
			} catch (e) {}
			return {
				text: "",
				caret: 0,
				caretSrc: "none",
				root
			};
		}
		/** 上一次决议的落点诊断（只记数字与来源枚举，不记正文）：供 pick.insert 落盘。
		*  模块级暂存是刻意的诊断槽（同文件 tapDraft / lastFocusEl 同款）—— insertBody 的返回值
		*  被既有调用点与回归当作"插入前草稿长度"用，不能改签名去顺带回传这份诊断。 */
		let lastInsertProbe = {
			caret: 0,
			caretSrc: "none",
			draftLines: 0
		};
		/** #178 R2 / #181：一次插入的宿主侧计划 —— 先算出最终整篇文本（永远字符正确），再决定怎么交给宿主。
		*  #181 第一性原理：宿主公开的写草稿原语只有两条，undo 分组语义完全不同 ——
		*  · setDraft 是「整框 seed」，宿主用 history-merge 标签把它并进上一条历史记录（不是独立可撤销步）；
		*  · insertText 是 paste 记录，独立成一条 undo。用户意图写入必须走后者，否则「插入」会和插入前的
		*    输入焊成同一条撤销记录（#181：第二次撤销连插入前的草稿一起吞掉）。所以：
		*  1) 正文无光标标记：单次 insertText(正文, 折叠光标) —— 一次可撤销编辑，undo 回到插入前草稿，
		*     光标落在插入文本之后（#181 显式接受的契约变更）。宿主缺 action / 光标非折叠 / 坐标对不上 /
		*     草稿含引用 chip / insertText 返回 false 或抛错 ⇒ 降级 setDraft(最终文本)、mode=degraded，
		*     光标置尾（旧行为、文本永远正确）；正常成功路径的 mode 保持 plain（不把正常记成降级）。
		*  2) 有 {{cursor}}：两笔纯 paste 编辑 —— insertText(含一个标记的全文, 折叠光标) →
		*     captureInsertion() 取新 draftRev → insertText('', { draftRev, start: markerAt, end: markerAt + 标记长 }) 删标记。
		*     Lexical 删除文本后光标塌缩在删除区间起点 ⇒ 光标精确落在标记位、标记不留痕；
		*     两笔都是 paste 记录 ⇒ undo 第一下先撤「删标记」（标记回到正文），第二下撤整段插入、回插入前草稿。
		*  3) 任何一环不可用（旧宿主缺 action / insertText 返回 false / 抛错 / 坐标不一致 / 草稿含引用 chip）：
		*     降级为「剥标记 + 整框 setDraft」，光标置尾；文本永远正确、绝不留标记。
		*  「先算后写」：text 是最终整篇草稿文本，draftChars 仍是插入前的草稿长度（pick.insert 契约不变）。
		*  #180：这里是「宿主写入」的唯一收口（面板 onPick 与智能卡 smartInsert 都从这里过），所以在
		*  第一次宿主编辑之前把焦点送回作曲家根 —— 失焦时宿主的两次编辑只改模型选择、不写 DOM 选择
		*  （skip-dom-selection），而事后再 focus 会让浏览器把 caret 放回文档开头、Lexical 随即同步成 0。
		*  root 由调用方传入「决议草稿时读的那个根」；不传则就地 pickEditable()（智能卡路径没有独立决议）。
		*  顺序（#180 × #181 的交叉点，别对调）：canEdit 时**先在失焦态**读一次 captureInsertion（落点一致性
		*  守卫要用"聚焦前"的模型选择，focus() 会把浏览器 caret 归零、模型选择跟着变 0），然后才 focus，
		*  再写。若聚焦前就读不到一致落点（失焦太久、模型选择已丢，只剩编辑期采样），有标记路径退回
		*  #178 v1 的整框落位，但先用一笔瞬时 paste 编辑把历史边界顶开（#181 修法 B）—— 保住 #180 的
		*  「光标落标记位」，同时 setDraft 不会并进用户输入那条记录，undo 仍能分两步回退。 */
		function applyInsert(inputActions, draft, caret, body, root) {
			const src = draft == null ? "" : String(draft);
			const pos = Math.max(0, Math.min(Number.isFinite(caret) ? caret : src.length, src.length));
			const parsed = stripCursorMarkers(body);
			const finalText = src.slice(0, pos) + parsed.text + src.slice(pos);
			const result = {
				draftChars: src.length,
				mode: "plain",
				marker: parsed.caret !== null,
				text: finalText
			};
			if (!inputActions || typeof inputActions.setDraft !== "function") return result;
			const canEdit = typeof inputActions.captureInsertion === "function" && typeof inputActions.insertText === "function" && !CHIP_RE.test(src);
			const captureAt = () => {
				const cap = inputActions.captureInsertion();
				if (!cap) return null;
				const rev = typeof cap.draftRev === "number" ? cap.draftRev : null;
				if (rev === null || cap.start !== pos || cap.end !== pos) return null;
				return rev;
			};
			let cap1 = null;
			if (canEdit) try {
				cap1 = captureAt();
			} catch (e) {
				cap1 = null;
			}
			const focusRoot = root || pickEditable();
			const wasFocused = focusRoot ? composerFocused(focusRoot) : false;
			if (focusRoot && !wasFocused) focusComposerRoot(focusRoot);
			if (parsed.caret === null) {
				if (cap1 !== null) try {
					if (inputActions.insertText(parsed.text, {
						draftRev: cap1,
						start: pos,
						end: pos
					}) === true) return result;
				} catch (e) {}
				inputActions.setDraft(finalText);
				result.mode = "degraded";
				return result;
			}
			const markerAt = pos + parsed.caret;
			if (cap1 === null && canEdit && focusRoot && !wasFocused) try {
				const capF = inputActions.captureInsertion();
				const revF = capF && typeof capF.draftRev === "number" ? capF.draftRev : null;
				if (revF !== null && inputActions.insertText("x", {
					draftRev: revF,
					start: 0,
					end: 0
				}) === true) {
					const withMarker = src.slice(0, pos) + parsed.text.slice(0, parsed.caret) + CURSOR_MARKER + parsed.text.slice(parsed.caret) + src.slice(pos);
					inputActions.setDraft(withMarker);
					const cap2 = inputActions.captureInsertion();
					const rev2 = cap2 && typeof cap2.draftRev === "number" ? cap2.draftRev : null;
					if (rev2 !== null && inputActions.insertText("", {
						draftRev: rev2,
						start: markerAt,
						end: markerAt + 10
					}) === true) {
						result.mode = "span";
						return result;
					}
				}
			} catch (e) {}
			if (cap1 !== null) {
				const markerBody = parsed.text.slice(0, parsed.caret) + CURSOR_MARKER + parsed.text.slice(parsed.caret);
				try {
					if (inputActions.insertText(markerBody, {
						draftRev: cap1,
						start: pos,
						end: pos
					}) === true) {
						const cap2 = inputActions.captureInsertion();
						const rev2 = cap2 && typeof cap2.draftRev === "number" ? cap2.draftRev : null;
						if (rev2 !== null && inputActions.insertText("", {
							draftRev: rev2,
							start: markerAt,
							end: markerAt + 10
						}) === true) {
							result.mode = "span";
							return result;
						}
					}
				} catch (e) {}
			}
			inputActions.setDraft(finalText);
			result.mode = "degraded";
			return result;
		}
		/** 插入正文到当前草稿（光标处优先，否则末尾；不覆盖；自动聚焦）。返回插入前的草稿长度，供调用点记日志。
		* #178 R2：宿主写入收口在 applyInsert —— 无标记时单编辑、光标尾（与旧版逐字节一致）；有标记时两编辑落位。
		* useInput 只为兼容旧签名保留：真正的桥订阅在 render 内的 DraftTap，事件回调里不再碰它（Q3）。 */
		function insertBody(useInput, inputActions, body) {
			armInputFocusTrack();
			const r = resolveDraft();
			const draft = r.text;
			const pos = Math.max(0, Math.min(r.caret, draft.length));
			lastInsertProbe = {
				caret: pos,
				caretSrc: r.caretSrc,
				draftLines: draft.length === 0 ? 0 : draft.split("\n").length
			};
			if (inputActions && typeof inputActions.setDraft === "function") applyInsert(inputActions, draft, pos, body, r.root);
			setTimeout(() => {
				try {
					focusComposer();
				} catch (e) {}
			}, 0);
			return draft.length;
		}
		/** 点击模板：插入 + 用量 +1 + 面板关闭（并记一条插入事件：只记种类与散列，不记模板名与正文）。
		* #61：无写入能力（设置页纯管理面不传输入桥）时直接返回 —— 不插入、不涨用量、不记事件。
		* #76：多记落点与落点来源（纯数字与枚举），真机再报错位时能一眼看出是活读、采样还是兜底。 */
		function onPick(t, useInput, inputActions) {
			if (!inputActions || typeof inputActions.setDraft !== "function") return;
			pickProbe(useInput, inputActions);
			const draftChars = insertBody(useInput, inputActions, t.body);
			logEvent$4("pick.insert", {
				source: "panel",
				templateKind: t.builtin ? "preset" : "custom",
				idHash: t.id,
				draftChars,
				caret: lastInsertProbe.caret,
				caretSrc: lastInsertProbe.caretSrc,
				draftLines: lastInsertProbe.draftLines
			});
			bumpUsage(t.id);
			setPanelOpen(false);
		}
		/** 模板浏览（面板 / 设置页共用） */
		const PANEL_Z = 9999;
		const MODAL_Z = 11e3;
		const modalMaskStyle = {
			position: "fixed",
			inset: 0,
			background: "rgba(0,0,0,0.55)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: MODAL_Z
		};
		const modalCardStyle = {
			width: 460,
			background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
			backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
			border: "1px solid var(--dsw-alias-border-inverted)",
			borderRadius: 12,
			padding: 16,
			display: "flex",
			flexDirection: "column",
			gap: 10,
			fontFamily: "var(--dsw-font-family)",
			color: "var(--dsw-alias-label-primary)"
		};
		const modalFieldStyle = {
			width: "100%",
			background: "var(--dsw-alias-bg-layer-3)",
			border: "1px solid var(--dsw-alias-border-l1)",
			color: "var(--dsw-alias-label-primary)",
			borderRadius: 8,
			padding: "8px 10px",
			fontFamily: "var(--dsw-font-family)",
			fontSize: "0.96em",
			outline: "none",
			boxSizing: "border-box"
		};
		const modalBtnsStyle = {
			display: "flex",
			justifyContent: "flex-end",
			gap: 8
		};
		const modalBtn = (primary, danger) => ({
			padding: "6px 14px",
			borderRadius: 8,
			border: primary ? 0 : "1px solid var(--dsw-alias-border-l1)",
			background: primary ? "var(--dsw-specific-accent,#f0a45c)" : "var(--dsw-alias-bg-layer-3)",
			color: primary ? "#1a1a1e" : danger ? "var(--dsw-specific-danger,#e06c75)" : "var(--dsw-alias-label-primary)",
			cursor: "pointer",
			fontFamily: "var(--dsw-font-family)",
			fontSize: "0.96em"
		});
		/**
		* 染色钩子属性（唯一真相）：名字节点**只在确实有颜色时**带它 —— 「不选颜色不描边」因此由属性有无
		* 天然表达，不需要第二条 CSS 分支。描边样式段在 index.ts 启动时注入（那边写了为什么注入点不在本文件：
		* template-browser.ts:47-52 记着「往本文件加 import 边会让既有回归脚本全部找不到模块」的代价）。
		*/
		const INK_TINT_ATTR = "data-dsh-prompt-tint";
		/**
		* 染色描边的 CSS（与钩子属性同一处、唯一真相）：八向 1px `text-shadow`，颜色取宿主正文令牌
		* `--dsw-alias-label-primary`（浅色 #0f1115 / 深色 #f9fafb）⇒ 一条规则白拿「深色主题白描边、
		* 浅色主题黑描边」，零分支、零写死颜色，第三方用 ctx.theme 覆盖令牌时自动跟随（研究 152 §3）。
		* 为什么八向而不是四向：四向留对角缺口（实心环只有 36–59%）；为什么不用 -webkit-text-stroke：
		* 外露环只有半像素、DPR 1.25 时实心环掉 77%，且不带 paint-order 会把字心填色吃光（同 §1）。
		* 只命中带钩子属性的名字 —— 未选颜色的模板不加该属性，「不选颜色不描边」不需要第二条规则。
		* 注入在 index.ts 启动时做一次（那边写了为什么注入点不在本文件）。
		*/
		const INK_TINT_CSS = (function() {
			return "[data-dsh-prompt-tint]{text-shadow:" + [
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1],
				[1, 1],
				[-1, 1],
				[1, -1],
				[-1, -1]
			].map((o) => o[0] + "px " + o[1] + "px 0 var(--dsw-alias-label-primary)").join(",") + ";}";
		})();
		/**
		* 取色浮层的交互反馈 CSS（真机反馈：色块、十六进制框、描边开关点上去没感觉）。
		* 为什么是样式段而不是内联样式：`:hover/:active/:focus` 内联表达不了。
		* 为什么走 filter / box-shadow / transform 而不是背景变色：这些控件的底色与边框多半是内联写死的
		* （内联优先级高于任何选择器）⇒ 只用内联没占用的三个通道；十六进制框内联写了 `outline:'none'`，
		* 所以它的聚焦环也用 box-shadow 而不是 outline。
		* 注入点在 index.ts 启动时（与染色样式同一套归属缝，`data-plugin='dsh-prompt'`，幂等可回收）。
		*/
		const INK_UI_CSS = (function() {
			return [
				"[data-dsh-prompt-ink-cell],[data-dsh-prompt-ink-default],[data-dsh-prompt-ink-field-btn],[data-dsh-prompt-ink-done],[data-dsh-prompt-ink-close],[data-dsh-prompt-ink-hex],[data-dsh-prompt-ink-outline-row]{transition:filter .12s ease,box-shadow .12s ease,transform .06s ease;}",
				"[data-dsh-prompt-ink-cell]:hover{filter:brightness(1.18);box-shadow:0 0 0 2px var(--dsw-alias-border-l2);}",
				"[data-dsh-prompt-ink-cell]:active{transform:scale(.9);}",
				"[data-dsh-prompt-ink-default],[data-dsh-prompt-ink-field-btn],[data-dsh-prompt-ink-done],[data-dsh-prompt-ink-close]:hover{filter:brightness(1.15);}",
				"[data-dsh-prompt-ink-default],[data-dsh-prompt-ink-field-btn],[data-dsh-prompt-ink-done],[data-dsh-prompt-ink-close]:active{transform:translateY(1px);}",
				"[data-dsh-prompt-ink-outline-row]:hover{box-shadow:0 0 0 2px var(--dsw-alias-border-l2);}",
				"[data-dsh-prompt-ink-hex]:hover{box-shadow:0 0 0 1px var(--dsw-alias-border-l2);}",
				"[data-dsh-prompt-ink-hex]:focus{box-shadow:0 0 0 2px var(--dsw-alias-label-primary);}",
				"[data-dsh-prompt-ink-cell]:focus-visible,[data-dsh-prompt-ink-default],[data-dsh-prompt-ink-field-btn],[data-dsh-prompt-ink-done],[data-dsh-prompt-ink-close]:focus-visible,[data-dsh-prompt-ink-outline]:focus-visible{outline:2px solid var(--dsw-alias-label-primary);outline-offset:2px;}",
				"[data-dsh-prompt-ink-default],[data-dsh-prompt-ink-field-btn],[data-dsh-prompt-ink-done],[data-dsh-prompt-ink-close]:focus:not(:focus-visible){outline:none;box-shadow:none;}",
				"[data-dsh-prompt-ink-outline]{accent-color:var(--dsw-alias-label-primary);cursor:pointer;}"
			].join("");
		})();
		/**
		* 小列表的交互反馈 CSS（#165 需求 1/3：关闭显眼 hover + 全控件悬浮反馈）。
		* 与 INK_UI_CSS 同理：`:hover/:active/:focus` 内联表达不了，走注入；只用 filter / box-shadow /
		* transform 三通道（底色与边框多半内联写死，内联优先级高于任何选择器）。
		* 语义（用户 10-16 拍板，原型 v3 定稿）：悬浮=中性环（border-l2）+ 提亮；焦点=accent 橙环；
		* 关闭 hover=危险底；按钮永不整块发黄（屏蔽钮幽灵态，状态只走眼睛图标开合+双色）。
		* 注入点在 index.ts（与染色/取色同一套归属缝，另一条私有标记，互不覆盖）。
		*/
		const BAR_UI_CSS = (function() {
			return [
				"[data-dsh-prompt-bar] button,[data-dsh-prompt-cloud] button,[data-dsh-prompt-act] button,[data-dsh-prompt-pin],[data-dsh-prompt-hide],[data-dsh-prompt-trigger],[data-dsh-prompt-remote-add],[data-dsh-prompt-remote-search],[data-dsh-prompt-remote-prev],[data-dsh-prompt-remote-next],[data-dsh-prompt-remote-close]{transition:filter .12s ease,box-shadow .12s ease,transform .06s ease;}",
				"[data-dsh-prompt-bar] button:hover,[data-dsh-prompt-cloud] button:hover,[data-dsh-prompt-act] button:hover,[data-dsh-prompt-pin]:hover,[data-dsh-prompt-hide]:hover,[data-dsh-prompt-trigger]:hover,[data-dsh-prompt-remote-add],[data-dsh-prompt-remote-search],[data-dsh-prompt-remote-prev],[data-dsh-prompt-remote-next],[data-dsh-prompt-remote-close]:hover{filter:brightness(1.25);box-shadow:0 0 0 2px var(--dsw-alias-border-l2);}",
				"[data-dsh-prompt-bar] button:active,[data-dsh-prompt-cloud] button:active,[data-dsh-prompt-act] button:active,[data-dsh-prompt-hide]:active,[data-dsh-prompt-trigger]:active,[data-dsh-prompt-remote-add],[data-dsh-prompt-remote-search],[data-dsh-prompt-remote-prev],[data-dsh-prompt-remote-next],[data-dsh-prompt-remote-close]:active{transform:translateY(1px);}",
				"[data-dsh-prompt-pin]:active{transform:scale(.9);}",
				"[data-dsh-prompt-bar] button:focus-visible,[data-dsh-prompt-cloud] button:focus-visible,[data-dsh-prompt-act] button:focus-visible,[data-dsh-prompt-pin]:focus-visible,[data-dsh-prompt-hide]:focus-visible,[data-dsh-prompt-trigger]:focus-visible,[data-dsh-prompt-remote-add],[data-dsh-prompt-remote-search],[data-dsh-prompt-remote-prev],[data-dsh-prompt-remote-next],[data-dsh-prompt-remote-close]:focus-visible{outline:2px solid var(--dsw-specific-accent);outline-offset:2px;}",
				"[data-dsh-prompt-hide-toggle]{transition:box-shadow .12s ease,filter .12s ease;border-radius:4px;}",
				"[data-dsh-prompt-hide-toggle]:hover{box-shadow:0 0 0 3px rgba(240,164,92,.3);filter:brightness(1.12);}",
				"[data-dsh-prompt-hide-toggle]:checked:hover{box-shadow:0 0 0 3px rgba(240,164,92,.55);}",
				"[data-dsh-prompt-hide-toggle]:focus-visible{outline:2px solid var(--dsw-specific-accent);outline-offset:2px;}",
				"[data-dsh-prompt-remote-toggle]{transition:box-shadow .12s ease,filter .12s ease;border-radius:4px;}",
				"[data-dsh-prompt-remote-toggle]:hover{box-shadow:0 0 0 3px rgba(240,164,92,.3);filter:brightness(1.12);}",
				"[data-dsh-prompt-remote-toggle]:checked:hover{box-shadow:0 0 0 3px rgba(240,164,92,.55);}",
				"[data-dsh-prompt-remote-toggle]:focus-visible{outline:2px solid var(--dsw-specific-accent);outline-offset:2px;}",
				"[data-dsh-prompt-trigger][aria-pressed=\"true\"]:hover{box-shadow:0 0 0 2px rgba(240,164,92,.55);}",
				"[data-dsh-prompt-close]:hover,[data-dsh-prompt-remote-close]:hover{background:rgba(224,108,117,.16)!important;color:var(--dsw-specific-danger)!important;box-shadow:0 0 0 2px rgba(224,108,117,.35);}",
				"[data-dsh-prompt-close]:focus-visible,[data-dsh-prompt-remote-close]:focus-visible{outline:2px solid var(--dsw-specific-danger);outline-offset:2px;}",
				"[data-dsh-prompt-search]:hover{box-shadow:0 0 0 1px var(--dsw-alias-border-l2);}",
				"[data-dsh-prompt-search]:focus{box-shadow:0 0 0 2px var(--dsw-specific-accent);}",
				"[data-dsh-prompt-remote-search-input]:hover{box-shadow:0 0 0 1px var(--dsw-alias-border-l2);}",
				"[data-dsh-prompt-remote-search-input]:focus{box-shadow:0 0 0 2px var(--dsw-specific-accent);}"
			].join("");
		})();
		/** 色块墙的候选网格：饱和度取样（只锁亮度，不锁死饱和度 —— 让饱和度也参与取样，才填得满带内的空间）。 */
		const INK_SAT_SAMPLES = [
			1,
			.85,
			.7,
			.55,
			.4
		];
		/** 亮度取样步长 3%：够密；每档色相最终只挑「墙面行数」那么多格（见 inkShadesOf）。 */
		const INK_LIGHT_STEPS = (function() {
			const out = [];
			for (let l = 8; l <= 92; l += 3) out.push(l);
			return out;
		})();
		/** 墙面行数：每档色相最多露这么多格（同色相内按亮度均匀取样，深→浅）。 */
		const INK_WALL_ROWS = 5;
		/** hex → [r,g,b]；非法/非六位回 null（颜色数学就地放本文件：本仓不为这点纯函数新开模块，#159 同结论）。 */
		function hexToRgb(v) {
			if (typeof v !== "string" || !/^#[0-9a-fA-F]{6}$/.test(v)) return null;
			return [
				parseInt(v.slice(1, 3), 16),
				parseInt(v.slice(3, 5), 16),
				parseInt(v.slice(5, 7), 16)
			];
		}
		function rgbToHex(r, g, b) {
			const f = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
			return "#" + f(r) + f(g) + f(b);
		}
		function hslToRgb(h, s, l) {
			const hh = (h % 360 + 360) % 360;
			const c = (1 - Math.abs(2 * l - 1)) * s;
			const x = c * (1 - Math.abs(hh / 60 % 2 - 1));
			const m = l - c / 2;
			let r = 0, g = 0, b = 0;
			if (hh < 60) {
				r = c;
				g = x;
			} else if (hh < 120) {
				r = x;
				g = c;
			} else if (hh < 180) {
				g = c;
				b = x;
			} else if (hh < 240) {
				g = x;
				b = c;
			} else if (hh < 300) {
				r = x;
				b = c;
			} else {
				r = c;
				b = x;
			}
			return [
				(r + m) * 255,
				(g + m) * 255,
				(b + m) * 255
			];
		}
		/** 控件侧带内判据：用 store 的 INK_PICK_L_*（比写入口的 INK_L_* 窄、留 3.2:1 余量），不另抄常量。 */
		function inkShadePickable(hex) {
			if (!hexToRgb(hex)) return false;
			const L = relativeLuminance(hex);
			return typeof L === "number" && L >= .19109 && L <= .27813;
		}
		/** 色块墙的横轴：12 档色相（每 30°）。 */
		const INK_HUES = [
			0,
			30,
			60,
			90,
			120,
			150,
			180,
			210,
			240,
			270,
			300,
			330
		];
		/**
		* 某色相下所有「看得清」的深浅：带外的直接不进墙 —— 而不是留在墙上灰掉。
		* 这是 #161 的要害：用户看到的每一个方块都是能点的颜色，不再需要理解「灰=看不清」。
		*/
		function inkShadesOf(hue) {
			const seen = {};
			const all = [];
			INK_SAT_SAMPLES.forEach((s) => INK_LIGHT_STEPS.forEach((l) => {
				const hex = rgbToHex(...hslToRgb(hue, s, l / 100));
				if (seen[hex]) return;
				seen[hex] = 1;
				if (inkShadePickable(hex)) all.push(hex);
			}));
			all.sort((a, b) => relativeLuminance(a) - relativeLuminance(b));
			if (all.length <= INK_WALL_ROWS) return all;
			const pick = [];
			for (let i = 0; i < INK_WALL_ROWS; i++) pick.push(all[Math.round(i * (all.length - 1) / 4)]);
			return pick.filter((v, i, arr) => arr.indexOf(v) === i);
		}
		/** 入口按钮的皮（与「悬浮式标签网格触发键」同一套宿主变量）。 */
		const inkFieldBtnStyle = {
			display: "flex",
			alignItems: "center",
			gap: 8,
			width: "100%",
			marginTop: "0.5em",
			padding: "0.55em 0.75em",
			borderRadius: "0.6em",
			border: "thin solid var(--dsw-alias-border-l1)",
			background: "var(--dsw-alias-bg-layer-3)",
			color: "var(--dsw-alias-label-primary)",
			cursor: "pointer",
			fontFamily: "var(--dsw-font-family)",
			fontSize: "1em"
		};
		/**
		* 浮层「一行收口」里各控件的公共皮（#164 真机反馈：默认 / 十六进制 / 文字描边）：同高（`2.6em`，
		* 随宿主字号缩放，1 档 ≈ 33px）、同字号、同圆角。
		* 真机反馈「这一行控件高度不一致」的根因：默认键的选中态把边框从 1px 加粗到 2px（比未选中高 2px），
		* 十六进制框又整段套 modalFieldStyle（0.96em + 8px 内边距 + 8px 圆角）—— 三个控件各按自己的盒子算高。
		* 现在统一：1px 边框 + box-sizing:border-box + 同一高度口径，选中态改用 inset 环（不碰边框宽度）。
		* 高度用 em 不用 px：插件自家面字号会随远程档位放大（#160），写死 32px 时 0.9em 文字从 2 档起就
		* 溢出这个盒子（headless Chrome 实测：1 档 32/32/32 装得下；3 档文字 50.4px 塞进 32px 盒 ⇒ 溢出；
		* 5 档更甚）。2.6em ≈ 1 档 33px，档位放大时控件跟着长高，三控件仍等高（同字号/同行高/同内边距）、
		* 永不溢出 —— 见 research/palette-ui-163/_probe-variants.html 的 A/B/C 三方案实测表。
		*/
		const inkRowCtlStyle = {
			height: "2.6em",
			boxSizing: "border-box",
			display: "inline-flex",
			alignItems: "center",
			gap: 6,
			padding: "0 0.7em",
			borderRadius: 6,
			border: "1px solid var(--dsw-alias-border-l1)",
			background: "transparent",
			color: "var(--dsw-alias-label-primary)",
			fontFamily: "var(--dsw-font-family)",
			fontSize: "0.9em",
			lineHeight: 1,
			cursor: "pointer"
		};
		/** 选中态：不碰边框宽度（会顶高整行），改用 1px inset 环。 */
		const inkRowCtlOnStyle = {
			borderColor: "var(--dsw-alias-label-primary)",
			boxShadow: "inset 0 0 0 1px var(--dsw-alias-label-primary)"
		};
		/** 鼠标粘滞杀（取色浮层动作键共用）：mousedown 默认行为就是聚焦按钮 —— 焦点一留，
		* :focus-visible 的环就常亮到下一次焦点转移（真机报障：默认/完成/× 的环常亮）。
		* 拦掉它：click 照常触发（mousedown 的 preventDefault 不取消 click），键盘 Tab/Enter
		* 全程不受影响（键盘不走 mousedown，Tab 停留时的环仍是正确的焦点指示）。
		* :active 按压反馈不受影响（激活行为完整，位移动画照常）。 */
		const noStickyFocus = (e) => {
			try {
				if (e && e.preventDefault) e.preventDefault();
			} catch (err) {}
		};
		/** 浮层卡片的皮（同「悬浮标签网格」那张卡）。 */
		const inkPopCardStyle = {
			width: "min(470px, 92vw)",
			maxHeight: "80vh",
			overflowY: "auto",
			background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
			backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
			border: "1px solid var(--dsw-alias-border-inverted)",
			borderRadius: 12,
			padding: "0.9em",
			fontFamily: "var(--dsw-font-family)",
			color: "var(--dsw-alias-label-primary)",
			display: "flex",
			flexDirection: "column",
			gap: "0.7em"
		};
		/** 色块/预览用的小方块。 */
		function inkSwatchStyle(hex, size) {
			return {
				width: size,
				height: size,
				borderRadius: 5,
				boxSizing: "border-box",
				flex: "none",
				display: "inline-block",
				background: hex || "transparent",
				border: "1px solid var(--dsw-alias-border-l1)"
			};
		}
		/**
		* 取色控件（#161 改版，据用户真机反馈重做）：弹窗里只占**一行** —— 一个按钮（当前色块 + 当前值），
		* 点开浮层再选。浮层里的色块墙**每个格子都点得动**：横排 12 档色相，竖排该色相下亮度落在可读带内
		* （inkShadePickable，与写入口同口径）的深浅 —— 于是「灰格子」这种只有设计者看得懂的暗示彻底消失。
		* 浮层里还有一条真名预览（真名文本 + 该色 + INK_TINT_ATTR 描边钩子），选谁看谁。
		* 模块级稳定组件：写成 TemplateModal 里的内联组件会在父级每次重渲染时被卸载重建（与 #21 同因）。
		* 只管显示与选择：`value` 为 '' 即「默认」（不上色/跟随主题/无描边）；「这一项没动过」由调用方的 null
		* 表示（见 TemplateModal —— 那条是 ADR-0007「绝不改写存量」的实现位）。
		*/
		function InkPicker(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const t = props.t;
			const value = typeof props.value === "string" ? props.value : "";
			const outlineOn = props.outline !== false;
			const openState = react.useState(false);
			const open = openState[0];
			const setOpen = openState[1];
			const typedState = react.useState(value);
			const typed = typedState[0];
			const setTyped = typedState[1];
			const badState = react.useState(false);
			const bad = badState[0];
			const setBad = badState[1];
			const sample = String(props.name || "").trim() || t("colorPreviewSample");
			const pick = (hex) => {
				setTyped(hex);
				setBad(false);
				props.onChange(hex);
			};
			const onHex = (raw) => {
				setTyped(raw);
				const v = String(raw || "").trim();
				if (v === "") {
					setBad(false);
					return;
				}
				if (hexToRgb(v) && inkShadePickable(v)) {
					setBad(false);
					props.onChange(v.toLowerCase());
					return;
				}
				setBad(v.replace("#", "").length >= 6);
			};
			const close = () => setOpen(false);
			return h("div", {
				key: "ink",
				"data-dsh-prompt-ink-field": "1"
			}, [h("button", {
				key: "btn",
				type: "button",
				style: inkFieldBtnStyle,
				"data-dsh-prompt-ink-field-btn": "1",
				"aria-haspopup": "true",
				"aria-expanded": open ? "true" : "false",
				title: t("colorField"),
				onMouseDown: noStickyFocus,
				onClick: () => setOpen(!open)
			}, [
				h("span", {
					key: "sw",
					"data-dsh-prompt-ink-swatch": value || "default",
					style: inkSwatchStyle(value, "1.15em")
				}),
				h("span", {
					key: "l",
					style: {
						flex: "1 1 auto",
						textAlign: "left"
					}
				}, t("colorField") + " · " + (value ? value : t("colorDefaultShort"))),
				h("span", {
					key: "c",
					style: { color: "var(--dsw-alias-label-tertiary)" }
				}, "▾")
			]), open ? h(ModalPortal, { key: "pop" }, [h("div", {
				key: "mask",
				"data-dsh-prompt-ink-mask": "1",
				style: {
					position: "fixed",
					inset: 0,
					background: "rgba(0,0,0,0.45)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					zIndex: MODAL_Z
				},
				onClick: (e) => {
					if (e.target === e.currentTarget) close();
				}
			}, [h("div", {
				key: "card",
				"data-dsh-prompt-ink-pop": "1",
				style: inkPopCardStyle
			}, [
				h("div", {
					key: "head",
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					}
				}, [h("span", {
					key: "t",
					style: {
						fontSize: "1em",
						fontWeight: 700
					}
				}, "🎨 " + t("colorField")), h("span", {
					key: "b",
					style: {
						display: "flex",
						gap: "0.5em"
					}
				}, [h("button", {
					key: "done",
					type: "button",
					"data-dsh-prompt-ink-done": "1",
					style: modalBtn(true),
					onMouseDown: noStickyFocus,
					onClick: close
				}, t("colorDone")), h("button", {
					key: "x",
					type: "button",
					"data-dsh-prompt-ink-close": "1",
					style: modalBtn(),
					onMouseDown: noStickyFocus,
					onClick: close
				}, "×")])]),
				h("div", {
					key: "pv",
					"data-dsh-prompt-ink-preview": value || "default",
					style: {
						display: "flex",
						alignItems: "baseline",
						gap: 8,
						padding: "0.5em 0.6em",
						borderRadius: 8,
						border: "1px solid var(--dsw-alias-border-l1)"
					}
				}, [h("span", {
					key: "l",
					style: {
						fontSize: "0.85em",
						color: "var(--dsw-alias-label-tertiary)",
						flex: "none"
					}
				}, t("colorPreview")), h("span", {
					key: "n",
					style: {
						fontSize: "1em",
						minWidth: 0,
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
						...value ? {
							color: value,
							paddingBlock: 2,
							marginBlock: -2,
							paddingInline: 2,
							marginInline: -2
						} : {}
					},
					...value && outlineOn ? { [INK_TINT_ATTR]: "" } : {}
				}, sample)]),
				h("div", {
					key: "wall",
					"data-dsh-prompt-ink-wall": "1",
					style: {
						display: "flex",
						gap: 4,
						alignItems: "flex-end",
						flexWrap: "wrap"
					}
				}, INK_HUES.map((hue) => h("div", {
					key: "h" + hue,
					"data-dsh-prompt-ink-hue-col": String(hue),
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 4
					}
				}, inkShadesOf(hue).map((hex) => {
					const on = value.toLowerCase() === hex;
					return h("button", {
						key: hex,
						type: "button",
						"data-dsh-prompt-ink-cell": hex,
						"aria-pressed": on ? "true" : "false",
						title: hex,
						"aria-label": hex,
						style: {
							width: "1.5em",
							height: "1.15em",
							padding: 0,
							borderRadius: 5,
							cursor: "pointer",
							boxSizing: "border-box",
							background: hex,
							border: on ? "2px solid var(--dsw-alias-label-primary)" : "1px solid var(--dsw-alias-border-l1)"
						},
						onClick: () => pick(hex)
					});
				})))),
				h("div", {
					key: "row",
					"data-dsh-prompt-ink-row": "1",
					style: {
						display: "flex",
						alignItems: "center",
						gap: 8,
						flexWrap: "wrap"
					}
				}, [
					h("button", {
						key: "default",
						type: "button",
						"data-dsh-prompt-ink-default": "1",
						"aria-pressed": value === "" ? "true" : "false",
						title: t("colorDefault"),
						"aria-label": t("colorDefault"),
						style: {
							...inkRowCtlStyle,
							flex: "none",
							...value === "" ? inkRowCtlOnStyle : {}
						},
						onMouseDown: noStickyFocus,
						onClick: () => pick("")
					}, t("colorDefaultShort")),
					h("input", {
						key: "in",
						type: "text",
						value: typed,
						placeholder: t("colorHexPh"),
						"aria-label": t("colorHexPh"),
						"data-dsh-prompt-ink-hex": "1",
						style: {
							...inkRowCtlStyle,
							display: "inline-block",
							cursor: "text",
							width: "auto",
							flex: "1 1 8em",
							minWidth: "6em",
							background: "var(--dsw-alias-bg-layer-3)",
							outline: "none"
						},
						onChange: (e) => onHex(e.target.value)
					}),
					value ? h("label", {
						key: "ol",
						"data-dsh-prompt-ink-outline-row": "1",
						style: {
							...inkRowCtlStyle,
							flex: "none",
							userSelect: "none"
						}
					}, [h("input", {
						key: "cb",
						type: "checkbox",
						checked: outlineOn,
						"data-dsh-prompt-ink-outline": "1",
						style: {
							margin: 0,
							width: "1em",
							height: "1em",
							cursor: "pointer"
						},
						onChange: (e) => {
							props.onOutline && props.onOutline(!!(e.target && e.target.checked));
						}
					}), h("span", { key: "l" }, t("colorOutline"))]) : null,
					bad ? h("span", {
						key: "warn",
						"data-dsh-prompt-ink-warn": "1",
						style: {
							fontSize: "0.85em",
							color: "var(--dsw-specific-danger,#e06c75)"
						}
					}, t("colorOutOfBand")) : null
				])
			])])]) : null]);
		}
		/** 新建/编辑弹窗（模块级稳定组件，避免父级重渲染时被卸载重置） */
		function TemplateModal(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const lang = resolveLocale();
			const uiScale = remoteSizeScale(getRemotePrefs().enabled ? getRemotePrefs().size : 1);
			const cardStyleScaled = {
				...modalCardStyle,
				fontSize: "calc(1em * " + uiScale + ")"
			};
			const editing = props.kind === "edit" && !!props.tpl;
			const s1 = react.useState(editing ? props.tpl.name : "");
			const name = s1[0];
			const setName = s1[1];
			const s2 = react.useState(editing ? templateLabels(props.tpl) : []);
			const labels = s2[0];
			const setLabels = s2[1];
			const s2b = react.useState("");
			const labelInput = s2b[0];
			const setLabelInput = s2b[1];
			const s3 = react.useState(editing ? props.tpl.body : "");
			const body = s3[0];
			const setBody = s3[1];
			const s4 = react.useState(editing ? inkColorOf(props.tpl) ?? null : null);
			const ink = s4[0];
			const setInk = s4[1];
			const s5 = react.useState(editing && inkColorOf(props.tpl) !== void 0 ? inkOutlineOf(props.tpl) : true);
			const outline = s5[0];
			const setOutline = s5[1];
			const errState = react.useState(null);
			const err = errState[0];
			const setErr = errState[1];
			const commitInput = () => {
				const fresh = normalizeLabels(labelInput);
				if (fresh.length === 0) {
					setLabelInput("");
					return;
				}
				setLabels(normalizeLabels([...labels, ...fresh]));
				setLabelInput("");
			};
			const doOk = () => {
				const nm = name.trim(), bd = trimBodyEdges(body);
				if (!nm) {
					setErr("nameRequired");
					return;
				}
				if (bd.length > 1e4) {
					setErr("bodyTooLong");
					return;
				}
				const checked = validateLabels([...labels, ...normalizeLabels(labelInput)]);
				if (!checked.ok) {
					setErr(checked.error);
					return;
				}
				props.onOk && props.onOk({
					name: nm,
					labels: checked.labels,
					body: bd,
					color: ink === null ? void 0 : ink,
					outline: outline ? true : false
				});
			};
			const known = allKnownLabels();
			const labelGridOn = getRemotePrefs().enabled;
			const labelPickerState = react.useState(false);
			const labelPickerOpen = labelPickerState[0];
			const labelGridStyle = {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(4.5em, 1fr))",
				gap: "0.5em",
				marginTop: "0.75em"
			};
			const labelCellStyle = (on) => ({
				aspectRatio: "1 / 1",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
				padding: "0.25em",
				borderRadius: "0.6em",
				cursor: "pointer",
				border: "thin solid var(--dsw-alias-border-l1)",
				overflow: "hidden",
				background: on ? "var(--dsw-specific-accent,#f0a45c)" : "transparent",
				color: on ? "#1a1a1e" : "var(--dsw-alias-label-primary)",
				fontFamily: "var(--dsw-font-family)",
				fontSize: "0.85em",
				fontWeight: on ? 700 : 500,
				lineHeight: 1.25,
				overflowWrap: "break-word"
			});
			const toggleGridLabel = (w) => {
				if (labels.indexOf(w) >= 0) setLabels(labels.filter((x) => x !== w));
				else setLabels(normalizeLabels([...labels, w]));
			};
			const chipStyle = {
				display: "inline-flex",
				alignItems: "center",
				gap: 4,
				fontSize: "0.85em",
				color: "var(--dsw-alias-label-primary)",
				background: "var(--dsw-alias-bg-layer-3)",
				border: "1px solid var(--dsw-alias-border-l2)",
				padding: "1px 4px 1px 9px",
				borderRadius: 999,
				whiteSpace: "nowrap"
			};
			const chipXStyle = {
				border: 0,
				background: "transparent",
				color: "var(--dsw-alias-label-tertiary)",
				cursor: "pointer",
				fontSize: "1em",
				lineHeight: 1,
				padding: "0 2px",
				fontFamily: "var(--dsw-font-family)"
			};
			return h("div", {
				style: modalMaskStyle,
				"data-dsh-prompt-modal": "",
				"data-dsh-prompt-modal-kind": editing ? "edit" : "create",
				onClick: (e) => {
					if (e.target === e.currentTarget) props.onCancel();
				}
			}, [h("div", { style: {
				...cardStyleScaled,
				width: labelGridOn ? "min(1440px, 96vw)" : "min(640px, 94vw)",
				maxHeight: labelGridOn ? "90vh" : "92vh",
				overflowY: "auto"
			} }, [
				h("h3", { style: {
					fontSize: "1.08em",
					margin: 0
				} }, editing ? props.t("editTitle") : props.t("addTitle")),
				h("input", {
					style: modalFieldStyle,
					placeholder: props.t("namePh"),
					value: name,
					onChange: (e) => setName(e.target.value)
				}),
				h("div", { style: {
					display: "flex",
					flexWrap: "wrap",
					gap: 6
				} }, labels.map((l) => h("span", {
					key: l,
					style: chipStyle
				}, [l, h("button", {
					style: chipXStyle,
					title: props.t("removeLabel"),
					onClick: () => setLabels(labels.filter((x) => x !== l))
				}, "×")]))),
				h("input", {
					style: modalFieldStyle,
					placeholder: props.t("labelsPh"),
					value: labelInput,
					onChange: (e) => setLabelInput(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							commitInput();
						}
					},
					list: labelGridOn ? void 0 : "dsh-prompt-labels"
				}),
				labelGridOn ? null : h("datalist", { id: "dsh-prompt-labels" }, known.map((w) => h("option", {
					key: w,
					value: w,
					label: displayWord(w, lang)
				}))),
				labelGridOn ? h("button", {
					key: "label-picker",
					type: "button",
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						marginTop: "0.5em",
						padding: "0.6em 0.75em",
						borderRadius: "0.6em",
						border: "thin solid var(--dsw-alias-border-l1)",
						background: "var(--dsw-alias-bg-layer-3)",
						color: "var(--dsw-alias-label-primary)",
						cursor: "pointer",
						fontFamily: "var(--dsw-font-family)",
						fontSize: "1em"
					},
					"data-dsh-prompt-label-picker": "1",
					"aria-haspopup": "true",
					"aria-expanded": labelPickerOpen ? "true" : "false",
					onClick: () => labelPickerState[1](true)
				}, [h("span", { key: "t" }, "🏷 " + props.t("labelPicker") + (labels.length > 0 ? " · " + labels.length : "")), h("span", {
					key: "c",
					style: { color: "var(--dsw-alias-label-tertiary)" }
				}, "▾")]) : null,
				labelGridOn && labelPickerOpen ? h(ModalPortal, { key: "label-grid-overlay" }, [h("div", {
					key: "label-grid-mask",
					style: {
						position: "fixed",
						inset: 0,
						background: "rgba(0,0,0,0.45)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						zIndex: MODAL_Z
					},
					"data-dsh-prompt-label-grid-mask": "1",
					onClick: (e) => {
						if (e.target === e.currentTarget) labelPickerState[1](false);
					}
				}, [h("div", {
					key: "label-grid-card",
					style: {
						width: "min(520px, 92vw)",
						maxHeight: "80vh",
						overflowY: "auto",
						background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
						backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
						border: "1px solid var(--dsw-alias-border-inverted)",
						borderRadius: 12,
						padding: "0.9em",
						fontFamily: "var(--dsw-font-family)",
						color: "var(--dsw-alias-label-primary)"
					}
				}, [h("div", {
					key: "head",
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: "0.5em"
					}
				}, [h("span", {
					key: "t",
					style: {
						fontSize: "1em",
						fontWeight: 700
					}
				}, "🏷 " + props.t("labelPicker")), h("span", {
					key: "btns",
					style: {
						display: "flex",
						gap: "0.5em"
					}
				}, [h("button", {
					key: "done",
					type: "button",
					style: modalBtn(true),
					onClick: () => labelPickerState[1](false)
				}, props.t("labelDone")), h("button", {
					key: "x",
					type: "button",
					style: modalBtn(),
					onClick: () => labelPickerState[1](false)
				}, "×")])]), h("div", {
					key: "grid",
					style: labelGridStyle,
					"data-dsh-prompt-label-grid": "1"
				}, known.map((w) => {
					const on = labels.indexOf(w) >= 0;
					return h("button", {
						key: w,
						type: "button",
						style: labelCellStyle(on),
						"data-dsh-prompt-label-cell": "1",
						"aria-pressed": on ? "true" : "false",
						title: displayWord(w, lang),
						onClick: () => toggleGridLabel(w)
					}, displayWord(w, lang));
				}))])])]) : null,
				h("div", { style: {
					fontSize: "0.85em",
					color: "var(--dsw-alias-label-tertiary)"
				} }, props.t("labelsHint")),
				h(InkPicker, {
					key: "ink-picker",
					t: props.t,
					value: ink || "",
					name,
					outline,
					onOutline: (v) => setOutline(v),
					onChange: (v) => setInk(v)
				}),
				h("textarea", {
					style: {
						...modalFieldStyle,
						height: labelGridOn ? 400 : 200,
						resize: "vertical"
					},
					placeholder: props.t("bodyPh"),
					value: body,
					onChange: (e) => setBody(e.target.value)
				}),
				h("div", { style: {
					fontSize: "0.85em",
					color: "var(--dsw-alias-label-tertiary)"
				} }, props.t("bodyHint")),
				err ? h("div", { style: {
					fontSize: "0.92em",
					color: "var(--dsw-specific-danger,#e06c75)"
				} }, props.t(err)) : null,
				h("div", { style: modalBtnsStyle }, [h("button", {
					style: modalBtn(),
					onClick: props.onCancel
				}, props.t("cancel")), h("button", {
					style: modalBtn(true),
					onClick: doOk
				}, editing ? props.t("save") : props.t("addOk"))])
			])]);
		}
		/** 删除确认弹窗（同样模块级稳定组件） */
		function ConfirmDelete(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const uiScale = remoteSizeScale(getRemotePrefs().enabled ? getRemotePrefs().size : 1);
			const cardStyleScaled = {
				...modalCardStyle,
				fontSize: "calc(1em * " + uiScale + ")"
			};
			return h("div", {
				style: modalMaskStyle,
				"data-dsh-prompt-modal": "",
				"data-dsh-prompt-modal-kind": "delete-confirm",
				onClick: (e) => {
					if (e.target === e.currentTarget) props.onCancel();
				}
			}, [h("div", { style: cardStyleScaled }, [
				h("h3", { style: {
					fontSize: "1.08em",
					margin: 0
				} }, props.t("delTitle")),
				h("div", { style: {
					fontSize: "0.96em",
					color: "var(--dsw-alias-label-tertiary)"
				} }, [
					props.t("delMsg"),
					h("span", { "data-dsh-prompt-chrome": "nameQuote" }, props.t("nameQuote").replace("{name}", props.tpl.name)),
					props.t("delUnrecover")
				]),
				h("div", { style: modalBtnsStyle }, [h("button", {
					style: modalBtn(),
					onClick: props.onCancel
				}, props.t("cancel")), h("button", {
					style: modalBtn(false, true),
					onClick: props.onOk
				}, props.t("delOk"))])
			])]);
		}
		function getReactDom() {
			if (typeof require === "function") try {
				return require("react-dom");
			} catch (e) {}
			if (typeof globalThis !== "undefined" && globalThis.ReactDOM) return globalThis.ReactDOM;
			return null;
		}
		/**
		* 顶层 Portal 底座（#21）：把 children 挂到 document.body，逃离宿主 slot 的祖先层叠上下文，
		* 使 z 在全局生效而非相对祖先生效。React 事件仍冒泡给 React 祖先（portal 语义），hover 门控不受影响。
		* 无 DOM（单测）或无 react-dom 时回退为内联渲染，保持 #14 回归覆盖。
		* 模块级稳定组件：与 TemplateModal 同理，避免父级重渲染时卸载重置。
		*/
		function TopPortal(props) {
			const react = getReact();
			if (!react) return null;
			const reactDom = getReactDom();
			if (typeof document === "undefined" || !reactDom || typeof reactDom.createPortal !== "function") return props.children;
			const attr = props.rootAttr || "data-dsh-prompt-top-root";
			const holder = react.useMemo(() => {
				try {
					const el = document.createElement("div");
					el.setAttribute(attr, "");
					return el;
				} catch (e) {
					return null;
				}
			}, [attr]);
			react.useEffect(() => {
				if (!holder) return;
				try {
					document.body.appendChild(holder);
				} catch (e) {}
				return () => {
					try {
						document.body.removeChild(holder);
					} catch (e) {}
				};
			}, [holder]);
			if (!holder) return props.children;
			return reactDom.createPortal(props.children, holder);
		}
		/**
		* 弹窗顶层 Portal（#21）：新增/编辑/删除确认弹窗经 TopPortal 挂到 body，
		* 逃离面板层叠上下文（compact 面板 PANEL_Z 上下文 / 设置页 settings.section 上下文）。
		* #40 起导出：更新弹窗复用同一套顶层机制与同一个 rootAttr（`test:issue-21` 钉着这条）。
		*/
		function ModalPortal(props) {
			const react = getReact();
			if (!react) return null;
			return react.createElement(TopPortal, { rootAttr: "data-dsh-prompt-modal-root" }, props.children);
		}
		/**
		* 浮层顶层 Portal（#21 R2）：compact 选择浮层经 TopPortal 挂到 body。
		* 真机 R1 证实：浮层留在 conversation.input.overlay 内时 PANEL_Z=9999 仍被右侧面板盖住——
		* 数值从不是问题（宿主面板 host z=25/面板 z=40/drop 遮罩 z=1000，见 dsh-better-sidebar 实测），
		* 问题是 slot 祖先层叠上下文把整棵子树压平。仅 overlay 实例（PanelHost）用，设置页保持内联。
		*/
		function PanelPortal(props) {
			const react = getReact();
			if (!react) return null;
			return react.createElement(TopPortal, { rootAttr: "data-dsh-prompt-panel-root" }, props.children);
		}
		function TemplateBrowser(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const { compact, inputActions, useInput } = props;
			const langState = react.useState(resolveLocale());
			const lang = langState[0];
			const setTick = react.useState(0)[1];
			const selectedState = react.useState(null);
			const selected = selectedState[0];
			const qState = react.useState("");
			const q = qState[0];
			const modalState = react.useState(null);
			const modal = modalState[0];
			const goHintState = react.useState(false);
			const goHint = goHintState[0];
			const goNavState = react.useState({
				phase: "idle",
				error: ""
			});
			const goNav = goNavState[0];
			/**
			* #77 设置页折叠（默认收起）：只渲染头行，列表整块不挂载。
			* 只认「compact 为假 + 调用方显式给了 collapsible」——悬浮面板永远是展开的，
			* 不传这个 prop 的挂载（含全部既有回归脚本）行为一字不动。
			*/
			const collapsible = !compact && !!props.collapsible;
			const listOpenState = react.useState(false);
			const listOpen = listOpenState[0];
			const showList = !collapsible || listOpen;
			const posState = react.useState(null);
			const pos = posState[0];
			const rootRef = react.useRef(null);
			const listRef = react.useRef(null);
			const highlightState = react.useState(null);
			const highlightId = highlightState[0];
			const hoverState = react.useState(null);
			const hoverId = hoverState[0];
			const pressedState = react.useState(null);
			const pressedId = pressedState[0];
			const expandedState = react.useState(/* @__PURE__ */ new Set());
			const expanded = expandedState[0];
			const toggleExpanded = (id) => {
				expandedState[1]((prev) => {
					const next = new Set(prev);
					if (next.has(id)) next.delete(id);
					else next.add(id);
					return next;
				});
			};
			const dragState = react.useState(null);
			const dragGuard = react.useRef(false);
			const beginCustomDrag = (e, tpl) => {
				if (compact) return;
				try {
					e.preventDefault();
					e.stopPropagation();
				} catch (err) {}
				const order = allTemplates().filter((x) => !x.builtin).slice().sort(compareCustomOrder).map((x) => x.id);
				dragGuard.current = true;
				dragState[1]({
					id: tpl.id,
					order
				});
				const onMove = (ev) => {
					let els = [];
					try {
						els = Array.from(document.querySelectorAll("[data-dsh-prompt-row=\"1\"][data-dsh-prompt-builtin=\"0\"]"));
					} catch (err) {
						els = [];
					}
					if (els.length === 0) return;
					let target = els[els.length - 1];
					let below = true;
					for (let i = 0; i < els.length; i++) {
						const r = els[i].getBoundingClientRect();
						if (ev.clientY < r.top + r.height / 2) {
							target = els[i];
							below = false;
							break;
						}
					}
					const targetId = target.getAttribute("data-dsh-prompt-id");
					if (!targetId || targetId === tpl.id) return;
					const next = order.filter((x) => x !== tpl.id);
					let at = next.indexOf(targetId);
					if (at < 0) return;
					if (below) at += 1;
					next.splice(at, 0, tpl.id);
					order.splice(0, order.length, ...next);
					dragState[1]({
						id: tpl.id,
						order: next.slice()
					});
				};
				const onUp = () => {
					try {
						document.removeEventListener("pointermove", onMove);
						document.removeEventListener("pointerup", onUp);
						document.removeEventListener("pointercancel", onUp);
					} catch (err) {}
					saveCustomOrder(order);
					dragState[1](null);
					setTimeout(() => {
						dragGuard.current = false;
					}, 0);
				};
				try {
					document.addEventListener("pointermove", onMove);
					document.addEventListener("pointerup", onUp);
					document.addEventListener("pointercancel", onUp);
				} catch (err) {}
			};
			const focusState = react.useState(false);
			const searchFocused = focusState[0];
			const compState = react.useState(false);
			const composing = compState[0];
			const remoteQState = react.useState("");
			const remoteQ = remoteQState[0];
			const remotePageState = react.useState(0);
			const remotePage = remotePageState[0];
			const remoteSearchState = react.useState(false);
			const remoteSearchOpen = remoteSearchState[0];
			const remoteFocusState = react.useState(false);
			const remoteSearchFocused = remoteFocusState[0];
			const remoteCompState = react.useState(false);
			const remoteComposing = remoteCompState[0];
			/** 抑制解除后补关窗（真 bug 修复的执行位，决策见 shouldCompensateClose）。
			* otherSuppressed 由调用方按“除本次解除项之外的剩余抑制理由”传入（闭包 state 现值）；
			* 指针位置经 :hover 只读探测。任何探测异常一律不排（沿旧行为）。 */
			const maybeCloseAfterSuppress = (otherSuppressed) => {
				try {
					if (!compact || otherSuppressed) return;
					const g = typeof globalThis !== "undefined" ? globalThis : null;
					const w = (typeof window !== "undefined" ? window : g && g.window) || null;
					let hoverCapable = false;
					try {
						hoverCapable = !!(w && typeof w.matchMedia === "function" && w.matchMedia("(hover: hover)") && w.matchMedia("(hover: hover)").matches);
					} catch (e) {
						hoverCapable = false;
					}
					if (!hoverCapable) return;
					const doc = typeof document !== "undefined" ? document : g && g.document || null;
					let entry = null;
					try {
						entry = doc && typeof doc.querySelector === "function" ? doc.querySelector("[data-dsh-prompt-entry]") : null;
					} catch (e) {
						entry = null;
					}
					const rootEl = rootRef ? rootRef.current : null;
					if (!shouldCompensateClose({
						compact,
						otherSuppressed,
						hoverCapable,
						entryHovered: matchesHover(entry),
						rootHovered: matchesHover(rootEl)
					})) return;
				} catch (e) {
					return;
				}
				schedulePanelClose(150);
			};
			const orientState = react.useState("landscape");
			const remoteOrient = orientState[0];
			const remoteTickState = react.useState(0);
			remoteTickState[0];
			react.useEffect(() => {
				logEvent$4("panel.open", {
					mode: compact ? "compact" : "full",
					rows: allTemplates().length
				});
			}, []);
			(react.useLayoutEffect || react.useEffect)(() => {
				if (!compact) return;
				let disposed = false;
				let raf = null;
				let timer = null;
				let tries = 0;
				const clearPending = () => {
					try {
						if (raf !== null && typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(raf);
						if (timer !== null) clearTimeout(timer);
					} catch (e) {}
					raf = null;
					timer = null;
				};
				const compute = () => {
					try {
						const btn = typeof document !== "undefined" ? document.querySelector("[data-dsh-prompt-entry]") : null;
						if (!btn) return false;
						const br = btn.getBoundingClientRect();
						if (br && br.width === 0 && br.height === 0 && br.left === 0 && br.top === 0) return false;
						const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
						const vh = typeof window !== "undefined" ? window.innerHeight : 800;
						const width = 560;
						let left = br.left;
						if (left < 8) left = 8;
						if (left + width > vw - 8) left = Math.max(8, vw - width - 8);
						if (!disposed) posState[1]({
							left,
							bottom: vh - br.top + 8
						});
						return true;
					} catch (e) {
						return false;
					}
				};
				const again = () => {
					raf = null;
					timer = null;
					if (disposed) return;
					if (compute()) return;
					if (++tries < 10) {
						if (typeof requestAnimationFrame !== "undefined") raf = requestAnimationFrame(again);
						else timer = setTimeout(again, 50);
					} else if (!disposed) {
						logEvent$4("panel.position.fail", { attempts: tries });
						posState[1]({
							left: 8,
							bottom: 8
						});
					}
				};
				again();
				const onResize = () => {
					compute();
				};
				if (typeof window !== "undefined") window.addEventListener("resize", onResize);
				return () => {
					disposed = true;
					clearPending();
					if (typeof window !== "undefined") window.removeEventListener("resize", onResize);
				};
			}, []);
			react.useEffect(() => subscribeLocale((l) => {
				langState[1](l);
			}), []);
			react.useEffect(() => {
				if (!compact) return;
				if (modal || searchFocused || composing || remoteSearchFocused || remoteComposing) setHoverCloseSuppressed(true);
				else setHoverCloseSuppressed(false);
				return () => {
					setHoverCloseSuppressed(false);
				};
			}, [
				compact,
				!!modal,
				searchFocused,
				composing,
				remoteSearchFocused,
				remoteComposing
			]);
			const refresh = () => setTick((n) => n + 1);
			const t = (k) => tr(lang, STR[k]);
			react.useEffect(() => {
				let on = true;
				ensureLoaded().then(() => {
					if (on) refresh();
				}, () => void 0);
				const off = subscribeStore(() => {
					if (on) refresh();
				});
				return () => {
					on = false;
					off();
				};
			}, []);
			react.useEffect(() => {
				let on = true;
				try {
					ensureRemoteLoaded().then(() => {
						if (on) remoteTickState[1]((n) => n + 1);
					}, () => void 0);
				} catch (e) {}
				let off = null;
				try {
					off = subscribeRemote(() => {
						if (on) remoteTickState[1]((n) => n + 1);
					});
				} catch (e) {}
				return () => {
					on = false;
					try {
						if (off) off();
					} catch (e) {}
				};
			}, []);
			react.useEffect(() => {
				if (!compact) return;
				const update = () => {
					try {
						const w = globalThis.window;
						const iw = w && typeof w.innerWidth === "number" ? w.innerWidth : typeof window !== "undefined" ? window.innerWidth : void 0;
						const ih = w && typeof w.innerHeight === "number" ? w.innerHeight : typeof window !== "undefined" ? window.innerHeight : void 0;
						if (typeof iw === "number" && typeof ih === "number") orientState[1](deriveRemoteOrientation(iw, ih));
					} catch (e) {}
				};
				update();
				try {
					const w = globalThis.window;
					if (w && typeof w.addEventListener === "function") {
						w.addEventListener("resize", update);
						return () => {
							try {
								w.removeEventListener("resize", update);
							} catch (e) {}
						};
					}
					if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
						window.addEventListener("resize", update);
						return () => {
							try {
								window.removeEventListener("resize", update);
							} catch (e) {}
						};
					}
				} catch (e) {}
				return () => void 0;
			}, [compact]);
			const hide = loadHidePreset();
			const pool = applyHidePreset(allTemplates(), hide);
			const customs = pool.filter((x) => !x.builtin);
			const customWordSet = hide ? new Set(customs.reduce((acc, x) => acc.concat(templateLabels(x)), [])) : null;
			const effSelected = hide && selected !== null && (selected.kind === "scope" && selected.key === "preset" || selected.kind === "word" && !!customWordSet && !customWordSet.has(selected.word)) ? null : selected;
			const list = pool.filter((x) => {
				if (isNoFilter(effSelected)) return true;
				const sel = effSelected;
				if (sel.kind === "word") return matchLabel(x, sel.word);
				return sel.key === "preset" ? x.builtin : !x.builtin;
			});
			const ql = q.trim().toLowerCase();
			const filtered = ql ? list.filter((x) => templateHaystack(x).indexOf(ql) >= 0) : list;
			const sorted = compact ? sortedTemplatesBottomUp(filtered) : sortedTemplates(filtered);
			const remotePrefs = getRemotePrefs();
			const isRemoteBig = compact && !!remotePrefs.enabled;
			const remoteListBase = pool;
			const remoteQl = remoteQ.trim().toLowerCase();
			const remoteSorted = sortedTemplatesBottomUp(remoteQl ? remoteListBase.filter((x) => templateHaystack(x).indexOf(remoteQl) >= 0) : remoteListBase);
			const remotePref = remotePrefs.orientation || "auto";
			let remoteEnv = null;
			try {
				const e = getEnvOrientation();
				remoteEnv = e ? e.orientation : null;
			} catch (err) {
				remoteEnv = null;
			}
			const remoteFinalOrient = resolveEffectiveOrientation(remotePref, remoteEnv, remoteOrient);
			const remoteView = computeRemoteView({
				ids: remoteSorted.map((x) => x.id),
				page: remotePage,
				orientation: remoteFinalOrient,
				enabled: !!remotePrefs.enabled,
				size: remotePrefs.size,
				hostCaps: {
					hasSystemOrientation: false,
					hasSystemFont: false,
					hasStableOpen: false
				},
				searchOpen: remoteSearchOpen,
				density: remotePrefs.density
			});
			const remoteDensity = normalizeRemoteDensity(remotePrefs.density);
			react.useEffect(() => {
				remotePageState[1](0);
			}, [remoteDensity]);
			const remoteById = new Map(remoteSorted.map((x) => [x.id, x]));
			const remoteUsage = loadUsage();
			react.useEffect(() => {
				if (!compact) return;
				const el = listRef.current;
				if (!el) return;
				let raf1, raf2, tid;
				const scroll = () => {
					try {
						el.scrollTop = el.scrollHeight;
					} catch (e) {}
				};
				if (typeof requestAnimationFrame !== "undefined") raf1 = requestAnimationFrame(() => {
					raf2 = requestAnimationFrame(scroll);
					tid = setTimeout(scroll, 50);
				});
				else tid = setTimeout(scroll, 30);
				return () => {
					try {
						if (raf1) cancelAnimationFrame(raf1);
						if (raf2) cancelAnimationFrame(raf2);
						clearTimeout(tid);
					} catch (e) {}
				};
			}, [
				compact,
				selected,
				q,
				filtered.length,
				sorted.length
			]);
			const presetCount = hide ? 0 : PRESET_TEMPLATES.length;
			const customCount = customs.length;
			const base = "var(--dsw-alias-label-primary)";
			const muted = "var(--dsw-alias-label-secondary)";
			const dim = "var(--dsw-alias-label-tertiary)";
			const line = "1px solid var(--dsw-alias-border-l1)";
			const panelBottom = pos && typeof pos.bottom === "number" ? pos.bottom : 0;
			const panelStyle = compact ? {
				position: "fixed",
				left: pos && pos.left || 0,
				bottom: pos && pos.bottom || 0,
				visibility: pos ? "visible" : "hidden",
				zIndex: PANEL_Z,
				width: 560,
				maxHeight: "calc(100vh - " + panelBottom + "px - 8px)",
				display: "flex",
				flexDirection: "column",
				background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
				backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
				border: "1px solid var(--dsw-alias-border-inverted)",
				borderRadius: 12,
				boxShadow: "var(--dsw-shadow-lv3)",
				overflow: "hidden",
				fontFamily: "var(--dsw-font-family)",
				fontSize: scaledBaseFontSize(remotePrefs.enabled, remotePrefs.size),
				color: base
			} : {
				display: "flex",
				flexDirection: "column",
				gap: 6,
				padding: "6px 8px",
				fontFamily: "var(--dsw-font-family)",
				fontSize: scaledBaseFontSize(remotePrefs.enabled, remotePrefs.size),
				color: base
			};
			const headStyle = {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "6px 8px",
				borderBottom: line,
				flexWrap: "wrap",
				rowGap: "0.15em",
				minWidth: 0
			};
			const titleStyle = {
				fontWeight: 700,
				fontSize: "1em",
				whiteSpace: "nowrap",
				flex: "none"
			};
			const addBtn = {
				width: 26,
				height: 26,
				borderRadius: 7,
				border: line,
				background: "var(--dsw-alias-bg-layer-3)",
				color: "var(--dsw-specific-accent,#f0a45c)",
				fontSize: "1.2em",
				lineHeight: 1,
				cursor: "pointer",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: 0
			};
			const closeBtn = {
				width: 26,
				height: 26,
				borderRadius: 7,
				border: line,
				background: "transparent",
				color: dim,
				fontSize: "1.2em",
				lineHeight: 1,
				cursor: "pointer",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: 0
			};
			const hideBtnStyle = { ...GHOST_PILL_STYLE };
			const hideToggleNode = (hookKey) => h("button", {
				key: hookKey,
				style: hideBtnStyle,
				"data-dsh-prompt-hide": "1",
				"aria-pressed": hide ? "true" : "false",
				title: t(hide ? "showPreset" : "hidePreset"),
				"aria-label": t(hide ? "showPreset" : "hidePreset"),
				onMouseDown: keepComposerFocus,
				onClick: () => {
					saveHidePreset(!hide);
					refresh();
				}
			}, h(PresetEyeIcon, { open: hide }), " " + t(hide ? "showPreset" : "hidePreset"));
			const cloudRowStyle = {
				display: "flex",
				gap: 4,
				padding: "3px 8px 0",
				flexWrap: "wrap"
			};
			const cloudBtn = (on) => ({
				padding: "2px 8px",
				borderRadius: 999,
				border: line,
				background: on ? "var(--dsw-alias-bg-layer-3)" : "transparent",
				color: on ? base : muted,
				cursor: "pointer",
				fontFamily: "var(--dsw-font-family)",
				fontSize: "0.85em"
			});
			const searchStyle = {
				margin: "5px 8px 4px",
				padding: "5px 9px",
				borderRadius: 8,
				border: line,
				background: "var(--dsw-alias-bg-layer-3)",
				color: base,
				fontFamily: "var(--dsw-font-family)",
				fontSize: "0.96em",
				outline: "none"
			};
			const searchStyleCompact = {
				...searchStyle,
				margin: 0,
				flex: "1 1 auto",
				minWidth: 0
			};
			const listStyle = compact ? {
				flex: "0 1 auto",
				minHeight: 0,
				overflow: "auto",
				padding: "2px 2px 4px",
				display: "flex",
				flexDirection: "column"
			} : { padding: "2px 2px 8px" };
			const itemStyle = {
				display: "flex",
				gap: 6,
				borderRadius: 8,
				cursor: "pointer",
				alignItems: compact ? "center" : "flex-start",
				padding: compact ? "3px 6px" : "4px 2px",
				transition: "background-color .12s ease"
			};
			const ROW_HOVER_BG = "var(--dsw-alias-interactive-bg-hover, var(--dsw-alias-bg-layer-2, rgba(255,255,255,.06)))";
			const ROW_PRESSED_BG = "var(--dsw-alias-interactive-bg-active, var(--dsw-alias-bg-layer-3))";
			const pinStyle = (on) => ({
				flex: "none",
				width: 20,
				height: 20,
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				border: 0,
				background: "transparent",
				borderRadius: 6
			});
			const nmStyle = {
				flex: "0 1 auto",
				minWidth: 0,
				fontSize: "0.98em",
				color: base,
				fontWeight: 500,
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis"
			};
			const subStyle = {
				display: "block",
				fontSize: "0.85em",
				color: dim,
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis"
			};
			const tagStyle = {
				flex: "none",
				fontSize: "0.7em",
				fontWeight: 500,
				color: muted,
				background: "var(--dsw-alias-bg-layer-3)",
				border: "1px solid var(--dsw-alias-border-l2)",
				padding: "0 7px",
				borderRadius: 999,
				lineHeight: "15px",
				letterSpacing: "0.02em",
				whiteSpace: "nowrap"
			};
			const actStyle = {
				display: "flex",
				gap: 4,
				flex: "none"
			};
			const actBtn = (danger) => ({
				border: line,
				background: "transparent",
				color: danger ? "var(--dsw-specific-danger,#e06c75)" : dim,
				cursor: "pointer",
				fontSize: "0.85em",
				padding: "1px 8px",
				borderRadius: 999,
				fontFamily: "var(--dsw-font-family)",
				whiteSpace: "nowrap"
			});
			const footLink = {
				color: "var(--dsw-specific-accent,#f0a45c)",
				cursor: "pointer",
				textDecoration: "none",
				background: "transparent",
				border: 0,
				fontFamily: "var(--dsw-font-family)",
				fontSize: "0.85em"
			};
			const handlePick = (x) => {
				onPick(x, useInput, inputActions);
			};
			const handlePin = (e, x) => {
				e.stopPropagation();
				if (!togglePin(x.id).ok) alert(t("pinFull"));
				refresh();
			};
			const handleCopy = (e, id) => {
				e.stopPropagation();
				const c = copyPresetToCustom(id, tr(lang, STR.copySuffix));
				if (!c) return;
				togglePin(c.id);
				selectedState[1](scopeSelection(SCOPE_CUSTOM));
				highlightState[1](c.id);
				refresh();
				setTimeout(() => {
					highlightState[1](null);
					try {
						const el = typeof document !== "undefined" ? document.querySelector("[data-dsh-prompt-id=\"" + c.id + "\"]") : null;
						if (el) el.scrollIntoView({ block: "nearest" });
					} catch (err) {}
				}, 1600);
			};
			const handleDel = (e, x) => {
				e.stopPropagation();
				modalState[1]({
					kind: "del",
					t: x
				});
			};
			const handleEdit = (e, x) => {
				e.stopPropagation();
				modalState[1]({
					kind: "edit",
					t: x
				});
			};
			let modalNode = null;
			if (modal) {
				if (modal.kind === "add" || modal.kind === "edit") modalNode = h(ModalPortal, { key: "portal-tplmodal-" + modal.kind + (modal.t ? "-" + modal.t.id : "") }, [h("div", { key: "tplmodal-" + modal.kind + (modal.t ? "-" + modal.t.id : "") }, [h(TemplateModal, {
					kind: modal.kind,
					tpl: modal.t,
					t,
					onCancel: () => {
						setHoverCloseSuppressed(false);
						modalState[1](null);
						maybeCloseAfterSuppress(searchFocused || composing || remoteSearchFocused || remoteComposing);
					},
					onOk: (f) => {
						if (modal.kind === "edit" && modal.t) updateCustom(modal.t.id, f);
						else addCustom(f.name, f.labels, f.body, f.color || void 0, f.outline === false ? false : void 0);
						setHoverCloseSuppressed(false);
						modalState[1](null);
						maybeCloseAfterSuppress(searchFocused || composing || remoteSearchFocused || remoteComposing);
						refresh();
					}
				})])]);
				else if (modal.kind === "del" && modal.t) modalNode = h(ModalPortal, { key: "portal-del-" + modal.t.id }, [h("div", { key: "del-" + modal.t.id }, [h(ConfirmDelete, {
					tpl: modal.t,
					t,
					onCancel: () => {
						setHoverCloseSuppressed(false);
						modalState[1](null);
						maybeCloseAfterSuppress(searchFocused || composing || remoteSearchFocused || remoteComposing);
					},
					onOk: () => {
						removeCustom(modal.t.id);
						setHoverCloseSuppressed(false);
						modalState[1](null);
						maybeCloseAfterSuppress(searchFocused || composing || remoteSearchFocused || remoteComposing);
						refresh();
					}
				})])]);
			}
			if (isRemoteBig) {
				const remoteCols = remoteView.cols;
				const remoteRows = remoteView.rows;
				const remoteFontScale = remoteView.fontScale;
				remoteView.controlScale;
				const remoteThin = "thin solid var(--dsw-alias-border-l1)";
				const remotePanelStyle = {
					position: "fixed",
					left: "1%",
					right: "1%",
					top: "1%",
					bottom: pos && typeof pos.bottom === "number" ? pos.bottom : "1%",
					zIndex: PANEL_Z,
					display: "flex",
					flexDirection: "column",
					overflow: "hidden",
					background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
					backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
					border: remoteThin,
					borderRadius: "0.75em",
					fontFamily: "var(--dsw-font-family)",
					fontSize: "calc(1em * " + remoteFontScale + ")",
					color: base
				};
				const remoteMetaStyle = {
					fontSize: "0.85em",
					color: dim,
					whiteSpace: "nowrap"
				};
				const remoteCloseStyle = {
					marginLeft: "auto",
					flex: "none",
					width: "2.5em",
					height: "2.5em",
					borderRadius: "50%",
					border: remoteThin,
					background: "transparent",
					color: dim,
					fontSize: "1em",
					lineHeight: 1,
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				};
				const remoteGridStyle = {
					flex: "1 1 auto",
					minHeight: "0",
					minWidth: "0",
					display: "grid",
					gridTemplateColumns: "repeat(" + remoteCols + ", minmax(0, 1fr))",
					gridTemplateRows: "repeat(" + remoteRows + ", minmax(0, 1fr))",
					gap: "0.5rem",
					padding: "0.5rem",
					overflow: "hidden",
					alignContent: "stretch"
				};
				const remoteCardStyle = (custom, pinned, hover, pressed) => ({
					minWidth: "0",
					minHeight: "0",
					overflow: "hidden",
					position: "relative",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					gap: "0.25rem",
					padding: "0.5rem",
					borderRadius: "0.75em",
					border: pinned ? "0.14em solid var(--dsw-specific-accent,#f0a45c)" : custom ? "0.07em solid var(--dsw-specific-accent,#f0a45c)" : remoteThin,
					background: pressed ? ROW_PRESSED_BG : hover ? ROW_HOVER_BG : custom ? "var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-layer-3))" : "var(--dsw-alias-bg-layer-3)",
					outline: pressed ? "0.07em solid var(--dsw-alias-border-l1)" : void 0,
					color: base,
					cursor: "pointer",
					fontFamily: "var(--dsw-font-family)",
					textAlign: "left",
					fontSize: "1em",
					lineHeight: 1.3,
					transition: "background-color .12s ease, transform .08s ease, filter .08s ease",
					transform: pressed ? "scale(.98)" : void 0
				});
				const remoteCardTitle = {
					fontSize: "1.02em",
					fontWeight: 700,
					color: base,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis",
					flex: "none"
				};
				const remoteCardIntro = {
					fontSize: "0.85em",
					color: muted,
					whiteSpace: "normal",
					overflow: "hidden",
					overflowWrap: "break-word",
					flex: "1 1 auto",
					minHeight: 0,
					lineHeight: 1.4
				};
				const remoteCardUse = (pinnedCard) => ({
					fontSize: "0.8em",
					color: "var(--dsw-specific-danger,#e06c75)",
					flex: "none",
					fontVariantNumeric: "tabular-nums",
					whiteSpace: "nowrap",
					fontWeight: 700
				});
				const remoteCardMeta = {
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					gap: "0.25rem",
					flex: "1 1 auto",
					minHeight: 0,
					minWidth: "0"
				};
				const remoteCardFoot = {
					position: "absolute",
					right: "0.5rem",
					bottom: "0.5rem",
					zIndex: 1,
					display: "flex",
					alignItems: "center",
					gap: "0.3rem",
					padding: "0.2rem 0.2rem 0.2rem 0.5rem",
					borderRadius: 999,
					border: remoteThin,
					background: "var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-layer-3))",
					whiteSpace: "nowrap"
				};
				const remoteCardAct = {
					flex: "none",
					alignSelf: "center",
					padding: "0.15rem 0.5rem",
					minHeight: "1.6rem",
					borderRadius: 999,
					border: "0.07em solid var(--dsw-alias-border-l2)",
					background: "transparent",
					color: muted,
					cursor: "pointer",
					fontSize: "0.78em",
					fontWeight: 600,
					lineHeight: 1.4,
					whiteSpace: "nowrap"
				};
				const remoteEmptyStyle = {
					minWidth: "0",
					minHeight: "0",
					border: "thin dashed var(--dsw-alias-border-l2)",
					borderRadius: "0.75em",
					background: "transparent"
				};
				const remoteSearchRowStyle = {
					display: "flex",
					gap: "0.5rem",
					padding: "0 0.5rem 0.5rem",
					flex: "none"
				};
				const remoteSearchInputStyle = {
					flex: "1 1 auto",
					minWidth: "0",
					padding: "0.5rem 0.6rem",
					borderRadius: "0.6em",
					border: remoteThin,
					background: "var(--dsw-alias-bg-layer-3)",
					color: base,
					fontFamily: "var(--dsw-font-family)",
					fontSize: "1em",
					outline: "none"
				};
				const remoteBarStyle = {
					display: "flex",
					flexDirection: "row",
					gap: "0.5rem",
					alignItems: "stretch",
					padding: "0.5rem",
					borderTop: remoteThin,
					flex: "none",
					flexWrap: "nowrap",
					overflowX: "auto",
					minWidth: "0"
				};
				const remoteActionsStyle = {
					display: "flex",
					gap: "0.5rem",
					alignItems: "stretch",
					flex: "none",
					alignSelf: "stretch"
				};
				const remoteBtnStyle = (enabledBtn) => ({
					flex: "none",
					alignSelf: "stretch",
					minWidth: "2.8em",
					padding: "0 0.6em",
					borderRadius: "0.6em",
					border: remoteThin,
					background: enabledBtn ? "var(--dsw-alias-bg-layer-3)" : "transparent",
					color: enabledBtn ? base : dim,
					cursor: enabledBtn ? "pointer" : "default",
					opacity: enabledBtn ? 1 : .45,
					fontFamily: "var(--dsw-font-family)",
					fontSize: "1em",
					fontWeight: 700,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					whiteSpace: "nowrap",
					overflow: "hidden"
				});
				const remoteAddStyle = {
					...remoteBtnStyle(true),
					minWidth: "4.2em",
					padding: "0 0.8em",
					border: "0.07em solid var(--dsw-specific-accent,#f0a45c)",
					color: "var(--dsw-specific-accent,#f0a45c)",
					fontWeight: 800
				};
				const remoteHover = compact ? {
					onMouseEnter: () => cancelPanelClose(),
					onMouseLeave: () => {
						if (modal || remoteSearchFocused || remoteComposing) return;
						schedulePanelClose(150);
					}
				} : null;
				const remoteSlots = remoteView.slots.map((s) => {
					if (s.kind === "empty") return h("div", {
						key: "empty-" + s.order,
						style: remoteEmptyStyle,
						"data-dsh-prompt-remote-empty": "1",
						"aria-hidden": "true"
					});
					const tpl = remoteById.get(s.id);
					if (!tpl) return h("div", {
						key: "empty-" + s.order,
						style: remoteEmptyStyle,
						"data-dsh-prompt-remote-empty": "1",
						"aria-hidden": "true"
					});
					const intro = oneLinePreview(tpl.body);
					const usageN = remoteUsage[tpl.id] || 0;
					const pinned = isPinned(tpl.id);
					const custom = !tpl.builtin;
					const ink = inkColorOf(tpl);
					const tint = ink !== void 0 && inkOutlineOf(tpl);
					const cardHover = hoverId === tpl.id;
					const cardPressed = pressedId === tpl.id;
					return h("div", {
						key: tpl.id,
						style: remoteCardStyle(custom, pinned, cardHover, cardPressed),
						role: "button",
						tabIndex: 0,
						"data-dsh-prompt-remote-card": "1",
						"data-dsh-prompt-id": tpl.id,
						title: displayLabelString(tpl, lang),
						onClick: () => {
							pressedState[1](null);
							handlePick(tpl);
						},
						onKeyDown: (e) => {
							try {
								if (e && (e.key === "Enter" || e.key === " ")) {
									if (typeof e.preventDefault === "function") e.preventDefault();
									pressedState[1](null);
									handlePick(tpl);
								}
							} catch (err) {}
						},
						onMouseEnter: () => hoverState[1](tpl.id),
						onMouseLeave: () => {
							hoverState[1](null);
							pressedState[1]((cur) => cur === tpl.id ? null : cur);
						},
						onMouseDown: (e) => {
							keepComposerFocus(e);
							pressedState[1](tpl.id);
						},
						onMouseUp: () => pressedState[1](null),
						onPointerDown: () => pressedState[1](tpl.id),
						onPointerUp: () => pressedState[1](null),
						onPointerCancel: () => pressedState[1](null),
						onFocus: () => hoverState[1](tpl.id),
						onBlur: () => hoverState[1](null)
					}, [h("span", { style: remoteCardMeta }, [h("span", {
						style: {
							...remoteCardTitle,
							flex: "none",
							minWidth: 0,
							...ink ? {
								color: ink,
								paddingBlock: 2,
								marginBlock: -2,
								paddingInline: 2,
								marginInline: -2
							} : {}
						},
						...tint ? { [INK_TINT_ATTR]: "" } : {}
					}, tpl.name), h("span", { style: remoteCardIntro }, intro)]), h("span", { style: remoteCardFoot }, [h("span", {
						style: remoteCardUse(pinned),
						"data-dsh-prompt-remote-use": "1"
					}, String(usageN) + (pinned ? " ★" : "")), h("button", {
						type: "button",
						style: {
							...remoteCardAct,
							border: "0",
							background: "transparent"
						},
						title: custom ? t("edit") : t("copy"),
						"aria-label": custom ? t("edit") : t("copy"),
						"data-dsh-prompt-remote-act": custom ? "edit" : "copy",
						onMouseDown: keepComposerFocus,
						onClick: (e) => {
							if (custom) handleEdit(e, tpl);
							else handleCopy(e, tpl.id);
						}
					}, custom ? t("edit") : t("copy"))])]);
				});
				const remoteListState = !isRemoteLoaded() ? "loading" : remoteView.slots.some((s) => s.kind !== "empty" && !!remoteById.get(s.id)) ? "ready" : "empty";
				const remoteSearchToggle = () => {
					const next = !remoteSearchOpen;
					remoteSearchState[1](next);
					if (!next) {
						remoteQState[1]("");
						remotePageState[1](0);
					}
					refresh();
				};
				return h("div", {
					ref: rootRef,
					style: remotePanelStyle,
					...remoteHover,
					"data-dsh-prompt-remote-panel": "1",
					"data-dsh-prompt-panel-surface": "remote",
					"data-dsh-prompt-remote-enabled": remotePrefs.enabled ? "true" : "false",
					"data-dsh-prompt-remote-state": remoteListState,
					"data-dsh-prompt-remote-orient": remoteView.orientation,
					"data-dsh-prompt-remote-size": String(remotePrefs.size),
					"data-dsh-prompt-remote-orientation-pref": String(remotePref)
				}, [
					useInput ? h(DraftTap, {
						key: "dsh-prompt-draft-tap",
						useInput
					}) : null,
					h("div", {
						style: remoteGridStyle,
						"data-dsh-prompt-remote-grid": "1"
					}, remoteSlots),
					remoteSearchOpen ? h("div", { style: remoteSearchRowStyle }, [h("input", {
						style: remoteSearchInputStyle,
						placeholder: t("searchPh"),
						value: remoteQ,
						"data-dsh-prompt-remote-search-input": "1",
						onChange: (e) => {
							remoteQState[1](e.target.value);
							remotePageState[1](0);
							refresh();
						},
						onFocus: () => {
							remoteFocusState[1](true);
							if (compact) setHoverCloseSuppressed(true);
						},
						onBlur: () => {
							remoteFocusState[1](false);
							if (compact && !remoteComposing && !modal) setHoverCloseSuppressed(false);
							maybeCloseAfterSuppress(!!modal || remoteComposing || searchFocused || composing);
						},
						onCompositionStart: () => {
							remoteCompState[1](true);
							if (compact) setHoverCloseSuppressed(true);
						},
						onCompositionEnd: (e) => {
							remoteCompState[1](false);
							try {
								const v = e && e.target && typeof e.target.value === "string" ? e.target.value : null;
								if (v !== null) {
									remoteQState[1](v);
									remotePageState[1](0);
								}
							} catch (err) {}
							if (compact && !modal && !remoteSearchFocused) setHoverCloseSuppressed(false);
							maybeCloseAfterSuppress(!!modal || remoteSearchFocused || searchFocused || composing);
						}
					})]) : null,
					h("div", { style: remoteBarStyle }, [h("div", { style: remoteActionsStyle }, [
						h("button", {
							key: "remote-add",
							style: remoteAddStyle,
							"data-dsh-prompt-remote-add": "1",
							"data-dsh-prompt-chrome": "plusGlyph",
							title: t("add"),
							"aria-label": t("add"),
							onMouseDown: keepComposerFocus,
							onClick: () => {
								modalState[1]({ kind: "add" });
							}
						}, t("plusGlyph") + " " + t("addShort")),
						h("button", {
							key: "remote-search",
							style: remoteBtnStyle(true),
							"data-dsh-prompt-remote-search": "1",
							"aria-pressed": remoteSearchOpen ? "true" : "false",
							title: t("searchPh"),
							"aria-label": t("searchPh"),
							onMouseDown: keepComposerFocus,
							onClick: remoteSearchToggle
						}, h("svg", {
							width: "1.25em",
							height: "1.25em",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							strokeLinecap: "round",
							"aria-hidden": "true",
							style: {
								flex: "none",
								display: "block"
							}
						}, [h("circle", {
							key: "c",
							cx: 11,
							cy: 11,
							r: 6
						}), h("line", {
							key: "l",
							x1: 15.5,
							y1: 15.5,
							x2: 20,
							y2: 20
						})])),
						hideToggleNode("remote-hide"),
						h("button", {
							key: "remote-prev",
							style: remoteBtnStyle(remoteView.bottomBar.hasPrev),
							disabled: !remoteView.bottomBar.hasPrev,
							"data-dsh-prompt-remote-prev": "1",
							"data-dsh-prompt-chrome": "pickerPrev",
							"data-dsh-prompt-chrome-kind": "title aria-label",
							title: t("pickerPrev"),
							"aria-label": t("pickerPrev"),
							onMouseDown: keepComposerFocus,
							onClick: () => {
								if (remoteView.bottomBar.hasPrev) {
									remotePageState[1](remoteView.page - 1);
									refresh();
								}
							}
						}, h("svg", {
							width: "1.25em",
							height: "1.25em",
							viewBox: "0 0 24 24",
							fill: "currentColor",
							"aria-hidden": "true",
							style: {
								flex: "none",
								display: "block"
							}
						}, [h("polygon", {
							key: "p",
							points: "16,4 6,12 16,20"
						})])),
						h("button", {
							key: "remote-next",
							style: remoteBtnStyle(remoteView.bottomBar.hasNext),
							disabled: !remoteView.bottomBar.hasNext,
							"data-dsh-prompt-remote-next": "1",
							"data-dsh-prompt-chrome": "pickerNext",
							"data-dsh-prompt-chrome-kind": "title aria-label",
							title: t("pickerNext"),
							"aria-label": t("pickerNext"),
							onMouseDown: keepComposerFocus,
							onClick: () => {
								if (remoteView.bottomBar.hasNext) {
									remotePageState[1](remoteView.page + 1);
									refresh();
								}
							}
						}, h("svg", {
							width: "1.25em",
							height: "1.25em",
							viewBox: "0 0 24 24",
							fill: "currentColor",
							"aria-hidden": "true",
							style: {
								flex: "none",
								display: "block"
							}
						}, [h("polygon", {
							key: "p",
							points: "8,4 18,12 8,20"
						})])),
						h("span", {
							key: "remote-page",
							style: {
								...remoteMetaStyle,
								alignSelf: "center",
								flex: "none"
							},
							"data-dsh-prompt-remote-page": "1"
						}, remoteView.bottomBar.pageText),
						h("button", {
							key: "remote-close",
							style: {
								...remoteCloseStyle,
								alignSelf: "center"
							},
							title: t("close"),
							"data-dsh-prompt-remote-close": "1",
							onMouseDown: keepComposerFocus,
							onClick: () => setPanelOpen(false)
						}, "×")
					])]),
					modalNode
				]);
			}
			const cloudWords = actionCloudLabels().filter((c) => !customWordSet || customWordSet.has(c));
			const cloudNodes = h("div", {
				style: cloudRowStyle,
				"data-dsh-prompt-cloud": "1"
			}, [
				h("button", {
					key: "scope-all",
					style: cloudBtn(isNoFilter(effSelected)),
					"data-dsh-prompt-scope": "all",
					"data-dsh-prompt-chrome": "tabAll",
					onClick: () => {
						selectedState[1](toggleScope(selected, "all"));
						refresh();
					}
				}, t("tabAll")),
				hide ? null : h("button", {
					key: "scope-preset",
					style: cloudBtn(selectionActive(selected, SCOPE_PRESET)),
					"data-dsh-prompt-scope": SCOPE_PRESET,
					"data-dsh-prompt-chrome": "scopePreset",
					onClick: () => {
						selectedState[1](toggleScope(selected, SCOPE_PRESET));
						refresh();
					}
				}, t("scopePreset")),
				h("button", {
					key: "scope-custom",
					style: cloudBtn(selectionActive(selected, SCOPE_CUSTOM)),
					"data-dsh-prompt-scope": SCOPE_CUSTOM,
					"data-dsh-prompt-chrome": "tabCustom",
					onClick: () => {
						selectedState[1](toggleScope(selected, SCOPE_CUSTOM));
						refresh();
					}
				}, t("tabCustom")),
				...cloudWords.map((c) => h("button", {
					key: c,
					style: cloudBtn(wordActive(effSelected, c)),
					onClick: () => {
						selectedState[1](toggleWord(selected, c));
						refresh();
					}
				}, displayWord(c, lang)))
			]);
			const rows = (dragState[0] ? applyCustomOrderView(sorted, dragState[0].order) : sorted).map((x) => {
				const pinned = isPinned(x.id);
				const custom = !x.builtin;
				const ink = inkColorOf(x);
				const tint = ink !== void 0 && inkOutlineOf(x);
				const acts = custom ? h("span", {
					style: actStyle,
					"data-dsh-prompt-act": "1"
				}, [h("button", {
					style: actBtn(),
					onClick: (e) => handleEdit(e, x)
				}, t("edit")), h("button", {
					style: actBtn(true),
					onClick: (e) => handleDel(e, x)
				}, t("del"))]) : h("span", {
					style: actStyle,
					"data-dsh-prompt-act": "1"
				}, [h("button", {
					style: actBtn(),
					onClick: (e) => handleCopy(e, x.id)
				}, t("copy"))]);
				const isPressed = pressedId === x.id;
				const isHover = hoverId === x.id;
				const itemBg = isPressed ? ROW_PRESSED_BG : isHover ? ROW_HOVER_BG : highlightId === x.id ? ROW_HOVER_BG : void 0;
				const itemOutline = isPressed ? "1px solid var(--dsw-alias-border-l1)" : void 0;
				const intro = firstLineIntro(x.body);
				const usageN = loadUsage()[x.id] || 0;
				const usageTitle = t("usageTitle").replace("{n}", String(usageN));
				const usageStyle = {
					flex: "none",
					fontSize: "0.75em",
					color: "var(--dsw-alias-label-tertiary)",
					minWidth: "4ch",
					textAlign: "right",
					fontVariantNumeric: "tabular-nums",
					fontFeatureSettings: "\"tnum\"",
					whiteSpace: "nowrap"
				};
				if (compact) {
					const rowInteract = {
						onMouseEnter: () => hoverState[1](x.id),
						onMouseLeave: () => {
							hoverState[1](null);
							pressedState[1]((cur) => cur === x.id ? null : cur);
						},
						onMouseDown: (e) => {
							keepComposerFocus(e);
							pressedState[1](x.id);
						},
						onMouseUp: () => pressedState[1](null),
						onPointerDown: () => pressedState[1](x.id),
						onPointerUp: () => pressedState[1](null),
						onPointerCancel: () => pressedState[1](null),
						onFocus: () => hoverState[1](x.id),
						onBlur: () => hoverState[1](null)
					};
					return h("div", {
						key: x.id,
						style: {
							...itemStyle,
							background: itemBg,
							outline: itemOutline,
							minWidth: 0
						},
						"data-dsh-prompt-id": x.id,
						"data-dsh-prompt-row-role": "insert",
						"data-dsh-prompt-row-name": displayLabelString(x, lang),
						"data-dsh-prompt-row-labels": templateLabels(x).join(","),
						"data-dsh-prompt-row-preview": intro,
						"data-dsh-prompt-chrome": "insertHint",
						"data-dsh-prompt-chrome-kind": "title",
						...rowInteract,
						onClick: () => handlePick(x),
						title: displayLabelString(x, lang) + " · " + t("insertHint")
					}, [
						h("button", {
							style: pinStyle(pinned),
							title: t("pin"),
							"data-dsh-prompt-pin": "1",
							onClick: (e) => handlePin(e, x)
						}, [h("svg", {
							width: 14,
							height: 14,
							viewBox: "0 0 24 24",
							fill: pinned ? "var(--dsw-specific-accent,#f0a45c)" : "none",
							stroke: pinned ? "var(--dsw-specific-accent,#f0a45c)" : dim,
							strokeWidth: 1.8,
							strokeLinecap: "round",
							strokeLinejoin: "round",
							style: { display: "block" }
						}, [h("path", { d: "M12 17v5" }), h("path", { d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1z" })])]),
						h("span", { style: {
							flex: 1,
							minWidth: 0,
							display: "flex",
							alignItems: "baseline",
							gap: 6,
							overflow: "hidden",
							...ink ? {
								paddingBlock: 2,
								marginBlock: -2,
								paddingInline: 2,
								marginInline: -2
							} : {}
						} }, [
							h("span", {
								style: {
									flex: "none",
									fontSize: "0.95em",
									color: ink || base,
									fontWeight: 600,
									whiteSpace: "nowrap"
								},
								...tint ? { [INK_TINT_ATTR]: "" } : {}
							}, x.name),
							h("span", {
								style: {
									flex: "0 1 auto",
									minWidth: 0,
									fontSize: "0.8em",
									color: muted,
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis"
								},
								...templateLabels(x).indexOf("自定义") >= 0 ? { "data-dsh-prompt-chrome": "labelFallback" } : {}
							}, displayLabelString(x, lang)),
							h("span", { style: {
								flex: "1 1 auto",
								minWidth: 0,
								fontSize: "0.85em",
								color: dim,
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis"
							} }, intro)
						]),
						h("span", { style: actStyle }, acts),
						h("span", {
							style: usageStyle,
							"data-dsh-prompt-chrome": "usageTitle",
							"data-dsh-prompt-chrome-kind": "title",
							title: usageTitle
						}, String(usageN))
					]);
				}
				return h("div", {
					key: x.id,
					style: {
						...itemStyle,
						cursor: "pointer",
						background: itemBg,
						...dragState[0] && dragState[0].id === x.id ? { opacity: .55 } : {}
					},
					"data-dsh-prompt-row": "1",
					"data-dsh-prompt-builtin": x.builtin ? "1" : "0",
					"data-dsh-prompt-id": x.id,
					"data-dsh-prompt-row-role": "settings",
					"data-dsh-prompt-row-name": displayLabelString(x, lang),
					"data-dsh-prompt-row-labels": templateLabels(x).join(","),
					"data-dsh-prompt-row-preview": intro,
					"data-dsh-prompt-chrome": "rowExpandHint",
					"data-dsh-prompt-chrome-kind": "title",
					title: displayLabelString(x, lang) + " · " + t("rowExpandHint"),
					"aria-expanded": expanded.has(x.id) ? "true" : "false",
					onClick: () => {
						if (dragGuard.current) return;
						toggleExpanded(x.id);
					}
				}, [
					custom ? h("div", {
						key: "drag",
						style: {
							flex: "none",
							paddingTop: 2,
							width: "1.2em",
							textAlign: "center",
							color: dim,
							cursor: "grab",
							userSelect: "none",
							touchAction: "none",
							lineHeight: 1.2
						},
						title: t("dragToReorder"),
						"aria-label": t("dragToReorder"),
						"data-dsh-prompt-drag": "1",
						onPointerDown: (e) => beginCustomDrag(e, x),
						onMouseDown: (e) => e.stopPropagation(),
						onClick: (e) => e.stopPropagation()
					}, "⠿") : null,
					h("div", { style: {
						flex: "none",
						paddingTop: 2
					} }, [h("button", {
						style: pinStyle(pinned),
						title: t("pin"),
						"data-dsh-prompt-pin": "1",
						onClick: (e) => handlePin(e, x)
					}, [h("svg", {
						width: 14,
						height: 14,
						viewBox: "0 0 24 24",
						fill: pinned ? "var(--dsw-specific-accent,#f0a45c)" : "none",
						stroke: pinned ? "var(--dsw-specific-accent,#f0a45c)" : dim,
						strokeWidth: 1.8,
						strokeLinecap: "round",
						strokeLinejoin: "round",
						style: { display: "block" }
					}, [h("path", { d: "M12 17v5" }), h("path", { d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1z" })])])]),
					h("div", { style: {
						flex: 1,
						minWidth: 0,
						display: "flex",
						flexDirection: "column",
						gap: 1,
						overflow: "hidden"
					} }, [h("div", { style: {
						display: "flex",
						alignItems: "center",
						gap: 6,
						minWidth: 0,
						overflow: "hidden",
						...ink ? {
							paddingBlock: 2,
							marginBlock: -2,
							paddingInline: 2,
							marginInline: -2
						} : {}
					} }, [
						h("span", {
							style: {
								flex: "none",
								fontSize: "0.75em",
								color: dim,
								width: "1.2em",
								textAlign: "center",
								lineHeight: 1
							},
							"aria-hidden": "true"
						}, expanded.has(x.id) ? "▾" : "▸"),
						h("span", {
							style: ink ? {
								...nmStyle,
								color: ink,
								paddingBlock: 2,
								marginBlock: -2,
								paddingInline: 2,
								marginInline: -2
							} : nmStyle,
							...tint ? { [INK_TINT_ATTR]: "" } : {}
						}, x.name),
						h("span", {
							style: tagStyle,
							...templateLabels(x).indexOf("自定义") >= 0 ? { "data-dsh-prompt-chrome": "labelFallback" } : {}
						}, displayLabelString(x, lang))
					]), expanded.has(x.id) ? h("span", { style: subStyle }, oneLinePreview(x.body).slice(0, 44) + "…") : null]),
					h("div", { style: {
						flex: "none",
						display: "flex",
						alignItems: "center",
						gap: 4,
						paddingTop: 2
					} }, [acts]),
					h("span", {
						style: {
							...usageStyle,
							paddingTop: 2
						},
						"data-dsh-prompt-chrome": "usageTitle",
						"data-dsh-prompt-chrome-kind": "title",
						title: usageTitle
					}, String(usageN))
				]);
			});
			const listNode = rows.length > 0 ? h("div", {
				ref: compact ? listRef : null,
				"data-dsh-prompt-list": compact ? "1" : void 0,
				"data-dsh-prompt-panel-surface": "list",
				style: listStyle
			}, rows) : h("div", {
				"data-dsh-prompt-list": compact ? "1" : void 0,
				"data-dsh-prompt-panel-surface": "list",
				style: {
					...compact ? {} : { height: 360 },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: dim,
					fontSize: "0.92em",
					padding: "2px 2px 8px"
				}
			}, t("noMatch"));
			const footer = null;
			const searchNode = showList ? h("input", {
				style: compact ? searchStyleCompact : searchStyle,
				placeholder: t("searchPh"),
				value: q,
				onChange: (e) => qState[1](e.target.value),
				"data-dsh-prompt-search": "1",
				onFocus: () => {
					focusState[1](true);
					if (compact) setHoverCloseSuppressed(true);
				},
				onBlur: () => {
					focusState[1](false);
					if (compact && !composing && !modal) setHoverCloseSuppressed(false);
					maybeCloseAfterSuppress(!!modal || composing || remoteSearchFocused || remoteComposing);
				},
				onCompositionStart: () => {
					compState[1](true);
					if (compact) setHoverCloseSuppressed(true);
				},
				onCompositionEnd: (e) => {
					compState[1](false);
					try {
						const v = e && e.target && typeof e.target.value === "string" ? e.target.value : null;
						if (v !== null) qState[1](v);
					} catch (err) {}
					if (compact && !modal && !searchFocused) setHoverCloseSuppressed(false);
					maybeCloseAfterSuppress(!!modal || searchFocused || remoteSearchFocused || remoteComposing);
				}
			}) : null;
			const countsText = t("presetCount") + " " + presetCount + " · " + t("customCount") + " " + customCount;
			const barNode = h("div", {
				key: "dsh-prompt-bar",
				"data-dsh-prompt-bar": "1",
				"data-dsh-prompt-panel-surface": "bar",
				style: {
					flex: "none",
					display: "flex",
					flexDirection: "column",
					borderTop: line
				}
			}, [cloudNodes, h("div", {
				key: "bar-row",
				"data-dsh-prompt-row": "1",
				style: {
					display: "flex",
					alignItems: "center",
					gap: 6,
					padding: "6px 8px 4px",
					flexWrap: "nowrap"
				}
			}, [
				searchNode,
				h("span", {
					key: "counts",
					"data-dsh-prompt-counts": "1",
					title: countsText,
					"aria-label": countsText,
					style: {
						fontSize: "0.85em",
						color: dim,
						whiteSpace: "nowrap",
						flex: "none"
					}
				}, String(rows.length)),
				h("button", {
					key: "add",
					"data-dsh-prompt-chrome": "plusGlyph",
					title: t("add"),
					style: {
						...addBtn,
						width: "auto",
						height: "auto",
						padding: "0.51em 0.93em",
						borderRadius: "0.54em",
						fontSize: "0.92em",
						whiteSpace: "nowrap",
						flex: "none"
					},
					onClick: () => modalState[1]({ kind: "add" })
				}, t("plusGlyph") + " " + t("addShort")),
				hideToggleNode("hide"),
				h(TriggerModeButton, {
					key: "trigger",
					hover: loadHoverTrigger(),
					lang
				}),
				h("button", {
					key: "go-settings",
					style: {
						...footLink,
						whiteSpace: "nowrap",
						textAlign: "right",
						flex: "none"
					},
					"data-dsh-prompt-chrome": "goSettings",
					"data-dsh-prompt-go-settings-state": goNav.phase,
					"data-dsh-prompt-go-settings-error": goNav.phase === "failed" ? goNav.error : void 0,
					title: goHint ? t("goSettingsFail") : t("goSettings"),
					"aria-label": goHint ? t("goSettingsFail") : t("goSettings"),
					onClick: () => {
						goNavState[1]({
							phase: "navigating",
							error: ""
						});
						emitGoSettings((ok, error) => {
							if (ok) {
								goNavState[1]({
									phase: "ok",
									error: ""
								});
								setPanelOpen(false);
								return;
							}
							goNavState[1]({
								phase: "failed",
								error: error || "unknown"
							});
							goHintState[1](true);
							try {
								setTimeout(() => goHintState[1](false), 4e3);
							} catch (e) {}
						});
					}
				}, goHint ? t("goSettingsFail") : t("goSettingsShort")),
				h("button", {
					key: "close",
					style: {
						...closeBtn,
						flex: "none"
					},
					title: t("close"),
					"aria-label": t("close"),
					"data-dsh-prompt-close": "1",
					onMouseDown: keepComposerFocus,
					onClick: () => setPanelOpen(false)
				}, "×")
			])]);
			const compactBar = compact ? barNode : null;
			return h("div", {
				ref: rootRef,
				style: panelStyle,
				...compact ? {
					onMouseEnter: () => cancelPanelClose(),
					onMouseLeave: () => {
						if (modal || searchFocused || composing) return;
						schedulePanelClose(150);
					}
				} : null
			}, compact ? [
				useInput ? h(DraftTap, {
					key: "dsh-prompt-draft-tap",
					useInput
				}) : null,
				showList ? listNode : null,
				compactBar,
				modalNode
			] : [
				useInput ? h(DraftTap, {
					key: "dsh-prompt-draft-tap",
					useInput
				}) : null,
				h("div", {
					style: collapsible ? {
						...headStyle,
						cursor: "pointer",
						borderBottom: showList ? line : "none"
					} : headStyle,
					...collapsible ? {
						role: "button",
						tabIndex: 0,
						"aria-expanded": showList ? "true" : "false",
						title: t("templatesToggleHint"),
						"data-dsh-prompt-templates-toggle": "",
						onClick: () => listOpenState[1](!listOpen),
						onKeyDown: (e) => {
							if (!e) return;
							if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
								if (typeof e.preventDefault === "function") e.preventDefault();
								listOpenState[1](!listOpen);
							}
						}
					} : null
				}, [
					h(PromptMark, { size: 15 }),
					h("span", { style: titleStyle }, t("panelTitle")),
					h("span", { style: {
						fontSize: "0.85em",
						color: dim,
						marginLeft: 6,
						whiteSpace: "nowrap",
						flex: "none"
					} }, t("presetCount") + " " + presetCount + " · " + t("customCount") + " " + customCount),
					h("div", { style: {
						flex: 1,
						minWidth: 0
					} }),
					h("button", {
						style: {
							...addBtn,
							width: "auto",
							height: "auto",
							padding: "0.51em 0.93em",
							borderRadius: "0.54em",
							fontSize: "0.92em",
							whiteSpace: "nowrap",
							flex: "none"
						},
						"data-dsh-prompt-chrome": "plusGlyph",
						title: t("add"),
						onClick: (e) => {
							if (e && typeof e.stopPropagation === "function") e.stopPropagation();
							modalState[1]({ kind: "add" });
						}
					}, t("plusGlyph") + " " + t("addShort")),
					collapsible ? h("span", {
						key: "caret",
						"aria-hidden": "true",
						style: {
							fontSize: "1em",
							color: dim,
							marginLeft: 8,
							flex: "none",
							display: "inline-block",
							transform: showList ? "rotate(90deg)" : "none"
						}
					}, "›") : null
				]),
				showList ? cloudNodes : null,
				searchNode,
				showList ? listNode : null,
				footer,
				modalNode
			]);
		}
		/** 面板 → 设置页跳转（宿主 settings 路由：由 index.ts 注册）。
		*  #149：跳转是异步 DOM 兜底，失败要能报出来 —— 可选 done(ok) 回调；
		*  旧调用方（remote.openRemoteSettings / globalThis.__dshPromptGoSettings）不传回调，行为不变。
		*  #190：done 追加第二个参数 error（失败原因码，供 data-dsh-prompt-go-settings-error）；旧回调
		*  `(ok) => …` 语法上完全兼容（多传一个实参不影响只声明一个形参的函数）。 */
		let goSettingsHandler = null;
		function setGoSettingsHandler(fn) {
			goSettingsHandler = fn;
		}
		function emitGoSettings(done) {
			const fn = goSettingsHandler;
			if (!fn) {
				if (done) try {
					done(false, "no-handler");
				} catch (e) {}
				return;
			}
			try {
				fn(done);
			} catch (e) {
				if (done) try {
					done(false, "exception");
				} catch (err) {}
			}
		}
		/** 点击瞬间现场探针（#61 真机仍覆盖：draftChars 全 0，字活在 textarea/store 之外）。
		* 只记 DOM 计数与桥形状，不记任何正文；位图顺序冻结（见 pick.probe 的 guard）。 */
		const PICK_ACT_NAMES = [
			"setDraft",
			"insert",
			"insertText",
			"appendText",
			"setValue",
			"setText",
			"focus",
			"clear"
		];
		function pickProbe(useInput, inputActions) {
			try {
				let textareas = -1;
				let activeKind = "none";
				let editables = -1;
				try {
					if (typeof document !== "undefined") {
						if (document.querySelectorAll) {
							textareas = document.querySelectorAll("textarea").length;
							editables = document.querySelectorAll("[contenteditable=\"true\"]").length;
						}
						const ae = document.activeElement;
						activeKind = ae && ae.tagName || "none";
					}
				} catch (e) {}
				let storeChars = tapSeen ? tapDraft.length : -1;
				let hasSub = 0;
				try {
					if (useInput && typeof useInput.subscribe === "function") hasSub = 1;
				} catch (e) {}
				let actMask = 0;
				try {
					if (inputActions) for (let i = 0; i < PICK_ACT_NAMES.length; i++) try {
						if (typeof inputActions[PICK_ACT_NAMES[i]] === "function") actMask |= 1 << i;
					} catch (e) {}
				} catch (e) {}
				logEvent$4("pick.probe", {
					textareas,
					activeKind,
					editables,
					storeChars,
					actMask,
					hasSub
				});
			} catch (e) {}
		}
		/** 记一条日志事件。出口只有一个：日志能力装进 globalThis.__dshPromptLog 的那个实例。
		*  走槽而不是 import 的原因：本仓既有回归脚本会把客户端模块逐个转译后单独 require
		*  （scripts/.rt-tmp/*.cjs），而单文件 bundle 里也没有可用的模块内 require——槽是两边都能用的唯一机制。
		*  能力缺席时是空操作，绝不因为记日志失败而影响功能。 */
		function logEvent$4(event, fields) {
			try {
				const log = globalThis.__dshPromptLog;
				if (log && typeof log.log === "function") log.log(event, fields);
			} catch (e) {}
		}
		//#endregion
		//#region node_modules/dsh-featherhunter-plugin-base/dist/client/index.js
		/*! dsh-featherhunter-plugin-base v0.1.5 */
		var BASELINE = {
			"manifest": {
				"schema": 1,
				"version": "0.1.5",
				"revision": 2,
				"updatedAt": "2026-10-31T00:00:00+08:00",
				"fallbackUrl": "https://github.com/FeatherHunter/featherhunter-plugin-manage",
				"groups": [
					{
						"id": "feishu",
						"platform": "feishu",
						"order": 10,
						"readmeTitle": {
							"zh": "飞书群（主）",
							"en": "Feishu Group (Main)"
						},
						"alt": {
							"zh": "DSH 插件交流群 飞书群二维码",
							"en": "DSH plugin community group Feishu QR code"
						},
						"card": "card-feishu.png",
						"qr": {
							"kind": "bundled",
							"key": "qr-feishu"
						},
						"title": {
							"zh": "DSH 插件交流群",
							"en": "DSH Plugin Community"
						},
						"subtitle": {
							"zh": "用户418832的组织",
							"en": "User 418832's organization"
						},
						"note": {
							"zh": "该二维码永久有效",
							"en": "This QR code never expires"
						}
					},
					{
						"id": "qq",
						"platform": "qq",
						"order": 20,
						"readmeTitle": {
							"zh": "QQ群（新）",
							"en": "QQ Group (New)"
						},
						"alt": {
							"zh": "DSH 插件交流群 QQ 群二维码",
							"en": "DSH plugin community group QQ QR code"
						},
						"card": "card-qq.png",
						"qr": {
							"kind": "bundled",
							"key": "qr-qq"
						},
						"title": {
							"zh": "DSH 插件交流群",
							"en": "DSH Plugin Community"
						},
						"subtitle": {
							"zh": "群号：1020866453",
							"en": "Group ID: 1020866453"
						},
						"note": {
							"zh": "扫一扫二维码，加入群聊",
							"en": "Scan the QR code to join the group chat"
						}
					},
					{
						"id": "wechat",
						"platform": "wechat",
						"order": 30,
						"readmeTitle": {
							"zh": "微信群（新）",
							"en": "WeChat Group (New)"
						},
						"alt": {
							"zh": "DSH 插件交流群微信群二维码",
							"en": "DSH plugin community group WeChat QR code"
						},
						"card": "card-wechat-2026-10-31.png",
						"qr": {
							"kind": "bundled",
							"key": "qr-wechat"
						},
						"title": {
							"zh": "DSH 插件交流群",
							"en": "DSH Plugin Community"
						},
						"subtitle": {
							"zh": "群聊：DSH 插件交流群",
							"en": "Group chat: DSH Plugin Community"
						},
						"validUntil": "2026-11-07"
					}
				],
				"plugins": [
					{
						"id": "deck",
						"order": 10,
						"verifiedAt": "2026-10-30",
						"name": "dsh-mattpocock-skills-deck",
						"repo": "FeatherHunter/dsh-mattpocock-skills-deck",
						"desc": {
							"zh": "近 30 万 star 的 mattpocock/skills 整套预置好（27 个技能），装好即用。",
							"en": "The whole mattpocock/skills set (nearly 300k stars) preinstalled — 27 skills, ready as soon as it is installed."
						},
						"url": "https://github.com/FeatherHunter/dsh-mattpocock-skills-deck"
					},
					{
						"id": "prompt",
						"order": 20,
						"verifiedAt": "2026-10-30",
						"name": "dsh-prompt",
						"repo": "FeatherHunter/dsh-prompt",
						"desc": {
							"zh": "经常反复重复的模板化提示词，存成自定义模板，选中后直接注入，不再需要耗费精力。",
							"en": "The boilerplate prompts you keep retyping, saved as custom templates and injected on selection — no more wasted effort."
						},
						"url": "https://github.com/FeatherHunter/dsh-prompt"
					},
					{
						"id": "palette",
						"order": 30,
						"verifiedAt": "2026-10-30",
						"name": "dsh-opencode-palette",
						"repo": "FeatherHunter/dsh-opencode-palette",
						"desc": {
							"zh": "38 款 opencode 经典配色 + 20+自定义主题 一键换装 DSH。",
							"en": "38 classic opencode themes + 20+ custom themes — reskin DSH in one click."
						},
						"url": "https://github.com/FeatherHunter/dsh-opencode-palette"
					},
					{
						"id": "im",
						"order": 40,
						"verifiedAt": "2026-10-30",
						"name": "dsh-im-companion",
						"repo": "FeatherHunter/dsh-im-companion",
						"desc": {
							"zh": "给 dsh-im 加了「助理」和「家」的概念。",
							"en": "Adds the ideas of an “assistant” and a “home” to dsh-im."
						},
						"url": "https://github.com/FeatherHunter/dsh-im-companion"
					},
					{
						"id": "ilife",
						"order": 50,
						"verifiedAt": "2026-10-30",
						"name": "ilife",
						"repo": "FeatherHunter/ilife",
						"desc": {
							"zh": "⚠️建设中⚠️爱生活：居家生活套件，记账、运动、饮食、体重、食谱、物品管理、作息规划、备忘录等。",
							"en": "⚠️Work in progress⚠️ iLife, the home-life suite: bookkeeping, exercise, diet, weight, recipes, item management, schedule planning, memos and more."
						},
						"url": "https://github.com/FeatherHunter/ilife"
					}
				]
			},
			"qr": {
				"qr-feishu": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFABAMAAAA/vriZAAAAMFBMVEUBAQELCwsqKipUVFR1dXV/f383ZMthnZmLi4uXl5i9vb3g4uLv7+/6+vr9/f3///+Ul/FRAAAfyUlEQVR42u2df4wUx5XHu2dBwso/04sjYfhnGYhkFv8BNEiGJZGBsRSDbQXbK8U/yJ+czv7/LN3ldPHhSGOf7fMCkTz8WMtg35les5aBKPYOO0gG62yYXaSLT2cWepCsWIp3d6qkJP/kgKpTvVdVXf1rpmd212Ay9Y+Zne6ej6u7q169932vLH6HN6sL2AXsAnYBu4BdwC5gF7AL2AXsAnYBu4BdwC7g9wVwn5vYqpwch39sIvJA9pn5/WbKb7iuO2xciRxw3QHOps3DNk3y2Sdd9zF9TPLPbWoCuM5KanaVkzfhXz0a8Lx5wDLKbvRZ9hvUAPyVZa3g7Nu8cVjPJJ9dZ1lb1WHkocSf61koQKsL2DkgYTNtAJKFBSSiNcKAfmOqz7JerxPd/CTACXJNAPqEzAFwaeSd2hABvHWiLNp+vNgq111vWUvL5bfylrW5bLQnXXcXANr6UhvL5fIO132kXD5MFWDCz7UA7K+F28cRwNn1jmjYM/aRWu2YZdmO41iW5Zjt0VptEgE/UJe6uNLpPVKrveM4y4kCXBv5uc/zrQDXGvdJ3MuvooDmY2AfrTeOJd4n67E6IQh4Ul1qKm/ZR0n9HcsKAB8gkZ9rDUhDf2HNAd+mLAXwcXEdABxVl5rOW/Ywp+9Y1j0BYHjeYH+8KwCZ7nE6J0BGyJW8lRtVlwJAQgBQvMgSMPRzmQBnK6qNm4B2obCK8NkNBdlWSkD4l9ULf8ubgDOVyseFQmFEXUoAHq5UjhUKayqViga8af5cJsAr+qXfRQ3AezzP4/yWp9p7eQC86HnHLSt3CP42ZACyC6670fNO7IBLbQFAMS5t8bx3XdfVgH81fy4LIPtS90O/CfgDuC9c35BpABR36IJl5arwt1Mm4CnLWjRBZtapS03jdbeSxu8tK6cA2R8s4+eyAVopgOEHWgJyzgAQHvsY4CSPA1L2Nwso51BxVynn032RW0yTAMlt7MG+O6wH8S0WbczzRigX5vyHXLzF4qU85HnnADCHb+Swfov7wCTYwuGE/AIC2o6zFDqRHXOcfsJvVSqV6/Dh/kplbKXT+wYVgItwTLvMxXj68UowIwbEGAcnrFtAQG2wMpzuGY79xyxrWZ3MwJpEAC5Ws4KcSeCuCstBfL72XQLKF+aYYfIjoDG1fqseO/mH2b95wAbcvmRAOwDUs813d4uHwExeii/AUAyQ3xAvCSenHGcZ4eySmv6Dl2SC81uXFu4loWNgC7yPQ0hfHPCmJ4YZftHzRjifDZYhh2CYWYXGAp66IIDSaJvW30QBOU4z4jAOa1Bs39lMomzidEDTLJ41AHkXMO0Wy1vaCAD1u5t4i8GARHuQfJeAJADUi4vZBQYMTP4BDYhv8QnX3ZC3rF7X3ex5I9f5rTHPO+C6WwCQjenVAJ690rJ6PM/rUyfIs/s975gJ+Ffz59pcNE3w+DjYB8PaacdZWuWz2xxnS6VyFk5u7FZehV48+5T2OcgT0FjAv+USFk0T87DsJOifIuctq6cKM9eAsmMbDwXepsgCZSshp4V3iwSL1twclp0tF+5bKTMA1QkmINixBiBlp7X7LQq4AJ6F2wvY1HnUwOm+LvyDPePwYaAuV6N+6BbTjIBh5xHJ4DyK+sNCFnWtVlvvOAO1mnjmz9Yu4Qefc3atVtuGXjnHcc7WatcREF+SEKANh+U6db+lOzDvQWPhkOftc90HYdRwX5XDDBNhiGfAs9CD3wxT9qll9aCxEAJcYw4z7Tsw013AP4CB2h6V9iARq7phOVCjwUqkyS8G6tCyMwQYGqjn00f9A8IAkCIgA0B6K25RgzUTWnZGANkCA0qTHz0LCSY/m20OSBcYUJn8uHAHQLQP9KoOehDutwI0B+qQ82hBAfNpgLMI+GkaYOfP4BOFpLaqysmxQmEtAh4eGdtfKPQTPr2hUPiQsuOFwv0jlbENhcIweBYWjVW8DYXCzpEx8U0dALfAh1VexRNxhMrYcQRM/rnVTQCv1RIbhW8m0WB1YOgTa6CaGO3EN2ccpxeGPoL2gfjwkuP012oTFABt+PAFrqD0OJj2c00AGUlsyqGlLOqt4DgIliHSu6WdR2ImEZEmOCxmD+qZhCf/Gu08oK0BI/N11LtlVynG6kSLmfwB4LxH3G8/YHBLQzdA338FWA8d05CA2gS0qxhMhFObA8I6NfJozQOgflDw+xjgpHoGA8DlzQB5VsADGDGog3l3QLsHcNn5F4xXSkcBXGYWj9lULh+aBJnCegR0XffpcvmA626u8waGR0cwTvJIubzbAGSn4VIzOwx74cGWA/USBPyZMVCLa/0JTP4GHnMfUc4qCGiL/+1GaNzVA7W+LQCIw3wA+BF4m6b72ppJliHg7kRAybQ8A+CpBMDhOOASwmfmD5AnAtKwyR9yohtjgA4mLmAPmoC6OxMBZQ8aDz/cYg2IfwNA0ibgknkC/DQBcDgOuMT0lbQGtB1njQa0cR0uAcHLHwBKf6Q4gYYX7qLtgoV7T8Von6x0ekc5PWYu7t+BsMDYSiUyaA241vfrXAH2+9Bw0Lvl+z43AOV9GVAn8IZvtF/F7ail43ApPOyq+U1u3Pd3ZwWsy0EYACMDNU0C1KN2aD5IAOyZhCPxsJkQYJU0MgPqdbgApLG50QDEmzJAk6bQZEDjgBshwHP8LgKsy/sQu8URQGIAmmZjs1t89/fg+6XSy8XiTsJnXi4WRZSyCK0aAbwfDtuhANkUHjbK+WdF1fos696SaL/Gd+neUunVunGdm/BlaZtl9ZRKr1zm7ESptL0lIAFHweJ6eO6xo4DoH5RtgAqDVbRfUDHuBm0Fvq7a5CcJph0O1PLpOJUBEHzirQEbCYAyFBYFvNoKcLEvTUKpsuppavKzTICUJfVgDDBs8icuIj4yoo/sVMeAdKEASYeAJAJoWONxQDD5EwFDa5KEtayyZuQKNiNgoSAi/BrQ1uKmCuiZAkAbHQFbKpXTASDqpFAktbxSOUv5DGqp1lQijXOOxsJiVBdMcnYazm4OyK9WKmfwV2QopgJuDekECfmokfuYPvoNCmdblj1SqfzMsnKFwo8mOUOe41F/Cudke6HQB4AzhULhdTj7ty0BOTciTQKQ8CBwFHWiy2fC0oCcs2/0utgyLGp2OjJqB84jaVHvoRmc6F3AeQBkhHyZDwEaBnkMEIOJChAcTN9o55GlV3VJgIR0Btjw/Qsm4L2+fzUdsOH7GtB+XdjWADiuLOpFk5yBSR4H9H0ZWMFlp50RkH1cLD5cKr2cVzP8r4vFYh7sg1Kp9CoLAzYOFovSmfDTUumpYvE1CoDFYvHneEKdzx4sFo/SGKBxDOGzb5VKJ3k2wGOOs2zCn8JO6/f9z3E582NcafBIKGw9uCRxVXFtm+OsJQJQLKQeUyfMrHecrXFA4Qg9CofUuezljIDmTNIPoTDRflKPzSQyVqcAiVh2SkCx7FQnBF7+WBuuG3NKW4BqLsaIOwDS2FwcBqzyCKA6oRlgbH6+awBJHDBkLMiANkQ7m99iNFi31knKLaZ6HYP/+qol4HFtLPQWCgOUXcGJf0AbCxvAPhBRhZHK2HalqM6NVCrbC4UBDTigjAIxk+/Uc3FeKa5F+7dKpaolAZNczuQtxsFLnvcuXMje6XnjnM9IWQSGMAhIJ/YXCms878SGQgHV08fRtHlGnKAANcaqQ3DCZpRbrANRhWzbC4WtnH+Lx4mhqFAotDYWCMGpzt6jgg2hmYSTSLSTBPagmknCI/IoIUPKHpQPiGwhWcoemskeDOZiHNrhvQgBav1gSKYcmovDI/IoB0AavGJGytDdBog9j8aCuMVRpVMPMQSO8haHABkhabc4CihvMSHtAOL0hMaC/ZzypAljwcZz8Q9DClBMVnUTsOH7/xMFPAknRAEZGgsP+P6XbQC+NyjbU3nL+lHkw27LyuEf1gPgzK/hwxHKpvCYNyj/fHDwicAQUhcQJyBg4zeDg0fRszA4ONgHxzyhAT8ZHHyyOSAmVEljwdbeUjQW/lvnVaFvhvn+NaH6oMK1OSXjxYan1FqB/Y8GRb/ut+vom3GM0CcCiv5vLUux4stOOZN8bX4OfNTo3QoC2mmuD/3k0bjzSAKyLLoZK75wx7lYONGtiMBRK48MzULGhXsSYCbl0fcV8Mf1RvQWS1m0kEaRxnRLwLoRsGYRH7UEbJ1XhytpCdhrrrN3VSo4U8p5tp+ISX4MJAhgEjQF7DU9C1Uu0rHG5CCkf+F1ylov3IUhoADtLZ7RhI7C897Hq27xvA84iCoC4yTfDHALWiDYHqXsD/r/NbAcqjyDsYAOTAm4x3T1aGlUEC+OPQbpgChLCaRwv9cfHjDVje2534K5WJBr3UwgCQjFp1sAmhZ1GND87bsOUItP1C1mHd/iECBIo4JbTDsG9H2Ck5Pv+2FA+CYKaGcF9H0DUEf62ncBP1gqHaFsGsMFTxWLuwifwRDDT0ulw5TPPKVCDtsty94owhBJgMKzcISyLyBuIQ77aan0r3gAfnjVdAHnisVH5rbsjGbkpKWtacBwpuAo5+8Yy86YE33R9RbCngUEDEsC0gDrf+OAHy0wILr7UgCZjqYLQDO6fsGyN4IrlV4I9Dl9ApCZh0ESPpwt21Hfh0iTasdEvq9fbwJ4qVKRgBsKK/MAeAUn0MepkRSwPxJVOFM4LGUDhirg4voVZiKB0CzoDG3ZDmMYQh9wDIIKZ5sAPgk5FsvqkEO1Doy4GZzKz3H2Z905OzGdMyjAMmLIBlRjn6/FdE5TIy0ztGXbAUlYOX3ASviwMYs9KGw9jBdr145hsKJU3iilUScJy+vZw5FSGmpsVpah36nIVgh7CFEBbeXWMgHNcCz4ORMDhX4yYMj10TFgPOJuAtJwtZTHaZoiMhFwzuVcjB40TcKvU3twNAWQkSaAc+jBJW0ChuLJCwt4AOb+nXV+80S5vM6yfmgWaBmCqXxHn2WtKZcPbhRHujBc5urJfOST8gENuFSLHBDwJmollxaNtj6bd0vmryf+zyXK81IB3zRfJG3hIuCNDg3WhQOkdwBgRCQbAWS3HfCqnLFoBkA20ymgzJHMAqgEjhKQTb2I7VwLQFP99oChus8GiNP9VJ8ZU9OesqW65lHgfnOcXtmDs/+JgP+sAIeMUw1ArR+0HecBiOehV46h867FmuQ0zuuBHhLn9Ycg6WqEc4afP0BD4FX4oO7pDQT8R2m2Y7KnSLoCV4QCXKoth52QsrWZ8BnXdY9CZZh3syyarHDE3fAsBKJxWetjOPRW3PodElbNl0Z6FghnsYX0sJKlyIB2pkjTXAD5VQQ8aUoyJSBNBZQ66s4BA89CSjkX42zswl+aSSEzym+eAEjZR+1KAhJ7kOtyLiSqOg5Q4L8zAPhP10TVAhOwLk9IApxzD6YC9pmAN+HBu4Uv8j/s/bsPQoCkCWDoGWynB1eZmQ5vWtaScrgdxOQG+cDdeAHe3f8FvL179z5vAq5RJwRvsWij1MiGOEnZxXL5QPa32N4TT99NalIiemMvkN588cUXBd/efzED2mFzKzXhJ6tvxjJidW0APg9d+DvswL1VngpIbxPgXvHYsf/CDvz763cg4N5xwYMd+AJdEEBT6ZQZEAdqAfj8JOdTwLd3FC9HUwCTM/eyimzbBKxrwL0vXOf/gYCXubJRkgBZohyz0RpwHxRskKXcMJNeeBYmFWDOi7cDrltXgHtf+B3yPQ821HFIuvI8b5tl/dDz3kUhxEnK/hjJy954jjOdstVKiQ6aBcyEDPLKgjoLsXYM7UEEVO2XFOdHqX4bUqmTIumKcsOJ3pGWXwCezArYSASs8hTA4bkDQjGSXDVx/dMT93GwJEB8hyUgl5oF6R8U58wbIFOPcAxQf5MIeE79Xy2agMNuHyBNBHyeasDJBQUUNrhol+Plnqek25AqwJsG4Lh8Lo67m1CatE0DjipAWT92HboEz3GyG8yIDe0BntJZYQ2lV5SA53Et9bYG5Bc13wc6JcX/Si+5oj2YwwsKexDUjTLH66t8e4DaORRZk0v3m20A3hqTfCNBbEsVBksCDLIhIBlY+qo6Boy+u3FAfqsiZpHnz15P9A/GACPZEOiOzFzzqBNATvxareYT3gYg6QDQmEnYKTMbgpo2RRIgLEsYzwho5HYa7sgMt1iEPUDPpEPg9kml1g28D+fzCYAJLmAnFTB4ScBJ4e+27EwvCb7qYhA4CWKqHiwiLWo66THmuOs+CKuMQ+c4Gysfoqkp9DO4fEkfZjaXy4dxTfJ0uXywrXIuNqq9FukyWnpdjKEwiIWIT4w2SfKnLQbqBwiVsfE9WezBdgGlodkEkLQEJBqw0SEgTwZsoz5DM0DtjswkzwsDYo61FjhKQGZWcMSM2UY9OZCj3vyFAqyLPl/kk6shQEIaASBm139xMqk/Zw+rqWf+APepgN6GPCiP9usaS/otFuWedytAYc6fpOzClng1B8qmRH24ejPAVa77qAl4puVbLMOxKMXC2vGiOosqeQ39sh7+LH3U24TAkV3IPTtBlcBUtut89pTj3NvUYD0M8m4NyK9VKh83HwdlQDvkAsb8FT1QR53oNiT+2aurUKkiaMNGGYM0wKMqO10CkpYDdcbUyYh+UEoC0usspAHqZIM2/YPfA0ASA2QqXBALQwyoaikphSBoE0DD1WjtyVL7TQJGn0G0qDG155oGlB8G0LqIAj7m+1ATXTxmTZ5BX0c9ULadCTCHdaMtHe3ENckAURWl18D2E9MoOUDrIlfl7ES5/JLp/nykXP7NDlhvJADa2ghx8aKrstR+i7qA+81VXUj9FhWXhQriBDLlb8XGAYmAuY7ixdkBaQIguw2ANKvAMVkaJfeGSATsSLNwxwMSM1XT0rKUpGcwWucrWvZeA6pbrMq5zOkWo0w5p4s691PwD16OAParvSFAVI1HgzqJnDakWwJQvPajnA6Bf/A90+TPobYJx4DMgDJlGuPSD2ntVjUC2KtywYAWhd4FUZxOx7QhQ1tqt64DoI3bcWhAmWa+FhLB2tXN+OIOojQqtHGAUU055AImpIFV5QPfLu4yJCvPE73pRoLJ3/hyTsqjDIBGskG41scK0+RPAzSLFd9FgODbNQBJM0DwEsoqolT7jANAXNUFgCyko24PUKYMYZ1CCeg4vR/UJoYcZwVRBRLzWs0gAEW1RHZjpeO8XqvVoW7iBDUARQnZ/coLJ16SRq12XksZJKCjN39ynKXNy7mUMCkbC7L0o44ak6lfg/J+IhUbwwW5n0OpltXF4k7Kb74FWuvnKJsuFh++bAAKHTWmYu/DYeYM5oBboNQ+CoDioiUo55IrlV7JmFcnB2qGy84fw75QQZFOC7Jjg7pbjBjZsbH6gxjQntIi2/vqIEuB7FgBiBvYiCDSonqG8n4hQJlQ9RNVYjIFkDcHjBQGuwd1MxiTCABPtQSM1lmQ2Xp9UqZsFIq1zATooHJZGiCNbSR1Q5n8AHguo0wZ/CwmoE6d/Ikq2m72YBIgCeoshHqQRzaSmkFABqmTJmDrIp0L3IM80oP8LyHA5lr+Mc8b12XvRakWDDaIHGvcG8Ky7EOedwDLriQALsdsaJQqhXKaUHlkP6PSp71CoTBK+ZTnvVcorNKAPSBvamYsDChAe5fO+x4BbXdB77k1UKkcTwbMmfVmQllh/aibwbNFdhVsU8NOQcZ65boCtKHQS2sneuDdQh91/c2I0Ph8MqDVJPEvstMVxqkgTiJf3GzeLQOQBl7+cEA7WsagTUCaFIa4iwDrOkO73ki9xUZV+cC6iAGG6m5FAUN1t7Lm1ckwBM7rz/m+jNWJHGttItiOM+D75x1n6bgUODrLwCkgipE4Zk7y8nB+MZvGbySgDENAOrOfVeC4zrJWP6ySsvFfQZPx0k2Dmdq6eIa2TOk+ip6F6AknKfuiZYZ2NAE6NJN8LZP+0UddT6yzkFDB0UjC1zHmkJf/Dx0kQGcAJLcVMEgZCqY6mQ0RrSofrbNgmPwJdRbk65pkUXeUAI2JIhJQ9aCuyy+m1tsCuCSxB7nswQ/b70E6b4BYnWVNHQq25fWifIPO0MZMqSHLuq9S+QQ/jAOgjQt3rtbqAjCnZ/KX4ASdoc2+xAToXlEtpS1A3ELrLIVqcQ/p+nNoLCBtBdHFpI4fpI96BLaoEz8hXBFgbi2PnCDbVtjkRqSQQ72ZtgCZjlwTYtYCJoGGNagiJE1+5URXM75hD5p1FoykK6qS8LXJnxkwFDMxAKmWKTMTMOTlV9rpb5KLtkf0g2zGNPnnDGjoqFMBeVuA4TVJm4DoG0gAVEWZJKDaggaqyo8rtwKuSRrRou3htDUJCEZGOwN1sPrMAlgNxUlUdPub5KryRk0J+F+5oeMkIcA/Zkl4mR4cfLoKgDjd/7zKCRZ6eRprv63WM3wffHjCsuyHBwdHuSjn8iR+wPZMnc/+Bv61XQP+aHDwWQrlXKLGwif4I1lWdbnReOLf10b1PFikNU3Cf5yqqvIyDcQ8MthgGavntZFfrACrkXrUDIwFBZictRMGjFSVjwEG9QdVBTjWhmdBAUZSJ80ebFFnIVJVvkkPLp5LD96RgLwJIGsG+O+cdwLYzjOIa4sLwmfpowMTSrVTDVi7BjtdiVXEtYsrnXB7baIW1DzSgAyC9ey04zgBYE38UA0HoMU19QutAbcpD+vFlWql81VQ9h49oR/UanLzurORrWNEBcda7UIEECs4Cr/qF7rLbb2wQk9tb1bvVtweDDZ1DCzqwLsVnhsj9QdD+zQlpgyZGtZ2AJd93wHZnQhIIqs6CWhKW2MVHINt0rWPOg1Qb3DXYqCWr1XngCuIsp705hVNkq6igK2d6AdVhrYs1fIsRBWKVZFsXd4PGdrFV8rll4vFDVgoFreXOYzK+HeLxUfhBJGKvblcPlgsPlwuv9VnWffDYW9hfndQKFYXg8k9LZK3oEhtuXyopZc/lH8YTTZo9KX5B7k+Qer5VkAWWmhvCKPsqF7if9OGuaUBWQpgaM/EVMAZDXglBDhulh3VgB0YrKnZ4Em7Tlqpm9uuiNRZiG7qKI/udE3SDiD5rgBTNzNrBWhsUUIDQEK+TX8G1TOhAbPsfHqpktTOXodk63wIEPeOxd/7ISz2Yc0nqrEowOUgBwx0iGLv2PXKmsjhz03qaOezlcoEzeb6iLUqXOuUaQ/OgINDAtqw6R7IUgqFNUQBYkxClJh5yfSVDOmS408o14fwSzwBTopMzqNoi+0yFNqWPaqbWUyMHaDBPxjWzQT7NAVlTnOYT9I/N8CvOwOMCHsoSQZszB3wT/MCmNaDjXnqQZYKSAPAmaRbTBa2B4lcdsJua1sjckzL3DNxsbmHttGDOvFvjoDJm9tSaSxgDRYUOM7IgiwocHylXD4HgCJ9IpQWWeX0XUifkCnd2zTgAdd9TL8kx113V6aEFz/cPtd7aOe10MOGShXTuG5Biaj4Ri47HccZN6+Am1udxgvY5jiIyykZ0MYPc9xgOVRFVO10Bd6tUHk/Y0MTNCAIaSRsvRDMJAJwXvbQDgPm03Z4CW0Jk7Qujs7FOVW/5C4BTN8m3QCsqyWGAWhEwCPSiOTNK7Q9iCZ/tkhTaKP5cRMwpyUBeZxaNeBn+M0uSFWwcIeXy60Ag8pxOBdjVfmPs0gCrmgrYcBUv92jRRUvYQxEq99mPO9EHpQKfVqP8QZtDhiEJVbiB6wqv7q5qMKMuIdWdbEdoJPkeVaTamaJOxtEagFnWxc3AwwLewzAyK6HcwJsKuz5vvfg9+QWRwEjpfEDH7V0ObC4j3oBbvFxyHJ8y3Xdc5QdN42BRzBjImJjiExIkVtZ57fQ+3AQM7lWqaRsVxeMkdkQe1Sm5qFOAMV21586zlK9bXbQ5DacUW/mS/Dne9GB6TjOGnBg2kdqNSEuq9UuWpb1mjr4ok5bs5tLRNMBpT3YiOyMqGtviFCY2YJdhoLNzKCKKMrzUIF5VBkmU20k/qUAapOfJ2cnxAozxABpisCx3czEuwXQrLOgbjE1CzNIwAktjao38BbXBaCvFJhEJ/fMHfDPsB2cWi7hRH8ZAG3Yj0bYBzLZQGsWVuut74KFuwBEScAw7AB3lsvt4DLsV9cMkP+fMY+zz3B4+BAA78X8z2HOZboG6qjv87z3dRm5XtfdaNaG3YBlrU5D7bdZrCrfuvZbU0CWVmdBOI9Ce0MEmoV051G4WLGOWGats5AEyM3y5fMIuEQD8jkCptVZsJbR8N4QWrPQxD+YUO45q8l/VwJyAOQdAS5pF5Bf0XP4LgVIx3QRpssgt5Zz/9vwHm7yvPfzoJZG359YFjzpugNc5VrKZcgh78QOXb5RV3DcpPeGuAgq7AyLJj3jT+hF05CKufaOUrGn3ZqzMPe/TYXlcAYdDqFMk0drtUlILrnUZ8Q4e4+Iy146rQ8T4VG8sBgH4TpzXHYq/WCdSPUb0wLHqD0o98kKZfaDEqWRLHDMOpM0X7g3ETgmW9QRwCbyvLsFMOLdigGexKryuNMVpNGnATJImm4B6Psyv0YDtjBY+yMxiN9qQBnHF2JCx+kH91svFCJgF0JpUxpwFje3XW9oq2OAIjMRX7GsFnWyA1N6FmQp+Ec8bwT9CTtc9zlUv2F5qCFT9XHBFbXfbukB6r2EShVL9SAl1ySe53XiAoZVnZC0N67J+DTXuwwh4Lgw3/0kWYpeHEwl191a4jcCk3+RnyGgnQaoBY4hJ7opcEwX9hgZOVHAxYQFBmsmSUAzQJ4KyDsH5F3AOQEuaQNwn5vYqqrOgpBOwIurAPe57qOUXYFggwA8bRYjwbfYEE5CujboXM2rB+Wez0ROaCOgfftaF7AL2AXsAnYBu4BdwC5gF7AL2AXsAnYBu4BdwDu4/T+cPWtyfdrSSwAAAABJRU5ErkJggg==",
				"qr-qq": "data:image/png;base64,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",
				"qr-wechat": "data:image/png;base64,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"
			}
		};
		var DAY_MS = 864e5;
		var DATE_ONLY_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
		function pickText(text, lang) {
			if (!text) return "";
			return text[lang] ?? text.zh ?? text.en ?? "";
		}
		function normalizeLang(value) {
			if (!value) return null;
			const lower = value.toLowerCase();
			if (lower.startsWith("zh")) return "zh";
			if (lower.startsWith("en")) return "en";
			return null;
		}
		function resolveLang(hints = {}) {
			const explicit = normalizeLang(hints.explicit);
			if (explicit) return explicit;
			const html = normalizeLang(hints.htmlLang);
			if (html) return html;
			for (const candidate of hints.navigatorLanguages ?? []) {
				const normalized = normalizeLang(candidate);
				if (normalized) return normalized;
			}
			return "zh";
		}
		function sortByOrder(items) {
			return [...items].sort((a, b) => a.order - b.order);
		}
		function pluginHref(plugin) {
			const url = plugin.url;
			return url !== void 0 && url.length > 0 ? url : "https://github.com/" + plugin.repo;
		}
		function parseDateOnly(value) {
			const match = DATE_ONLY_RE.exec(value);
			if (!match) return null;
			const year = Number(match[1]);
			const month = Number(match[2]);
			const day = Number(match[3]);
			const date = new Date(Date.UTC(year, month - 1, day));
			if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
			return date;
		}
		function startOfLocalDay(now) {
			return Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
		}
		function isExpired(validUntil, now = /* @__PURE__ */ new Date()) {
			if (!validUntil) return false;
			const until = parseDateOnly(validUntil);
			if (!until) return false;
			return until.getTime() < startOfLocalDay(now);
		}
		function formatValidity(validUntil, options) {
			if (!validUntil) return null;
			const until = parseDateOnly(validUntil);
			if (!until) return null;
			const now = options.now ?? /* @__PURE__ */ new Date();
			if (isExpired(validUntil, now)) return null;
			const days = Math.round((until.getTime() - startOfLocalDay(now)) / DAY_MS);
			const month = until.getUTCMonth() + 1;
			const day = until.getUTCDate();
			if (days <= 0) {
				if (options.lang === "en") return `Valid today (until ${month}/${day}), refreshed on re-entry`;
				return `\u8BE5\u4E8C\u7EF4\u7801\u4ECA\u5929\uFF08${month} \u6708 ${day} \u65E5\u524D\uFF09\u6709\u6548\uFF0C\u91CD\u65B0\u8FDB\u5165\u5C06\u66F4\u65B0`;
			}
			if (options.lang === "en") return `Valid for ${days} day${days === 1 ? "" : "s"} (until ${month}/${day}), refreshed on re-entry`;
			return `\u8BE5\u4E8C\u7EF4\u7801 ${days} \u5929\u5185\uFF08${month} \u6708 ${day} \u65E5\u524D\uFF09\u6709\u6548\uFF0C\u91CD\u65B0\u8FDB\u5165\u5C06\u66F4\u65B0`;
		}
		function isRecord(value) {
			return typeof value === "object" && value !== null && !Array.isArray(value);
		}
		function requireString(record, key, where) {
			const value = record[key];
			if (typeof value !== "string" || value.length === 0) throw new Error(`manifest: ${where}.${key} must be a non-empty string`);
			return value;
		}
		function requireI18n(record, key, where) {
			const value = record[key];
			if (!isRecord(value)) throw new Error(`manifest: ${where}.${key} must be an object`);
			const zh = value.zh;
			const en = value.en;
			if (typeof zh !== "string" || zh.length === 0) throw new Error(`manifest: ${where}.${key}.zh must be a non-empty string`);
			if (typeof en !== "string" || en.length === 0) throw new Error(`manifest: ${where}.${key}.en must be a non-empty string`);
			return {
				zh,
				en
			};
		}
		function requireOrder(record, where) {
			const value = record["order"];
			if (typeof value !== "number" || !Number.isFinite(value)) throw new Error(`manifest: ${where}.order must be a number`);
			return value;
		}
		function validateGroup(value, index) {
			const where = `groups[${index}]`;
			if (!isRecord(value)) throw new Error(`manifest: ${where} must be an object`);
			const id = requireString(value, "id", where);
			const platform = requireString(value, "platform", where);
			const order = requireOrder(value, where);
			const readmeTitle = requireI18n(value, "readmeTitle", where);
			const alt = requireI18n(value, "alt", where);
			const card = requireString(value, "card", where);
			const title = requireI18n(value, "title", where);
			const qrRaw = value["qr"];
			if (!isRecord(qrRaw)) throw new Error(`manifest: ${where}.qr must be an object`);
			const kind = qrRaw["kind"];
			let qr;
			if (kind === "bundled") qr = {
				kind: "bundled",
				key: requireString(qrRaw, "key", `${where}.qr`)
			};
			else if (kind === "remote") qr = {
				kind: "remote",
				path: requireString(qrRaw, "path", `${where}.qr`)
			};
			else throw new Error(`manifest: ${where}.qr.kind must be "bundled" or "remote"`);
			const group = {
				id,
				platform,
				order,
				readmeTitle,
				alt,
				card,
				qr,
				title
			};
			const subtitle = value["subtitle"];
			if (subtitle !== void 0) {
				if (!isRecord(subtitle)) throw new Error(`manifest: ${where}.subtitle must be an object`);
				group.subtitle = requireI18n(value, "subtitle", where);
			}
			const note = value["note"];
			if (note !== void 0) {
				if (!isRecord(note)) throw new Error(`manifest: ${where}.note must be an object`);
				group.note = requireI18n(value, "note", where);
			}
			const validUntil = value["validUntil"];
			if (validUntil !== void 0) {
				if (typeof validUntil !== "string" || parseDateOnly(validUntil) === null) throw new Error(`manifest: ${where}.validUntil must be a valid YYYY-MM-DD date`);
				group.validUntil = validUntil;
			}
			return group;
		}
		function validatePlugin(value, index) {
			const where = `plugins[${index}]`;
			if (!isRecord(value)) throw new Error(`manifest: ${where} must be an object`);
			const id = requireString(value, "id", where);
			const order = requireOrder(value, where);
			const verifiedAt = requireString(value, "verifiedAt", where);
			if (parseDateOnly(verifiedAt) === null) throw new Error(`manifest: ${where}.verifiedAt must be a valid YYYY-MM-DD date`);
			const entry = {
				id,
				order,
				verifiedAt,
				name: requireString(value, "name", where),
				repo: requireString(value, "repo", where),
				desc: requireI18n(value, "desc", where)
			};
			if (value["url"] !== void 0) entry.url = requireString(value, "url", where);
			return entry;
		}
		function parseManifest(raw) {
			if (!isRecord(raw)) throw new Error("manifest: root must be an object");
			if (raw["schema"] !== 1) throw new Error("manifest: schema must be 1");
			const version = requireString(raw, "version", "manifest");
			const revision = raw["revision"];
			if (typeof revision !== "number" || !Number.isInteger(revision) || revision < 0) throw new Error("manifest: revision must be a non-negative integer");
			const updatedAt = requireString(raw, "updatedAt", "manifest");
			if (Number.isNaN(Date.parse(updatedAt))) throw new Error("manifest: updatedAt must be a parseable timestamp");
			const fallbackUrl = requireString(raw, "fallbackUrl", "manifest");
			if (!/^https?:\/\//.test(fallbackUrl)) throw new Error("manifest: fallbackUrl must be an absolute http(s) URL");
			const groupsRaw = raw["groups"];
			if (!Array.isArray(groupsRaw)) throw new Error("manifest: groups must be an array");
			if (groupsRaw.length === 0) throw new Error("manifest: groups must not be empty");
			const pluginsRaw = raw["plugins"];
			if (!Array.isArray(pluginsRaw)) throw new Error("manifest: plugins must be an array");
			if (pluginsRaw.length === 0) throw new Error("manifest: plugins must not be empty");
			const groups = groupsRaw.map(validateGroup);
			const plugins = pluginsRaw.map(validatePlugin);
			const ids = /* @__PURE__ */ new Set();
			for (const group of groups) {
				if (ids.has(group.id)) throw new Error(`manifest: duplicate group id "${group.id}"`);
				ids.add(group.id);
			}
			return {
				schema: 1,
				version,
				revision,
				updatedAt,
				fallbackUrl,
				groups,
				plugins
			};
		}
		var TIP_CLASS$1 = "dsh-base-tip";
		var GAP = 8;
		var EDGE = 8;
		var activeDispose = null;
		var tipSerial = 0;
		var TIP_HIDE_DELAY = 160;
		function createTipController(options = {}) {
			const hideDelay = options.hideDelay ?? TIP_HIDE_DELAY;
			let handle = null;
			let described = null;
			let hideTimer = null;
			let onKeyDown = null;
			function boundedDocument() {
				return typeof document === "undefined" ? null : document;
			}
			function unbindEscape() {
				const doc = boundedDocument();
				if (!doc || !onKeyDown) return;
				doc.removeEventListener("keydown", onKeyDown, true);
				onKeyDown = null;
			}
			function clearDescribed() {
				if (!described) return;
				described.removeAttribute("aria-describedby");
				described = null;
			}
			function hideNow() {
				if (hideTimer !== null) {
					clearTimeout(hideTimer);
					hideTimer = null;
				}
				unbindEscape();
				if (handle) {
					handle.dispose();
					handle = null;
				}
				clearDescribed();
			}
			return {
				show(anchor, content) {
					if (typeof document === "undefined") return;
					if (hideTimer !== null) {
						clearTimeout(hideTimer);
						hideTimer = null;
					}
					if (handle) {
						handle.dispose();
						handle = null;
					}
					clearDescribed();
					const tip = mountTip(anchor, content, {
						exclusive: true,
						maxWidth: options.maxWidth
					});
					handle = tip;
					if (tip.id) {
						anchor.setAttribute("aria-describedby", tip.id);
						described = anchor;
					}
					const doc = boundedDocument();
					if (doc && !onKeyDown) {
						onKeyDown = (event) => {
							if (event.key === "Escape") hideNow();
						};
						doc.addEventListener("keydown", onKeyDown, true);
					}
				},
				hideSoon() {
					if (hideTimer !== null) clearTimeout(hideTimer);
					hideTimer = setTimeout(() => {
						hideTimer = null;
						hideNow();
					}, hideDelay);
				},
				hideNow,
				dispose: hideNow
			};
		}
		function mountTip(anchor, content, options = {}) {
			if (typeof document === "undefined") return {
				id: "",
				dispose: () => {}
			};
			const exclusive = options.exclusive ?? true;
			if (exclusive) activeDispose?.();
			const el = document.createElement("div");
			el.className = TIP_CLASS$1;
			el.id = "dsh-base-tip-" + (tipSerial += 1);
			el.setAttribute("role", "tooltip");
			el.textContent = content;
			el.style.maxWidth = String(options.maxWidth ?? 320) + "px";
			const place = () => {
				if (!el.isConnected || !anchor.isConnected) return;
				const rect = anchor.getBoundingClientRect();
				const width = el.offsetWidth;
				const height = el.offsetHeight;
				const viewW = window.innerWidth;
				const viewH = window.innerHeight;
				let side = options.placement ?? "top";
				if (side === "top" && rect.top - height - GAP < EDGE) side = "bottom";
				if (side === "bottom" && rect.bottom + height + GAP > viewH - EDGE) side = rect.top - height - GAP >= EDGE ? "top" : "bottom";
				const centered = rect.left + rect.width / 2 - width / 2;
				const maxLeft = Math.max(EDGE, viewW - width - EDGE);
				const left = Math.min(Math.max(centered, EDGE), maxLeft);
				const wanted = side === "top" ? rect.top - height - GAP : rect.bottom + GAP;
				el.style.left = Math.round(left) + "px";
				el.style.top = Math.round(Math.max(EDGE, Math.min(wanted, viewH - height - EDGE))) + "px";
				el.dataset.side = side;
			};
			document.body.appendChild(el);
			place();
			let frame = 0;
			if (typeof window.requestAnimationFrame === "function") frame = window.requestAnimationFrame(() => {
				el.dataset.show = "true";
			});
			else el.dataset.show = "true";
			const onViewportChange = () => place();
			window.addEventListener("scroll", onViewportChange, true);
			window.addEventListener("resize", onViewportChange);
			const dispose = () => {
				window.removeEventListener("scroll", onViewportChange, true);
				window.removeEventListener("resize", onViewportChange);
				if (typeof window.cancelAnimationFrame === "function") window.cancelAnimationFrame(frame);
				el.remove();
				if (activeDispose === dispose) activeDispose = null;
			};
			if (exclusive) activeDispose = dispose;
			return {
				id: el.id,
				dispose
			};
		}
		function createHoverTip(React) {
			const h = React.createElement;
			function HoverTip(props) {
				const anchorRef = React.useRef(null);
				const hideTimer = React.useRef(null);
				const [hovered, setHovered] = React.useState(false);
				const [dismissed, setDismissed] = React.useState(false);
				const controlled = props.visible !== void 0;
				const active = (controlled ? Boolean(props.visible) : hovered) && !dismissed;
				const hideDelay = props.hideDelay ?? 160;
				const clearHide = React.useCallback(() => {
					if (hideTimer.current === null) return;
					clearTimeout(hideTimer.current);
					hideTimer.current = null;
				}, []);
				const show = React.useCallback(() => {
					clearHide();
					setDismissed(false);
					setHovered(true);
				}, [clearHide]);
				const hideSoon = React.useCallback(() => {
					clearHide();
					hideTimer.current = setTimeout(() => {
						hideTimer.current = null;
						setHovered(false);
					}, hideDelay);
				}, [clearHide, hideDelay]);
				React.useEffect(() => clearHide, [clearHide]);
				React.useEffect(() => {
					setDismissed(false);
				}, [props.visible, props.content]);
				React.useEffect(() => {
					if (!active || !props.content) return void 0;
					if (typeof document === "undefined") return void 0;
					const anchor = anchorRef.current;
					if (!anchor) return void 0;
					const tip = mountTip(anchor, props.content, {
						maxWidth: props.maxWidth,
						placement: props.placement,
						exclusive: !controlled
					});
					const onKeyDown = (event) => {
						if (event.key !== "Escape") return;
						setHovered(false);
						setDismissed(true);
						tip.dispose();
					};
					document.addEventListener("keydown", onKeyDown, true);
					return () => {
						document.removeEventListener("keydown", onKeyDown, true);
						tip.dispose();
					};
				}, [
					active,
					controlled,
					props.content,
					props.maxWidth,
					props.placement
				]);
				return h("span", {
					ref: (node) => {
						anchorRef.current = node;
					},
					className: "dsh-base-tip-anchor" + (props.className ? " " + props.className : ""),
					onMouseEnter: show,
					onMouseLeave: hideSoon,
					onFocus: show,
					onBlur: hideSoon
				}, props.children ?? null);
			}
			return HoverTip;
		}
		function contactIcon(h, size) {
			return h("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 1.8,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				focusable: "false"
			}, h("rect", {
				x: 3,
				y: 3,
				width: 18,
				height: 18,
				rx: 4,
				key: "frame"
			}), h("rect", {
				x: 7,
				y: 7,
				width: 3.6,
				height: 3.6,
				rx: 1,
				key: "tl"
			}), h("rect", {
				x: 13.4,
				y: 7,
				width: 3.6,
				height: 3.6,
				rx: 1,
				key: "tr"
			}), h("rect", {
				x: 7,
				y: 13.4,
				width: 3.6,
				height: 3.6,
				rx: 1,
				key: "bl"
			}), h("path", {
				d: "M13.4 14h1.4M13.4 17.2h1.4M16.8 14h1.4M16.8 17.2h1.4",
				key: "data"
			}));
		}
		function gridIcon(h, size) {
			return h("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				focusable: "false"
			}, h("rect", {
				x: 3,
				y: 3,
				width: 7,
				height: 7,
				rx: 1,
				key: "tl"
			}), h("rect", {
				x: 14,
				y: 3,
				width: 7,
				height: 7,
				rx: 1,
				key: "tr"
			}), h("rect", {
				x: 3,
				y: 14,
				width: 7,
				height: 7,
				rx: 1,
				key: "bl"
			}), h("rect", {
				x: 14,
				y: 14,
				width: 7,
				height: 7,
				rx: 1,
				key: "br"
			}));
		}
		function starIcon(h, size) {
			return h("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 1.8,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				focusable: "false"
			}, h("path", {
				d: "M12 3.6l2.5 5.2 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8Z",
				key: "star"
			}));
		}
		function issueIcon(h, size) {
			return h("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 1.8,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				focusable: "false"
			}, h("circle", {
				cx: 12,
				cy: 12,
				r: 9,
				key: "ring"
			}), h("path", {
				d: "M12 7.8v4.8",
				key: "stem"
			}), h("path", {
				d: "M12 16.2h.01",
				key: "dot"
			}));
		}
		function externalLinkIcon(h) {
			return h("svg", {
				width: 14,
				height: 14,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				focusable: "false"
			}, h("path", {
				d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
				key: "box"
			}), h("polyline", {
				points: "15 3 21 3 21 9",
				key: "arrow"
			}), h("line", {
				x1: 10,
				y1: 14,
				x2: 21,
				y2: 3,
				key: "line"
			}));
		}
		function classes(first, extra) {
			return extra ? first + " " + extra : first;
		}
		function trimSlashes(url) {
			return url.replace(/\/+$/, "");
		}
		function createActions(React, deps) {
			const h = React.createElement;
			const HoverTip = createHoverTip(React);
			function iconAction(spec) {
				const body = h("span", {
					className: "dsh-base-icon-action__icon",
					key: "icon",
					"aria-hidden": "true"
				}, spec.icon);
				const control = spec.href ? h("a", {
					className: classes("dsh-base-icon-action", spec.className),
					href: spec.href,
					target: "_blank",
					rel: "noreferrer noopener",
					"aria-label": spec.label,
					key: "control"
				}, body) : h("button", {
					type: "button",
					className: classes("dsh-base-icon-action", spec.className),
					"aria-label": spec.label,
					key: "control",
					onClick: (event) => {
						spec.onClick?.(event.currentTarget);
					}
				}, body);
				return h(HoverTip, { content: spec.tip }, control);
			}
			function ContactButton(props) {
				const size = props.size ?? 16;
				return iconAction({
					className: classes("dsh-base-contact-button", props.className),
					label: props.title ?? deps.text("contact"),
					tip: props.tip ?? deps.text("contactTip"),
					icon: contactIcon(h, size),
					onClick: (trigger) => deps.openContact(trigger)
				});
			}
			function StarButton(props) {
				const href = props.repoUrl ?? deps.repoUrl;
				if (!href) return null;
				return iconAction({
					className: props.className,
					label: props.label ?? deps.text("starLabel"),
					tip: props.tip ?? deps.text("starTip"),
					href,
					icon: starIcon(h, props.size ?? 16)
				});
			}
			function IssueButton(props) {
				const explicit = props.issuesUrl ?? deps.issuesUrl;
				const repo = props.repoUrl ?? deps.repoUrl;
				const href = explicit ?? (repo ? trimSlashes(repo) + "/issues" : void 0);
				if (!href) return null;
				return iconAction({
					className: props.className,
					label: props.label ?? deps.text("issueLabel"),
					tip: props.tip ?? deps.text("issueTip"),
					href,
					icon: issueIcon(h, props.size ?? 16)
				});
			}
			function actionSet(props, grouped) {
				return h("span", {
					className: classes(grouped ? "dsh-base-actions dsh-base-actions--group" : "dsh-base-actions", props.className),
					role: "group",
					"aria-label": deps.text("actionsLabel")
				}, h(ContactButton, {
					size: props.size,
					key: "contact"
				}), h(StarButton, {
					size: props.size,
					repoUrl: props.repoUrl,
					key: "star"
				}), h(IssueButton, {
					size: props.size,
					repoUrl: props.repoUrl,
					issuesUrl: props.issuesUrl,
					key: "issue"
				}));
			}
			function ActionButtons(props) {
				return actionSet(props, false);
			}
			function ActionGroup(props) {
				return actionSet(props, true);
			}
			return {
				ContactButton,
				StarButton,
				IssueButton,
				ActionButtons,
				ActionGroup,
				HoverTip
			};
		}
		function gradientId(name, uid) {
			const suffix = uid && uid.length > 0 ? uid : "base";
			return "dsh-base-cluster-" + name + "-" + suffix;
		}
		var SVG_CLASS = "dsh-base-cluster__svg";
		function contactClusterIcon(h, size = 16, uid) {
			return h("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				className: SVG_CLASS + " dsh-base-cluster__svg--contact",
				"aria-hidden": "true",
				focusable: "false"
			}, h("defs", { key: "defs" }, h("linearGradient", {
				id: gradientId("ca", uid),
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				key: "ca"
			}, h("stop", {
				offset: "0",
				stopColor: "#7cc4ff",
				key: "s1"
			}), h("stop", {
				offset: ".55",
				stopColor: "#4f8bff",
				key: "s2"
			}), h("stop", {
				offset: "1",
				stopColor: "#3f5cff",
				key: "s3"
			})), h("linearGradient", {
				id: gradientId("cb", uid),
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				key: "cb"
			}, h("stop", {
				offset: "0",
				stopColor: "#c79bff",
				key: "s1"
			}), h("stop", {
				offset: "1",
				stopColor: "#8b5cf6",
				key: "s2"
			}))), h("g", {
				className: "dsh-base-ico-bob",
				key: "bob"
			}, h("path", {
				d: "M3 7.4A3.4 3.4 0 0 1 6.4 4h7.1A3.4 3.4 0 0 1 16.9 7.4v3.1a3.4 3.4 0 0 1-3.4 3.4H8.3l-3.9 3.05a.65.65 0 0 1-1.05-.51v-2.9A3.4 3.4 0 0 1 3 10.5z",
				fill: "url(#" + gradientId("ca", uid) + ")",
				key: "back"
			}), h("ellipse", {
				cx: 6.8,
				cy: 7.4,
				rx: 3.1,
				ry: 1.35,
				fill: "#fff",
				opacity: ".32",
				key: "shine"
			}), h("path", {
				d: "M10.5 11.2A3.5 3.5 0 0 1 14 7.7h5.2a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-4.9l-3.15 2.5a.62.62 0 0 1-1-.49v-2.24a3.5 3.5 0 0 1-1.86-3.12z",
				fill: "url(#" + gradientId("cb", uid) + ")",
				key: "front"
			}), h("circle", {
				className: "dsh-base-ico-dot dsh-base-ico-dot--1",
				cx: 13.1,
				cy: 14.1,
				r: 1.2,
				fill: "#fff",
				key: "d1"
			}), h("circle", {
				className: "dsh-base-ico-dot dsh-base-ico-dot--2",
				cx: 16.2,
				cy: 14.1,
				r: 1.2,
				fill: "#fff",
				key: "d2"
			}), h("circle", {
				className: "dsh-base-ico-dot dsh-base-ico-dot--3",
				cx: 19.3,
				cy: 14.1,
				r: 1.2,
				fill: "#fff",
				key: "d3"
			})));
		}
		function starClusterIcon(h, size = 16, uid) {
			return h("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				className: SVG_CLASS + " dsh-base-cluster__svg--star",
				"aria-hidden": "true",
				focusable: "false"
			}, h("defs", { key: "defs" }, h("linearGradient", {
				id: gradientId("sa", uid),
				x1: "0",
				y1: "0",
				x2: ".85",
				y2: "1",
				key: "sa"
			}, h("stop", {
				offset: "0",
				stopColor: "#ffe98a",
				key: "s1"
			}), h("stop", {
				offset: ".45",
				stopColor: "#ffc12e",
				key: "s2"
			}), h("stop", {
				offset: "1",
				stopColor: "#ff8a1e",
				key: "s3"
			})), h("radialGradient", {
				id: gradientId("sg", uid),
				cx: ".5",
				cy: ".5",
				r: ".5",
				key: "sg"
			}, h("stop", {
				offset: "0",
				stopColor: "#ffd75e",
				stopOpacity: ".55",
				key: "s1"
			}), h("stop", {
				offset: "1",
				stopColor: "#ffd75e",
				stopOpacity: "0",
				key: "s2"
			}))), h("circle", {
				className: "dsh-base-ico-halo",
				cx: 12,
				cy: 12,
				r: 10.6,
				fill: "url(#" + gradientId("sg", uid) + ")",
				key: "halo"
			}), h("g", {
				className: "dsh-base-ico-bigstar",
				key: "bigstar"
			}, h("path", {
				d: "M12 2.7l2.72 5.49 6.06.89-4.39 4.27 1.04 6.04L12 16.55l-5.43 2.84 1.04-6.04L3.22 9.08l6.06-.89z",
				fill: "url(#" + gradientId("sa", uid) + ")",
				stroke: "#ffb020",
				strokeWidth: ".35",
				strokeLinejoin: "round",
				key: "star"
			}), h("path", {
				d: "M12 5.35l1.55 3.13 3.45.51-2.5 2.43.6 3.44L12 13.2l-3.1 1.66.6-3.44-2.5-2.43 3.45-.51z",
				fill: "#fff",
				opacity: ".33",
				key: "shine"
			})), h("g", {
				className: "dsh-base-ico-spark dsh-base-ico-spark--1",
				fill: "#fff",
				key: "sp1"
			}, h("path", {
				d: "M19.9 3.0l.52 1.3 1.3.52-1.3.52-.52 1.3-.52-1.3-1.3-.52 1.3-.52z",
				key: "p"
			})), h("g", {
				className: "dsh-base-ico-spark dsh-base-ico-spark--2",
				fill: "#ffe27a",
				key: "sp2"
			}, h("path", {
				d: "M4.2 16.4l.38.95.95.38-.95.38-.38.95-.38-.95-.95-.38.95-.38z",
				key: "p"
			})), h("g", {
				className: "dsh-base-ico-spark dsh-base-ico-spark--3",
				fill: "#fff",
				key: "sp3"
			}, h("path", {
				d: "M21.1 17.2l.3.76.76.3-.76.3-.3.76-.3-.76-.76-.3.76-.3z",
				key: "p"
			})), h("g", {
				className: "dsh-base-ico-spark dsh-base-ico-spark--4",
				fill: "#ffd75e",
				key: "sp4"
			}, h("path", {
				d: "M5.7 3.9l.3.76.76.3-.76.3-.3.76-.3-.76-.76-.3.76-.3z",
				key: "p"
			})));
		}
		function issueClusterIcon(h, size = 16, uid) {
			return h("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				className: SVG_CLASS + " dsh-base-cluster__svg--issue",
				"aria-hidden": "true",
				focusable: "false"
			}, h("defs", { key: "defs" }, h("linearGradient", {
				id: gradientId("ia", uid),
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				key: "ia"
			}, h("stop", {
				offset: "0",
				stopColor: "#ffa3b5",
				key: "s1"
			}), h("stop", {
				offset: ".5",
				stopColor: "#ff6b8a",
				key: "s2"
			}), h("stop", {
				offset: "1",
				stopColor: "#f43f5e",
				key: "s3"
			}))), h("g", {
				className: "dsh-base-ico-bubble",
				key: "bubble"
			}, h("path", {
				d: "M6.6 4.4h10.8A3.6 3.6 0 0 1 21 8v6.2a3.6 3.6 0 0 1-3.6 3.6h-6.1l-4.4 3.4a.72.72 0 0 1-1.15-.57v-2.83H6.6A3.6 3.6 0 0 1 3 14.2V8a3.6 3.6 0 0 1 3.6-3.6z",
				fill: "url(#" + gradientId("ia", uid) + ")",
				key: "bubble"
			}), h("ellipse", {
				cx: 7.3,
				cy: 6.2,
				rx: 3.3,
				ry: 1.3,
				fill: "#fff",
				opacity: ".3",
				key: "shine"
			}), h("rect", {
				className: "dsh-base-ico-bang",
				x: 11.05,
				y: 6.55,
				width: 1.9,
				height: 5.35,
				rx: ".95",
				fill: "#fff",
				key: "stem"
			}), h("circle", {
				className: "dsh-base-ico-bang",
				cx: 12,
				cy: 14.15,
				r: 1.02,
				fill: "#fff",
				key: "dot"
			})), h("g", {
				className: "dsh-base-ico-spark",
				fill: "#fff",
				opacity: ".9",
				key: "spark"
			}, h("path", {
				d: "M19.7 2.2l.46 1.15 1.15.46-1.15.46-.46 1.15-.46-1.15-1.15-.46 1.15-.46z",
				key: "p"
			})));
		}
		function moreClusterIcon(h, size = 16) {
			return h("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				className: SVG_CLASS + " dsh-base-cluster__svg--more",
				"aria-hidden": "true",
				focusable: "false"
			}, h("g", {
				fill: "currentColor",
				key: "dots"
			}, h("circle", {
				cx: 5.5,
				cy: 12,
				r: 1.8,
				key: "a"
			}), h("circle", {
				cx: 12,
				cy: 12,
				r: 1.8,
				key: "b"
			}), h("circle", {
				cx: 18.5,
				cy: 12,
				r: 1.8,
				key: "c"
			})));
		}
		var DEFAULT_SIZE = 16;
		var DEFAULT_GAP = 4;
		var BUTTON_PADDING = 12;
		function trimSlashes2(url) {
			return url.replace(/\/+$/, "");
		}
		function classes2(...parts) {
			return parts.filter(Boolean).join(" ");
		}
		function actionClass(id) {
			return "dsh-base-cluster__btn--" + id.replace(/[^a-zA-Z0-9_-]/g, "-");
		}
		function createActionCluster(React, deps) {
			const h = React.createElement;
			function defaultItems(size, uid) {
				const repo = deps.repoUrl;
				const issues = deps.issuesUrl ?? (repo ? trimSlashes2(repo) + "/issues" : void 0);
				const items = [{
					id: "contact",
					icon: contactClusterIcon(h, size, uid + "c"),
					label: deps.text("contact"),
					tip: deps.text("contactTip"),
					onClick: (trigger) => deps.openContact(trigger)
				}];
				if (repo) items.push({
					id: "star",
					icon: starClusterIcon(h, size, uid + "s"),
					label: deps.text("starLabel"),
					tip: deps.text("starTip"),
					href: repo
				});
				if (issues) items.push({
					id: "issue",
					icon: issueClusterIcon(h, size, uid + "i"),
					label: deps.text("issueLabel"),
					tip: deps.text("issueTip"),
					href: issues
				});
				return items;
			}
			function ActionCluster(props) {
				const size = props.size ?? DEFAULT_SIZE;
				const gap = props.gap ?? DEFAULT_GAP;
				const uid = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
				const tip = React.useMemo(() => createTipController(), []);
				const [menuOpen, setMenuOpen] = React.useState(false);
				const moreRef = React.useRef(null);
				const menuRef = React.useRef(null);
				React.useEffect(() => () => tip.dispose(), [tip]);
				const items = props.items ?? defaultItems(size, uid);
				const cap = props.maxVisible === void 0 ? items.length : Math.max(0, Math.floor(props.maxVisible));
				const visible = items.slice(0, Math.min(items.length, cap));
				const overflow = items.slice(visible.length);
				const overflowLabel = props.overflowLabel ?? deps.text("moreActions");
				const showTip = (anchor, item) => {
					if (item.disabled || !item.tip) return;
					tip.show(anchor, item.tip);
				};
				const hideTip = () => tip.hideSoon();
				const renderButton = (item) => {
					const icon = h("span", {
						className: "dsh-base-cluster__icon",
						key: "icon",
						"aria-hidden": "true"
					}, item.icon);
					const shared = {
						className: classes2("dsh-base-cluster__btn", actionClass(item.id), item.className),
						style: {
							width: size + BUTTON_PADDING,
							height: size + BUTTON_PADDING
						},
						"aria-label": item.label,
						"data-cluster-item": item.id,
						onMouseEnter: (event) => showTip(event.currentTarget, item),
						onMouseLeave: hideTip,
						onFocus: (event) => showTip(event.currentTarget, item),
						onBlur: hideTip
					};
					if (item.disabled) return h("button", {
						...shared,
						key: item.id,
						type: "button",
						disabled: true,
						"aria-disabled": "true"
					}, icon);
					if (item.href) return h("a", {
						...shared,
						key: item.id,
						href: item.href,
						target: "_blank",
						rel: "noreferrer noopener",
						onClick: (event) => {
							item.onClick?.(event.currentTarget);
						}
					}, icon);
					return h("button", {
						...shared,
						key: item.id,
						type: "button",
						onClick: (event) => {
							item.onClick?.(event.currentTarget);
						}
					}, icon);
				};
				const renderMenuItem = (item) => {
					const icon = h("span", {
						className: "dsh-base-cluster__icon",
						key: "icon",
						"aria-hidden": "true"
					}, item.icon);
					const label = h("span", {
						className: "dsh-base-cluster__menu-label",
						key: "label"
					}, item.label);
					const shared = {
						className: "dsh-base-cluster__menu-item",
						role: "menuitem",
						"data-cluster-item": item.id
					};
					if (item.disabled) return h("button", {
						...shared,
						key: item.id,
						type: "button",
						disabled: true
					}, icon, label);
					if (item.href) return h("a", {
						...shared,
						key: item.id,
						href: item.href,
						target: "_blank",
						rel: "noreferrer noopener",
						onClick: (event) => {
							item.onClick?.(event.currentTarget);
							setMenuOpen(false);
						}
					}, icon, label);
					return h("button", {
						...shared,
						key: item.id,
						type: "button",
						onClick: (event) => {
							item.onClick?.(event.currentTarget);
							setMenuOpen(false);
						}
					}, icon, label);
				};
				const overflowButton = overflow.length > 0 ? h("button", {
					key: "__more",
					ref: moreRef,
					type: "button",
					className: classes2("dsh-base-cluster__btn", "dsh-base-cluster__btn--more", menuOpen && "is-open"),
					style: {
						width: size + BUTTON_PADDING,
						height: size + BUTTON_PADDING
					},
					"aria-label": overflowLabel,
					"aria-haspopup": "menu",
					"aria-expanded": menuOpen,
					"data-cluster-item": "__more",
					onMouseEnter: (event) => {
						if (!menuOpen) tip.show(event.currentTarget, overflowLabel);
					},
					onMouseLeave: hideTip,
					onFocus: (event) => {
						if (!menuOpen) tip.show(event.currentTarget, overflowLabel);
					},
					onBlur: hideTip,
					onClick: (event) => {
						event.stopPropagation();
						setMenuOpen((open) => !open);
					}
				}, h("span", {
					className: "dsh-base-cluster__icon",
					key: "icon",
					"aria-hidden": "true"
				}, moreClusterIcon(h, size))) : null;
				const menu = overflow.length > 0 && menuOpen ? h("div", {
					key: "menu",
					ref: menuRef,
					className: "dsh-base-cluster__menu",
					role: "menu",
					"aria-label": props.ariaLabel ?? deps.text("actionsLabel")
				}, overflow.map(renderMenuItem)) : null;
				React.useEffect(() => {
					if (!menuOpen) return void 0;
					if (typeof document === "undefined") return void 0;
					const onPointerDown = (event) => {
						const target = event.target;
						if (target && (menuRef.current?.contains(target) || moreRef.current?.contains(target))) return;
						setMenuOpen(false);
					};
					const onKeyDown = (event) => {
						if (event.key !== "Escape") return;
						setMenuOpen(false);
						moreRef.current?.focus();
					};
					document.addEventListener("pointerdown", onPointerDown, true);
					document.addEventListener("keydown", onKeyDown, true);
					(menuRef.current?.querySelector("[role='menuitem']"))?.focus();
					return () => {
						document.removeEventListener("pointerdown", onPointerDown, true);
						document.removeEventListener("keydown", onKeyDown, true);
					};
				}, [menuOpen]);
				return h("div", {
					className: classes2("dsh-base-cluster", props.variant === "tray" && "dsh-base-cluster--tray", props.className),
					role: "group",
					"aria-label": props.ariaLabel ?? deps.text("actionsLabel"),
					style: { gap: gap + "px" }
				}, visible.map(renderButton), overflowButton, menu);
			}
			return ActionCluster;
		}
		var PACKAGE_NAME = "dsh-featherhunter-plugin-base";
		var CONTENT_IMAGE_TIMEOUT_MS = 6e3;
		var MANIFEST_CACHE_TTL_MS = 18e5;
		var MANIFEST_FAILURE_TTL_MS = 6e4;
		var MAX_MANIFEST_BYTES = 524288;
		var UTF8_ENCODER = new TextEncoder();
		function utf8ByteLength(value) {
			return UTF8_ENCODER.encode(value).byteLength;
		}
		var ALLOWED_CDN_HOSTS = [
			"unpkg.com",
			"registry.npmmirror.com",
			"cdn.jsdelivr.net"
		];
		var SEMVER_PATTERN = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;
		var PACKAGE_NAME_PATTERN = /^[a-z0-9][a-z0-9._-]*$/;
		var IMAGE_PATH_PATTERN = /^[a-z0-9][a-z0-9._-]*\.(?:png|jpe?g)$/i;
		var MAX_ID_LENGTH = 64;
		var MAX_TEXT_LENGTH = 200;
		var MAX_NOTE_LENGTH = 300;
		var MAX_PATH_LENGTH = 128;
		function fail(message) {
			throw new Error("manifest: " + message);
		}
		function requireString2(value, field, maxLength) {
			if (typeof value !== "string" || value.length === 0) fail(field + " must be a non-empty string");
			if (value.length > maxLength) fail(field + " is longer than " + maxLength + " characters");
			return value;
		}
		function requireI18nText(value, field) {
			if (!isRecord(value)) fail(field + " must be an object with zh/en");
			requireString2(value["zh"], field + ".zh", MAX_TEXT_LENGTH);
			requireString2(value["en"], field + ".en", MAX_TEXT_LENGTH);
		}
		function parseUrl(value) {
			try {
				return new URL(value);
			} catch {
				return null;
			}
		}
		function isHttpsUrl(value) {
			const url = parseUrl(value);
			return url !== null && url.protocol === "https:";
		}
		function isAllowedCdnUrl(value) {
			const url = parseUrl(value);
			if (!url || url.protocol !== "https:") return false;
			return ALLOWED_CDN_HOSTS.includes(url.hostname);
		}
		function imageUrls(version, path, packageName = PACKAGE_NAME) {
			if (!SEMVER_PATTERN.test(version)) return [];
			if (!IMAGE_PATH_PATTERN.test(path) || path.length > MAX_PATH_LENGTH) return [];
			return ["https://cdn.jsdelivr.net/npm/" + packageName + "@" + version + "/data/img/" + path, "https://registry.npmmirror.com/" + packageName + "/" + version + "/files/data/img/" + path];
		}
		function defaultChannels(packageName = PACKAGE_NAME) {
			const unpkgUrl = "https://unpkg.com/" + packageName + "@latest/data/manifest.json";
			const npmmirrorLatest = "https://registry.npmmirror.com/" + packageName + "/latest";
			const jsdelivrUrl = "https://cdn.jsdelivr.net/npm/" + packageName + "@latest/data/manifest.json";
			return [
				{
					name: "unpkg",
					load: async (context) => ({
						raw: JSON.parse(await context.fetchText(unpkgUrl)),
						url: unpkgUrl
					})
				},
				{
					name: "npmmirror",
					load: async (context) => {
						const latest = await context.fetchJson(npmmirrorLatest);
						const version = isRecord(latest) ? latest["version"] : void 0;
						if (typeof version !== "string" || !SEMVER_PATTERN.test(version)) fail("npmmirror latest is missing a usable version");
						const url = "https://registry.npmmirror.com/" + packageName + "/" + version + "/files/data/manifest.json";
						return {
							raw: JSON.parse(await context.fetchText(url)),
							url
						};
					}
				},
				{
					name: "jsdelivr",
					load: async (context) => ({
						raw: JSON.parse(await context.fetchText(jsdelivrUrl)),
						url: jsdelivrUrl
					})
				}
			];
		}
		function validateRemoteManifest(raw) {
			const manifest = parseManifest(raw);
			if (!SEMVER_PATTERN.test(manifest.version)) fail("version must be a semantic version");
			if (!isHttpsUrl(manifest.fallbackUrl)) fail("fallbackUrl must be https");
			const seen = /* @__PURE__ */ new Set();
			for (const group of manifest.groups) {
				if (group.id.length > MAX_ID_LENGTH) fail("group id is too long");
				if (seen.has(group.id)) fail("duplicate group id " + group.id);
				seen.add(group.id);
				requireString2(group.platform, "group.platform", MAX_ID_LENGTH);
				requireI18nText(group.readmeTitle, "group.readmeTitle");
				requireI18nText(group.alt, "group.alt");
				requireI18nText(group.title, "group.title");
				if (group.subtitle) requireI18nText(group.subtitle, "group.subtitle");
				if (group.note) {
					if (!isRecord(group.note)) fail("group.note must be an object with zh/en");
					requireString2(group.note.zh, "group.note.zh", MAX_NOTE_LENGTH);
					requireString2(group.note.en, "group.note.en", MAX_NOTE_LENGTH);
				}
				requireString2(group.card, "group.card", MAX_PATH_LENGTH);
				if (!IMAGE_PATH_PATTERN.test(group.card)) fail("group.card must be a png/jpg file name");
				if (group.qr.kind === "remote") {
					if (!IMAGE_PATH_PATTERN.test(group.qr.path)) fail("group.qr.path must be a png/jpg file name");
					if (group.qr.path.length > MAX_PATH_LENGTH) fail("group.qr.path is too long");
				} else requireString2(group.qr.key, "group.qr.key", MAX_ID_LENGTH);
			}
			return manifest;
		}
		function toDataUrl(bytes, contentType) {
			let binary = "";
			const chunk = 32768;
			for (let index = 0; index < bytes.length; index += chunk) binary += String.fromCharCode(...bytes.subarray(index, index + chunk));
			return "data:" + (contentType && contentType.startsWith("image/") ? contentType : "image/png") + ";base64," + btoa(binary);
		}
		var sessionCache = null;
		var inFlight = null;
		var ContentLoader = class {
			packageName;
			timeoutMs;
			imageTimeoutMs;
			failureTtlMs;
			maxImageBytes;
			fetchImpl;
			now;
			channels;
			constructor(options = {}) {
				this.packageName = options.packageName ?? PACKAGE_NAME;
				if (!PACKAGE_NAME_PATTERN.test(this.packageName)) throw new Error("invalid package name: " + this.packageName);
				this.timeoutMs = options.timeoutMs ?? 1500;
				this.imageTimeoutMs = options.imageTimeoutMs ?? CONTENT_IMAGE_TIMEOUT_MS;
				this.failureTtlMs = options.failureTtlMs ?? MANIFEST_FAILURE_TTL_MS;
				this.maxImageBytes = options.maxImageBytes ?? 524288;
				this.now = options.now ?? (() => Date.now());
				const injected = options.fetchImpl ?? globalThis.fetch;
				if (typeof injected !== "function") throw new Error("fetch is not available in this environment");
				this.fetchImpl = injected;
				if (options.manifestUrl !== void 0) {
					if (!isHttpsUrl(options.manifestUrl)) throw new Error("manifestUrl must be https");
					const url = options.manifestUrl;
					this.channels = [{
						name: "custom",
						load: async (context) => ({
							raw: JSON.parse(await context.fetchText(url)),
							url
						})
					}];
				} else if (options.channels) this.channels = options.channels.slice();
				else this.channels = defaultChannels(this.packageName);
			}
			/** Success lives 30 minutes; a hard failure only 60 seconds. */
			ttlFor(content) {
				return content === null ? this.failureTtlMs : MANIFEST_CACHE_TTL_MS;
			}
			/** Cached result while it is still inside its own window. */
			getCached() {
				if (!sessionCache) return null;
				if (this.now() - sessionCache.at >= this.ttlFor(sessionCache.content)) return null;
				return sessionCache.content;
			}
			/**
			* Fetch and validate the manifest once per window; concurrent callers share
			* one request. Resolves to null when every channel failed, and that empty
			* result is only kept for a minute so the next open can retry.
			*/
			load() {
				if (sessionCache !== null && this.now() - sessionCache.at < this.ttlFor(sessionCache.content)) return Promise.resolve(sessionCache.content);
				if (inFlight) return inFlight;
				const startedAt = this.now();
				const promise = this.fetchContent(startedAt).then((content) => {
					sessionCache = {
						at: this.now(),
						content
					};
					return content;
				}).finally(() => {
					inFlight = null;
				});
				inFlight = promise;
				return promise;
			}
			/** Prefetch every remote QR image of a manifest (best effort). */
			async ensureImages(content) {
				const pending = [];
				for (const group of content.manifest.groups) {
					if (group.qr.kind !== "remote") continue;
					const key = content.manifest.version + "/" + group.qr.path;
					if (content.images.has(key)) continue;
					pending.push(this.loadImage(content, group.qr.path, key));
				}
				await Promise.all(pending);
			}
			/** Data URI for a remote QR path, or null when it is not prefetched. */
			imageFor(content, path) {
				if (!content) return null;
				return content.images.get(content.manifest.version + "/" + path) ?? null;
			}
			/** Warm the cache: manifest plus images. Never rejects. */
			async preload() {
				try {
					const content = await this.load();
					if (content) await this.ensureImages(content);
				} catch {}
			}
			async loadImage(content, path, key) {
				for (const url of imageUrls(content.manifest.version, path, this.packageName)) {
					if (!isAllowedCdnUrl(url)) continue;
					try {
						const data = await this.fetchImage(url);
						if (data) {
							content.images.set(key, data);
							return;
						}
					} catch {}
				}
			}
			async fetchImage(url) {
				const response = await this.request(url, this.imageTimeoutMs);
				if (!response.ok) return null;
				const declared = Number(response.headers.get("content-length"));
				if (Number.isFinite(declared) && declared > this.maxImageBytes) return null;
				const buffer = await response.arrayBuffer();
				if (buffer.byteLength > this.maxImageBytes) return null;
				return toDataUrl(new Uint8Array(buffer), response.headers.get("content-type"));
			}
			async fetchContent(fetchedAt) {
				const context = {
					packageName: this.packageName,
					fetchText: (url) => this.fetchText(url),
					fetchJson: async (url) => JSON.parse(await this.fetchText(url))
				};
				for (const channel of this.channels) try {
					return {
						manifest: validateRemoteManifest((await channel.load(context)).raw),
						source: channel.name,
						fetchedAt,
						images: /* @__PURE__ */ new Map()
					};
				} catch {}
				return null;
			}
			async fetchText(url) {
				const response = await this.request(url);
				if (!response.ok) throw new Error("HTTP " + response.status);
				const declared = Number(response.headers.get("content-length"));
				if (Number.isFinite(declared) && declared > 524288) throw new Error("manifest text exceeds " + MAX_MANIFEST_BYTES + " bytes");
				const text = await response.text();
				if (utf8ByteLength(text) > 524288) throw new Error("manifest text exceeds " + MAX_MANIFEST_BYTES + " bytes");
				return text;
			}
			/** One request with its own abort window; the timer is always cleared. */
			async request(url, timeoutMs = this.timeoutMs) {
				if (!isAllowedCdnUrl(url)) throw new Error("blocked url: " + url);
				const controller = typeof AbortController === "function" ? new AbortController() : null;
				let timer;
				const timeout = new Promise((_resolve, reject) => {
					timer = setTimeout(() => {
						if (controller) controller.abort();
						reject(/* @__PURE__ */ new Error("timeout after " + timeoutMs + "ms"));
					}, timeoutMs);
				});
				try {
					const request = this.fetchImpl(url, {
						signal: controller ? controller.signal : void 0,
						cache: "no-store",
						credentials: "omit"
					});
					request.catch(() => {});
					return await Promise.race([request, timeout]);
				} finally {
					if (timer !== void 0) clearTimeout(timer);
				}
			}
		};
		function createContentLoader(options = {}) {
			return new ContentLoader(options);
		}
		var BASE_STYLE_ID = "dsh-base-ui-style";
		function rowSkin(className) {
			return [
				"." + className + "{display:flex;align-items:center;gap:8px;min-width:0;padding:7px 4px;border-radius:6px;color:inherit;text-decoration:none;transition:background .15s ease}",
				"." + className + ":hover{background:rgba(127,127,127,.1)}",
				"." + className + ":focus-visible{outline:2px solid #4d6bfe;outline-offset:2px}"
			];
		}
		var BASE_CSS = [
			".dsh-base-contact-button{display:inline-flex;align-items:center;justify-content:center;padding:6px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;line-height:0;cursor:pointer;transition:background .15s ease}",
			".dsh-base-contact-button:hover{background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.12))}",
			".dsh-base-contact-button:focus-visible{outline:2px solid var(--dsw-alias-link,#4d6bfe);outline-offset:2px}",
			".dsh-base-contact-button__icon{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto}",
			".dsh-base-contact-button__icon svg{display:block}",
			...rowSkin("dsh-base-contact-row"),
			".dsh-base-contact-row{border:0;background:transparent;font:inherit;text-align:left;cursor:pointer;width:100%;text-decoration:none}",
			".dsh-base-contact-row__icon{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--dsw-alias-label-secondary,#86909c)}",
			".dsh-base-contact-row__icon svg{display:block}",
			".dsh-base-contact-row__label{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;line-height:1.5}",
			".dsh-base-contact-row__hint{font-size:12px;color:var(--dsw-alias-label-tertiary,#a9aeb8)}",
			".dsh-base-contact-row__ext{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--dsw-alias-label-tertiary,#a9aeb8)}",
			".dsh-base-contact-row__ext svg{display:block}",
			".dsh-base-icon-action{display:inline-flex;align-items:center;justify-content:center;padding:6px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;line-height:0;text-decoration:none;cursor:pointer;transition:background .15s ease,color .15s ease}",
			".dsh-base-icon-action:hover{background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.12))}",
			".dsh-base-icon-action:focus-visible{outline:2px solid var(--dsw-alias-link,#4d6bfe);outline-offset:2px}",
			".dsh-base-icon-action__icon{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto}",
			".dsh-base-icon-action__icon svg{display:block}",
			".dsh-base-actions{display:inline-flex;flex:0 0 auto;align-items:center;gap:2px}",
			".dsh-base-actions--group{gap:0;padding:1px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.2));border-radius:10px;background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.04))}",
			".dsh-base-cluster{position:relative;display:inline-flex;flex:0 0 auto;align-items:center;gap:var(--dsh-base-cluster-gap,4px);color:inherit}",
			".dsh-base-cluster--tray{gap:0;padding:1px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.2));border-radius:10px;background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.04))}",
			".dsh-base-cluster__btn{--dsh-base-glow:rgba(127,127,127,.42);position:relative;isolation:isolate;display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;padding:0;border:0;border-radius:8px;background:transparent;color:inherit;font:inherit;line-height:0;text-decoration:none;cursor:pointer;transition:transform .1s ease}",
			".dsh-base-cluster__btn::before{content:'';position:absolute;inset:-10px;z-index:0;border-radius:50%;background:radial-gradient(circle at 50% 50%,var(--dsh-base-glow) 0%,transparent 62%);opacity:0;transform:scale(.5);transition:opacity .16s ease,transform .2s ease;pointer-events:none}",
			".dsh-base-cluster__btn:hover::before,.dsh-base-cluster__btn.is-hover::before,.dsh-base-cluster__btn.is-open::before{opacity:.85;transform:scale(1)}",
			".dsh-base-cluster__btn:active,.dsh-base-cluster__btn.is-active{transform:translateY(1px) scale(.88)}",
			".dsh-base-cluster__btn:active::before,.dsh-base-cluster__btn.is-active::before{opacity:.95;transform:scale(1.02)}",
			".dsh-base-cluster__btn:focus-visible,.dsh-base-cluster__btn.is-focus{outline:2px solid var(--dsw-alias-link,#4d6bfe);outline-offset:2px}",
			".dsh-base-cluster__btn:disabled{opacity:.38;filter:grayscale(1) saturate(.25);cursor:default}",
			".dsh-base-cluster__btn:disabled::before{display:none}",
			".dsh-base-cluster__icon{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;line-height:0}",
			".dsh-base-cluster__icon svg{display:block;overflow:visible}",
			".dsh-base-cluster__btn--contact{--dsh-base-glow:rgba(79,139,255,.55)}",
			".dsh-base-cluster__btn--star{--dsh-base-glow:rgba(255,193,46,.6)}",
			".dsh-base-cluster__btn--issue{--dsh-base-glow:rgba(255,107,138,.55)}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--contact .dsh-base-ico-bob,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--contact .dsh-base-ico-bob{animation:dsh-base-cluster-floaty 2.4s ease-in-out infinite}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--contact .dsh-base-ico-dot,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--contact .dsh-base-ico-dot{animation:dsh-base-cluster-dotpulse 1.2s ease-in-out infinite}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--contact .dsh-base-ico-dot--2,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--contact .dsh-base-ico-dot--2{animation-delay:.18s}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--contact .dsh-base-ico-dot--3,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--contact .dsh-base-ico-dot--3{animation-delay:.36s}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--star .dsh-base-ico-bigstar,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--star .dsh-base-ico-bigstar{animation:dsh-base-cluster-twinkle 1.7s ease-in-out infinite}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--star .dsh-base-ico-halo,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--star .dsh-base-ico-halo{animation:dsh-base-cluster-halo 1.7s ease-in-out infinite}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--star .dsh-base-ico-spark,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--star .dsh-base-ico-spark{animation:dsh-base-cluster-blink 1.3s ease-in-out infinite}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--star .dsh-base-ico-spark--2,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--star .dsh-base-ico-spark--2{animation-delay:.22s}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--star .dsh-base-ico-spark--3,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--star .dsh-base-ico-spark--3{animation-delay:.44s}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--star .dsh-base-ico-spark--4,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--star .dsh-base-ico-spark--4{animation-delay:.66s}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--issue .dsh-base-ico-bubble,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--issue .dsh-base-ico-bubble{animation:dsh-base-cluster-wiggle 1.1s ease-in-out infinite}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--issue .dsh-base-ico-bang,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--issue .dsh-base-ico-bang{animation:dsh-base-cluster-bounce 1.1s ease-in-out infinite}",
			".dsh-base-cluster__btn:hover .dsh-base-cluster__svg--issue .dsh-base-ico-spark,.dsh-base-cluster__btn.is-hover .dsh-base-cluster__svg--issue .dsh-base-ico-spark{animation:dsh-base-cluster-blink 1.2s ease-in-out .3s infinite}",
			"@keyframes dsh-base-cluster-floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.8px)}}",
			"@keyframes dsh-base-cluster-dotpulse{0%,100%{opacity:.35;transform:scale(.75)}50%{opacity:1;transform:scale(1.18)}}",
			"@keyframes dsh-base-cluster-twinkle{0%,100%{transform:scale(1) rotate(0);filter:brightness(1)}45%{transform:scale(1.1) rotate(7deg);filter:brightness(1.2)}}",
			"@keyframes dsh-base-cluster-halo{0%,100%{opacity:.3;transform:scale(.9)}50%{opacity:.85;transform:scale(1.1)}}",
			"@keyframes dsh-base-cluster-blink{0%,100%{opacity:.18;transform:scale(.55)}50%{opacity:1;transform:scale(1.15)}}",
			"@keyframes dsh-base-cluster-wiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-5deg)}70%{transform:rotate(5deg)}}",
			"@keyframes dsh-base-cluster-bounce{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-1.6px) scale(1.05)}}",
			".dsh-base-cluster__menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2147482000;display:flex;flex-direction:column;gap:2px;min-width:170px;padding:6px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.2));border-radius:10px;background:var(--dsw-alias-bg-layer-2,#fff);box-shadow:0 12px 32px rgba(0,0,0,.18)}",
			".dsh-base-cluster__menu-item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 8px;border:0;border-radius:8px;background:transparent;color:inherit;font:inherit;font-size:12.5px;line-height:1.5;text-align:left;text-decoration:none;cursor:pointer}",
			".dsh-base-cluster__menu-item:hover{background:rgba(127,127,127,.12)}",
			".dsh-base-cluster__menu-item:focus-visible{outline:2px solid var(--dsw-alias-link,#4d6bfe);outline-offset:-2px}",
			".dsh-base-cluster__menu-item:disabled{opacity:.38;cursor:default}",
			".dsh-base-cluster__menu-label{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
			"@media (prefers-reduced-motion:reduce){.dsh-base-cluster__btn,.dsh-base-cluster__btn::before,.dsh-base-cluster__btn svg *{animation:none!important;transition:none!important}}",
			".dsh-base-tip-anchor{display:inline-flex;align-items:center}",
			".dsh-base-tip{position:fixed;z-index:2147483000;max-width:320px;padding:6px 10px;border-radius:8px;background:rgba(23,23,26,.94);color:#fff;font-size:12px;font-weight:400;line-height:1.55;letter-spacing:0;text-align:left;white-space:normal;overflow-wrap:anywhere;pointer-events:none;box-shadow:0 8px 24px rgba(0,0,0,.28);opacity:0;transform:translateY(2px);transition:opacity .12s ease,transform .12s ease}",
			".dsh-base-tip[data-side='bottom']{transform:translateY(-2px)}",
			".dsh-base-tip[data-show='true']{opacity:1;transform:none}",
			".dsh-base-modal{position:fixed;inset:0;margin:auto;width:min(800px,92vw);max-width:min(800px,92vw);max-height:88vh;padding:0;border:0;border-radius:18px;background:var(--dsw-alias-bg-layer-2,#fff);color:var(--dsw-alias-label-primary,#1f2329);box-shadow:0 24px 64px rgba(0,0,0,.24);overflow:hidden}",
			".dsh-base-modal[open]{display:block}",
			".dsh-base-modal::backdrop{background:rgba(0,0,0,.45)}",
			".dsh-base-modal__panel{display:flex;flex-direction:column;max-height:88vh}",
			".dsh-base-modal__header{position:relative;padding:22px 56px 8px;text-align:center}",
			".dsh-base-modal__heading{display:flex;flex-direction:column;align-items:center;gap:2px}",
			".dsh-base-modal__kicker{display:block;font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--dsw-alias-label-tertiary,#86909c)}",
			".dsh-base-modal__title{margin:0;font-size:18px;font-weight:600;line-height:1.4;letter-spacing:.01em;color:var(--dsw-alias-label-primary,#1f2329)}",
			".dsh-base-modal__close{position:absolute;top:14px;right:14px;width:32px;height:32px;padding:0;border:0;border-radius:10px;background:transparent;color:var(--dsw-alias-label-tertiary,#86909c);font:inherit;font-size:20px;line-height:1;cursor:pointer;transition:background .15s ease,color .15s ease}",
			".dsh-base-modal__close:hover{background:var(--dsw-alias-fill-tsp-secondary,rgba(0,0,0,.06));color:var(--dsw-alias-label-primary,#1f2329)}",
			".dsh-base-modal__close:focus-visible{outline:2px solid var(--dsw-alias-link,#4d6bfe);outline-offset:2px}",
			".dsh-base-modal__welcome{margin:4px auto 16px;padding:0 24px;font-size:13px;line-height:1.75;color:var(--dsw-alias-label-secondary,#4e5969);text-align:center;max-width:640px}",
			".dsh-base-modal__body{flex:1 1 auto;min-height:0;padding:0 24px 18px;overflow:auto;overscroll-behavior:contain}",
			".dsh-base-modal__grid{display:grid;grid-template-columns:repeat(var(--dsh-base-columns,4),minmax(0,1fr));gap:14px;align-items:start}",
			".dsh-base-modal__card{display:flex;flex-direction:column;align-items:stretch;gap:6px;min-width:0;padding:14px 12px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.2));border-radius:14px;background:var(--dsw-alias-bg-layer-2,#fff);text-align:center}",
			".dsh-base-modal__card--expired{background:var(--dsw-alias-state-warn-tertiary,#fffaf3);border-color:var(--dsw-alias-state-warn-secondary,rgba(180,83,9,.28))}",
			".dsh-base-modal__card-title{margin:0;font-size:13px;font-weight:600;line-height:1.4;color:var(--dsw-alias-label-primary,#1f2329)}",
			".dsh-base-modal__card-subtitle{display:inline-block;align-self:center;margin:0;padding:2px 6px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-tertiary,#86909c);font:inherit;font-size:11px;line-height:1.5;cursor:pointer;transition:background .15s ease,color .15s ease}",
			".dsh-base-modal__card-subtitle:hover{background:rgba(127,127,127,.1);color:var(--dsw-alias-label-secondary,#4e5969)}",
			".dsh-base-modal__card-subtitle[data-copied='true']{color:var(--dsw-alias-link,#4d6bfe)}",
			".dsh-base-modal__card-subtitle:focus-visible{outline:2px solid var(--dsw-alias-link,#4d6bfe);outline-offset:2px}",
			".dsh-base-modal__qr{box-sizing:border-box;max-width:100%;width:100%;height:auto;min-height:150px;padding:6px;border-radius:8px;background:#fff;object-fit:contain;image-rendering:pixelated}",
			".dsh-base-modal__card-note{margin-top:2px;font-size:10.5px;line-height:1.5;color:var(--dsw-alias-label-tertiary,#86909c)}",
			".dsh-base-modal__card-expired{margin-top:2px;font-size:10.5px;line-height:1.5;color:var(--dsw-alias-state-warn-label,#b45309)}",
			".dsh-base-modal__card-link{align-self:center;margin-top:4px;padding:6px 10px;border:1px solid var(--dsw-alias-border-l2,rgba(77,107,254,.35));border-radius:8px;color:var(--dsw-alias-link,#4d6bfe);font-size:11.5px;line-height:1.4;text-decoration:none;word-break:break-all}",
			".dsh-base-modal__card-link:hover{background:var(--dsw-alias-fill-tsp-secondary,rgba(77,107,254,.08))}",
			".dsh-base-modal__card-link:focus-visible{outline:2px solid var(--dsw-alias-link,#4d6bfe);outline-offset:2px}",
			".dsh-base-modal__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:4px 10px;padding:0 24px 18px;font-size:11.5px;line-height:1.6;color:var(--dsw-alias-label-tertiary,#86909c);text-align:center}",
			".dsh-base-modal__mobile-hint{display:none}",
			".dsh-base-plugins{display:flex;flex-direction:column;gap:10px;padding:12px 14px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.2));border-radius:10px;background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.06))}",
			".dsh-base-plugins__title{display:flex;align-items:center;gap:6px;margin:0;font-size:13px;font-weight:600;line-height:1.4;color:inherit}",
			".dsh-base-plugins__title-icon{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--dsw-alias-label-secondary,#86909c)}",
			".dsh-base-plugins__title-icon svg{display:block}",
			".dsh-base-plugins__list{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}",
			".dsh-base-plugins__item{min-width:0}",
			...rowSkin("dsh-base-plugins__row"),
			".dsh-base-plugins__icon{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--dsw-alias-label-secondary,#86909c)}",
			".dsh-base-plugins__icon svg{display:block}",
			".dsh-base-plugins__name{flex:0 0 auto;font-family:var(--ds-font-family-code,Consolas,Menlo,monospace);font-size:12px;font-weight:650;line-height:1.5;white-space:nowrap;color:inherit}",
			".dsh-base-plugins__desc{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;line-height:1.5;color:var(--dsw-alias-label-secondary,#86909c)}",
			".dsh-base-plugins__ext{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--dsw-alias-label-tertiary,#a9aeb8)}",
			".dsh-base-plugins__ext svg{display:block}",
			"@media (max-width:719px){.dsh-base-modal__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}",
			"@media (max-width:479px){.dsh-base-modal__grid{grid-template-columns:minmax(0,1fr)}}",
			"@media (max-width:719px){.dsh-base-modal__mobile-hint{display:inline}}",
			"@media (prefers-reduced-motion:reduce){.dsh-base-modal__close,.dsh-base-modal__card-subtitle,.dsh-base-contact-button,.dsh-base-contact-row,.dsh-base-plugins__row,.dsh-base-icon-action,.dsh-base-tip{transition:none}}"
		].join("\n");
		function ensureBaseStyles(doc) {
			if (doc.getElementById("dsh-base-ui-style")) return;
			const style = doc.createElement("style");
			style.id = BASE_STYLE_ID;
			style.textContent = BASE_CSS;
			(doc.head ?? doc.documentElement).appendChild(style);
		}
		var MESSAGES = {
			zh: {
				contact: "联系我们",
				contactHint: "加入交流群",
				kicker: "CONNECT",
				modalTitle: "反馈与联系",
				welcome: "👏欢迎提交PR、ISSUE。星星之火可以燎原🔥有任何建议、意见、想法、吐槽、idea都可以进群交流。",
				scanHint: "扫描二维码加入我们",
				mobileHint: "请在手机上扫码，或复制群号搜索",
				close: "关闭",
				copyHint: "点击复制",
				copied: "已复制",
				expired: "该二维码已过期，请点击下方链接获取最新群码",
				fallback: "点此获取最新群二维码",
				plugins: "作者的其他插件",
				contactTip: "扫码加入交流群，反馈、建议、idea 都欢迎🎉",
				starTip: "您的🌟是我夜空中最亮的星🌹",
				issueTip: "任何功能需求、故障、建议、意见都可以提ISSUE问题单🙏",
				starLabel: "Star 这个项目",
				issueLabel: "提交 Issue",
				actionsLabel: "快捷操作",
				moreActions: "更多操作"
			},
			en: {
				contact: "Contact us",
				contactHint: "Join the community",
				kicker: "CONNECT",
				modalTitle: "Feedback and Contact",
				welcome: "👏Welcome PRs and issues. A single spark can start a prairie fire 🔥. Any suggestion, opinion, idea or rant — come join the group and talk.",
				scanHint: "Scan the QR code to join us",
				mobileHint: "Scan with your phone, or copy the group ID to search",
				close: "Close",
				copyHint: "Click to copy",
				copied: "Copied",
				expired: "This QR code has expired. Use the link below for the latest one.",
				fallback: "Get the latest QR code",
				plugins: "More plugins by the author",
				contactTip: "Scan to join the community — feedback, ideas and rants are all welcome 🎉",
				starTip: "Your ⭐ is the brightest star in my night sky 🌹",
				issueTip: "Feature requests, bugs or ideas — just open an ISSUE ticket 🙏",
				starLabel: "Star this project",
				issueLabel: "Open an issue",
				actionsLabel: "Quick actions",
				moreActions: "More actions"
			}
		};
		function resolveText(key, lang, overrides) {
			const custom = overrides?.[key];
			if (typeof custom === "string" && custom.length > 0) return custom;
			return MESSAGES[lang][key];
		}
		var TITLE_ID = "dsh-base-modal-title";
		var DESC_ID = "dsh-base-modal-desc";
		var FOCUSABLE_SELECTOR = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
		function mountContactModal(config) {
			const { doc, lang } = config;
			const win = doc.defaultView;
			let current = config;
			const t = (key) => resolveText(key, lang, config.texts);
			ensureBaseStyles(doc);
			const dialog = doc.createElement("dialog");
			dialog.className = "dsh-base-modal";
			dialog.setAttribute("role", "dialog");
			dialog.setAttribute("aria-modal", "true");
			dialog.setAttribute("aria-labelledby", TITLE_ID);
			dialog.setAttribute("aria-describedby", DESC_ID);
			const panel = doc.createElement("div");
			panel.className = "dsh-base-modal__panel";
			const header = doc.createElement("div");
			header.className = "dsh-base-modal__header";
			const heading = doc.createElement("div");
			heading.className = "dsh-base-modal__heading";
			const kicker = doc.createElement("span");
			kicker.className = "dsh-base-modal__kicker";
			kicker.textContent = t("kicker");
			const title = doc.createElement("h2");
			title.id = TITLE_ID;
			title.className = "dsh-base-modal__title";
			title.textContent = t("modalTitle");
			heading.append(kicker, title);
			const closeButton = doc.createElement("button");
			closeButton.type = "button";
			closeButton.className = "dsh-base-modal__close";
			closeButton.setAttribute("aria-label", t("close"));
			closeButton.title = t("close");
			closeButton.textContent = "×";
			header.append(heading, closeButton);
			const welcome = doc.createElement("p");
			welcome.id = DESC_ID;
			welcome.className = "dsh-base-modal__welcome";
			welcome.textContent = t("welcome");
			const body = doc.createElement("div");
			body.className = "dsh-base-modal__body";
			const grid = doc.createElement("div");
			grid.className = "dsh-base-modal__grid";
			function renderGroups(groups, columns) {
				grid.style.setProperty("--dsh-base-columns", String(columns));
				grid.replaceChildren(...sortByOrder(groups).map((group) => buildCard(group)));
			}
			renderGroups(current.groups, current.columns);
			body.append(grid);
			const footer = doc.createElement("div");
			footer.className = "dsh-base-modal__footer";
			const scanHint = doc.createElement("span");
			scanHint.className = "dsh-base-modal__hint";
			scanHint.textContent = t("scanHint");
			const mobileHint = doc.createElement("span");
			mobileHint.className = "dsh-base-modal__mobile-hint";
			mobileHint.textContent = t("mobileHint");
			footer.append(scanHint, mobileHint);
			panel.append(header, welcome, body, footer);
			dialog.append(panel);
			const previousOverflow = doc.body.style.overflow;
			doc.body.style.overflow = "hidden";
			let closed = false;
			function destroy(restoreFocus = true) {
				if (closed) return;
				closed = true;
				if (typeof dialog.close === "function" && dialog.hasAttribute("open")) try {
					dialog.close();
				} catch {
					dialog.removeAttribute("open");
				}
				if (dialog.isConnected) {
					dialog.remove();
					doc.body.style.overflow = previousOverflow;
				}
				if (restoreFocus && config.trigger && config.trigger.isConnected && typeof config.trigger.focus === "function") config.trigger.focus();
			}
			function trapFocus(event) {
				const focusable = Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR)).filter((element) => !element.hasAttribute("disabled"));
				if (focusable.length === 0) return;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				const active = doc.activeElement;
				if (event.shiftKey) {
					if (active === first || !dialog.contains(active)) {
						event.preventDefault();
						last.focus();
					}
				} else if (active === last || !dialog.contains(active)) {
					event.preventDefault();
					first.focus();
				}
			}
			dialog.addEventListener("keydown", (event) => {
				if (event.key === "Escape") {
					event.preventDefault();
					destroy(true);
					return;
				}
				if (event.key === "Tab") trapFocus(event);
			});
			dialog.addEventListener("cancel", (event) => {
				event.preventDefault();
				destroy(true);
			});
			dialog.addEventListener("click", (event) => {
				if (event.target === dialog) destroy(true);
			});
			dialog.addEventListener("close", () => destroy(true));
			closeButton.addEventListener("click", () => destroy(true));
			doc.body.append(dialog);
			let inTopLayer = false;
			if (typeof dialog.showModal === "function") try {
				dialog.showModal();
				inTopLayer = true;
			} catch {
				inTopLayer = false;
			}
			if (!inTopLayer) dialog.setAttribute("open", "");
			closeButton.focus();
			function buildCard(group) {
				const card = doc.createElement("div");
				card.className = "dsh-base-modal__card";
				card.dataset.groupId = group.id;
				const expired = isExpired(group.validUntil, current.now);
				if (expired) card.classList.add("dsh-base-modal__card--expired");
				const qrSrc = expired ? null : current.resolveQr(group);
				const cardTitle = doc.createElement("h3");
				cardTitle.className = "dsh-base-modal__card-title";
				cardTitle.textContent = pickText(group.title, lang);
				card.append(cardTitle);
				if (group.subtitle) {
					const subtitle = doc.createElement("button");
					subtitle.type = "button";
					subtitle.className = "dsh-base-modal__card-subtitle";
					subtitle.textContent = pickText(group.subtitle, lang);
					subtitle.title = t("copyHint");
					subtitle.addEventListener("click", () => copyText(subtitle, subtitle.textContent ?? ""));
					card.append(subtitle);
				}
				if (qrSrc) {
					const image = doc.createElement("img");
					image.className = "dsh-base-modal__qr";
					image.src = qrSrc;
					image.alt = pickText(group.alt, lang);
					image.loading = "lazy";
					image.decoding = "async";
					card.append(image);
				}
				if (expired) {
					const note = doc.createElement("span");
					note.className = "dsh-base-modal__card-expired";
					note.textContent = t("expired");
					card.append(note);
				} else {
					const noteText = formatValidity(group.validUntil, {
						lang,
						now: current.now
					}) ?? (group.note ? pickText(group.note, lang) : null);
					if (noteText) {
						const note = doc.createElement("span");
						note.className = "dsh-base-modal__card-note";
						note.textContent = noteText;
						card.append(note);
					}
				}
				if (!qrSrc) {
					const link = doc.createElement("a");
					link.className = "dsh-base-modal__card-link";
					link.href = current.fallbackUrl;
					link.target = "_blank";
					link.rel = "noopener noreferrer";
					link.textContent = t("fallback");
					card.append(link);
				}
				return card;
			}
			function copyText(button, text) {
				const markCopied = () => {
					button.dataset.copied = "true";
					button.setAttribute("aria-label", t("copied"));
				};
				const selectText = () => {
					const selection = win?.getSelection?.();
					if (!selection) return;
					const range = doc.createRange();
					range.selectNodeContents(button);
					selection.removeAllRanges();
					selection.addRange(range);
				};
				const clipboard = win?.navigator?.clipboard;
				if (clipboard && typeof clipboard.writeText === "function") clipboard.writeText(text).then(markCopied, selectText);
				else selectText();
			}
			function update(next) {
				if (closed) return;
				current = {
					...current,
					...next
				};
				renderGroups(current.groups, current.columns);
			}
			return {
				dialog,
				close: (restoreFocus = true) => destroy(restoreFocus),
				update
			};
		}
		var DEFAULT_MAX_ROWS = 5;
		function selectAuthorPlugins(options) {
			const cap = typeof options.maxRows === "number" && Number.isFinite(options.maxRows) ? Math.max(0, Math.floor(options.maxRows)) : DEFAULT_MAX_ROWS;
			const sorted = sortByOrder(options.plugins);
			return (options.showSelf || !options.selfId ? sorted : sorted.filter((plugin) => plugin.id !== options.selfId)).slice(0, cap);
		}
		function renderAuthorPlugins(options) {
			const rows = selectAuthorPlugins(options);
			if (rows.length === 0) return null;
			if (typeof document !== "undefined") ensureBaseStyles(document);
			const h = options.React.createElement;
			return h("div", { className: options.className ? "dsh-base-plugins " + options.className : "dsh-base-plugins" }, h("h3", {
				className: "dsh-base-plugins__title",
				key: "title"
			}, h("span", {
				className: "dsh-base-plugins__title-icon",
				key: "icon",
				"aria-hidden": "true"
			}, gridIcon(h, 14)), h("span", {
				className: "dsh-base-plugins__title-text",
				key: "text"
			}, options.title)), h("ul", {
				className: "dsh-base-plugins__list",
				key: "list"
			}, rows.map((plugin) => {
				const desc = pickText(plugin.desc, options.lang);
				const tip = options.tip;
				const rowTip = tip && desc ? {
					onMouseEnter: (event) => {
						tip.show(event.currentTarget, desc);
					},
					onMouseLeave: () => tip.hideSoon(),
					onFocus: (event) => {
						tip.show(event.currentTarget, desc);
					},
					onBlur: () => tip.hideSoon()
				} : {};
				return h("li", {
					className: "dsh-base-plugins__item",
					key: plugin.id
				}, h("a", {
					className: "dsh-base-plugins__row",
					href: pluginHref(plugin),
					target: "_blank",
					rel: "noopener noreferrer",
					...rowTip
				}, h("span", {
					className: "dsh-base-plugins__icon",
					key: "icon",
					"aria-hidden": "true"
				}, gridIcon(h, 12)), h("span", {
					className: "dsh-base-plugins__name",
					key: "name"
				}, plugin.name), h("span", {
					className: "dsh-base-plugins__desc",
					key: "desc"
				}, desc), h("span", {
					className: "dsh-base-plugins__ext",
					key: "ext",
					"aria-hidden": "true"
				}, externalLinkIcon(h))));
			})));
		}
		var MAX_COLUMNS = 4;
		var sharedModal = null;
		function detectLang(explicit) {
			return resolveLang({
				explicit: explicit ?? null,
				htmlLang: typeof document === "undefined" ? null : document.documentElement.lang,
				navigatorLanguages: typeof navigator === "undefined" ? null : navigator.languages
			});
		}
		function clampColumns(requested, groupCount) {
			if (typeof requested === "number" && Number.isFinite(requested)) return Math.min(MAX_COLUMNS, Math.max(1, Math.floor(requested)));
			return Math.max(1, Math.min(MAX_COLUMNS, groupCount));
		}
		function resolveBaselineQr(group) {
			if (group.qr.kind !== "bundled") return null;
			return BASELINE.qr[group.qr.key] ?? null;
		}
		function resolveBundledQrForGroupId(id) {
			return BASELINE.qr["qr-" + id] ?? null;
		}
		function resolveGroupQr(group, content, loader) {
			if (group.qr.kind === "bundled") return resolveBaselineQr(group);
			return (content && loader ? loader.imageFor(content, group.qr.path) : null) ?? resolveBundledQrForGroupId(group.id);
		}
		function mergeTexts(overrides, extra) {
			if (!overrides && !extra) return void 0;
			return {
				...overrides,
				...extra
			};
		}
		function classes3(base, extra) {
			return extra ? base + " " + extra : base;
		}
		function createBaseUI(React, options = {}) {
			let active = null;
			let loader = options.contentLoader ?? null;
			function getLoader() {
				if (loader) return loader;
				try {
					loader = createContentLoader({
						manifestUrl: options.manifestUrl,
						fetchImpl: options.fetchImpl
					});
				} catch {
					loader = null;
				}
				return loader;
			}
			function widgetText(key) {
				return resolveText(key, detectLang(options.lang), options.texts);
			}
			function closeActive(restoreFocus) {
				const handle = active;
				active = null;
				if (!handle) return;
				if (sharedModal === handle) sharedModal = null;
				handle.close(restoreFocus);
			}
			function closeContactModal() {
				closeActive(true);
			}
			function buildResolver(callOptions, content) {
				const custom = callOptions.resolveQr ?? options.resolveQr;
				if (custom) return custom;
				return (group) => resolveGroupQr(group, content, loader);
			}
			function applyContent(handle, content) {
				if (active !== handle) return;
				const groups = content.manifest.groups.length > 0 ? content.manifest.groups : BASELINE.manifest.groups;
				handle.update({
					groups,
					columns: clampColumns(void 0, groups.length),
					fallbackUrl: content.manifest.fallbackUrl,
					resolveQr: (group) => resolveGroupQr(group, content, loader) ?? null
				});
			}
			async function refreshRemote(handle, callOptions) {
				if (callOptions.groups && callOptions.groups.length > 0) return;
				const currentLoader = getLoader();
				if (!currentLoader) return;
				const content = await currentLoader.load();
				if (!content || active !== handle) return;
				await currentLoader.ensureImages(content);
				if (active !== handle) return;
				const custom = callOptions.resolveQr ?? options.resolveQr;
				if (custom) {
					handle.update({
						groups: content.manifest.groups,
						columns: clampColumns(callOptions.columns ?? options.columns, content.manifest.groups.length),
						fallbackUrl: content.manifest.fallbackUrl,
						resolveQr: (group) => custom(group) ?? null
					});
					return;
				}
				applyContent(handle, content);
			}
			function openContactModal(callOptions = {}) {
				if (typeof document === "undefined") return () => {};
				const previous = sharedModal;
				sharedModal = null;
				active = null;
				if (previous) previous.close(false);
				const groups = callOptions.groups && callOptions.groups.length > 0 ? callOptions.groups : BASELINE.manifest.groups;
				const lang = detectLang(callOptions.lang ?? options.lang);
				const candidate = callOptions.trigger ?? document.activeElement;
				const trigger = candidate && typeof candidate.focus === "function" ? candidate : null;
				const cached = getLoader()?.getCached() ?? null;
				const resolver = buildResolver(callOptions, cached);
				const handle = mountContactModal({
					doc: document,
					lang,
					groups,
					columns: clampColumns(callOptions.columns ?? options.columns, groups.length),
					trigger,
					fallbackUrl: callOptions.fallbackUrl ?? options.fallbackUrl ?? cached?.manifest.fallbackUrl ?? BASELINE.manifest.fallbackUrl,
					texts: mergeTexts(options.texts, callOptions.texts),
					resolveQr: (group) => resolver(group) ?? null,
					now: callOptions.now
				});
				active = handle;
				sharedModal = handle;
				handle.dialog.addEventListener("close", () => {
					if (active === handle) active = null;
					if (sharedModal === handle) sharedModal = null;
				});
				refreshRemote(handle, callOptions);
				return () => {
					if (active === handle) active = null;
					if (sharedModal === handle) sharedModal = null;
					handle.close();
				};
			}
			const actions = createActions(React, {
				text: widgetText,
				openContact: (trigger) => {
					openContactModal({ trigger });
				},
				repoUrl: options.repoUrl,
				issuesUrl: options.issuesUrl
			});
			const cluster = createActionCluster(React, {
				text: widgetText,
				openContact: (trigger) => {
					openContactModal({ trigger });
				},
				repoUrl: options.repoUrl,
				issuesUrl: options.issuesUrl
			});
			let hostIconSerial = 0;
			const clusterIcons = {
				contact: (size = 16) => contactClusterIcon(React.createElement, size, "host" + (hostIconSerial += 1)),
				star: (size = 16) => starClusterIcon(React.createElement, size, "host" + (hostIconSerial += 1)),
				issue: (size = 16) => issueClusterIcon(React.createElement, size, "host" + (hostIconSerial += 1))
			};
			function ContactRow(props) {
				const h = React.createElement;
				return h("button", {
					type: "button",
					className: classes3("dsh-base-contact-row", props.className),
					onClick: (event) => {
						openContactModal({ trigger: event.currentTarget });
					}
				}, h("span", {
					className: "dsh-base-contact-row__icon",
					key: "icon",
					"aria-hidden": "true"
				}, contactIcon(h, 16)), h("span", {
					className: "dsh-base-contact-row__label",
					key: "label"
				}, props.label ?? widgetText("contact"), props.hint ? h("span", {
					className: "dsh-base-contact-row__hint",
					key: "hint"
				}, " · " + props.hint) : null), h("span", {
					className: "dsh-base-contact-row__ext",
					key: "ext",
					"aria-hidden": "true"
				}, externalLinkIcon(h)));
			}
			function AuthorPlugins(props) {
				const explicitPlugins = props.plugins;
				const [remotePlugins, setRemotePlugins] = React.useState(null);
				const tip = React.useMemo(() => createTipController(), []);
				React.useEffect(() => () => tip.dispose(), [tip]);
				React.useEffect(() => {
					if (explicitPlugins !== void 0) return void 0;
					const currentLoader = getLoader();
					if (!currentLoader) return void 0;
					let alive = true;
					(async () => {
						try {
							const content = await currentLoader.load();
							if (!alive || !content) return;
							const plugins = content.manifest.plugins;
							if (plugins.length === 0) return;
							setRemotePlugins(plugins);
						} catch {}
					})();
					return () => {
						alive = false;
					};
				}, [explicitPlugins]);
				const lang = props.lang ?? detectLang(options.lang);
				return renderAuthorPlugins({
					React,
					lang,
					plugins: explicitPlugins ?? remotePlugins ?? BASELINE.manifest.plugins,
					selfId: props.selfId ?? options.selfId,
					showSelf: props.showSelf ?? options.showSelf,
					maxRows: props.maxRows ?? options.maxRows,
					title: props.title ?? resolveText("plugins", lang, options.texts),
					className: props.className,
					tip
				});
			}
			async function preloadContent() {
				const currentLoader = getLoader();
				if (!currentLoader) return;
				await currentLoader.preload();
				if (options.resolveQr) return;
				const content = currentLoader.getCached();
				const handle = active;
				if (!content || !handle) return;
				if (active !== handle) return;
				applyContent(handle, content);
			}
			return {
				ContactButton: actions.ContactButton,
				StarButton: actions.StarButton,
				IssueButton: actions.IssueButton,
				ActionButtons: actions.ActionButtons,
				ActionGroup: actions.ActionGroup,
				ActionCluster: cluster,
				clusterIcons,
				HoverTip: actions.HoverTip,
				ContactRow,
				AuthorPlugins,
				openContactModal,
				closeContactModal,
				preloadContent
			};
		}
		//#endregion
		//#region src/client/settings-links.ts
		/**
		* 设置页对外入口区（仓库/ISSUE/引流）（#171 N6：可 import 者 —— settings-page）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 设置页对外入口区（#37 / #254 / header-action-cluster-v2）
		* 两件东西：顶部右上角「联系 / Star / Issue」三件套（base 包 ActionCluster 静默簇：无外框、28×28 按钮、
		* 彩色 16px 图标；联系弹群码弹窗、Star 落仓库、Issue 落 ISSUE 列表；悬停文案与气泡由 base 包 HoverTip
		* 提供）+ 底部「作者其他插件」引流区。
		* 边界：纯前端展示，不发网络请求、不写本地存档键、不碰模板数据与智能召回。
		* 契约：导出 SettingsHeaderLinks({ lang, entry? }) 与 AuthorPlugins({ lang }) 两个组件；
		* 图标、簇、悬停气泡与弹窗都是 base 包内部实现。
		* #254：入口区与作者推荐卡改由 dsh-featherhunter-plugin-base/client 提供；推荐清单与群码都来自
		* base 包的发布数据（CDN @latest），本仓不再持有第二份「作者其他插件」文案表、群码地址或图标文案。
		* base 0.1.5：旧 ActionGroup 胶囊换成 ActionCluster 静默簇（v2 视觉）；底部整行 ContactRow 退役，
		* 联系入口全页只留页头一处。
		* #60 追加交付 A 起多一个可选的 `entry`：调用方（settings-page.ts）把更新入口那枚按钮交进来，与三件套同排。
		*/
		const REPO_URL = "https://github.com/FeatherHunter/dsh-prompt";
		const ISSUES_URL = "https://github.com/FeatherHunter/dsh-prompt/issues";
		let baseUIReact = null;
		let baseUILang;
		let baseUICache = null;
		function baseUI(lang) {
			const react = getReact();
			if (!react) return null;
			if (!baseUICache || baseUIReact !== react || baseUILang !== lang) {
				baseUIReact = react;
				baseUILang = lang;
				baseUICache = createBaseUI(react, {
					lang,
					selfId: "prompt",
					repoUrl: REPO_URL,
					issuesUrl: ISSUES_URL
				});
			}
			return baseUICache;
		}
		/** base 包的样式是文档级一次性注入（id: dsh-base-ui-style），首帧前补齐。 */
		function ensureBaseStylesOnce() {
			if (typeof document !== "undefined") ensureBaseStyles(document);
		}
		const headerRowStyle = {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			gap: 8,
			padding: "2px 4px 6px"
		};
		const brandStyle = {
			display: "inline-flex",
			alignItems: "center",
			gap: 6,
			minWidth: 0
		};
		const brandNameStyle = {
			fontWeight: 600,
			fontSize: "0.95em",
			color: "var(--dsw-alias-label-primary)",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
		/**
		* 顶部头行：左边插件标志与页面名，右边「入口位（调用方给了就渲染）+ 联系/Star/Issue 三件套静默簇」。
		*
		* 三件套由 base 包 ActionCluster 渲染（size 16 → 28×28 按钮、gap 4、quiet 无外框；内部顺序固定
		* 联系/Star/Issue，各带悬停气泡）：repoUrl / issuesUrl 已在 createBaseUI 里交给 base，
		* 本文件不再各画一枚图标或一条自绘气泡。
		*
		* #127 自研更新入口已删：`entry` 仍由 settings-page.ts 交进来（#128 接新整组件时再定形态），
		* 本文件不持有更新引用。`entry` 缺席时这一行只有三件套。
		*/
		function SettingsHeaderLinks(props) {
			const react = getReact();
			const ui = baseUI(props.lang);
			if (!react || !ui) return null;
			const h = react.createElement;
			const t = (k) => tr(props.lang, STR[k]);
			ensureBaseStylesOnce();
			return h("div", { style: headerRowStyle }, [h("span", {
				key: "brand",
				style: brandStyle
			}, [h(PromptMark, {
				key: "mark",
				size: 16
			}), h("span", {
				key: "name",
				style: brandNameStyle
			}, t("sectionName"))])]);
		}
		//#endregion
		//#region src/client/system-orientation.ts
		const ORIENT_URL = "/_dsh/dsh-prompt/system/orientation";
		/** OS 方向校验（纯函数；`auto` 不合法——它不进 OS） */
		function isSystemOrientation(v) {
			return v === "landscape" || v === "portrait";
		}
		/** 错误码归一化（纯函数；码表封闭四码，外来码一律落 unknown） */
		function normalizeOrientCode(v) {
			return v === "unsupported" || v === "busy" || v === "denied" || v === "unknown" ? v : "unknown";
		}
		/** 归一化对端回包（纯函数；宿主旧版本/手造坏包走此，不抛） */
		function normalizeSystemOrientResponse(data) {
			try {
				const o = data || {};
				if (o && o.ok === true && isSystemOrientation(o.orientation)) {
					const out = {
						ok: true,
						orientation: o.orientation
					};
					if (o.source === "live" || o.source === "cached") out.source = o.source;
					if (typeof o.changed === "boolean") out.changed = o.changed;
					return out;
				}
				const err = o && o.error || {};
				return {
					ok: false,
					error: {
						code: normalizeOrientCode(err.code),
						message: typeof err.message === "string" && err.message ? err.message : "orientation-unknown"
					}
				};
			} catch (e) {
				return {
					ok: false,
					error: {
						code: "unknown",
						message: "orientation-normalize-failed"
					}
				};
			}
		}
		function defaultFetch() {
			try {
				if (typeof fetch === "undefined") return null;
				return fetch.bind(globalThis);
			} catch (e) {
				return null;
			}
		}
		async function callOrient(method, body, fetchImpl, timeoutMs) {
			const f = fetchImpl === void 0 ? defaultFetch() : fetchImpl;
			if (!f) return {
				ok: false,
				error: {
					code: "unsupported",
					message: "orientation-no-bridge"
				}
			};
			let timer = null;
			try {
				const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
				if (ctrl) timer = setTimeout(() => {
					try {
						ctrl.abort();
					} catch (e) {}
				}, timeoutMs);
				const res = await f(ORIENT_URL, {
					method,
					headers: { "content-type": "application/json" },
					body: body === void 0 ? void 0 : JSON.stringify(body),
					signal: ctrl ? ctrl.signal : void 0
				});
				if (!res || res.ok !== true) return {
					ok: false,
					error: {
						code: "unknown",
						message: "orientation-http-" + (res && res.status ? res.status : "unreachable")
					}
				};
				return normalizeSystemOrientResponse(await res.json().catch(() => null));
			} catch (e) {
				return {
					ok: false,
					error: {
						code: "unknown",
						message: "orientation-" + String(e && e.name || "failed")
					}
				};
			} finally {
				try {
					if (timer) clearTimeout(timer);
				} catch (e) {}
			}
		}
		/** 查询 OS 真值（主屏；失败由调用方回落，不抛） */
		function getSystemOrientation(fetchImpl, timeoutMs = 12e3) {
			return callOrient("GET", void 0, fetchImpl, timeoutMs).then((r) => {
				if (r.ok) logEvent$3("system.orientation.get", {
					ok: true,
					orientation: r.orientation
				});
				else logEvent$3("system.orientation.get", {
					ok: false,
					code: r.error.code
				});
				return r;
			});
		}
		/**
		* 真切 OS（只接受 landscape/portrait；非法输入不出网，直接回 unknown，
		* 与 host 码表封闭约定一致）。
		*/
		function setSystemOrientation(target, fetchImpl, timeoutMs = 12e3) {
			if (!isSystemOrientation(target)) {
				const r = {
					ok: false,
					error: {
						code: "unknown",
						message: "orientation-invalid-target"
					}
				};
				logEvent$3("system.orientation.set", {
					ok: false,
					code: r.error.code
				});
				return Promise.resolve(r);
			}
			return callOrient("POST", { orientation: target }, fetchImpl, timeoutMs).then((r) => {
				if (r.ok) logEvent$3("system.orientation.set", {
					ok: true,
					orientation: r.orientation
				});
				else logEvent$3("system.orientation.set", {
					ok: false,
					code: r.error.code
				});
				return r;
			});
		}
		/** 记一条日志事件（槽机制与 remote.ts 同构；能力缺席时空操作） */
		function logEvent$3(event, fields) {
			try {
				const log = globalThis.__dshPromptLog;
				if (log && typeof log.log === "function") log.log(event, fields);
			} catch (e) {}
		}
		//#endregion
		//#region src/client/settings-page.ts
		/**
		* 设置页组件（#171 N6：可 import 者 —— entry-button、index）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 设置页（模板管理 + 智能开关 + 日志三入口）
		*
		* 版式规则（#51 落地、#52 按"一致性优先"重修）：这一页寄居在 DSH 的设置对话框里，
		* 只继承宿主的设计语言（--dsw-* 变量），不发明第二套视觉。页面由两个原语搭出来，
		* 避免"每块各写各的 div"导致多条左边缘与散装间距：
		*   SettingRow   一行：标签 + 右侧控件，说明文字缩进到标签列
		*   SettingGroup 一组：有边框的卡片 + 组标题，组内间距统一（4/8/12/16/24 这个比例）
		* 不可逆操作（清空日志）不与常规操作平权：单独一行、默认低调、hover 才显示危险色，并两步确认。
		*/
		/** 取日志能力（装在槽里的那个实例）；能力缺席时返回 null，界面据此走「不可用」分支，不静默。 */
		function logCap() {
			try {
				const log = globalThis.__dshPromptLog;
				return log && typeof log.log === "function" ? log : null;
			} catch (e) {
				return null;
			}
		}
		const TOK = {
			labelPrimary: "var(--dsw-alias-label-primary)",
			labelSecondary: "var(--dsw-alias-label-secondary)",
			labelTertiary: "var(--dsw-alias-label-tertiary)",
			bgLayer: "var(--dsw-alias-bg-layer-3)",
			bgHover: "var(--dsw-alias-bg-layer-2,rgba(255,255,255,.06))",
			border: "var(--dsw-alias-border-l1)",
			accent: "var(--dsw-specific-accent,#f0a45c)",
			danger: "var(--dsw-specific-danger,#e06c75)",
			font: "var(--dsw-font-family)"
		};
		/** 一行：标签在左、控件在右，说明占满行宽正常流排（此前 maxWidth:520 在宽弹窗里半屏换行）。
		*  #179：可选 `icon` —— 行首图标（与本插件底栏按钮同一份 SVG），标签仍是纯文本节点，便于 i18n 门禁扫文案。
		*  #190：与 Btn / Check 同口径透传 data-* / aria-*（`data-dsh-prompt-setting` 等契约钩子要落到 DOM 上，
		*  不透传会被 React 丢掉；只放行这两类，不扩散其它属性）。 */
		function SettingRow(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const extra = {};
			try {
				for (const k of Object.keys(props || {})) if (k.indexOf("data-") === 0 || k.indexOf("aria-") === 0) extra[k] = props[k];
			} catch (e) {}
			const kids = [h("div", {
				key: "head",
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 12
				}
			}, [h("span", {
				key: "label",
				style: {
					display: "inline-flex",
					alignItems: "center",
					gap: 7,
					minWidth: 0,
					fontFamily: TOK.font,
					fontSize: "0.93em",
					color: TOK.labelPrimary
				}
			}, [props.icon ? h("span", {
				key: "icon",
				style: {
					display: "inline-flex",
					alignItems: "center",
					flex: "none"
				}
			}, props.icon) : null, h("span", { key: "text" }, props.label)]), props.control ? h("span", {
				key: "control",
				style: {
					display: "inline-flex",
					alignItems: "center"
				}
			}, props.control) : null])];
			if (props.description) kids.push(h("div", {
				key: "desc",
				style: {
					fontFamily: TOK.font,
					fontSize: "0.86em",
					lineHeight: 1.65,
					color: TOK.labelTertiary
				}
			}, props.description));
			return h("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: 6,
					padding: "10px 0"
				},
				...extra
			}, kids);
		}
		/**
		* 组卡片外壳：边框 + 圆角 + 组外边距。**一处定义**，SettingGroup 与「模板列表」那张卡共用
		* （#77 收尾：模板区此前是一条裸行，夹在两张有壳的卡片之间显得格格不入 —— 现在它也是卡片）。
		* `pad` 可覆盖内边距：内嵌自带 padding 的组件时用更小的值把内容左轨配平到 14px。
		*/
		const cardStyle = (pad) => ({
			border: "1px solid " + TOK.border,
			borderRadius: 12,
			padding: pad,
			margin: "14px 0 4px",
			display: "flex",
			flexDirection: "column",
			fontFamily: TOK.font
		});
		/** 一组：卡片 + 组标题，组内元素由调用方给，间距由这里统一。 */
		function SettingGroup(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			return h("section", { style: cardStyle(props.pad || "2px 14px 12px") }, [props.title ? h("div", {
				key: "title",
				style: {
					fontSize: "0.86em",
					fontWeight: 600,
					color: TOK.labelSecondary,
					padding: "12px 0 0",
					letterSpacing: .2
				}
			}, props.title) : null, ...props.children || []]);
		}
		/** 按钮：三种权重（常规 / 次级 / 危险）。内联样式没有 hover，用一个极小的悬停态实现。 */
		function Btn(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const tone = props.tone || "normal";
			const hoverState = react.useState(false);
			const hover = hoverState[0];
			const base = {
				fontFamily: TOK.font,
				fontSize: "0.89em",
				padding: "6px 12px",
				borderRadius: 8,
				cursor: "pointer",
				transition: "background-color .12s ease, color .12s ease, border-color .12s ease"
			};
			const style = tone === "ghost" ? {
				...base,
				border: "1px solid transparent",
				background: hover ? TOK.bgLayer : "transparent",
				color: hover ? TOK.labelPrimary : TOK.labelSecondary
			} : tone === "danger" ? {
				...base,
				border: "1px solid " + (hover ? TOK.danger : TOK.border),
				background: "transparent",
				color: hover ? TOK.danger : TOK.labelSecondary
			} : {
				...base,
				border: "1px solid " + TOK.border,
				background: hover ? TOK.bgHover : TOK.bgLayer,
				color: TOK.labelPrimary
			};
			const extra = {};
			try {
				if (props.title !== void 0) extra.title = props.title;
				if (props.disabled !== void 0) extra.disabled = props.disabled;
				for (const k of Object.keys(props || {})) if (k.indexOf("data-") === 0 || k.indexOf("aria-") === 0) extra[k] = props[k];
			} catch (e) {}
			return h("button", {
				type: "button",
				style: props.disabled ? {
					...style,
					cursor: "not-allowed",
					opacity: .6
				} : style,
				onMouseEnter: () => hoverState[1](true),
				onMouseLeave: () => hoverState[1](false),
				onClick: props.onClick,
				...extra
			}, props.children);
		}
		/** 复选框：宿主风格的圆角小方框（accent-color 跟随主题），不再是自己画一个控件。
		* 尺寸走 em 吃设置页根 scale（远程开大档一起变大）；flex:none 保命中区不小于框体。
		* 原生 input 不继承 font-size（UA 样式自带字号），em 会锚死在默认字号上跟档无感，
		* 故显式 fontSize:inherit 把父级（已随档缩放的根）字号接进来；关=根回基准，原样。
		* #182：与 Btn 一样透传 data-* / aria-*——BAR_UI_CSS 按 data-dsh-prompt-*-toggle 钩子补原生控件没有的
		* 悬浮/焦点反馈；不透传会被 React 丢掉，钩子永远落不到 DOM 上。 */
		function Check(props) {
			const react = getReact();
			if (!react) return null;
			const extra = {};
			try {
				for (const k of Object.keys(props || {})) if (k.indexOf("data-") === 0 || k.indexOf("aria-") === 0) extra[k] = props[k];
			} catch (e) {}
			return react.createElement("input", {
				type: "checkbox",
				checked: props.checked,
				disabled: props.disabled,
				style: {
					width: "1.15em",
					height: "1.15em",
					flex: "none",
					fontSize: "inherit",
					accentColor: TOK.accent,
					cursor: props.disabled ? "not-allowed" : "pointer",
					margin: 0
				},
				onChange: props.onChange,
				...extra
			});
		}
		/** 下载文本为文件。返回是否成功（失败时调用方改走复制路径）。 */
		function downloadText(text, fileName) {
			try {
				if (typeof document === "undefined" || typeof Blob === "undefined" || typeof URL === "undefined") return false;
				if (typeof URL.createObjectURL !== "function") return false;
				const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = fileName;
				document.body.appendChild(a);
				a.click();
				a.remove();
				setTimeout(() => {
					try {
						URL.revokeObjectURL(url);
					} catch (e) {}
				}, 1e3);
				return true;
			} catch (e) {
				return false;
			}
		}
		/** 复制到剪贴板（异步 API 不可用时退回临时 textarea）。返回是否成功。 */
		async function copyText(text) {
			try {
				if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
					await navigator.clipboard.writeText(text);
					return true;
				}
			} catch (e) {}
			try {
				if (typeof document === "undefined") return false;
				const ta = document.createElement("textarea");
				ta.value = text;
				ta.style.position = "fixed";
				ta.style.opacity = "0";
				document.body.appendChild(ta);
				ta.select();
				const done = typeof document.execCommand === "function" ? document.execCommand("copy") : false;
				ta.remove();
				return !!done;
			} catch (e) {
				return false;
			}
		}
		function SettingsPage(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const remoteState = react.useState(getRemotePrefs());
			const remote = remoteState[0];
			const persistState = react.useState(getRemotePersistState());
			const remotePersist = persistState[0];
			const log = logCap();
			const logOnState = react.useState(log ? !!log.getSwitch().enabled : false);
			const logOn = logOnState[0];
			const noteState = react.useState("");
			const note = noteState[0];
			const confirmState = react.useState(false);
			const confirming = confirmState[0];
			const langState = react.useState(resolveLocale());
			const lang = langState[0];
			const t = (k) => tr(lang, STR[k]);
			const hideState = react.useState(loadHidePreset());
			const hideOn = hideState[0];
			const triggerState = react.useState(loadHoverTrigger());
			const hoverTriggerOn = triggerState[0];
			const reasonText = (code) => {
				return t(code === "host-unavailable" || code === "host-unreachable" ? "logReasonHost" : code === "host-rejected" ? "logReasonRejected" : code === "switch-timeout" ? "logReasonTimeout" : code === "stale" ? "logReasonStale" : "logReasonOther");
			};
			react.useEffect(() => subscribeLocale((l) => {
				langState[1](l);
			}), []);
			react.useEffect(() => subscribeStore(() => {
				try {
					hideState[1](loadHidePreset());
				} catch (e) {}
				try {
					triggerState[1](loadHoverTrigger());
				} catch (e) {}
			}), []);
			react.useEffect(() => {
				const cap = logCap();
				if (!cap || typeof cap.subscribe !== "function") return void 0;
				return cap.subscribe(() => {
					try {
						logOnState[1](!!cap.getSwitch().enabled);
					} catch (e) {}
				});
			}, []);
			react.useEffect(() => {
				try {
					ensureRemoteLoaded().catch(() => void 0);
				} catch (e) {}
				return subscribeRemote(() => {
					try {
						remoteState[1](getRemotePrefs());
						persistState[1](getRemotePersistState());
					} catch (e) {}
				});
			}, []);
			react.useEffect(() => {
				try {
					warmEnvOrientation(() => getSystemOrientation()).then(() => {
						try {
							remoteState[1](getRemotePrefs());
						} catch (e) {}
					});
				} catch (e) {}
			}, []);
			react.useEffect(() => {
				let mine = null;
				try {
					const g = globalThis;
					mine = () => {
						try {
							const go = g.__dshPromptGoSettings;
							if (typeof go === "function") go();
						} catch (e) {}
						setTimeout(() => {
							try {
								if (typeof document === "undefined") return;
								const el = document.querySelector("[data-dsh-prompt-remote-section]");
								if (el && typeof el.scrollIntoView === "function") el.scrollIntoView({ block: "start" });
							} catch (e) {}
						}, 300);
					};
					g.__dshPromptGoRemoteSettings = mine;
				} catch (e) {}
				return () => {
					try {
						const g = globalThis;
						if (mine && g.__dshPromptGoRemoteSettings === mine) delete g.__dshPromptGoRemoteSettings;
					} catch (e) {}
				};
			}, []);
			const onToggleLog = async (next) => {
				const cap = logCap();
				if (!cap) {
					noteState[1](t("logUnavailable"));
					return;
				}
				const res = await cap.setSwitch(next);
				logEvent$2("settings.log.switch", {
					on: !!res.enabled,
					ok: !!res.ok,
					reason: res.error ?? ""
				});
				if (!res.ok) {
					noteState[1](t("logSwitchFail") + reasonText(res.error));
					try {
						logOnState[1](!!cap.getSwitch().enabled);
					} catch (e) {}
					return;
				}
				logOnState[1](!!res.enabled);
				noteState[1](res.enabled ? t("logSwitchOn") : t("logSwitchOff"));
			};
			const onExport = async () => {
				const cap = logCap();
				if (!cap) {
					noteState[1](t("logUnavailable"));
					return;
				}
				noteState[1](t("logWorking"));
				const res = await cap.exportLog();
				if (!res.ok) {
					noteState[1](t("logExportFail") + reasonText(res.reason));
					return;
				}
				const text = res.text ?? "";
				if (!text) {
					noteState[1](t("logExportEmpty"));
					return;
				}
				const name = res.fileName || "dsh-prompt.log";
				const saved = downloadText(text, name);
				const where = res.path || res.dir || "";
				noteState[1]((saved ? t("logExportSaved") : t("logExportDownloadBlocked")) + " " + name + t("bytesParen").replace("{v}", (res.bytes ?? text.length) + " " + t("logBytes")) + (where ? " · " + where : ""));
			};
			const onCopyPath = async () => {
				const cap = logCap();
				if (!cap) {
					noteState[1](t("logUnavailable"));
					return;
				}
				noteState[1](t("logWorking"));
				const res = await cap.exportLog();
				if (!res.ok) {
					noteState[1](t("logExportFail") + reasonText(res.reason));
					return;
				}
				let target = String(res.path || "").trim();
				if (!target && res.dir) {
					const sep = String(res.dir).indexOf("\\") >= 0 ? "\\" : "/";
					target = String(res.dir).replace(/[\\/]+$/, "") + sep + String(res.fileName || "");
				}
				if (!target) {
					noteState[1](t("logPathFail"));
					return;
				}
				const ok = await copyText(target);
				noteState[1](ok ? t("logPathCopied") + " " + target : t("logPathFail"));
			};
			const onClear = async () => {
				const cap = logCap();
				if (!cap) {
					noteState[1](t("logUnavailable"));
					return;
				}
				if (!confirming) {
					confirmState[1](true);
					noteState[1](t("logClearAsk"));
					return;
				}
				confirmState[1](false);
				const res = await cap.clearLog();
				noteState[1](res.ok ? res.removed > 0 ? t("logClearOk") + " " + res.removed + " " + t("logFiles") : t("logClearNone") : t("logClearFail"));
			};
			const dropped = (() => {
				try {
					const st = log && typeof log.status === "function" ? log.status() : null;
					return st ? st.dropped : 0;
				} catch (e) {
					return 0;
				}
			})();
			const noteStyle = {
				fontFamily: TOK.font,
				fontSize: "0.86em",
				lineHeight: 1.65,
				color: TOK.labelTertiary,
				paddingTop: 8
			};
			const orientationControl = (current, onPick, busy, remoteOff) => {
				const opts = [
					"auto",
					"landscape",
					"portrait"
				];
				const labelOf = (v) => v === "auto" ? t("remoteOrientationAuto") : v === "landscape" ? t("remoteOrientationLandscape") : t("remoteOrientationPortrait");
				const dis = !!busy || !!remoteOff;
				return h("div", {
					style: {
						display: "flex",
						gap: 6
					},
					"data-dsh-prompt-remote-orientation": "1"
				}, opts.map((v) => h("button", {
					key: v,
					type: "button",
					disabled: dis,
					"data-dsh-prompt-orientation": v,
					"aria-pressed": current === v ? "true" : "false",
					"aria-disabled": dis ? "true" : "false",
					title: dis ? t("remoteNeedOn") : void 0,
					style: dis ? {
						flex: 1,
						textAlign: "center",
						fontFamily: TOK.font,
						fontSize: "0.86em",
						padding: "5px 12px",
						borderRadius: 8,
						cursor: "not-allowed",
						border: "1px solid " + TOK.border,
						background: "transparent",
						color: TOK.labelTertiary,
						opacity: 1
					} : {
						flex: 1,
						textAlign: "center",
						fontFamily: TOK.font,
						fontSize: "0.86em",
						padding: "5px 12px",
						borderRadius: 8,
						cursor: "pointer",
						border: "1px solid " + TOK.border,
						background: current === v ? TOK.accent : "transparent",
						color: current === v ? "#fff" : TOK.labelPrimary,
						opacity: 1
					},
					onClick: () => {
						if (!dis) onPick(v);
					}
				}, labelOf(v))));
			};
			const densityControl = (current, onPick, remoteOff) => {
				const opts = ["a", "b"];
				const labelOf = (v) => v === "a" ? t("remoteDensityA") : t("remoteDensityB");
				return h("div", {
					style: {
						display: "flex",
						gap: 6
					},
					"data-dsh-prompt-remote-density": "1"
				}, opts.map((v) => h("button", {
					key: v,
					type: "button",
					disabled: !!remoteOff,
					"data-dsh-prompt-density": v,
					"aria-pressed": current === v ? "true" : "false",
					"aria-disabled": remoteOff ? "true" : "false",
					title: remoteOff ? t("remoteNeedOn") : void 0,
					style: remoteOff ? {
						flex: 1,
						textAlign: "center",
						whiteSpace: "nowrap",
						fontFamily: TOK.font,
						fontSize: "0.86em",
						padding: "5px 12px",
						borderRadius: 8,
						cursor: "not-allowed",
						border: "1px solid " + TOK.border,
						background: "transparent",
						color: TOK.labelTertiary,
						opacity: 1
					} : {
						flex: 1,
						textAlign: "center",
						whiteSpace: "nowrap",
						fontFamily: TOK.font,
						fontSize: "0.86em",
						padding: "5px 12px",
						borderRadius: 8,
						cursor: "pointer",
						border: "1px solid " + TOK.border,
						background: current === v ? TOK.accent : "transparent",
						color: current === v ? "#fff" : TOK.labelPrimary,
						opacity: 1
					},
					onClick: () => {
						if (!remoteOff) onPick(v);
					}
				}, labelOf(v))));
			};
			const orientBusyState = react.useState(false);
			const orientBusy = orientBusyState[0];
			const orientNoteState = react.useState("");
			const orientNote = orientNoteState[0];
			const landOrientation = (v, note) => {
				const next = setRemoteOrientation(v);
				remoteState[1]({ ...next });
				persistState[1](getRemotePersistState());
				orientNoteState[1](note);
				orientBusyState[1](false);
			};
			const onPickOrientation = (v) => {
				if (v === "auto" || orientBusy) {
					if (v === "auto" && !orientBusy) landOrientation("auto", "");
					return;
				}
				if (!isSystemOrientation(v)) return;
				orientBusyState[1](true);
				orientNoteState[1](t("remoteOrientationBusy"));
				(async () => {
					let r;
					try {
						r = await setSystemOrientation(v);
					} catch (e) {
						r = {
							ok: false,
							error: {
								code: "unknown",
								message: "orientation-failed"
							}
						};
					}
					if (r && r.ok) {
						try {
							setEnvOrientation({ orientation: v });
						} catch (e) {}
						landOrientation(v, "");
					} else {
						const code = r && r.error && r.error.code || "unknown";
						landOrientation(v, t("remoteOrientationOsFail").replace("{code}", code));
					}
				})().catch(() => void 0);
			};
			const hairline = (key) => h("div", {
				key,
				style: { borderTop: "1px solid " + TOK.border }
			});
			const orientPref = remote.orientation || "auto";
			let viewportOrient = null;
			try {
				if (typeof window !== "undefined" && typeof window.innerWidth === "number" && typeof window.innerHeight === "number") viewportOrient = deriveRemoteOrientation(window.innerWidth, window.innerHeight);
			} catch (e) {
				viewportOrient = null;
			}
			let envOrient = null;
			try {
				const e = getEnvOrientation();
				envOrient = e ? e.orientation : null;
			} catch (err) {
				envOrient = null;
			}
			const orientLabel = resolveEffectiveOrientation(orientPref, envOrient, viewportOrient) === "landscape" ? t("remoteOrientationLandscape") : t("remoteOrientationPortrait");
			const effectiveCaption = orientPref === "landscape" || orientPref === "portrait" ? t("remoteLockedOrientation").replace("{orient}", orientLabel) : t("remoteEffectiveNow").replace("{orient}", orientLabel).replace("{source}", t(envOrient ? "remoteSourceSystem" : "remoteSourceViewport"));
			h("section", {
				key: "remote",
				style: cardStyle("2px 14px 12px"),
				"data-dsh-prompt-remote-section": "1"
			}, [
				h(SettingRow, {
					key: "remote-switch",
					"data-dsh-prompt-setting": "remotePrefs",
					label: t("remoteToggle"),
					control: h(Check, {
						checked: !!remote.enabled,
						"data-dsh-prompt-remote-toggle": "1",
						"data-dsh-prompt-remote-enabled": remote.enabled ? "true" : "false",
						onChange: (e) => {
							const on = !!e.target.checked;
							const entering = on === true && remote.enabled !== true;
							const next = setRemoteEnabled(on);
							remoteState[1]({ ...next });
							persistState[1](getRemotePersistState());
							if (entering) try {
								warmEnvOrientation(() => getSystemOrientation()).catch(() => void 0);
							} catch (e) {}
						}
					})
				}),
				hairline("sep-switch-size"),
				h("div", {
					key: "remote-size",
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 6,
						padding: "10px 0"
					}
				}, [h("div", {
					key: "head",
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: 12
					}
				}, [h("span", {
					key: "label",
					style: {
						fontFamily: TOK.font,
						fontSize: "0.93em",
						color: TOK.labelPrimary
					}
				}, t("remoteSize")), h("span", {
					key: "val",
					style: {
						fontFamily: TOK.font,
						fontSize: "0.86em",
						color: TOK.labelPrimary,
						padding: "2px 10px",
						border: "1px solid " + TOK.border,
						borderRadius: 999,
						fontVariantNumeric: "tabular-nums",
						whiteSpace: "nowrap",
						flex: "none"
					},
					"data-dsh-prompt-size-value": "1",
					"data-dsh-prompt-chrome": "remoteSizeValue"
				}, t("remoteSizeValue").replace("{n}", String(remote.size)).replace("{p}", String(Math.round(remoteSizeScale(remote.size) * 100))))]), h("div", {
					key: "slider-row",
					style: {
						display: "flex",
						alignItems: "center",
						gap: 8
					}
				}, [
					h("span", {
						key: "min",
						style: {
							fontFamily: TOK.font,
							fontSize: "0.82em",
							color: TOK.labelTertiary,
							flex: "none"
						}
					}, t("remoteSizeMin")),
					h("input", {
						key: "slider",
						type: "range",
						min: 1,
						max: 10,
						step: 1,
						value: remote.size,
						disabled: !remote.enabled,
						"data-dsh-prompt-size-slider": "1",
						"aria-label": t("remoteSize"),
						style: {
							flex: 1,
							minWidth: 0,
							accentColor: TOK.accent,
							cursor: !remote.enabled ? "not-allowed" : "pointer",
							margin: 0,
							transform: remote.enabled ? "scale(1, " + remoteSizeScale(remote.size) + ")" : "none",
							transformOrigin: "left center",
							opacity: !remote.enabled ? .6 : 1
						},
						onChange: (e) => {
							const next = setRemoteSize(Number(e.target.value));
							remoteState[1]({ ...next });
							persistState[1](getRemotePersistState());
						}
					}),
					h("span", {
						key: "max",
						style: {
							fontFamily: TOK.font,
							fontSize: "0.82em",
							color: TOK.labelTertiary,
							flex: "none"
						}
					}, t("remoteSizeMax"))
				])]),
				hairline("sep-size-orient"),
				h(SettingRow, {
					key: "remote-orientation",
					label: t("remoteOrientation"),
					description: t("remoteOrientationHint"),
					control: orientationControl(orientPref, onPickOrientation, orientBusy, !remote.enabled)
				}),
				h("div", {
					key: "remote-orientation-effective",
					style: {
						...noteStyle,
						paddingTop: 0,
						paddingBottom: 8
					},
					"data-dsh-prompt-orientation-effective": "1"
				}, effectiveCaption),
				hairline("sep-orient-density"),
				h(SettingRow, {
					key: "remote-density",
					label: t("remoteDensity"),
					control: densityControl(remote.density || "a", (v) => {
						const next = setRemoteDensity(v);
						remoteState[1]({ ...next });
						persistState[1](getRemotePersistState());
					}, !remote.enabled)
				}),
				orientNote ? h("div", {
					key: "remote-orientation-note",
					style: noteStyle,
					"data-dsh-prompt-orientation-note": "1"
				}, orientNote) : null,
				remotePersist.failed ? h("div", {
					key: "remote-persist-note",
					style: noteStyle
				}, t("remotePersistFail")) : null
			]);
			const logGroup = h(SettingGroup, {
				key: "log",
				title: t("logGroup")
			}, [
				h(SettingRow, {
					key: "log-switch",
					label: t("logToggle"),
					description: t("logToggleHint"),
					control: h(Check, {
						checked: logOn,
						disabled: !log,
						onChange: (e) => {
							onToggleLog(!!e.target.checked).catch(() => void 0);
						}
					})
				}),
				h("div", {
					key: "log-where",
					style: {
						fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
						fontSize: "0.82em",
						color: TOK.labelTertiary,
						padding: "0 0 10px",
						wordBreak: "break-all",
						userSelect: "text"
					}
				}, t("logWhere")),
				h("div", {
					key: "log-actions",
					style: {
						display: "flex",
						gap: 8,
						paddingBottom: 2
					}
				}, [h(Btn, {
					key: "export",
					onClick: () => {
						onExport().catch(() => void 0);
					}
				}, t("logExport")), h(Btn, {
					key: "copy",
					tone: "ghost",
					onClick: () => {
						onCopyPath().catch(() => void 0);
					}
				}, t("logCopyPath"))]),
				h("div", {
					key: "log-danger",
					style: {
						display: "flex",
						alignItems: "center",
						gap: 10,
						marginTop: 10,
						paddingTop: 10,
						borderTop: "1px solid " + TOK.border
					}
				}, [h(Btn, {
					key: "clear",
					tone: "danger",
					onClick: () => {
						onClear().catch(() => void 0);
					}
				}, confirming ? t("logClearConfirm") : t("logClear")), dropped > 0 ? h("span", {
					key: "dropped",
					style: {
						fontFamily: TOK.font,
						fontSize: "0.82em",
						color: TOK.labelTertiary
					}
				}, t("logDropped") + " " + dropped) : null])
			]);
			if (note) logGroup.props.children.push(h("div", {
				key: "log-note",
				style: noteStyle
			}, note));
			return h("div", {
				style: {
					padding: 4,
					display: "flex",
					flexDirection: "column",
					fontSize: scaledBaseFontSize(remote.enabled, remote.size)
				},
				"data-dsh-prompt-settings-root": "1"
			}, [h(SettingsHeaderLinks, {
				key: "links",
				lang
			}), h(SettingGroup, {
				key: "list",
				pad: "4px 6px 8px"
			}, [
				h(SettingRow, {
					key: "hide-preset",
					"data-dsh-prompt-setting": "hidePreset",
					icon: h(PresetEyeIcon, { open: hideOn }),
					label: t("hidePresetToggle"),
					description: t("hidePresetHint"),
					control: h(Check, {
						checked: hideOn,
						"data-dsh-prompt-hide-toggle": "1",
						onChange: (e) => {
							saveHidePreset(!!e.target.checked);
							hideState[1](loadHidePreset());
						}
					})
				}),
				h(SettingRow, {
					key: "trigger-mode",
					"data-dsh-prompt-setting": "triggerMode",
					icon: h(TriggerPointerIcon, { clickOnly: !hoverTriggerOn }),
					label: t("triggerRowLabel"),
					description: t("triggerHint"),
					control: h(TriggerModeButton, {
						hover: hoverTriggerOn,
						lang
					})
				}),
				hairline("sep-hide-browser"),
				h(TemplateBrowser, {
					key: "browser",
					compact: false,
					collapsible: true
				})
			])]);
		}
		/** 记一条日志事件。出口只有一个：日志能力装进 globalThis.__dshPromptLog 的那个实例。
		*  走槽而不是 import 的原因：本仓既有回归脚本会把客户端模块逐个转译后单独 require
		*  （scripts/.rt-tmp/*.cjs），而单文件 bundle 里也没有可用的模块内 require——槽是两边都能用的唯一机制。
		*  能力缺席时是空操作，绝不因为记日志失败而影响功能。 */
		function logEvent$2(event, fields) {
			try {
				const log = globalThis.__dshPromptLog;
				if (log && typeof log.log === "function") log.log(event, fields);
			} catch (e) {}
		}
		function asString(v) {
			return typeof v === "string" ? v : "";
		}
		/** 容错读会话归属 id：workspaceId / workspace_id / workspace / groupId / wsId，只认非空 string */
		function sessionWorkspaceIdOf(raw) {
			try {
				if (!raw || typeof raw !== "object") return null;
				const cands = [
					raw.workspaceId,
					raw.workspace_id,
					raw.workspace,
					raw.groupId,
					raw.wsId
				];
				for (const c of cands) {
					if (typeof c === "string" && c.trim() !== "") return c;
					if (c && typeof c === "object" && typeof c.id === "string" && c.id.trim() !== "") return c.id;
				}
				return null;
			} catch (e) {
				return null;
			}
		}
		function sessionTitleOf(raw, fallbackId) {
			try {
				const cands = [
					raw.title,
					raw.name,
					raw.label
				];
				for (const c of cands) if (typeof c === "string" && c.trim() !== "") return c;
				return fallbackId;
			} catch (e) {
				return fallbackId;
			}
		}
		function sessionCwdOf(raw) {
			try {
				const cands = [
					raw.cwd,
					raw.path,
					raw.dir,
					raw.workdir,
					raw.workspacePath
				];
				for (const c of cands) if (typeof c === "string" && c !== "") return c;
				if (raw && raw.meta && typeof raw.meta === "object") {
					const m = raw.meta.cwd;
					if (typeof m === "string" && m !== "") return m;
				}
				if (raw && raw.header && typeof raw.header === "object") {
					const h = raw.header.cwd;
					if (typeof h === "string" && h !== "") return h;
				}
				return "";
			} catch (e) {
				return "";
			}
		}
		function sessionTimeOf(raw) {
			try {
				const cands = [
					raw.updatedAt,
					raw.updated_at,
					raw.mtime,
					raw.lastOpenedAt,
					raw.lastActiveAt
				];
				for (const c of cands) {
					const n = Number(c);
					if (isFinite(n) && n > 0) return n < 0xe8d4a51000 ? n * 1e3 : n;
				}
				return 0;
			} catch (e) {
				return 0;
			}
		}
		function sessionBlankOf(raw, title) {
			try {
				if (raw.blank === true) return true;
				if (raw.isBlank === true) return true;
				if (/空白/.test(title)) return true;
				if (title.trim() === "") return true;
				return false;
			} catch (e) {
				return false;
			}
		}
		/** 单条归一（fail-soft：无 id 回 null，调用方过滤）。
		*  归属优先取 `index`（工作区登记反查，见 buildWorkspaceIndex）；查不到才退回会话自身字段探测。 */
		function normalizeSession(raw, workspaceNames, index) {
			try {
				if (!raw || typeof raw !== "object") return null;
				const id = asString(raw.id || raw.sid || raw.sessionId);
				if (id === "") return null;
				let hit = null;
				try {
					hit = index && typeof index.get === "function" ? index.get(id) || null : null;
				} catch (e) {
					hit = null;
				}
				const wsId = hit ? hit.workspaceId : sessionWorkspaceIdOf(raw);
				let wsName = hit ? hit.workspaceName : "";
				try {
					if (workspaceNames instanceof Map) wsName = wsName || workspaceNames.get(wsId || "") || "";
					else if (workspaceNames && typeof workspaceNames === "object") wsName = wsName || workspaceNames[wsId || ""] || "";
				} catch (e) {}
				if (!wsName && raw && typeof raw === "object") {
					const cands = [
						raw.workspaceName,
						raw.workspace_name,
						raw.groupName
					];
					for (const c of cands) if (typeof c === "string" && c.trim() !== "") {
						wsName = c;
						break;
					}
				}
				const title = sessionTitleOf(raw, id);
				const ownCwd = sessionCwdOf(raw);
				return {
					id,
					title,
					workspaceId: wsId,
					workspaceName: wsName || wsId || "",
					cwd: ownCwd || (hit ? hit.path : ""),
					updatedAt: sessionTimeOf(raw),
					blank: sessionBlankOf(raw, title)
				};
			} catch (e) {
				return null;
			}
		}
		/** 从多态快照里捞出原始条目数组（数组 / {items} / {sessions} / {byId}，其余回 []，不抛） */
		function rawSessionItems(input) {
			try {
				if (!input) return [];
				if (Array.isArray(input)) return input;
				const o = input;
				if (Array.isArray(o.items)) return o.items;
				if (Array.isArray(o.sessions)) return o.sessions;
				if (Array.isArray(o.list)) return o.list;
				if (o.byId && typeof o.byId === "object") try {
					return Object.keys(o.byId).map((k) => o.byId[k]);
				} catch (e) {
					return [];
				}
				if (typeof o === "object") {
					if (typeof o.id === "string" && o.id !== "") return [o];
				}
				return [];
			} catch (e) {
				return [];
			}
		}
		/** 批量归一（去重保首见序，无 id 行丢弃，不抛） */
		function normalizeSessions(input, workspaceNames, index) {
			try {
				const raws = rawSessionItems(input);
				const out = [];
				const seen = /* @__PURE__ */ new Set();
				for (const r of raws) {
					const s = normalizeSession(r, workspaceNames, index);
					if (!s || seen.has(s.id)) continue;
					seen.add(s.id);
					out.push(s);
				}
				return out;
			} catch (e) {
				return [];
			}
		}
		/**
		* 从多态工作区登记里捞出原始登记数组（数组 / {items} / {workspaces} / {list} / {byId} / 单体，不抛）。
		* 名字表与反查索引共用这一条形态解析，两处不再各认一份形状。
		*/
		function rawWorkspaceItems(input) {
			try {
				if (!input) return [];
				if (Array.isArray(input)) return input;
				const o = input;
				if (Array.isArray(o.items)) return o.items;
				if (Array.isArray(o.workspaces)) return o.workspaces;
				if (Array.isArray(o.list)) return o.list;
				if (o.byId && typeof o.byId === "object") try {
					return Object.keys(o.byId).map((k) => {
						const r = o.byId[k];
						if (r && typeof r === "object" && typeof r.id === "string") return r;
						if (typeof r === "string") return {
							id: k,
							name: r
						};
						return {
							id: k,
							name: ""
						};
					});
				} catch (e) {
					return [];
				}
				if (typeof o === "object" && typeof o.id === "string" && o.id !== "") return [o];
				return [];
			} catch (e) {
				return [];
			}
		}
		/** 从多态工作区登记里捞出 id→名（数组 / {items} / {byId} / 单体，不抛） */
		function normalizeWorkspaceNames(input) {
			const out = /* @__PURE__ */ new Map();
			try {
				const pushOne = (r) => {
					try {
						if (!r || typeof r !== "object") return;
						const id = asString(r.id || r.workspaceId || r.key);
						if (id === "") return;
						const name = asString(r.name || r.title || r.label) || id;
						if (!out.has(id)) out.set(id, name);
					} catch (e) {}
				};
				for (const r of rawWorkspaceItems(input)) pushOne(r);
				return out;
			} catch (e) {
				return out;
			}
		}
		/**
		* 工作区登记 → `sessionId → 归属` 反查索引（**归属的权威来源**）。
		*
		* 宿主的归属关系存在**工作区这一侧**：`workspaceView` 的形状是
		* `{ workspaceId, path, title, sessionIds: string[], createdAt, updatedAt }`，
		* 会话对象自身**不带任何 workspaceId 字段**。所以归属只能从工作区登记反查——
		* 去会话身上找字段那条路恒为 null，会让所有会话塌进未归属桶、分组整面失效。
		* 登记里没有的会话保持无归属（调用方归未归属桶），不猜、不按 path 兜底。
		*/
		function buildWorkspaceIndex(input) {
			const out = /* @__PURE__ */ new Map();
			try {
				for (const r of rawWorkspaceItems(input)) {
					if (!r || typeof r !== "object") continue;
					const workspaceId = asString(r.workspaceId || r.id || r.key);
					if (workspaceId === "") continue;
					const workspaceName = asString(r.title || r.name || r.label) || workspaceId;
					const path = asString(r.path);
					const ids = Array.isArray(r.sessionIds) ? r.sessionIds : [];
					for (const sid of ids) {
						const id = asString(sid);
						if (id === "" || out.has(id)) continue;
						out.set(id, {
							workspaceId,
							workspaceName,
							path
						});
					}
				}
			} catch (e) {
				return out;
			}
			return out;
		}
		/**
		* 纯视图分组（#107 Q3 / #111 US8–US11）：
		* - 按 workspaceId 分组，无归属（null/''）进未归属桶；
		* - 未归属桶置底；其余组按组内最新倒序；
		* - 组内按 updatedAt 倒序；组头名 = 登记名 || workspaceId || 未归属；
		* - 同标题行打 collision=true（全局统计：跨组同名恰是真消歧场景；原型按组统计，此处故意 diverged，见审查结论 #9）；
		* - 不读存储不碰界面，纯函数。
		*/
		function groupWorkspaceSessions(sessions, workspaceNames, ungroupedName) {
			try {
				const list = Array.isArray(sessions) ? sessions.slice() : [];
				const unName = typeof ungroupedName === "string" && ungroupedName !== "" ? ungroupedName : "未归属";
				const nameOf = (wsId) => {
					try {
						if (!wsId) return unName;
						if (workspaceNames instanceof Map) return workspaceNames.get(wsId) || wsId;
						if (workspaceNames && typeof workspaceNames[wsId] === "string") return workspaceNames[wsId] || wsId;
						return wsId;
					} catch (e) {
						return wsId || unName;
					}
				};
				const withNames = list.map((s) => {
					if (s.workspaceName && s.workspaceName !== "") return s;
					if (!s.workspaceId) return {
						...s,
						workspaceName: unName
					};
					return {
						...s,
						workspaceName: nameOf(s.workspaceId)
					};
				});
				const titleCount = /* @__PURE__ */ new Map();
				for (const s of withNames) titleCount.set(s.title, (titleCount.get(s.title) || 0) + 1);
				const marked = withNames.map((s) => ({
					...s,
					collision: (titleCount.get(s.title) || 0) > 1
				}));
				const map = /* @__PURE__ */ new Map();
				const order = [];
				for (const s of marked) {
					const k = s.workspaceId || "__ungrouped";
					let g = map.get(k);
					if (!g) {
						g = {
							key: k,
							workspaceId: s.workspaceId,
							name: s.workspaceId ? nameOf(s.workspaceId) : unName,
							items: [],
							latest: 0,
							ungrouped: !s.workspaceId
						};
						map.set(k, g);
						order.push(k);
					}
					g.items.push(s);
					if (s.updatedAt > g.latest) g.latest = s.updatedAt;
				}
				const groups = order.map((k) => map.get(k));
				for (const g of groups) g.items.sort((a, b) => b.updatedAt - a.updatedAt);
				groups.sort((a, b) => {
					if (a.ungrouped && !b.ungrouped) return 1;
					if (!a.ungrouped && b.ungrouped) return -1;
					return b.latest - a.latest;
				});
				return groups;
			} catch (e) {
				return [];
			}
		}
		/** 搜索 haystack（标题 + 工作区名，未归属行用展示名回填，保证搜“未归属”可达；拼音/cwd 全文首版不做，留缝） */
		function sessionHaystack(s, ungroupedName) {
			try {
				const wn = (s.workspaceName || "") !== "" ? s.workspaceName : asString(ungroupedName) || "";
				return ((s.title || "") + " " + wn).toLowerCase();
			} catch (e) {
				return "";
			}
		}
		/** 搜索过滤（#107 Q4 / #111 US12–US14：大小写不敏感子串；空查询回全量；无结果回 [] 由调用方进空态，不回退） */
		function filterWorkspaceSessions(sessions, query, ungroupedName) {
			try {
				const list = Array.isArray(sessions) ? sessions : [];
				const q = String(query || "").trim().toLowerCase();
				if (q === "") return list.slice();
				return list.filter((s) => sessionHaystack(s, ungroupedName).indexOf(q) >= 0);
			} catch (e) {
				return [];
			}
		}
		/** 紧凑相对时间（v7 口径中文：刚刚/5分/3时/2天；英文：now/5m/3h/2d；悬停看绝对，不抛） */
		function relativeWorkspaceTime(ts, now, lang) {
			try {
				const en = lang === "en";
				const t = Number(ts);
				if (!isFinite(t) || t <= 0) return "";
				const d = (typeof now === "number" && isFinite(now) ? now : Date.now()) - t;
				if (d < 0) return en ? "now" : "刚刚";
				const m = Math.floor(d / 6e4);
				if (m < 1) return en ? "now" : "刚刚";
				if (m < 60) return en ? m + "m" : m + "分";
				const h = Math.floor(m / 60);
				if (h < 24) return en ? h + "h" : h + "时";
				return en ? Math.floor(h / 24) + "d" : Math.floor(h / 24) + "天";
			} catch (e) {
				return "";
			}
		}
		/** 绝对时间（title 悬停用，失败回 String(ts)，不抛） */
		function absoluteWorkspaceTime(ts) {
			try {
				const t = Number(ts);
				if (!isFinite(t) || t <= 0) return "";
				try {
					return new Date(t).toLocaleString();
				} catch (e) {
					return String(ts);
				}
			} catch (e) {
				return "";
			}
		}
		/** 工作区配色（v7 色点通道：按 workspaceId 稳定哈希进固定调色盘，null 进未归属位；只定可辨，不定具体色） */
		const WORKSPACE_DOT_COLORS = [
			"#f0a45c",
			"#7fd08a",
			"#b388ff",
			"#6cb8e0",
			"#e06c75",
			"#8ad0c8"
		];
		function workspaceColor(wsId) {
			try {
				const s = typeof wsId === "string" && wsId !== "" ? wsId : "__ungrouped";
				let acc = 0;
				for (let i = 0; i < s.length; i++) acc = acc * 31 + s.charCodeAt(i) >>> 0;
				return WORKSPACE_DOT_COLORS[acc % WORKSPACE_DOT_COLORS.length];
			} catch (e) {
				return WORKSPACE_DOT_COLORS[0];
			}
		}
		/**
		* 工作区短码（v7 短码通道的数据驱动版：取归属名按分隔符切分的末段前 4 字；
		* 如 dsh-prompt→prom、dsh-opencode-palette→pale；空归属回 '' 由调用方按双语回退。
		* 原型 SHORT 表是演示数据硬编码（prompt/配色/散），生产不定死表。）
		*/
		function workspaceShortCode(name, wsId) {
			try {
				const raw = asString(name) || asString(wsId);
				if (raw === "") return "";
				const parts = raw.split(/[-_\/\\:.]+/).filter((p) => p !== "");
				return (parts.length > 1 ? parts[parts.length - 1] : raw).slice(0, 4);
			} catch (e) {
				return "";
			}
		}
		/** 路径尾段（… + 尾段，空回 ''，不抛；v7 只给冲突行显） */
		function tailSegment(cwd) {
			try {
				const s = asString(cwd);
				if (s === "") return "";
				const parts = s.split("/");
				return parts[parts.length - 1] || s;
			} catch (e) {
				return "";
			}
		}
		/** 安全读左展开态：true=展开、false=折叠、null=未知（缺席/未实现/异常，不抛） */
		function readWorkspaceLeftExpanded(ctl) {
			try {
				const f = ctl && ctl.isExpanded;
				if (typeof f !== "function") return null;
				const v = f.call(ctl);
				return v === true ? true : v === false ? false : null;
			} catch (e) {
				return null;
			}
		}
		/** 只切左栏：调宿主 toggleExpanded，不碰本插件任何 state、不记日志；返回是否真调到宿主面 */
		function toggleWorkspaceLeft(ctl) {
			try {
				const f = ctl && ctl.toggleExpanded;
				if (typeof f !== "function") return false;
				f.call(ctl);
				return true;
			} catch (e) {
				return false;
			}
		}
		/** 左键门控：有切换面即有资格渲染（今天恒为 false → 休眠隐藏；宿主补面后自动出现） */
		function canShowWorkspaceLeft(ctl) {
			try {
				return !!ctl && typeof ctl.toggleExpanded === "function";
			} catch (e) {
				return false;
			}
		}
		/** 同步双门控（#111 US27–US28 / #113 US6：可枚举且可切换双满足才出现；半残隐藏；探测中由调用方另置 pending） */
		function probeWorkspaceGates(faces) {
			try {
				if (!faces || typeof faces !== "object") return {
					enumerable: false,
					switchable: false
				};
				const sessions = faces.sessions;
				const ui = faces.uiWorkspace;
				let enumerable = false;
				try {
					if (sessions) {
						if (Array.isArray(sessions) && sessions.length >= 0) enumerable = true;
						else if (typeof sessions === "object") {
							const lst = sessions.list;
							if (lst && typeof lst.getSnapshot === "function") enumerable = true;
							else if (typeof sessions.getSnapshot === "function") enumerable = true;
							else if (Array.isArray(sessions.items)) enumerable = true;
							else if (Array.isArray(sessions.sessions)) enumerable = true;
							else if (sessions.byId && typeof sessions.byId === "object") enumerable = true;
						}
					}
				} catch (e) {
					enumerable = false;
				}
				let switchable = false;
				try {
					if (ui && typeof ui.openSession === "function") switchable = true;
					else if (sessions && typeof sessions.open === "function") switchable = true;
				} catch (e) {
					switchable = false;
				}
				return {
					enumerable,
					switchable
				};
			} catch (e) {
				return {
					enumerable: false,
					switchable: false
				};
			}
		}
		/** 双满足才出现（门控唯一出口，调用方据此隐藏入口键） */
		function canShowWorkspacePicker(faces) {
			try {
				const g = probeWorkspaceGates(faces);
				return g.enumerable === true && g.switchable === true;
			} catch (e) {
				return false;
			}
		}
		function callMaybeFn(v) {
			try {
				if (typeof v === "function") return v();
				return v;
			} catch (e) {
				return;
			}
		}
		async function awaitMaybe(v) {
			try {
				if (v && typeof v.then === "function") return await v;
				return v;
			} catch (e) {
				throw e;
			}
		}
		/** 从 sessions 机会面捞快照（多态容错：list.getSnapshot / getSnapshot / items / 数组 / get，异步全捕获） */
		async function resolveSessionRaws(sessions) {
			const tries = [];
			try {
				if (!sessions) return [];
				if (Array.isArray(sessions)) return sessions;
				if (typeof sessions === "object") {
					const lst = sessions.list;
					if (lst && typeof lst.getSnapshot === "function") tries.push(() => lst.getSnapshot());
					if (typeof sessions.getSnapshot === "function") tries.push(() => sessions.getSnapshot());
					if (typeof sessions.getSnapshots === "function") tries.push(() => sessions.getSnapshots());
					for (const t of tries) try {
						const items = rawSessionItems(await awaitMaybe(callMaybeFn(t())));
						if (items.length > 0) return items;
					} catch (e) {}
					if (Array.isArray(sessions.items)) return sessions.items;
					if (Array.isArray(sessions.sessions)) return sessions.sessions;
					if (sessions.byId && typeof sessions.byId === "object") return rawSessionItems(sessions);
				}
				return [];
			} catch (e) {
				return [];
			}
		}
		/** 从 workspaces 机会面捞登记（多态容错：list.getSnapshot / getSnapshot / getCurrent / list / getAll / 数组，异步全捕获） */
		async function resolveWorkspaceRaws(workspaces) {
			try {
				if (!workspaces) return [];
				if (Array.isArray(workspaces)) return workspaces;
				if (typeof workspaces === "object") {
					const fns = [];
					try {
						const lst = workspaces.list;
						if (lst && typeof lst.getSnapshot === "function") fns.push(() => lst.getSnapshot());
						if (typeof workspaces.getSnapshot === "function") fns.push(() => workspaces.getSnapshot());
						if (typeof workspaces.getCurrent === "function") fns.push(() => workspaces.getCurrent());
						if (typeof workspaces.list === "function") fns.push(() => workspaces.list());
						if (typeof workspaces.getAll === "function") fns.push(() => workspaces.getAll());
					} catch (e) {}
					for (const f of fns) try {
						const v = await awaitMaybe(callMaybeFn(f));
						if (Array.isArray(v) && v.length > 0) return v;
						if (v && typeof v === "object") {
							const items = rawSessionItems(v);
							if (items.length > 0) {
								if (items.length === 1 && v.id && items[0].id === v.id) return items;
								return items;
							}
							if (v.id) return [v];
						}
					} catch (e) {}
					if (Array.isArray(workspaces.items)) return workspaces.items;
					if (workspaces.byId) try {
						const keys = Object.keys(workspaces.byId);
						if (keys.length > 0) return keys.map((k) => workspaces.byId[k]);
					} catch (e) {}
				}
				return [];
			} catch (e) {
				return [];
			}
		}
		/**
		* 从 workspaces 面捞归档会话 id 集（快照 `archivedSessionIds` / 面直挂同名属性，多态容错，不抛）。
		* 归档 = 用户主动收起的会话，挑选器默认不列（否则快速切换列表会被历史垃圾淹没）。
		*/
		async function resolveArchivedSessionIds(workspaces) {
			const out = /* @__PURE__ */ new Set();
			const eat = (v) => {
				if (!Array.isArray(v)) return;
				for (const x of v) {
					const s = asString(x);
					if (s !== "") out.add(s);
				}
			};
			const eatSnapshot = (snap) => {
				if (snap && typeof snap === "object") eat(snap.archivedSessionIds);
			};
			try {
				if (!workspaces || typeof workspaces !== "object") return out;
				try {
					const lst = workspaces.list;
					if (lst && typeof lst.getSnapshot === "function") eatSnapshot(await awaitMaybe(callMaybeFn(lst.getSnapshot())));
				} catch (e) {}
				try {
					if (typeof workspaces.getSnapshot === "function") eatSnapshot(await awaitMaybe(callMaybeFn(workspaces.getSnapshot())));
				} catch (e) {}
				try {
					eat(workspaces.archivedSessionIds);
				} catch (e) {}
			} catch (e) {}
			return out;
		}
		/**
		* 枚举（每次打开重探，抄 sidebarCtl 晚到模式）：
		* - 成功回 {sessions, names, archived}（空数组即真无，由调用方进空态，不是失败）；
		* - 双面全空（连一个条目都捞不到且同步门控本就不满足）抛错，由调用方进失败/探测缺席；
		* - 全程异步全捕获，不抛宿主原生错以外的错。
		*/
		async function enumerateWorkspaceSessions(faces) {
			try {
				if (!faces || typeof faces !== "object") throw new Error("probe-absent");
				const gates = probeWorkspaceGates(faces);
				const [sRaws, wRaws, archived] = await Promise.all([
					resolveSessionRaws(faces.sessions),
					resolveWorkspaceRaws(faces.workspaces),
					resolveArchivedSessionIds(faces.workspaces)
				]);
				const names = normalizeWorkspaceNames(wRaws);
				const filled = normalizeSessions(sRaws, names, buildWorkspaceIndex(wRaws)).filter((s) => !archived.has(s.id)).map((s) => {
					if (s.workspaceName && s.workspaceName !== "") return s;
					if (!s.workspaceId) return {
						...s,
						workspaceName: ""
					};
					return {
						...s,
						workspaceName: names.get(s.workspaceId) || s.workspaceId
					};
				});
				if (filled.length === 0 && !gates.enumerable) throw new Error("probe-absent");
				return {
					sessions: filled,
					names,
					archived
				};
			} catch (e) {
				throw e instanceof Error ? e : /* @__PURE__ */ new Error("probe-absent");
			}
		}
		/**
		* 切换（机会链：uiWorkspace.openSession 优先、sessions.open 回退，异步全捕获）：
		* - 成功回 true（调用方关挑选器）；
		* - 失败抛错（调用方留屏重试，不注入错误会话，沿 #739）；
		* - 只接 thenable 才等，非 thenable 视为同步成功；
		* - 不读写任何草稿。
		*/
		async function switchWorkspaceSession(faces, sid) {
			try {
				const id = typeof sid === "string" ? sid : String(sid || "");
				if (id === "") throw new Error("switch-failed");
				if (!faces || typeof faces !== "object") throw new Error("switch-failed");
				const ui = faces.uiWorkspace;
				const sessions = faces.sessions;
				if (ui && typeof ui.openSession === "function") try {
					const r = ui.openSession(id);
					if (r && typeof r.then === "function") await r;
					return true;
				} catch (e) {}
				if (sessions && typeof sessions.open === "function") try {
					const r = sessions.open(id);
					if (r && typeof r.then === "function") await r;
					return true;
				} catch (e) {}
				throw new Error("switch-failed");
			} catch (e) {
				throw e instanceof Error ? e : /* @__PURE__ */ new Error("switch-failed");
			}
		}
		/** 总页数：0 项 → 0 页；perPage 非法 → 按 1 算 */
		function pageCount(total, perPage) {
			const t = typeof total === "number" && isFinite(total) ? Math.max(0, Math.floor(total)) : 0;
			let p = typeof perPage === "number" && isFinite(perPage) ? Math.floor(perPage) : NaN;
			if (!(p >= 1)) p = 1;
			if (t === 0) return 0;
			return Math.ceil(t / p);
		}
		/** 页钳制：total=0 恒回 0；否则钳进 [0, pageCount-1]；页非法回 0 */
		function clampPage(page, total, perPage) {
			const n = pageCount(total, perPage);
			if (n <= 0) return 0;
			const v = typeof page === "number" && isFinite(page) ? Math.floor(page) : 0;
			if (v < 0) return 0;
			if (v > n - 1) return n - 1;
			return v;
		}
		/** 项所在页（均匀项）：index 非法 → 0；perPage 非法 → 按 1 算 */
		function pageOf(index, perPage) {
			let p = typeof perPage === "number" && isFinite(perPage) ? Math.floor(perPage) : NaN;
			if (!(p >= 1)) p = 1;
			const i = typeof index === "number" && isFinite(index) ? Math.floor(index) : 0;
			if (i < 0) return 0;
			return Math.floor(i / p);
		}
		/** 按量出像素算每页项数：floor(容器宽÷项宽)，至少 1；量不到回 fallback（测试/无 DOM 环境） */
		function perPageFromMeasure(containerPx, itemPx, fallback) {
			const fb = typeof fallback === "number" && isFinite(fallback) && Math.floor(fallback) >= 1 ? Math.floor(fallback) : 3;
			const c = typeof containerPx === "number" && isFinite(containerPx) ? containerPx : NaN;
			const it = typeof itemPx === "number" && isFinite(itemPx) ? itemPx : NaN;
			if (!(c > 0) || !(it > 0)) return fb;
			const n = Math.floor(c / it);
			return n >= 1 ? n : 1;
		}
		//#endregion
		//#region src/client/style-ownership.ts
		/**
		* 宿主样式归属账本（infra）（#171 N6：可 import 者 —— entry-button、host-content-font、index、workspace-picker）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 运行时 <style> 归属（#146）
		*
		* DSH 宿主用 `<style>` 上的 `data-plugin` 维护样式归属账本：插件物化时认领
		* 所有无归属的 `<style>`，插件重载/回收时删除自己名下的 `<style>`。
		* 自家 6 枚运行时样式（picker 动画 / entry 窄屏 / remote 反馈 / 宿主内容字 / rows / assistant）
		* 共 4 处注入点（hostfont 的三条桥自 #148 起共用本文件的 applyOwnedStyle，不再各写一份拷贝）；
		* 若只写私有标记 `data-dsh-prompt-style` 而不写 `data-plugin`，就会被随后物化的
		* 别的插件误认领、对方重载时被连带删除且不会恢复。
		*
		* 约定（对抗审查补丁已认可）：
		* - 归属键恒为包名，唯一真相 = `package.json:name` = `cordis.patch.yml:id/name`
		*   （= `dsh-prompt`），收敛在此单常量，不在各注入点散写字面量；
		* - 私有标记 `data-dsh-prompt-style` 保留（幂等/排查用），查询键
		*   `style[data-dsh-prompt-style="..."]` 保持不变（现有 test-issue-66/112 mock
		*   靠它精确匹配）；
		* - 只给自家样式打标，禁止触碰非自家 `<style>`；
		* - 全程 fail-soft：无 DOM / 方法缺席 / 异常一律静默，不影响调用方渲染，
		*   不记新日志、不进持久化。
		*/
		const STYLE_OWNER_ID = "dsh-prompt";
		const STYLE_OWNER_ATTR = "data-plugin";
		const STYLE_MARKER_ATTR = "data-dsh-prompt-style";
		/** 查询键（与历史字面量逐字一致）：style[data-dsh-prompt-style="<marker>"] */
		function selectorForMarker(markerId) {
			return "style[data-dsh-prompt-style=\"" + markerId + "\"]";
		}
		function readOwner(el) {
			try {
				if (!el) return null;
				if (typeof el.getAttribute === "function") {
					const v = el.getAttribute(STYLE_OWNER_ATTR);
					return typeof v === "string" ? v : v == null ? null : String(v);
				}
				if (el.attrs && typeof el.attrs === "object") {
					const v = el.attrs[STYLE_OWNER_ATTR];
					return typeof v === "string" ? v : v == null ? null : String(v);
				}
				if (el.dataset && typeof el.dataset === "object") {
					const v = el.dataset.plugin;
					return typeof v === "string" ? v : v == null ? null : String(v);
				}
			} catch (e) {}
			return null;
		}
		/** 是否已正确归属（值全等于归属键） */
		function isOwnedStyleTag(el) {
			try {
				return readOwner(el) === STYLE_OWNER_ID;
			} catch (e) {
				return false;
			}
		}
		/**
		* 打上归属（新建边用；幂等，可重复调用）。
		* 先写 `data-plugin` 再写私有标记是调用方的顺序，本函数只保证归属位正确。
		*/
		function markOwnedStyleTag(el) {
			try {
				const tag = el;
				if (!tag) return;
				if (typeof tag.setAttribute === "function") {
					try {
						tag.setAttribute(STYLE_OWNER_ATTR, STYLE_OWNER_ID);
					} catch (e) {}
					return;
				}
				try {
					if (tag.attrs && typeof tag.attrs === "object") tag.attrs[STYLE_OWNER_ATTR] = STYLE_OWNER_ID;
				} catch (e) {}
			} catch (e) {}
		}
		/**
		* 保证归属正确（收养边 / 更新边 / 闩命中边用）：
		* 已正确归属则 no-op，否则补上。永不抛。
		*/
		function ensureOwnedStyleTag(el) {
			try {
				if (isOwnedStyleTag(el)) return;
				markOwnedStyleTag(el);
			} catch (e) {}
		}
		/** DOM 句柄（无 DOM / 无 head → null）；调用方拿到 null 即静默 no-op */
		function styleDocument() {
			try {
				const g = globalThis;
				const doc = g && g.document;
				if (!doc || typeof doc.createElement !== "function" || !doc.head) return null;
				return doc;
			} catch (e) {}
			return null;
		}
		/** 读元素私有标记（有 getAttribute 走属性，极简 mock 的 attrs 字典兜底） */
		function readMarker(el) {
			try {
				if (!el) return null;
				if (typeof el.getAttribute === "function") {
					const v = el.getAttribute(STYLE_MARKER_ATTR);
					return typeof v === "string" ? v : null;
				}
				const v = el.attrs && el.attrs["data-dsh-prompt-style"];
				return typeof v === "string" ? v : null;
			} catch (e) {}
			return null;
		}
		/**
		* 查自家样式段：选择器命中后**复核私有标记逐字相等**。
		* 复核是必要的：选择器盲的假 DOM（老测试桩 `querySelector: () => head[0]`）会返回别家段，
		* 不核对就会改写/摘掉别家桥的样式；宁可当作没找到（新建一份），也绝不误伤非自家 <style>。
		*/
		function findOwnedStyle(doc, markerId) {
			try {
				if (typeof doc.querySelector !== "function") return null;
				const el = doc.querySelector(selectorForMarker(markerId));
				return readMarker(el) === markerId ? el : null;
			} catch (e) {}
			return null;
		}
		/** 同标记的其余副本（双份 bundle / 外部克隆会留下旧值副本；同权重时文档更后者胜 ⇒ 必须清掉） */
		function extraOwnedStyles(doc, markerId) {
			const out = [];
			try {
				if (typeof doc.querySelectorAll !== "function") return out;
				const all = doc.querySelectorAll(selectorForMarker(markerId));
				if (!all || typeof all.length !== "number") return out;
				for (let i = 0; i < all.length; i++) if (readMarker(all[i]) === markerId) out.push(all[i]);
			} catch (e) {}
			return out;
		}
		function removeTag(el) {
			try {
				if (!el) return;
				if (el.parentNode && typeof el.parentNode.removeChild === "function") el.parentNode.removeChild(el);
				else if (typeof el.remove === "function") el.remove();
			} catch (e) {}
		}
		/**
		* 写入/更新自家样式段（幂等）。同值短路：偏好变更（滑块每档一次）会反复调到，
		* 同 css 不重写 textContent，免掉无谓的样式重算。
		*/
		function applyOwnedStyle(doc, markerId, css) {
			try {
				const prev = findOwnedStyle(doc, markerId);
				if (prev) {
					ensureOwnedStyleTag(prev);
					if (prev.textContent !== css) try {
						prev.textContent = css;
					} catch (e) {}
					for (const dup of extraOwnedStyles(doc, markerId)) if (dup !== prev) removeTag(dup);
					return;
				}
			} catch (e) {}
			try {
				const tag = doc.createElement("style");
				if (!tag || typeof tag.setAttribute !== "function") return;
				markOwnedStyleTag(tag);
				tag.setAttribute(STYLE_MARKER_ATTR, markerId);
				try {
					tag.textContent = css;
				} catch (e) {}
				doc.head.appendChild(tag);
				for (const dup of extraOwnedStyles(doc, markerId)) if (dup !== tag) removeTag(dup);
			} catch (e) {}
		}
		/** 摘自家样式段（幂等：不在也不抛；同标记的多余副本一并清） */
		function dropOwnedStyle(doc, markerId) {
			try {
				const first = findOwnedStyle(doc, markerId);
				if (first) removeTag(first);
				for (const dup of extraOwnedStyles(doc, markerId)) removeTag(dup);
			} catch (e) {}
		}
		//#endregion
		//#region src/client/workspace-picker.ts
		/**
		* Workspace Picker 全屏本体（组件）（#171 N6：可 import 者 —— entry-button）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 全屏挑选器本体（#104 MAP，视觉以 #108 v7 定稿为准，语义以 #111 为准）
		*
		* 定稿 v7 = C 手风琴 + 标题全显换行第一优先 + 时间尾随 + 徽标行内 + 一级卡只留名与计数
		* + 自适应抽屉（内容定高、上限 88% 内滚、禁大片空白）。
		* #115（用户 2026-10-05 拍板，architect 版）：近全屏内缩面板（内容定高、天花板近满屏）
		* + 竖屏会话在上、tab 条中、底部操作栏［工‹｜会‹｜会›｜工›］…［×］（层色边框＋点击脉冲）
		* + 真分页纯模型（pager.ts）+ × 跟字号放大；#124 横竖统一（rail 退役）；整体压紧多装。
		* 状态机（#107 Q1/#111）：关闭→探测→加载→就绪/空/失败→切换中→关闭或留屏；
		* 成功才关，其余留屏；失败不自动关；取消只取消等待。
		* 约束：不进持久化、不记新日志、不读写草稿（沿 #111）。
		*/
		/** 加载条动画（v7 loadbar 有 1s 无限 slide；inline style 写不出 keyframes，走自家 style 注入惯例） */
		const PICKER_ANIM_STYLE_ID = "dsh-prompt-picker-anim";
		const PICKER_ANIM_CSS = [
			"@keyframes dsh-prompt-picker-slide { from { margin-left: -40%; } to { margin-left: 100%; } }",
			".dsh-prompt-picker-load-i { height: 100%; width: 40%; border-radius: 99px; background: var(--dsw-specific-accent,#f0a45c); animation: dsh-prompt-picker-slide 1s infinite linear; }",
			"@keyframes dsh-prompt-pager-pulse { 0% { transform: scale(1); } 35% { transform: scale(1.25); } 100% { transform: scale(1); } }"
		].join("\n");
		let pickerAnimReady = false;
		function ensurePickerAnimStyle() {
			try {
				const doc = globalThis.document;
				if (!doc || !doc.head || typeof doc.createElement !== "function") return;
				const sel = selectorForMarker(PICKER_ANIM_STYLE_ID);
				const lookup = () => {
					try {
						return typeof doc.querySelector === "function" ? doc.querySelector(sel) : null;
					} catch (e) {
						return null;
					}
				};
				if (pickerAnimReady) {
					let cur = null;
					try {
						cur = lookup();
					} catch (e) {
						return;
					}
					if (cur) {
						ensureOwnedStyleTag(cur);
						return;
					}
					pickerAnimReady = false;
				} else {
					let existing = null;
					try {
						existing = lookup();
					} catch (e) {
						existing = null;
					}
					if (existing) {
						ensureOwnedStyleTag(existing);
						pickerAnimReady = true;
						return;
					}
				}
				const tag = doc.createElement("style");
				markOwnedStyleTag(tag);
				tag.setAttribute("data-dsh-prompt-style", PICKER_ANIM_STYLE_ID);
				tag.textContent = PICKER_ANIM_CSS;
				doc.head.appendChild(tag);
				pickerAnimReady = true;
			} catch (e) {}
		}
		/** 会话卡片（v7 行内徽标 + 标题全显 + 时间尾随 + 元信息行按需渲染） */
		function SessionCard(props) {
			const { h, s, lang, ungroupedName, fallbackShort, current, failed, withShort, onPick } = props;
			const trail = relativeWorkspaceTime(s.updatedAt, void 0, lang);
			const abs = absoluteWorkspaceTime(s.updatedAt);
			const displayName = (s.workspaceName || "") !== "" ? s.workspaceName : ungroupedName;
			const badges = [];
			if (s.blank) badges.push(h("span", {
				key: "blank",
				style: {
					display: "inline-block",
					verticalAlign: "middle",
					margin: "0 0.55em 0 0",
					fontSize: "0.72em",
					fontWeight: 700,
					borderRadius: 999,
					padding: "1px 8px",
					lineHeight: 1.6,
					border: "1px solid var(--dsw-specific-accent,#f0a45c)",
					color: "var(--dsw-specific-accent,#f0a45c)",
					whiteSpace: "nowrap"
				},
				"data-dsh-prompt-picker-badge-blank": "1"
			}, tr(lang, STR.pickerBlank)));
			if (current) badges.push(h("span", {
				key: "cur",
				style: {
					display: "inline-block",
					verticalAlign: "middle",
					margin: "0 0.55em 0 0",
					fontSize: "0.72em",
					fontWeight: 700,
					borderRadius: 999,
					padding: "1px 8px",
					lineHeight: 1.6,
					background: "#7fd08a",
					border: "1px solid #7fd08a",
					color: "#0e1016",
					whiteSpace: "nowrap"
				},
				"data-dsh-prompt-picker-badge-cur": "1"
			}, tr(lang, STR.pickerCurrent)));
			if (failed) badges.push(h("span", {
				key: "fail",
				style: {
					display: "inline-block",
					verticalAlign: "middle",
					margin: "0 0.55em 0 0",
					fontSize: "0.72em",
					fontWeight: 700,
					borderRadius: 999,
					padding: "1px 8px",
					lineHeight: 1.6,
					border: "1px solid var(--dsw-specific-danger,#e06c75)",
					color: "var(--dsw-specific-danger,#e06c75)",
					whiteSpace: "nowrap"
				},
				"data-dsh-prompt-picker-badge-fail": "1"
			}, tr(lang, STR.pickerSwitchFailBadge)));
			const meta = [];
			if (withShort) {
				meta.push(h("span", {
					key: "dot",
					"data-dsh-prompt-picker-dot": "1",
					style: {
						flex: "none",
						width: 10,
						height: 10,
						borderRadius: "50%",
						background: workspaceColor(s.workspaceId)
					}
				}));
				const short = s.workspaceId ? workspaceShortCode(s.workspaceName, s.workspaceId) || fallbackShort : fallbackShort;
				meta.push(h("span", {
					key: "short",
					style: {
						flex: "none",
						fontSize: "0.75em",
						color: "var(--dsw-alias-label-tertiary)",
						background: "var(--dsw-alias-bg-layer-3)",
						border: "1px solid var(--dsw-alias-border-l1)",
						borderRadius: 6,
						padding: "1px 6px",
						whiteSpace: "nowrap"
					}
				}, short));
			}
			if (s.collision && s.cwd) meta.push(h("span", {
				key: "tail",
				title: s.cwd,
				style: {
					flex: "none",
					fontSize: "0.72em",
					color: "var(--dsw-alias-label-tertiary)",
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid var(--dsw-alias-border-l1)",
					borderRadius: 6,
					padding: "1px 6px",
					maxWidth: 130,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				"data-dsh-prompt-picker-tail": "1"
			}, "…" + tailSegment(s.cwd)));
			return h("button", {
				type: "button",
				title: s.title + "\n" + abs + "\n" + displayName + (s.cwd ? " · " + s.cwd : ""),
				"data-dsh-prompt-picker-row": s.id,
				"aria-current": current ? "true" : void 0,
				onMouseDown: keepComposerFocus,
				onClick: () => onPick(s.id),
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					width: "100%",
					minHeight: "4.5em",
					textAlign: "left",
					cursor: "pointer",
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid " + (current ? "#7fd08a" : "var(--dsw-alias-border-l1)"),
					boxShadow: current ? "inset 0 0 0 1px #7fd08a" : "none",
					color: "var(--dsw-alias-label-primary)",
					borderRadius: 12,
					padding: "0.6em 0.75em",
					fontSize: "0.92em",
					minWidth: 0,
					fontFamily: "var(--dsw-font-family)"
				},
				"data-dsh-prompt-picker-card": "1"
			}, [h("div", {
				key: "ct",
				style: {
					fontWeight: 700,
					lineHeight: 1.45,
					wordBreak: "break-word"
				}
			}, [
				...badges,
				h("span", { key: "t" }, s.title === "" ? tr(lang, STR.pickerUntitled) : s.title),
				trail === "" ? null : h("span", {
					key: "trail",
					title: abs,
					style: {
						float: "right",
						fontSize: "0.82em",
						color: "var(--dsw-alias-label-tertiary)",
						whiteSpace: "nowrap",
						margin: "0.22em 0 0.1em 0.7em",
						fontVariantNumeric: "tabular-nums",
						fontWeight: 400
					},
					"data-dsh-prompt-picker-time": "1"
				}, [trail + " ", h("span", {
					key: "go",
					"aria-hidden": "true"
				}, "›")]),
				h("div", {
					key: "clear",
					style: { clear: "both" }
				})
			]), meta.length === 0 ? null : h("div", {
				key: "cm",
				style: {
					display: "flex",
					alignItems: "center",
					gap: 6,
					marginTop: 6
				}
			}, meta)]);
		}
		function WorkspacePicker(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const langState = react.useState(resolveLocale());
			const lang = langState[0];
			react.useEffect(() => subscribeLocale((l) => {
				langState[1](l);
			}), []);
			const ungroupedName = tr(lang, STR.pickerUngrouped);
			const fallbackShort = tr(lang, STR.pickerUnassignedShort);
			const faces = props.faces;
			const currentId = typeof props.currentId === "string" ? props.currentId : "";
			const size = typeof props.remoteSize === "number" ? props.remoteSize : 5;
			let wideAuto = false;
			try {
				if (typeof window !== "undefined" && window.innerWidth > window.innerHeight) wideAuto = true;
			} catch (e) {
				wideAuto = false;
			}
			const gridCols = (typeof props.wide === "boolean" ? props.wide : wideAuto) ? 3 : 2;
			const gridStyle = {
				display: "grid",
				gridTemplateRows: "repeat(2, minmax(0, auto))",
				gridAutoFlow: "column",
				gridAutoColumns: "minmax(14em, 18em)",
				gap: "0.4em",
				alignItems: "stretch",
				alignContent: "end",
				flex: "none",
				width: "max-content",
				minWidth: "100%"
			};
			const TAB_W = "9em";
			const PAGER_BOX = "2.5em";
			const tabRowStyle = {
				display: "grid",
				gridTemplateRows: "repeat(2, auto)",
				gridAutoFlow: "column",
				gridAutoColumns: TAB_W,
				gap: "0.4em",
				alignItems: "stretch"
			};
			ensurePickerAnimStyle();
			const phaseState = react.useState("probing");
			const phase = phaseState[0];
			const setPhase = phaseState[1];
			const queryState = react.useState("");
			const query = queryState[0];
			const setQuery = queryState[1];
			const sessionsState = react.useState([]);
			const sessions = sessionsState[0];
			const setSessions = sessionsState[1];
			const namesState = react.useState(/* @__PURE__ */ new Map());
			const names = namesState[0];
			const setNames = namesState[1];
			const switchingState = react.useState(null);
			const switchingId = switchingState[0];
			const setSwitchingId = switchingState[1];
			const failRowState = react.useState(null);
			const failRowId = failRowState[0];
			const setFailRowId = failRowState[1];
			const failKindState = react.useState(null);
			const failKind = failKindState[0];
			const setFailKind = failKindState[1];
			const emptyKindState = react.useState(null);
			const emptyKind = emptyKindState[0];
			const setEmptyKind = emptyKindState[1];
			const openGroupState = react.useState(null);
			const openGroup = openGroupState[0];
			const setOpenGroup = openGroupState[1];
			const tabPageState = react.useState(0);
			const tabPage = tabPageState[0];
			const setTabPage = tabPageState[1];
			const tabPerPageState = react.useState(3);
			const tabPerPage = tabPerPageState[0];
			const setTabPerPage = tabPerPageState[1];
			const ssPageState = react.useState(0);
			const ssPage = ssPageState[0];
			const setSsPage = ssPageState[1];
			const ssPerPageState = react.useState(3);
			const ssPerPage = ssPerPageState[0];
			const setSsPerPage = ssPerPageState[1];
			const wsFlashState = react.useState(0);
			const wsFlash = wsFlashState[0];
			const setWsFlash = wsFlashState[1];
			const ssFlashState = react.useState(0);
			const ssFlash = ssFlashState[0];
			const setSsFlash = ssFlashState[1];
			const pagerRefs = react.useRef({});
			react.useEffect(() => {
				let alive = true;
				let loadingTimer = null;
				setQuery("");
				setSwitchingId(null);
				setFailRowId(null);
				setFailKind(null);
				setEmptyKind(null);
				setPhase("probing");
				(async () => {
					try {
						const snap = await enumerateWorkspaceSessions(faces);
						if (!alive) return;
						if (snap.sessions.length === 0) {
							setSessions([]);
							setNames(snap.names);
							setEmptyKind("true-none");
							setPhase("empty");
							return;
						}
						setSessions(snap.sessions);
						setNames(snap.names);
						try {
							const gs = groupWorkspaceSessions(snap.sessions, snap.names, ungroupedName);
							if (!alive) return;
							if (gs.length > 0) {
								let key = gs[0].key;
								try {
									const cid = typeof currentId === "string" ? currentId : "";
									if (cid !== "") {
										const hit = (snap.sessions || []).find((s) => s && s.id === cid) || null;
										const wsId = hit ? hit.workspaceId : null;
										const gk = wsId ? wsId : hit && !hit.workspaceId ? "__ungrouped" : "";
										const found = gk !== "" ? gs.find((g) => g.key === gk || g.workspaceId === wsId) : null;
										if (found) key = found.key;
									}
								} catch (e) {}
								setOpenGroup(key);
							}
						} catch (e) {}
						setPhase("loading");
						loadingTimer = setTimeout(() => {
							if (!alive) return;
							setPhase("ready");
						}, 150);
					} catch (e) {
						if (!alive) return;
						setFailKind("probe");
						setPhase("failed");
					}
				})().catch(() => {
					try {
						if (alive) {
							setFailKind("probe");
							setPhase("failed");
						}
					} catch (err) {}
				});
				return () => {
					alive = false;
					try {
						if (loadingTimer !== null) clearTimeout(loadingTimer);
					} catch (e) {}
				};
			}, []);
			const filtered = filterWorkspaceSessions(sessions, query, ungroupedName);
			const hasQuery = query.trim() !== "";
			let groups = [];
			try {
				groups = groupWorkspaceSessions(filtered, names, ungroupedName);
			} catch (e) {
				groups = [];
			}
			react.useEffect(() => {
				let alive = true;
				const fontPxOf = (el) => {
					try {
						const g = globalThis.getComputedStyle;
						if (typeof g !== "function" || !el) return NaN;
						const v = parseFloat(g(el).fontSize);
						return isFinite(v) && v > 0 ? v : NaN;
					} catch (e) {
						return NaN;
					}
				};
				const recompute = () => {
					if (!alive) return;
					try {
						const R = pagerRefs.current || {};
						const ws = R.ws;
						if (ws && typeof ws.clientWidth === "number" && ws.clientWidth > 0) {
							let tabW = NaN;
							try {
								const first = ws.querySelector ? ws.querySelector("[data-dsh-prompt-picker-groupcard]") : null;
								if (first && typeof first.offsetWidth === "number" && first.offsetWidth > 0) tabW = first.offsetWidth;
							} catch (e) {}
							const fp = fontPxOf(ws);
							const gap = isFinite(fp) ? fp * .5 : 8;
							const pitch = isFinite(tabW) && tabW > 0 ? tabW + gap : NaN;
							if (isFinite(pitch) && pitch > 0) R.wsPitch = pitch;
							const per = perPageFromMeasure(ws.clientWidth, isFinite(pitch) ? pitch : NaN, 3);
							try {
								setTabPerPage(per);
							} catch (e) {}
							try {
								setTabPage((p) => clampPage(p, groups.length, per));
							} catch (e) {}
						}
						const ss = R.ss;
						if (ss && typeof ss.clientWidth === "number" && ss.clientWidth > 0) {
							let cardW = NaN;
							try {
								const first = ss.querySelector ? ss.querySelector("[data-dsh-prompt-picker-card]") : null;
								if (first && typeof first.offsetWidth === "number" && first.offsetWidth > 0) cardW = first.offsetWidth;
							} catch (e) {}
							const fp = fontPxOf(ss);
							const gap = isFinite(fp) ? fp * .5 : 8;
							const cols = isFinite(cardW) && cardW > 0 ? Math.max(1, Math.floor((ss.clientWidth + gap) / (cardW + gap))) : gridCols;
							const per = Math.max(1, cols * 2);
							try {
								setSsPerPage(per);
							} catch (e) {}
							const key = openGroup || (groups.length > 0 ? groups[0].key : "__none");
							const og = groups.find((g) => g.key === key) || null;
							const total = hasQuery ? filtered.length : og ? og.items.length : 0;
							try {
								setSsPage((p) => clampPage(p, total, per));
							} catch (e) {}
						}
					} catch (e) {}
				};
				recompute();
				let ro = null;
				try {
					const RO = globalThis.ResizeObserver;
					const R = pagerRefs.current || {};
					if (typeof RO === "function" && (R.ws || R.ss)) {
						ro = new RO(() => {
							try {
								recompute();
							} catch (e) {}
						});
						try {
							if (R.ws && typeof R.ws.clientWidth === "number") ro.observe(R.ws);
						} catch (e) {}
						try {
							if (R.ss && typeof R.ss.clientHeight === "number") ro.observe(R.ss);
						} catch (e) {}
					}
				} catch (e) {}
				return () => {
					alive = false;
					try {
						if (ro && typeof ro.disconnect === "function") ro.disconnect();
					} catch (e) {}
				};
			}, [
				groups.length,
				filtered.length,
				gridCols
			]);
			const showTrueEmpty = phase === "empty" && emptyKind === "true-none";
			const doPick = (id) => {
				if (id === currentId) {
					try {
						props.onClose(currentId);
					} catch (e) {}
					return;
				}
				setFailRowId(null);
				setPhase("switching");
				setSwitchingId(id);
				(async () => {
					try {
						await switchWorkspaceSession(faces, id);
						try {
							props.onClose(id);
						} catch (e) {}
					} catch (e) {
						setSwitchingId(null);
						setFailRowId(id);
						setFailKind("switch");
						setPhase("failed");
					}
				})().catch(() => {
					try {
						setSwitchingId(null);
						setFailRowId(id);
						setFailKind("switch");
						setPhase("failed");
					} catch (err) {}
				});
			};
			const retryAll = () => {
				if (failKind === "probe") {
					setPhase("probing");
					setFailKind(null);
					setFailRowId(null);
					(async () => {
						try {
							const snap = await enumerateWorkspaceSessions(faces);
							setSessions(snap.sessions);
							setNames(snap.names);
							if (snap.sessions.length === 0) {
								setEmptyKind("true-none");
								setPhase("empty");
								return;
							}
							try {
								const gs = groupWorkspaceSessions(snap.sessions, snap.names, ungroupedName);
								if (gs.length > 0) {
									let key = gs[0].key;
									try {
										const cid = typeof currentId === "string" ? currentId : "";
										if (cid !== "") {
											const hit = (snap.sessions || []).find((s) => s && s.id === cid) || null;
											const wsId = hit ? hit.workspaceId : null;
											const gk = wsId ? wsId : hit && !hit.workspaceId ? "__ungrouped" : "";
											const found = gk !== "" ? gs.find((g) => g.key === gk || g.workspaceId === wsId) : null;
											if (found) key = found.key;
										}
									} catch (e) {}
									setOpenGroup(key);
								}
							} catch (e) {}
							setPhase("ready");
						} catch (e) {
							setFailKind("probe");
							setPhase("failed");
						}
					})().catch(() => {
						try {
							setFailKind("probe");
							setPhase("failed");
						} catch (err) {}
					});
					return;
				}
				const id = failRowId;
				if (id) doPick(id);
			};
			const cancelWait = () => {
				try {
					props.onClose();
				} catch (e) {}
			};
			const uiScale = remoteSizeScale(size);
			const rootStyle = {
				position: "fixed",
				inset: 0,
				zIndex: MODAL_Z,
				fontSize: "calc(1em * " + uiScale + ")"
			};
			const maskStyle = {
				position: "absolute",
				inset: 0,
				background: "rgba(0,0,0,0.55)",
				display: "flex",
				alignItems: "flex-end",
				justifyContent: "center",
				padding: "0 0.5em 5em",
				boxSizing: "border-box"
			};
			const sheetStyle = {
				position: "relative",
				width: "100%",
				height: "auto",
				maxHeight: "calc(100dvh - 5.5em)",
				margin: 0,
				background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
				backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
				borderRadius: 14,
				border: "1px solid var(--dsw-alias-border-l1)",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				fontSize: "1em",
				fontFamily: "var(--dsw-font-family)",
				color: "var(--dsw-alias-label-primary)"
			};
			const headStyle = {
				display: "flex",
				alignItems: "center",
				gap: 8,
				padding: "0.3em 0.5em 0.05em",
				flex: "none"
			};
			const xStyle = {
				marginLeft: "auto",
				flex: "none",
				width: "3em",
				height: "3em",
				minWidth: "3em",
				borderRadius: "50%",
				cursor: "pointer",
				border: "1px solid var(--dsw-alias-border-l1)",
				background: "var(--dsw-alias-bg-layer-3)",
				color: "var(--dsw-alias-label-primary)",
				fontSize: "1em",
				lineHeight: 1,
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			};
			const xGlyphStyle = {
				fontSize: "1.4em",
				lineHeight: 1
			};
			const searchStyle = {
				margin: "0.2em 0.4em 0",
				padding: "0.5em 0.75em",
				borderRadius: 9,
				minHeight: "2.5em",
				border: "1px solid var(--dsw-alias-border-l1)",
				background: "var(--dsw-alias-bg-layer-3)",
				color: "var(--dsw-alias-label-primary)",
				fontSize: "0.9em",
				width: "calc(100% - 1em)",
				flex: "none",
				boxSizing: "border-box",
				fontFamily: "var(--dsw-font-family)",
				outline: "none"
			};
			const bodyStyle = {
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				padding: "0.25em 0.4em 0.4em",
				minHeight: 0,
				minWidth: 0,
				flex: "1 1 auto"
			};
			const ssPaneStyle = {
				flex: "1 1 auto",
				minHeight: 0,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				overflow: "hidden",
				position: "relative"
			};
			const ssScrollStyle = {
				flex: "1 1 auto",
				minHeight: 0,
				minWidth: 0,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				overflowX: "auto",
				overflowY: "hidden",
				padding: "0.1em 0.1em 0.4em"
			};
			const wsPaneStyle = {
				flex: "none",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				gap: "0.4em",
				marginTop: "0.35em",
				minHeight: 0
			};
			const wsScrollStyle = {
				flex: "1 1 auto",
				minWidth: 0,
				display: "flex",
				flexDirection: "row",
				gap: "0.4em",
				overflowX: "auto",
				overflowY: "hidden",
				padding: "0.1em"
			};
			const LAYER_WS = "var(--dsw-specific-accent,#f0a45c)";
			const LAYER_SS = "#7fd08a";
			const opBarStyle = {
				flex: "none",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "flex-end",
				gap: "0.5em",
				marginTop: "0.35em",
				paddingTop: "0.35em",
				borderTop: "1px solid var(--dsw-alias-border-l1)"
			};
			const pagerBtnStyle = (disabled, accent, radius) => ({
				flex: "none",
				width: PAGER_BOX,
				height: PAGER_BOX,
				minWidth: PAGER_BOX,
				borderRadius: radius,
				cursor: disabled ? "not-allowed" : "pointer",
				border: "1px solid " + accent,
				background: "var(--dsw-alias-bg-layer-3)",
				color: "var(--dsw-alias-label-primary)",
				fontSize: "1em",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				opacity: disabled ? .38 : 1
			});
			const pagerGlyphStyle = (flash) => ({
				fontSize: "1.2em",
				lineHeight: 1,
				display: "inline-block",
				animation: flash > 0 ? "dsh-prompt-pager-pulse 0.35s ease-out" : void 0
			});
			const sectionTitleStyle = {
				flex: "none",
				fontSize: "0.78em",
				fontWeight: 700,
				color: "var(--dsw-alias-label-tertiary)",
				letterSpacing: "0.02em",
				padding: "0.2em 0.2em 0.2em"
			};
			const renderCard = (s, withShort) => h(SessionCard, {
				key: s.id,
				h,
				s,
				lang,
				ungroupedName,
				fallbackShort,
				current: s.id === currentId,
				failed: s.id === failRowId,
				withShort,
				onPick: doPick
			});
			const renderWcard = (g, isOpen, allowCollapse, asTab, tabIdx) => h("button", {
				key: (asTab ? "tab:" : "head:") + g.key,
				type: "button",
				"data-dsh-prompt-picker-group": g.key,
				role: asTab ? "tab" : void 0,
				"aria-selected": asTab ? isOpen ? "true" : "false" : void 0,
				"aria-pressed": asTab ? void 0 : isOpen ? "true" : "false",
				onMouseDown: keepComposerFocus,
				onClick: () => {
					try {
						setOpenGroup(allowCollapse && isOpen ? "__none" : g.key);
					} catch (e) {}
					if (asTab && typeof tabIdx === "number") ensureTabPage(tabIdx);
				},
				title: g.name,
				style: {
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: 8,
					width: asTab ? TAB_W : "100%",
					flex: asTab ? "none" : void 0,
					minHeight: "2.6em",
					minWidth: 0,
					textAlign: "left",
					cursor: "pointer",
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid " + (isOpen ? "var(--dsw-specific-accent,#f0a45c)" : "var(--dsw-alias-border-l1)"),
					boxShadow: isOpen ? "inset 0 0 0 1px var(--dsw-specific-accent,#f0a45c)" : "none",
					color: "var(--dsw-alias-label-primary)",
					borderRadius: 12,
					padding: "0.5em 0.75em",
					fontSize: "0.92em",
					fontFamily: "var(--dsw-font-family)"
				},
				"data-dsh-prompt-picker-groupcard": "1"
			}, [
				h("span", {
					key: "dot",
					"data-dsh-prompt-picker-dot": "1",
					style: {
						flex: "none",
						width: 10,
						height: 10,
						borderRadius: "50%",
						background: workspaceColor(g.workspaceId)
					}
				}),
				h("span", {
					key: "nm",
					style: {
						flex: "1 1 auto",
						minWidth: 0,
						fontWeight: 700,
						lineHeight: 1.4,
						whiteSpace: "normal",
						overflow: "visible",
						textOverflow: "clip",
						wordBreak: "break-word"
					}
				}, g.name),
				h("span", {
					key: "cnt",
					"data-dsh-prompt-picker-count": String(g.items.length),
					style: {
						flex: "none",
						fontSize: "0.75em",
						color: "var(--dsw-alias-label-tertiary)",
						background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
						border: "1px solid var(--dsw-alias-border-l1)",
						borderRadius: 999,
						padding: "0 9px",
						fontWeight: 400
					}
				}, String(g.items.length))
			]);
			const openKey = openGroup || (groups.length > 0 ? groups[0].key : "__none");
			const wsScrollToPage = (n, per) => {
				try {
					const R = pagerRefs.current || {};
					const el = R.ws;
					if (!el || typeof el.scrollTo !== "function") return;
					const pitch = R.wsPitch;
					const x = typeof pitch === "number" && pitch > 0 ? n * per * pitch : n * (typeof el.clientWidth === "number" && el.clientWidth > 0 ? el.clientWidth : 0);
					try {
						el.scrollTo({
							left: x,
							behavior: "smooth"
						});
					} catch (e2) {
						try {
							el.scrollTo(x, 0);
						} catch (e3) {
							try {
								el.scrollLeft = x;
							} catch (e4) {}
						}
					}
				} catch (e) {}
			};
			const ssScrollToPage = (n) => {
				try {
					const el = (pagerRefs.current || {}).ss;
					if (!el || typeof el.scrollTo !== "function") return;
					const x = n * (typeof el.clientWidth === "number" && el.clientWidth > 0 ? el.clientWidth : 0);
					try {
						el.scrollTo({
							left: x,
							behavior: "smooth"
						});
					} catch (e2) {
						try {
							el.scrollTo(x, 0);
						} catch (e3) {
							try {
								el.scrollLeft = x;
							} catch (e4) {}
						}
					}
				} catch (e) {}
			};
			const ssTotalOf = () => {
				try {
					const key = openGroup || (groups.length > 0 ? groups[0].key : "__none");
					const og = groups.find((g) => g.key === key) || null;
					return og ? og.items.length : 0;
				} catch (e) {
					return 0;
				}
			};
			const tabGo = (dir) => {
				const n = clampPage(tabPage + dir, groups.length, tabPerPage);
				setTabPage(n);
				try {
					setWsFlash((f) => f + 1);
				} catch (e) {}
				wsScrollToPage(n, tabPerPage);
			};
			const ssGo = (dir) => {
				const total = ssTotalOf();
				const n = clampPage(ssPage + dir, total, ssPerPage);
				setSsPage(n);
				try {
					setSsFlash((f) => f + 1);
				} catch (e) {}
				ssScrollToPage(n);
			};
			const ensureTabPage = (idx) => {
				try {
					const n = clampPage(pageOf(idx, tabPerPage), groups.length, tabPerPage);
					setTabPage(n);
					wsScrollToPage(n, tabPerPage);
				} catch (e) {}
			};
			const onWsScroll = (e) => {
				try {
					const el = e && e.target || null;
					if (!el || typeof el.scrollLeft !== "number") return;
					const cw = typeof el.clientWidth === "number" && el.clientWidth > 0 ? el.clientWidth : 1;
					const pitch = (pagerRefs.current || {}).wsPitch;
					const pageW = typeof pitch === "number" && pitch > 0 ? tabPerPage * pitch : cw;
					const w = pageW > 0 ? pageW : 1;
					setTabPage(clampPage(Math.round(el.scrollLeft / w), groups.length, tabPerPage));
				} catch (e) {}
			};
			const onSsScroll = (e) => {
				try {
					const el = e && e.target || null;
					if (!el || typeof el.scrollLeft !== "number") return;
					const w = typeof el.clientWidth === "number" && el.clientWidth > 0 ? el.clientWidth : 1;
					setSsPage(clampPage(Math.round(el.scrollLeft / w), ssTotalOf(), ssPerPage));
				} catch (e) {}
			};
			const pagerBtn = (kind, layerLabel, dirLabel, disabled, accent, flash, go) => h("button", {
				key: kind,
				type: "button",
				"data-dsh-prompt-picker-pager": kind,
				disabled: disabled ? true : void 0,
				"aria-disabled": disabled ? "true" : "false",
				"aria-label": tr(lang, layerLabel) + tr(lang, dirLabel),
				title: tr(lang, layerLabel) + tr(lang, dirLabel),
				onMouseDown: keepComposerFocus,
				onClick: () => {
					if (!disabled) try {
						go();
					} catch (e) {}
				},
				style: pagerBtnStyle(disabled, accent, kind === "ws-prev" || kind === "ws-next" ? "50%" : 9)
			}, h("span", {
				key: "g" + flash,
				style: pagerGlyphStyle(flash),
				"aria-hidden": "true"
			}, kind === "ws-prev" || kind === "ss-prev" ? "‹" : "›"));
			const switchingNote = phase === "switching" && switchingId ? h("div", {
				key: "switching",
				"data-dsh-prompt-picker-switching": switchingId,
				style: {
					fontSize: "0.78em",
					color: "var(--dsw-alias-label-tertiary)",
					padding: "6px 0 0",
					flex: "none"
				}
			}, tr(lang, STR.pickerSwitching) + "…") : null;
			let listContent = null;
			if (hasQuery) {
				const flat = filtered.slice().sort((a, b) => b.updatedAt - a.updatedAt);
				listContent = h("div", {
					key: "flat",
					"data-dsh-prompt-picker-flat": "query",
					style: {
						display: "flex",
						flexDirection: "column",
						minHeight: 0,
						flex: "1 1 auto",
						overflow: "hidden"
					}
				}, [switchingNote, h("div", {
					key: "ssscroll",
					"data-dsh-prompt-picker-ssscroll": "1",
					style: ssScrollStyle
				}, [h("div", {
					key: "list",
					"data-dsh-prompt-picker-grid": String(gridCols),
					style: gridStyle
				}, flat.map((s) => renderCard(s, hasQuery)))])]);
			} else {
				const openG = groups.find((g) => g.key === openKey) || null;
				const openItems = openG ? openG.items : [];
				const tabPages = pageCount(groups.length, tabPerPage);
				const tabPrevOff = tabPage <= 0;
				const tabNextOff = tabPage >= tabPages - 1;
				const ssPages = pageCount(openItems.length, ssPerPage);
				const ssPrevOff = ssPage <= 0;
				const ssNextOff = ssPage >= ssPages - 1;
				listContent = h("div", {
					key: "acc",
					style: {
						display: "flex",
						flexDirection: "column",
						minHeight: 0,
						flex: "1 1 auto",
						overflow: "hidden"
					}
				}, [
					switchingNote,
					h("div", {
						key: "sspane",
						"data-dsh-prompt-picker-sspane": "1",
						style: ssPaneStyle
					}, [h("div", {
						key: "sst",
						"data-dsh-prompt-picker-sstitle": "1",
						style: sectionTitleStyle
					}, tr(lang, STR.pickerSessions)), h("div", {
						key: "ssscroll",
						"data-dsh-prompt-picker-ssscroll": "1",
						style: ssScrollStyle,
						ref: (el) => {
							try {
								pagerRefs.current.ss = el;
							} catch (e) {}
						},
						onScroll: onSsScroll
					}, [openG ? h("div", {
						key: "gitems",
						"data-dsh-prompt-picker-grid": String(gridCols),
						style: gridStyle
					}, openG.items.map((s) => renderCard(s, false))) : null])]),
					h("div", {
						key: "wspane",
						"data-dsh-prompt-picker-wspane": "1",
						role: "tablist",
						"aria-label": tr(lang, STR.pickerWorkspaces),
						style: wsPaneStyle
					}, [h("div", {
						key: "wsscroll",
						"data-dsh-prompt-picker-wsscroll": "1",
						style: wsScrollStyle,
						ref: (el) => {
							try {
								pagerRefs.current.ws = el;
							} catch (e) {}
						},
						onScroll: onWsScroll
					}, [h("div", {
						key: "tabrow",
						"data-dsh-prompt-picker-tabrow": String(tabPerPage),
						style: tabRowStyle
					}, groups.map((g, idx) => renderWcard(g, openKey === g.key, true, true, idx)))])]),
					h("div", {
						key: "opbar",
						"data-dsh-prompt-picker-opbar": "1",
						role: "toolbar",
						"aria-label": tr(lang, STR.pickerOpBar),
						style: opBarStyle
					}, [
						pagerBtn("ws-prev", STR.pickerWorkspaces, STR.pickerPrev, tabPrevOff, LAYER_WS, wsFlash, () => tabGo(-1)),
						pagerBtn("ss-prev", STR.pickerSessions, STR.pickerPrev, ssPrevOff, LAYER_SS, ssFlash, () => ssGo(-1)),
						pagerBtn("ss-next", STR.pickerSessions, STR.pickerNext, ssNextOff, LAYER_SS, ssFlash, () => ssGo(1)),
						pagerBtn("ws-next", STR.pickerWorkspaces, STR.pickerNext, tabNextOff, LAYER_WS, wsFlash, () => tabGo(1)),
						h("button", {
							key: "opclose",
							type: "button",
							"data-dsh-prompt-picker-closebar": "1",
							"aria-label": tr(lang, STR.close),
							title: tr(lang, STR.close),
							onMouseDown: keepComposerFocus,
							onClick: () => {
								try {
									props.onClose();
								} catch (e) {}
							},
							style: {
								flex: "none",
								width: "3em",
								height: "3em",
								minWidth: "3em",
								borderRadius: "50%",
								cursor: "pointer",
								border: "1px solid var(--dsw-alias-border-l1)",
								background: "var(--dsw-alias-bg-layer-3)",
								color: "var(--dsw-alias-label-primary)",
								fontSize: "1em",
								lineHeight: 1,
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}
						}, h("span", {
							key: "ocg",
							style: xGlyphStyle,
							"aria-hidden": "true"
						}, "×"))
					])
				]);
			}
			const loadingBox = h("div", {
				key: "loading",
				"data-dsh-prompt-picker-loading": "1"
			}, [h("div", {
				key: "bar",
				style: {
					height: 4,
					borderRadius: 99,
					background: "var(--dsw-alias-bg-layer-3)",
					overflow: "hidden",
					margin: "10px 12px 0",
					flex: "none"
				}
			}, [h("div", {
				key: "i",
				className: "dsh-prompt-picker-load-i"
			})]), h("div", {
				key: "row",
				style: {
					display: "flex",
					alignItems: "center",
					gap: 10,
					padding: "8px 12px 12px",
					fontSize: "0.82em",
					color: "var(--dsw-alias-label-tertiary)"
				}
			}, [h("span", { key: "t" }, tr(lang, STR.pickerLoading)), h("button", {
				key: "cancel",
				type: "button",
				"data-dsh-prompt-picker-cancel": "1",
				onMouseDown: keepComposerFocus,
				onClick: cancelWait,
				style: {
					border: "1px solid var(--dsw-alias-border-l1)",
					background: "transparent",
					color: "var(--dsw-alias-label-tertiary)",
					borderRadius: 8,
					padding: "6px 14px",
					fontSize: "0.9em",
					cursor: "pointer",
					minHeight: 40,
					fontFamily: "var(--dsw-font-family)"
				}
			}, tr(lang, STR.pickerCancel))])]);
			const emptyBox = (kind) => h("div", {
				key: "empty:" + kind,
				"data-dsh-prompt-picker-empty": kind,
				style: {
					margin: "6px 0 12px",
					padding: "8px 12px",
					border: "1px dashed var(--dsw-alias-border-l1)",
					borderRadius: 10,
					fontSize: "0.85em",
					color: "var(--dsw-alias-label-tertiary)",
					display: "flex",
					gap: 10,
					alignItems: "center",
					lineHeight: 1.5
				}
			}, kind === "search" ? tr(lang, STR.pickerEmptySearch) : tr(lang, STR.pickerEmpty));
			const retryBox = (kind) => h("div", {
				key: "failed:" + kind,
				"data-dsh-prompt-picker-failed": kind
			}, [h("div", {
				key: "box",
				style: {
					margin: "6px 0 12px",
					padding: "8px 12px",
					border: "1px solid var(--dsw-specific-danger,#e06c75)",
					borderRadius: 10,
					fontSize: "0.85em",
					color: "var(--dsw-alias-label-primary)",
					display: "flex",
					gap: 10,
					alignItems: "center",
					lineHeight: 1.5
				}
			}, [h("span", { key: "m" }, kind === "probe" ? tr(lang, STR.pickerProbeFail) : tr(lang, STR.pickerSwitchFail)), h("button", {
				key: "retry",
				type: "button",
				"data-dsh-prompt-picker-retry": "1",
				onMouseDown: keepComposerFocus,
				onClick: retryAll,
				style: {
					flex: "none",
					minHeight: 44,
					padding: "6px 18px",
					fontSize: "0.95em",
					borderRadius: 9,
					cursor: "pointer",
					border: "1px solid var(--dsw-specific-accent,#f0a45c)",
					background: "var(--dsw-specific-accent,#f0a45c)",
					color: "#1a1a1e",
					fontWeight: 700,
					fontFamily: "var(--dsw-font-family)"
				}
			}, tr(lang, STR.pickerRetry))])]);
			const queryEmpty = hasQuery && filtered.length === 0;
			let bodyNode = null;
			if (phase === "probing" || phase === "loading") bodyNode = loadingBox;
			else if (phase === "failed" && failKind === "probe") bodyNode = retryBox("probe");
			else if (showTrueEmpty) bodyNode = emptyBox("true-none");
			else if (queryEmpty) bodyNode = phase === "failed" ? h("div", { key: "sfr" }, [retryBox("switch"), emptyBox("search")]) : emptyBox("search");
			else if (phase === "failed") bodyNode = h("div", { key: "sfl" }, [retryBox("switch"), listContent]);
			else bodyNode = listContent;
			return h("div", {
				"data-dsh-prompt-picker-root": "1",
				style: rootStyle
			}, [h("div", {
				key: "mask",
				style: maskStyle,
				"data-dsh-prompt-picker-mask": "1",
				onClick: (e) => {
					if (e.target === e.currentTarget) try {
						props.onClose();
					} catch (err) {}
				}
			}), h("div", {
				key: "sheet",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": tr(lang, STR.workspacePicker),
				"data-dsh-prompt-picker-sheet": "1",
				style: sheetStyle
			}, [
				h("div", {
					key: "head",
					style: headStyle
				}, [h("h2", {
					key: "t",
					style: {
						margin: 0,
						fontSize: "0.95em",
						flex: "none"
					}
				}, tr(lang, STR.workspacePicker)), h("button", {
					key: "x",
					type: "button",
					style: xStyle,
					title: tr(lang, STR.close),
					"aria-label": tr(lang, STR.close),
					"data-dsh-prompt-picker-close": "1",
					onMouseDown: keepComposerFocus,
					onClick: () => {
						try {
							props.onClose();
						} catch (e) {}
					}
				}, h("span", {
					key: "xg",
					style: xGlyphStyle,
					"aria-hidden": "true"
				}, "×"))]),
				h("input", {
					key: "q",
					"data-dsh-prompt-picker-search": "1",
					placeholder: tr(lang, STR.pickerSearch),
					value: query,
					onChange: (e) => {
						try {
							setQuery(e.target.value || "");
						} catch (err) {}
					},
					style: searchStyle
				}),
				h("div", {
					key: "body",
					style: bodyStyle
				}, [bodyNode])
			])]);
		}
		//#endregion
		//#region src/client/smart-draft.ts
		let current$1 = { draft: "" };
		const listeners = /* @__PURE__ */ new Set();
		function setSmartInput(next) {
			if (next.draft === current$1.draft && next.sessionId === current$1.sessionId && next.actions === current$1.actions && next.useInput === current$1.useInput) return;
			current$1 = next;
			listeners.forEach((fn) => {
				try {
					fn();
				} catch (e) {}
			});
		}
		function getSmartInput() {
			return current$1;
		}
		function onSmartInput(fn) {
			listeners.add(fn);
			return () => {
				listeners.delete(fn);
			};
		}
		/**
		* 智能模式开关键。v2：用户 2026-09-10 裁定——智能卡暂按 BUG 处理（输入匹配不自动出卡，见 issue），
		* 开关**默认关**，且关时连悬浮小点都不出现。旧键 'dsh.prompt.smart' 曾为"历史默认开"的老用户保留
		* '1'（#23 兼容决定），本票撤销该兼容：只认 v2，老键一律不继承，保证所有人首次启动都是关。
		*/
		const SMART_KEY = "dsh.prompt.smart.v2";
		const POS_KEY = "dsh.prompt.smartPos";
		/** 开关：true 仅当用户显式置 '1'；缺键（首次/升键）与 '0' 都是关。关 → 组件不渲染（无小点、无卡片）。 */
		const enabledListeners = /* @__PURE__ */ new Set();
		function isSmartEnabled() {
			try {
				const s = globalThis.localStorage;
				if (!s) return false;
				const v = s.getItem(SMART_KEY);
				return v === null ? false : v !== "0";
			} catch (e) {
				return false;
			}
		}
		function onSmartEnabled(fn) {
			enabledListeners.add(fn);
			return () => {
				enabledListeners.delete(fn);
			};
		}
		function loadSmartPos() {
			try {
				const s = globalThis.localStorage;
				if (!s) return null;
				const raw = s.getItem(POS_KEY);
				if (!raw) return null;
				const p = JSON.parse(raw);
				return typeof p.x === "number" && typeof p.y === "number" ? p : null;
			} catch (e) {
				return null;
			}
		}
		function saveSmartPos(p) {
			try {
				globalThis.localStorage?.setItem(POS_KEY, JSON.stringify(p));
			} catch (e) {}
		}
		/** 插入抑制：插入后 draft 变为新值 → 卡片不重现；用户改动草稿后自动解除 */
		let suppressDraft = null;
		function suppressCard(draft) {
			suppressDraft = draft;
		}
		function isSuppressed(draft) {
			return suppressDraft !== null && suppressDraft === draft;
		}
		function clearSuppression(draft) {
			if (suppressDraft !== null && suppressDraft !== draft) suppressDraft = null;
		}
		//#endregion
		//#region src/client/remote-draft.ts
		/** Sheet 宽（v3 定稿：em 地板 min(100%-1em,36em)，见原型 maskA bottom sheet） */
		const SHEET_WIDTH = "min(100% - 1em, 36em)";
		/** Sheet 最小宽（v3 定稿：min(100%-1em,20em)，窄屏不挤成一条缝） */
		const SHEET_MIN_WIDTH = "min(100% - 1em, 20em)";
		/** Sheet 上限（v3 定稿：62dvh，内容定高、上限后内滚；dvh 键盘感知） */
		const SHEET_MAX_HEIGHT = "62dvh";
		/**
		* 写前 session 校验＋isComposing 门（119 约束的镜面投影）。
		* - captured 为 open 瞬间钉死的 sessionId，current 为写瞬间现值；
		* - 两者非空且相等才写（防 stale actions 跨会话串写）；
		* - 组词中只收不发（compositionend 收敛后由调用方重放队尾）。
		*/
		function shouldWriteMirror(capturedSessionId, currentSessionId, isComposing) {
			try {
				if (isComposing === true) return false;
				if (typeof capturedSessionId !== "string" || capturedSessionId === "") return false;
				if (typeof currentSessionId !== "string" || currentSessionId === "") return false;
				return capturedSessionId === currentSessionId;
			} catch (e) {
				return false;
			}
		}
		/**
		* host→sheet 是否采纳（防抖镜不盖住用户在敲的字）。
		* - 组词中不采（等 compositionend）；
		* - host 无变化不采（hostDraft === lastHost）；
		* - sheet 聚焦且本地已有未同步编辑（local !== lastHost）不采，保住在敲的字；
		* - 其余采纳（初开、失焦、本地与上次同步一致时跟 host 走）。
		*/
		function shouldAdoptHostDraft(args) {
			try {
				const host = typeof args.hostDraft === "string" ? args.hostDraft : "";
				const local = typeof args.local === "string" ? args.local : "";
				const last = typeof args.lastHost === "string" ? args.lastHost : "";
				if (args.composing === true) return false;
				if (host === last) return false;
				if (args.focused === true && local !== last) return false;
				return true;
			} catch (e) {
				return false;
			}
		}
		//#endregion
		//#region src/client/remote-sheet.ts
		/**
		* 底贴 Sheet 组件（Remote Sheet，宿主）（#171 N6：可 import 者 —— entry-button）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 遥控输入 Sheet（#123，v3 A贴底定稿落地）
		*
		* 复用挑选器 mask＋缩放根数学（ADR-0005）：仅对齐/上限/max-width 三参数不同，
		* 禁第三套 math。层级与齿轮/挑选器同层 MODAL_Z，高于 Dock DOCK_Z。
		* 语义：实时镜子（无写入按钮；2026-10-06 用户拍板删发送键与解释文案）、isComposing门、
		* 去抖300ms串行 setDraft、session校验、键盘感知 scrollIntoView＋dvh、
		* 单模态由调用方（entry-button.ts）裁决，本组件只管关后焦点回 opener。
		*/
		function RemoteInputSheet(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const langState = react.useState(resolveLocale());
			const lang = langState[0];
			react.useEffect(() => subscribeLocale((l) => {
				langState[1](l);
			}), []);
			const uiScale = remoteSizeScale(props.remoteSize);
			const rootStyle = {
				position: "fixed",
				inset: 0,
				zIndex: MODAL_Z,
				fontSize: "calc(1em * " + uiScale + ")"
			};
			const maskStyle = {
				position: "absolute",
				inset: 0,
				background: "rgba(0,0,0,0.55)",
				display: "flex",
				alignItems: "flex-end",
				justifyContent: "center",
				padding: "0 0.75em 5em",
				boxSizing: "border-box"
			};
			const sheetStyle = {
				position: "relative",
				width: SHEET_WIDTH,
				minWidth: SHEET_MIN_WIDTH,
				maxHeight: SHEET_MAX_HEIGHT,
				margin: 0,
				background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
				backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
				borderRadius: 14,
				border: "1px solid var(--dsw-alias-border-l1)",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				fontSize: "1em",
				fontFamily: "var(--dsw-font-family)",
				color: "var(--dsw-alias-label-primary)"
			};
			const headStyle = {
				display: "flex",
				alignItems: "center",
				gap: 8,
				padding: "0.5em 0.75em 0.1em",
				flex: "none"
			};
			const titleStyle = {
				fontSize: "0.95em",
				fontWeight: 700
			};
			const subStyle = {
				fontSize: "0.72em",
				color: "var(--dsw-alias-label-tertiary)"
			};
			const xStyle = {
				marginLeft: "auto",
				flex: "none",
				width: "2.4em",
				height: "2.4em",
				borderRadius: "50%",
				cursor: "pointer",
				border: "1px solid var(--dsw-alias-border-l1)",
				background: "var(--dsw-alias-bg-layer-3)",
				color: "var(--dsw-alias-label-primary)",
				fontSize: "1em",
				lineHeight: 1,
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			};
			const taStyle = {
				margin: "0.5em 0.75em 0",
				minHeight: "6em",
				maxHeight: "14em",
				resize: "vertical",
				background: "var(--dsw-alias-bg-layer-3)",
				border: "1px solid var(--dsw-alias-border-l1)",
				borderRadius: 10,
				color: "var(--dsw-alias-label-primary)",
				fontSize: "0.95em",
				padding: "0.6em 0.75em",
				fontFamily: "inherit",
				lineHeight: 1.5,
				width: "calc(100% - 1.5em)",
				boxSizing: "border-box",
				outline: "none",
				flex: "none"
			};
			const metaStyle = {
				fontSize: "0.72em",
				color: "var(--dsw-alias-label-tertiary)",
				padding: "0.5em 0.75em 0.75em",
				lineHeight: 1.6,
				flex: "none"
			};
			const snap0 = getSmartInput();
			const initText = typeof snap0.draft === "string" ? snap0.draft : "";
			const textState = react.useState(initText);
			const local = textState[0];
			const setLocal = textState[1];
			const staleState = react.useState(false);
			const composingRef = react.useRef ? react.useRef(false) : { current: false };
			const queuedRef = react.useRef ? react.useRef("") : { current: "" };
			const timerRef = react.useRef ? react.useRef(null) : { current: null };
			const lastHostRef = react.useRef ? react.useRef(initText) : { current: initText };
			const chainRef = react.useRef ? react.useRef(Promise.resolve()) : { current: Promise.resolve() };
			const taRef = react.useRef ? react.useRef(null) : { current: null };
			const captured = props.capturedSessionId || "";
			react.useEffect(() => {
				try {
					const el = taRef && taRef.current;
					if (el && typeof el.focus === "function") {
						const t = setTimeout(() => {
							try {
								el.focus();
							} catch (e) {}
							try {
								if (typeof el.scrollIntoView === "function") el.scrollIntoView({ block: "nearest" });
							} catch (e) {}
						}, 0);
						return () => {
							try {
								clearTimeout(t);
							} catch (e) {}
						};
					}
				} catch (e) {}
			}, []);
			react.useEffect(() => {
				const sync = () => {
					try {
						const cur = getSmartInput();
						const host = typeof cur.draft === "string" ? cur.draft : "";
						const curId = typeof cur.sessionId === "string" ? cur.sessionId : "";
						try {
							if (captured !== "" && curId !== "" && curId !== captured) try {
								staleState[1](true);
							} catch (e) {}
							else try {
								staleState[1](false);
							} catch (e) {}
						} catch (e) {}
						let focused = false;
						try {
							const ae = globalThis.document && globalThis.document.activeElement;
							focused = !!(taRef && taRef.current && ae === taRef.current);
						} catch (e) {
							focused = false;
						}
						const composing = !!(composingRef && composingRef.current === true);
						const last = typeof lastHostRef.current === "string" ? lastHostRef.current : "";
						const curLocal = textState[0];
						if (shouldAdoptHostDraft({
							hostDraft: host,
							local: curLocal,
							lastHost: last,
							composing,
							focused
						})) {
							lastHostRef.current = host;
							if (curLocal !== host) try {
								setLocal(host);
							} catch (e) {}
						} else if (host !== last && !composing && !focused) lastHostRef.current = host;
					} catch (e) {}
				};
				sync();
				let off = null;
				try {
					off = onSmartInput(sync);
				} catch (e) {}
				return () => {
					try {
						if (typeof off === "function") off();
					} catch (e) {}
				};
			}, []);
			react.useEffect(() => {
				return () => {
					try {
						if (timerRef.current) clearTimeout(timerRef.current);
					} catch (e) {}
				};
			}, []);
			const pushSerial = (v) => {
				try {
					const run = chainRef.current || Promise.resolve();
					chainRef.current = run.then(() => {
						try {
							const cur = getSmartInput();
							const curId = typeof cur.sessionId === "string" ? cur.sessionId : "";
							const composing = !!(composingRef && composingRef.current === true);
							if (!shouldWriteMirror(captured, curId, composing)) return;
							const actions = cur.actions;
							if (!actions || typeof actions.setDraft !== "function") return;
							actions.setDraft(v);
							try {
								lastHostRef.current = v;
							} catch (e) {}
						} catch (e) {}
					});
				} catch (e) {}
			};
			const schedule = (v) => {
				try {
					if (timerRef.current) clearTimeout(timerRef.current);
				} catch (e) {}
				try {
					timerRef.current = setTimeout(() => {
						pushSerial(v);
					}, 300);
				} catch (e) {}
			};
			const stale = staleState[0] === true;
			return h("div", {
				style: rootStyle,
				"data-dsh-prompt-remote-input-root": "1",
				"data-dsh-prompt-modal-kind": "remote-input"
			}, h("div", {
				style: maskStyle,
				"data-dsh-prompt-remote-input-mask": "1",
				onClick: (e) => {
					if (e.target === e.currentTarget) props.onClose();
				}
			}, [h("div", {
				style: sheetStyle,
				role: "dialog",
				"aria-modal": "true",
				"aria-label": tr(lang, STR.remoteInputTitle),
				"data-dsh-prompt-remote-input-sheet": "1"
			}, [
				h("div", { style: headStyle }, [
					h("span", { style: titleStyle }, tr(lang, STR.remoteInputTitle)),
					h("span", { style: subStyle }, tr(lang, STR.remoteInputSub)),
					h("button", {
						type: "button",
						style: xStyle,
						title: tr(lang, STR.close),
						"aria-label": tr(lang, STR.close),
						onClick: () => props.onClose()
					}, "×")
				]),
				h("textarea", {
					ref: (el) => {
						try {
							if (taRef) taRef.current = el;
						} catch (e) {}
					},
					style: taStyle,
					rows: 3,
					value: local,
					placeholder: tr(lang, STR.remoteInputPh),
					"data-dsh-prompt-remote-input-ta": "1",
					onMouseDown: keepComposerFocus,
					onFocus: () => {
						try {
							const el = taRef && taRef.current;
							if (el && typeof el.scrollIntoView === "function") el.scrollIntoView({ block: "nearest" });
						} catch (e) {}
					},
					onCompositionStart: () => {
						try {
							composingRef.current = true;
						} catch (e) {}
					},
					onCompositionEnd: () => {
						try {
							composingRef.current = false;
						} catch (e) {}
						try {
							const q = typeof queuedRef.current === "string" ? queuedRef.current : "";
							if (q !== "") {
								queuedRef.current = "";
								schedule(q);
							}
						} catch (e) {}
					},
					onChange: (e) => {
						try {
							const v = e && e.target && typeof e.target.value === "string" ? e.target.value : "";
							setLocal(v);
							if (composingRef.current === true) {
								queuedRef.current = v;
								return;
							}
							schedule(v);
						} catch (err) {}
					}
				}),
				h("div", {
					style: metaStyle,
					"data-dsh-prompt-chrome": "remoteInputChars"
				}, (stale ? tr(lang, STR.remoteInputStale) + " · " : "") + tr(lang, STR.remoteInputMeta) + " · " + tr(lang, STR.remoteInputChars).replace("{n}", String((local || "").length)))
			])]));
		}
		//#endregion
		//#region src/client/entry-button.ts
		/**
		* input.left 提示词入口按钮（#171 N6：可 import 者 —— index）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 入口按钮（conversation.input.left）
		*/
		/**
		* #66 窄屏优化：对话框底部输入区变窄时，按钮收起文字、只剩图标。
		*
		* 为什么用容器查询而不是 ResizeObserver：宿主输入条那一行（InputBar 的 .row）自带
		* `container-type: inline-size`，插槽 wrapper 是 `display:contents`（不产生盒子、不遮挡），
		* 所以 `@container` 命中的正是那一行本身 —— 纯 CSS 就够，无 JS、无挂载闪烁。宿主自己的
		* 模型选择器用的就是同一套做法（360px 处把自己那一行文字换成图标）。
		*
		* 断点标定（#65 原型实测，真 Chrome 布局）：现状要 ≥530.4px 才不换行
		* （tools 254.7 + 间隙 12 + trailing 263.7）；本规则取 560px = 标定值 + 约 30px 余量
		* （相邻按钮宽度会随宿主与其它插件变化）。比的是「那一行的内容盒宽度」，不是视口宽度；
		* 收起「Prompt」文字省 46.7px，等于把「开始换行」的宽度往下推 46.7px。
		*
		* 兜底：若将来宿主去掉 container-type，规则静默不匹配 ⇒ 行为退回今天的宽屏样式，不产生回归。
		*/
		const NARROW_STYLE_ID = "dsh-prompt-entry-narrow";
		const NARROW_CSS = [
			"@container (max-width: 560px) {",
			"  [data-dsh-prompt-entry] [data-dsh-prompt-label] { display: none; }",
			"}"
		].join("\n");
		let narrowStyleReady = false;
		/** 注入窄屏样式（幂等；任何失败都不影响按钮本身可用） */
		function ensureNarrowStyle() {
			try {
				const doc = globalThis.document;
				if (!doc || !doc.head || typeof doc.createElement !== "function") return;
				const sel = selectorForMarker(NARROW_STYLE_ID);
				const lookup = () => {
					try {
						return typeof doc.querySelector === "function" ? doc.querySelector(sel) : null;
					} catch (e) {
						return null;
					}
				};
				if (narrowStyleReady) {
					let cur = null;
					try {
						cur = lookup();
					} catch (e) {
						return;
					}
					if (cur) {
						ensureOwnedStyleTag(cur);
						return;
					}
					narrowStyleReady = false;
				} else {
					let existing = null;
					try {
						existing = lookup();
					} catch (e) {
						existing = null;
					}
					if (existing) {
						ensureOwnedStyleTag(existing);
						narrowStyleReady = true;
						return;
					}
				}
				const tag = doc.createElement("style");
				markOwnedStyleTag(tag);
				tag.setAttribute("data-dsh-prompt-style", NARROW_STYLE_ID);
				tag.textContent = NARROW_CSS;
				doc.head.appendChild(tag);
				narrowStyleReady = true;
			} catch (e) {}
		}
		/**
		* 远程按钮按压反馈样式（2026-09-29 用户拍板：任何可点都要有视觉反馈）。
		* 纯 CSS :hover/:active——鼠标悬停提亮、按下/触屏长按压暗+微缩（长按即保持 :active，无需计时器）；
		* 只用 filter/transform，不碰主题色，与 palette 共存；disabled 排除。
		* 挂在入口按钮处注入（入口常驻，即使面板关闭齿轮也在，保证齿轮一定有反馈）。
		* #104 改域选择器：从逐键枚举改为触控栏域选择器，新键自动继承悬停/按下反馈。
		*/
		const REMOTE_FB_STYLE_ID = "dsh-prompt-remote-feedback";
		const REMOTE_FB_CSS = [
			"[data-dsh-prompt-dock] button:hover, [data-dsh-prompt-dock-pill]:hover, [data-dsh-prompt-remote-panel] button:hover, [data-dsh-prompt-settings-modal] button:hover, [data-dsh-prompt-picker-sheet] button:hover, [data-dsh-prompt-remote-input-sheet] button:hover { filter: brightness(1.1); }",
			"[data-dsh-prompt-dock] button:active, [data-dsh-prompt-dock-pill]:active, [data-dsh-prompt-remote-panel] button:active, [data-dsh-prompt-settings-modal] button:active, [data-dsh-prompt-picker-sheet] button:active, [data-dsh-prompt-remote-input-sheet] button:active { filter: brightness(.9); transform: scale(.97); }",
			"[data-dsh-prompt-remote-panel] button:disabled:hover, [data-dsh-prompt-remote-panel] button:disabled:active, [data-dsh-prompt-picker-sheet] button:disabled:hover, [data-dsh-prompt-picker-sheet] button:disabled:active, [data-dsh-prompt-remote-input-sheet] button:disabled:hover, [data-dsh-prompt-remote-input-sheet] button:disabled:active { filter: none; transform: none; }",
			"[data-dsh-prompt-remote-panel] button, [data-dsh-prompt-settings-modal] button, [data-dsh-prompt-dock] button, [data-dsh-prompt-picker-sheet] button, [data-dsh-prompt-remote-input-sheet] button { transition: filter .08s ease, transform .08s ease; }"
		].join("\n");
		let remoteFbReady = false;
		function ensureRemoteFeedbackStyle() {
			try {
				const doc = globalThis.document;
				if (!doc || !doc.head || typeof doc.createElement !== "function") return;
				const sel = selectorForMarker(REMOTE_FB_STYLE_ID);
				const lookup = () => {
					try {
						return typeof doc.querySelector === "function" ? doc.querySelector(sel) : null;
					} catch (e) {
						return null;
					}
				};
				if (remoteFbReady) {
					let cur = null;
					try {
						cur = lookup();
					} catch (e) {
						return;
					}
					if (cur) {
						ensureOwnedStyleTag(cur);
						return;
					}
					remoteFbReady = false;
				} else {
					let existing = null;
					try {
						existing = lookup();
					} catch (e) {
						existing = null;
					}
					if (existing) {
						ensureOwnedStyleTag(existing);
						remoteFbReady = true;
						return;
					}
				}
				const tag = doc.createElement("style");
				markOwnedStyleTag(tag);
				tag.setAttribute("data-dsh-prompt-style", REMOTE_FB_STYLE_ID);
				tag.textContent = REMOTE_FB_CSS;
				doc.head.appendChild(tag);
				remoteFbReady = true;
			} catch (e) {}
		}
		/** 安全读展开态：true=展开、false=折叠、null=未知（宿主缺席/未实现/异常，不抛） */
		function readSidebarExpanded(ctl) {
			try {
				const f = ctl && ctl.isExpanded;
				if (typeof f !== "function") return null;
				const v = f.call(ctl);
				return v === true ? true : v === false ? false : null;
			} catch (e) {
				return null;
			}
		}
		/**
		* 只切侧栏：调宿主 toggleExpanded，不碰本插件任何 state、不记日志事件。
		* 返回是否真调到宿主面（调用层断言只断到这里，不刺探宿主内部）。
		*/
		function toggleSidebar(ctl) {
			try {
				const f = ctl && ctl.toggleExpanded;
				if (typeof f !== "function") return false;
				f.call(ctl);
				return true;
			} catch (e) {
				return false;
			}
		}
		/**
		* #95 远程 Dock：远程下入口三键（入口/齿轮/折栏）离对话框，聚为一体钉 DSH 窗口底部。
		* - 横向容器：fixed 底、左右下留边（DOCK_MARGIN）、DOCK_Z=8000 低于远程面板 PANEL_Z=9999
		*   （template-browser.ts:551），高于页面内容与智能卡（400）；经 PanelPortal 挂 body 逃离 slot 层叠上下文。
		* - 高随档：Dock 自身不定高，内边距走 em（以 fontSize 12*entryFontScale 为锚），内键 px/em 体系不动，
		*   档位放大时内容撑高即自动跟，无需第二套尺寸 math。
		* - 内容 actions 注册式：dockActions 数组 append 续加，后续新键只管 push。
		* - 收展内存态（useState，默认展）：收起键在行内末尾，收起后折成底部中间小 pill（与 Dock 同底边距），点展；
		*   不进 remote 持久化、不记日志。
		*/
		const DOCK_Z = 8e3;
		const DOCK_MARGIN = 12;
		const settingsMaskStyle = {
			position: "fixed",
			inset: 0,
			background: "rgba(0,0,0,0.55)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: MODAL_Z
		};
		const settingsModalCardStyle = {
			width: "min(1200px, 96vw)",
			maxHeight: "86vh",
			display: "flex",
			flexDirection: "column",
			background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
			backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
			border: "1px solid var(--dsw-alias-border-inverted)",
			borderRadius: 12,
			overflow: "hidden",
			fontFamily: "var(--dsw-font-family)",
			color: "var(--dsw-alias-label-primary)"
		};
		const settingsModalHeadStyle = {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			padding: "10px 14px",
			borderBottom: "1px solid var(--dsw-alias-border-l1)",
			flex: "none"
		};
		const settingsModalTitleStyle = {
			fontSize: "1em",
			fontWeight: 700
		};
		const settingsModalCloseStyle = {
			width: "2em",
			height: "2em",
			borderRadius: "50%",
			border: "1px solid var(--dsw-alias-border-l1)",
			background: "transparent",
			color: "var(--dsw-alias-label-tertiary)",
			fontSize: "1em",
			lineHeight: 1,
			cursor: "pointer",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flex: "none"
		};
		const settingsModalBodyStyle = {
			overflowY: "auto",
			padding: "0 14px 14px",
			minHeight: 0
		};
		/**
		* #112 同手势宽限：hover 开窗后多久内的跟进单击仍算“同一手势”（保持开）。
		* 鼠标 hover→click 同手势通常 <500ms，取 1000ms 宽容；超窗的单击视为稳态意图（取反，可手动关）。
		*/
		const HOVER_CLICK_GRACE_MS = 1e3;
		function EntryButton(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const open = props.open ?? false;
			const langState = react.useState(resolveLocale());
			const lang = langState[0];
			const label = tr(lang, STR.entryBtn);
			const remoteState = react.useState(getRemotePrefs());
			const remote = remoteState[0];
			react.useEffect(() => subscribeLocale((l) => {
				langState[1](l);
			}), []);
			react.useEffect(() => {
				try {
					ensureRemoteLoaded().catch(() => void 0);
				} catch (e) {}
				return subscribeRemote(() => {
					try {
						remoteState[1](getRemotePrefs());
					} catch (e) {}
				});
			}, []);
			ensureNarrowStyle();
			ensureRemoteFeedbackStyle();
			const entryFontScale = remoteChromeScale(remote.enabled ? remote.size : 1);
			const entryControlScale = remoteChromeScale(remote.enabled ? remote.size : 1);
			const gearModalState = react.useState(false);
			const gearModalOpen = gearModalState[0];
			const closeGearModal = () => {
				try {
					gearModalState[1](false);
				} catch (e) {}
			};
			const sbState = react.useState(readSidebarExpanded(props.sidebarCtl));
			const dockState = react.useState(true);
			const leftState = react.useState(readWorkspaceLeftExpanded(props.sidebarLeftCtl));
			const pickerGateState = react.useState("pending");
			const pickerOpenState = react.useState(false);
			const pickerOpen = pickerOpenState[0];
			const pickerOpenerRef = react.useRef ? react.useRef(null) : { current: null };
			const inputOpenState = react.useState(false);
			const inputOpen = inputOpenState[0];
			const inputOpenerRef = react.useRef ? react.useRef(null) : { current: null };
			const inputSessionState = react.useState(void 0);
			const openPicker = () => {
				try {
					gearModalState[1](false);
				} catch (e) {}
				try {
					inputOpenState[1](false);
				} catch (e) {}
				try {
					pickerOpenState[1](true);
				} catch (err) {}
			};
			const closePicker = () => {
				try {
					pickerOpenState[1](false);
				} catch (e) {}
				try {
					const el = pickerOpenerRef && pickerOpenerRef.current;
					if (el && typeof el.focus === "function") el.focus();
				} catch (err) {}
			};
			const openGearModal = () => {
				try {
					pickerOpenState[1](false);
				} catch (e) {}
				try {
					inputOpenState[1](false);
				} catch (e) {}
				try {
					gearModalState[1](true);
				} catch (err) {}
			};
			const openRemoteInput = () => {
				try {
					gearModalState[1](false);
				} catch (e) {}
				try {
					pickerOpenState[1](false);
				} catch (e) {}
				try {
					let sid = void 0;
					try {
						const a = props.sessionId;
						if (typeof a === "string" && a !== "") sid = a;
						else {
							const b = getSmartInput().sessionId;
							if (typeof b === "string" && b !== "") sid = b;
						}
					} catch (e) {
						sid = void 0;
					}
					try {
						inputSessionState[1](sid);
					} catch (e) {}
				} catch (e) {}
				try {
					inputOpenState[1](true);
				} catch (err) {}
			};
			const closeRemoteInput = () => {
				try {
					inputOpenState[1](false);
				} catch (e) {}
				try {
					const el = inputOpenerRef && inputOpenerRef.current;
					if (el && typeof el.focus === "function") el.focus();
				} catch (err) {}
			};
			react.useEffect(() => {
				if (!pickerOpen && !gearModalOpen && !inputOpen) return void 0;
				const onKey = (e) => {
					try {
						if (!e || e.key !== "Escape") return;
						if (inputOpenState[0] === true || inputOpen) {
							e.stopPropagation();
							closeRemoteInput();
						} else if (pickerOpenState[0] === true || pickerOpen) {
							e.stopPropagation();
							closePicker();
						} else closeGearModal();
					} catch (err) {}
				};
				try {
					const doc = globalThis.document;
					if (doc && typeof doc.addEventListener === "function") {
						doc.addEventListener("keydown", onKey, true);
						return () => {
							try {
								doc.removeEventListener("keydown", onKey, true);
							} catch (err) {}
						};
					}
				} catch (err) {}
			}, [
				pickerOpen,
				gearModalOpen,
				inputOpen
			]);
			const wsFaces = {
				sessions: props.workspaceSessions,
				workspaces: props.workspaceList,
				uiWorkspace: props.workspaceUI
			};
			const pickerGate = pickerGateState[0];
			react.useEffect(() => {
				let alive = true;
				try {
					const g = probeWorkspaceGates({
						sessions: props.workspaceSessions,
						workspaces: props.workspaceList,
						uiWorkspace: props.workspaceUI
					});
					if (!alive) return;
					pickerGateState[1](g.enumerable && g.switchable ? "ready" : "absent");
				} catch (e) {
					try {
						if (alive) pickerGateState[1]("absent");
					} catch (err) {}
				}
				return () => {
					alive = false;
				};
			}, [
				props.workspaceSessions,
				props.workspaceList,
				props.workspaceUI
			]);
			const gearMaskStyle = remote.enabled ? {
				...settingsMaskStyle,
				alignItems: "flex-start",
				padding: "2vh 2vw 0"
			} : settingsMaskStyle;
			const gearCardStyle = remote.enabled ? {
				...settingsModalCardStyle,
				width: "fit-content",
				minWidth: "min(480px, 94vw)",
				maxWidth: "96vw",
				height: "calc(96vh - 3.5rem)",
				maxHeight: "calc(96vh - 3.5rem)",
				margin: 0,
				borderRadius: 12,
				fontSize: scaledBaseFontSize(remote.enabled, remote.size)
			} : settingsModalCardStyle;
			const gearHeadStyle = remote.enabled ? {
				...settingsModalHeadStyle,
				position: "sticky",
				top: 0,
				zIndex: 1,
				background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
				backgroundColor: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))"
			} : settingsModalHeadStyle;
			const gearModalNode = !gearModalOpen ? null : h(ModalPortal, { key: "dsh-prompt-settings-modal" }, h("div", {
				style: gearMaskStyle,
				"data-dsh-prompt-settings-modal": "1",
				onClick: (e) => {
					if (e.target === e.currentTarget) closeGearModal();
				}
			}, [h("div", { style: gearCardStyle }, [h("div", { style: gearHeadStyle }, [h("span", { style: settingsModalTitleStyle }, tr(lang, STR.remoteConfigKey)), h("button", {
				type: "button",
				style: settingsModalCloseStyle,
				title: tr(lang, STR.close),
				"data-dsh-prompt-settings-modal-close": "1",
				onClick: closeGearModal
			}, "×")]), h("div", { style: settingsModalBodyStyle }, [h(SettingsPage, { key: "gear-settings-page" })])])]));
			const entryBtn = h("button", {
				key: "entry",
				style: {
					display: "inline-flex",
					alignItems: "center",
					gap: 6,
					padding: 5 * entryControlScale + "px " + 10 * entryControlScale + "px",
					borderRadius: 8,
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid var(--dsw-alias-border-l1)",
					color: open ? "var(--dsw-specific-accent,#f0a45c)" : "var(--dsw-alias-label-primary)",
					cursor: "pointer",
					fontSize: 12 * entryFontScale,
					fontWeight: 500,
					fontFamily: "var(--dsw-font-family)",
					whiteSpace: "nowrap",
					flex: "none"
				},
				title: label,
				"aria-label": label,
				"data-dsh-prompt-entry": "1",
				"data-dsh-prompt-panel-state": open ? "open" : "closed",
				onMouseDown: keepComposerFocus,
				onMouseEnter: () => {
					if (!isHoverTriggerEnabled()) return;
					cancelPanelClose();
					if (!isPanelOpen()) {
						setPanelOpen(true);
						noteHoverOpen();
					}
				},
				onMouseLeave: () => {
					if (!isHoverTriggerEnabled()) return;
					schedulePanelClose(150);
				},
				onClick: () => {
					cancelPanelClose();
					if (isPanelOpen() && takeHoverOpen(HOVER_CLICK_GRACE_MS)) return;
					setPanelOpen(!isPanelOpen());
				}
			}, [h("svg", {
				width: 14 * entryFontScale,
				height: 14 * entryFontScale,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "var(--dsw-specific-accent,#f0a45c)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				style: { flex: "none" }
			}, [
				h("path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5C17.5 10.6 18 9.3 18 8a6 6 0 1 0-12 0c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" }),
				h("path", { d: "M9 18h6" }),
				h("path", { d: "M10 22h4" }),
				h("path", { d: "M18.5 2.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z" })
			]), h("span", { "data-dsh-prompt-label": "1" }, label)]);
			if (!remote.enabled) return gearModalNode ? h("span", { style: {
				display: "inline-flex",
				alignItems: "center"
			} }, [entryBtn, gearModalNode]) : entryBtn;
			const gearTitle = tr(lang, STR.remoteConfigKey);
			const gearBox = 26 * entryControlScale;
			const gear = h("button", {
				key: "gear",
				type: "button",
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: gearBox,
					height: gearBox,
					borderRadius: 8,
					marginLeft: 6,
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid var(--dsw-alias-border-l1)",
					color: "var(--dsw-alias-label-primary)",
					cursor: "pointer",
					fontSize: 14 * entryFontScale,
					flex: "none"
				},
				title: gearTitle,
				"aria-label": gearTitle,
				"data-dsh-prompt-remote-gear": "1",
				onMouseDown: keepComposerFocus,
				onClick: openGearModal
			}, "⚙");
			const sidebarLeftCtl = props.sidebarLeftCtl;
			const canLeft = canShowWorkspaceLeft(sidebarLeftCtl);
			const leftExpanded = leftState[0] === true;
			const leftTitle = tr(lang, leftExpanded ? STR.workspaceLeftCollapse : STR.workspaceLeftExpand);
			const leftKey = !canLeft ? null : h("button", {
				key: "workspace-left",
				type: "button",
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: gearBox,
					height: gearBox,
					borderRadius: 8,
					marginLeft: 6,
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid var(--dsw-alias-border-l1)",
					color: "var(--dsw-alias-label-primary)",
					cursor: "pointer",
					fontSize: 14 * entryFontScale,
					flex: "none",
					opacity: leftExpanded ? 1 : .75
				},
				title: leftTitle,
				"aria-label": leftTitle,
				"aria-pressed": leftExpanded,
				"data-dsh-prompt-workspace-left": "1",
				onMouseDown: keepComposerFocus,
				onClick: () => {
					toggleWorkspaceLeft(sidebarLeftCtl);
					try {
						const v = readWorkspaceLeftExpanded(sidebarLeftCtl);
						leftState[1](v === null ? !leftExpanded : v);
					} catch (e) {}
				}
			}, [h("svg", {
				width: "1.2em",
				height: "1.2em",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				style: { flex: "none" }
			}, leftExpanded ? [
				h("rect", {
					x: 3,
					y: 4,
					width: 18,
					height: 16,
					rx: 2
				}),
				h("path", { d: "M9 4v16" }),
				h("path", { d: "M13.5 9l-3 3 3 3" })
			] : [
				h("rect", {
					x: 3,
					y: 4,
					width: 18,
					height: 16,
					rx: 2
				}),
				h("path", { d: "M15 4v16" }),
				h("path", { d: "M10.5 9l3 3-3 3" })
			])]);
			const sidebarCtl = props.sidebarCtl;
			const canSidebar = !!sidebarCtl && typeof sidebarCtl.toggleExpanded === "function";
			const sbExpanded = sbState[0] === true;
			const sbTitle = tr(lang, sbExpanded ? STR.sidebarCollapse : STR.sidebarExpand);
			const sidebarKey = !canSidebar ? null : h("button", {
				key: "sidebar",
				type: "button",
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: gearBox,
					height: gearBox,
					borderRadius: 8,
					marginLeft: 6,
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid var(--dsw-alias-border-l1)",
					color: "var(--dsw-alias-label-primary)",
					cursor: "pointer",
					fontSize: 14 * entryFontScale,
					flex: "none",
					opacity: sbExpanded ? 1 : .75
				},
				title: sbTitle,
				"aria-label": sbTitle,
				"aria-pressed": sbExpanded,
				"data-dsh-prompt-sidebar-toggle": "1",
				onMouseDown: keepComposerFocus,
				onClick: () => {
					toggleSidebar(sidebarCtl);
					try {
						const v = readSidebarExpanded(sidebarCtl);
						sbState[1](v === null ? !sbExpanded : v);
					} catch (e) {}
				}
			}, [h("svg", {
				width: "1.2em",
				height: "1.2em",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				style: { flex: "none" }
			}, sbExpanded ? [
				h("rect", {
					x: 3,
					y: 4,
					width: 18,
					height: 16,
					rx: 2
				}),
				h("path", { d: "M15 4v16" }),
				h("path", { d: "M10.5 9l-3 3 3 3" })
			] : [
				h("rect", {
					x: 3,
					y: 4,
					width: 18,
					height: 16,
					rx: 2
				}),
				h("path", { d: "M9 4v16" }),
				h("path", { d: "M13.5 9l3 3-3 3" })
			])]);
			const canPicker = pickerGate === "ready" && canShowWorkspacePicker(wsFaces);
			const pickerTitle = tr(lang, STR.workspacePicker);
			const pickerKey = !canPicker ? null : h("button", {
				key: "workspace-picker",
				type: "button",
				ref: (el) => {
					try {
						if (pickerOpenerRef) pickerOpenerRef.current = el;
					} catch (e) {}
				},
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: gearBox,
					height: gearBox,
					borderRadius: 8,
					marginLeft: 6,
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid " + (pickerOpen ? "var(--dsw-specific-accent,#f0a45c)" : "var(--dsw-alias-border-l1)"),
					color: "var(--dsw-alias-label-primary)",
					cursor: "pointer",
					fontSize: 14 * entryFontScale,
					flex: "none"
				},
				title: pickerTitle,
				"aria-label": pickerTitle,
				"aria-expanded": pickerOpen ? "true" : "false",
				"aria-haspopup": "dialog",
				"data-dsh-prompt-workspace-picker": "1",
				onMouseDown: keepComposerFocus,
				onClick: () => {
					if (pickerOpen) closePicker();
					else openPicker();
				}
			}, [h("svg", {
				width: "1.2em",
				height: "1.2em",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				style: { flex: "none" }
			}, [
				h("rect", {
					x: 3,
					y: 4,
					width: 18,
					height: 16,
					rx: 2
				}),
				h("path", { d: "M7 10h9" }),
				h("path", { d: "M14.5 13.5l3 3-3 3" })
			])]);
			let pickerSessionId = void 0;
			try {
				const a = props.sessionId;
				if (typeof a === "string" && a !== "") pickerSessionId = a;
				else {
					const b = getSmartInput().sessionId;
					if (typeof b === "string" && b !== "") pickerSessionId = b;
				}
			} catch (e) {
				pickerSessionId = void 0;
			}
			const pickerModalNode = !pickerOpen ? null : h(ModalPortal, { key: "dsh-prompt-workspace-picker" }, h(WorkspacePicker, {
				faces: wsFaces,
				currentId: pickerSessionId,
				remoteSize: remote.size,
				onClose: () => {
					closePicker();
				}
			}));
			const inputTitle = tr(lang, STR.remoteInputKey);
			const inputKey = h("button", {
				key: "remote-input",
				type: "button",
				ref: (el) => {
					try {
						if (inputOpenerRef) inputOpenerRef.current = el;
					} catch (e) {}
				},
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: gearBox,
					height: gearBox,
					borderRadius: 8,
					marginLeft: 6,
					background: "var(--dsw-alias-bg-layer-3)",
					border: "1px solid " + (inputOpen ? "var(--dsw-specific-accent,#f0a45c)" : "var(--dsw-alias-border-l1)"),
					color: "var(--dsw-alias-label-primary)",
					cursor: "pointer",
					fontSize: 14 * entryFontScale,
					flex: "none"
				},
				title: inputTitle,
				"aria-label": inputTitle,
				"aria-expanded": inputOpen ? "true" : "false",
				"aria-haspopup": "dialog",
				"data-dsh-prompt-remote-input": "1",
				onMouseDown: keepComposerFocus,
				onClick: () => {
					if (inputOpen) closeRemoteInput();
					else openRemoteInput();
				}
			}, [h("span", { style: {
				fontSize: "1.2em",
				lineHeight: 1,
				flex: "none"
			} }, "✎")]);
			const inputModalNode = !inputOpen ? null : h(ModalPortal, { key: "dsh-prompt-remote-input" }, h(RemoteInputSheet, {
				capturedSessionId: inputSessionState[0],
				remoteSize: remote.size,
				onClose: () => {
					closeRemoteInput();
				}
			}));
			const dockActions = [];
			dockActions.push(entryBtn);
			dockActions.push(gear);
			if (leftKey) dockActions.push(leftKey);
			if (sidebarKey) dockActions.push(sidebarKey);
			if (pickerKey) dockActions.push(pickerKey);
			dockActions.push(inputKey);
			const dockCollapseTitle = tr(lang, STR.dockCollapse);
			dockActions.push(h("button", {
				key: "dock-collapse",
				type: "button",
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: gearBox,
					height: gearBox,
					borderRadius: 8,
					marginLeft: 6,
					background: "transparent",
					border: "1px solid var(--dsw-alias-border-l1)",
					color: "var(--dsw-alias-label-tertiary)",
					cursor: "pointer",
					fontSize: 14 * entryFontScale,
					flex: "none"
				},
				title: dockCollapseTitle,
				"aria-label": dockCollapseTitle,
				"data-dsh-prompt-dock-collapse": "1",
				onMouseDown: keepComposerFocus,
				onClick: () => {
					dockState[1](false);
				}
			}, "▾"));
			const dockBarStyle = {
				position: "fixed",
				left: DOCK_MARGIN,
				right: DOCK_MARGIN,
				bottom: DOCK_MARGIN,
				display: "flex",
				justifyContent: "center",
				zIndex: DOCK_Z,
				pointerEvents: "none",
				fontSize: 12 * entryFontScale
			};
			const dockPillStyle = {
				display: "inline-flex",
				alignItems: "center",
				gap: 6,
				padding: "0.5em 0.75em",
				borderRadius: 12,
				background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
				border: "1px solid var(--dsw-alias-border-l1)",
				color: "var(--dsw-alias-label-primary)",
				fontFamily: "var(--dsw-font-family)",
				pointerEvents: "auto",
				maxWidth: "96vw",
				overflowX: "auto",
				whiteSpace: "nowrap"
			};
			if (!dockState[0]) {
				const dockExpandTitle = tr(lang, STR.dockExpand);
				return h("span", { style: {
					display: "inline-flex",
					alignItems: "center"
				} }, [
					h(PanelPortal, { key: "dsh-prompt-dock-pill" }, h("div", { style: {
						position: "fixed",
						left: "50%",
						transform: "translateX(-50%)",
						bottom: DOCK_MARGIN,
						zIndex: DOCK_Z,
						pointerEvents: "none"
					} }, [h("button", {
						type: "button",
						style: {
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "0.4em 0.7em",
							borderRadius: 999,
							background: "var(--dsw-alias-bg-layer-1, var(--dsw-specific-menu))",
							border: "1px solid var(--dsw-alias-border-l1)",
							color: "var(--dsw-alias-label-primary)",
							cursor: "pointer",
							fontSize: 12 * entryFontScale,
							fontFamily: "var(--dsw-font-family)",
							pointerEvents: "auto"
						},
						title: dockExpandTitle,
						"aria-label": dockExpandTitle,
						"data-dsh-prompt-dock-pill": "1",
						onMouseDown: keepComposerFocus,
						onClick: () => {
							dockState[1](true);
						}
					}, "▴")])),
					gearModalNode,
					pickerModalNode,
					inputModalNode
				]);
			}
			return h("span", { style: {
				display: "inline-flex",
				alignItems: "center"
			} }, [
				h(PanelPortal, { key: "dsh-prompt-dock" }, h("div", {
					style: dockBarStyle,
					"data-dsh-prompt-dock": "1"
				}, [h("div", { style: dockPillStyle }, dockActions)])),
				gearModalNode,
				pickerModalNode,
				inputModalNode
			]);
		}
		//#endregion
		//#region src/client/prompt-trigger.ts
		const SOURCE_NAME = "prompt";
		const MAX_ITEMS = 30;
		/**
		* /prompt 过滤：先剥离源名前缀（`/prompt` 本身 → 全量列出；`/prompt <词>` 与
		* `/prompt<词>`（无空格，宿主 slash 会话遇到空白即结束、带空格的 query 到不了这里）
		* → 按词过滤），剩余词匹配同一标签（含预制派生与自定义自选）或全文检索（haystack 兼容旧找法）。
		*/
		function filterPromptTemplates(query) {
			let q = (query || "").trim();
			const ql = q.toLowerCase();
			const src = SOURCE_NAME.toLowerCase();
			if (ql.startsWith(src)) q = q.slice(6).trim();
			if (!q) return sortedTemplates(allTemplates());
			const needle = q.toLowerCase();
			return sortedTemplates(allTemplates().filter((x) => matchLabel(x, q) || templateHaystack(x).indexOf(needle) >= 0));
		}
		/** /prompt 触发源（inputTriggers source 契约：candidates → onPick → {text} span 替换） */
		function buildPromptSource() {
			return {
				trigger: "/",
				name: SOURCE_NAME,
				order: 5,
				candidates: async (_projection, req) => {
					try {
						await ensureLoaded();
					} catch (e) {}
					return filterPromptTemplates(req.query).slice(0, MAX_ITEMS).map((t) => ({
						name: t.name,
						description: displayLabelString(t, resolveLocale()) + " — " + oneLinePreview(t.body).slice(0, 42),
						templateId: t.id
					}));
				},
				onPick: (pick) => {
					const tpl = getTemplate(pick.candidate.templateId);
					if (!tpl) return void 0;
					bumpUsage(tpl.id);
					return { text: stripCursorMarkers(tpl.body).text };
				}
			};
		}
		//#endregion
		//#region src/client/smart-words.ts
		const SMART_WORDS = {
			fp: {
				strong: [
					"第一性原理",
					"基本组成单元",
					"不可改变的真理",
					"颠覆",
					"去掉假设"
				],
				weak: [
					"分析",
					"本质",
					"假设",
					"拆解",
					"主题"
				]
			},
			socratic: {
				strong: [
					"苏格拉底",
					"追问",
					"质疑",
					"复述观点",
					"没想到的问题"
				],
				weak: [
					"思考",
					"问题",
					"假设",
					"观点"
				]
			},
			deep: {
				strong: [
					"深度分析",
					"多维",
					"常见误解",
					"边界",
					"证据"
				],
				weak: [
					"分析",
					"本质",
					"判断",
					"主题"
				]
			},
			adversarial: {
				strong: [
					"对抗式",
					"红队",
					"反例",
					"推翻",
					"失败场景",
					"认知偏差"
				],
				weak: [
					"审查",
					"方案",
					"结论",
					"假设"
				]
			},
			decision: {
				strong: [
					"决策",
					"选项",
					"纠结",
					"后悔",
					"最坏",
					"沉没成本",
					"没有回头路"
				],
				weak: [
					"选择",
					"权衡",
					"处境",
					"分析"
				]
			},
			premortem: {
				strong: [
					"事前验尸",
					"premortem",
					"失败原因",
					"回溯",
					"预防",
					"致命缺陷",
					"早期信号"
				],
				weak: [
					"方案",
					"项目",
					"风险",
					"失败"
				]
			},
			feynman: {
				strong: [
					"费曼",
					"类比",
					"反例",
					"禁止术语",
					"判断题"
				],
				weak: [
					"理解",
					"概念",
					"解释"
				]
			},
			fivewhys: {
				strong: [
					"五个为什么",
					"5why",
					"根本原因",
					"根因",
					"连续追问"
				],
				weak: [
					"为什么",
					"问题",
					"原因"
				]
			},
			mece: {
				strong: [
					"mece",
					"相互独立",
					"完全穷尽",
					"不重不漏",
					"分类维度"
				],
				weak: [
					"拆解",
					"分类",
					"问题"
				]
			},
			bias: {
				strong: [
					"认知偏差",
					"确认偏误",
					"锚定",
					"群体思维",
					"反事实",
					"可得性"
				],
				weak: [
					"偏差",
					"检查",
					"推理",
					"结论"
				]
			},
			learnpath: {
				strong: [
					"学习路线",
					"从零到实战",
					"伪学习",
					"最小闭环",
					"掌握程度"
				],
				weak: [
					"学习",
					"路线",
					"技能",
					"入门",
					"进阶"
				]
			},
			concept: {
				strong: [
					"概念澄清",
					"本质区别",
					"一句话定义",
					"对比场景",
					"不适用"
				],
				weak: [
					"概念",
					"理解",
					"定义"
				]
			},
			codereview: {
				strong: [
					"代码审查",
					"code review",
					"review",
					"pr",
					"正确性",
					"并发",
					"注入",
					"可维护性",
					"性能"
				],
				weak: ["安全", "技术栈"]
			},
			testdesign: {
				strong: [
					"测试用例",
					"正常路径",
					"边界值",
					"异常",
					"幂等",
					"并发"
				],
				weak: [
					"测试",
					"用例",
					"功能"
				]
			},
			refactor: {
				strong: [
					"重构",
					"refactor",
					"小步",
					"可测试性",
					"耦合"
				],
				weak: [
					"代码",
					"方案",
					"结构",
					"职责"
				]
			},
			explain: {
				strong: [
					"解释代码",
					"执行流程",
					"为什么这样写",
					"设计取舍",
					"扮演的角色"
				],
				weak: [
					"代码",
					"解释",
					"讲解"
				]
			},
			blindspot: {
				strong: [
					"盲区",
					"遗漏",
					"检查清单",
					"关键变量"
				],
				weak: [
					"计划",
					"开始",
					"任务",
					"启动",
					"风险"
				]
			},
			snapshot: {
				strong: [
					"零丢失",
					"快照",
					"出处",
					"逐条核对",
					"可疑遗漏"
				],
				weak: [
					"记录",
					"固化",
					"里程碑",
					"会话"
				]
			},
			kickoff: {
				strong: [
					"任务启动",
					"kickoff",
					"成功标准",
					"澄清",
					"经验水平"
				],
				weak: [
					"任务",
					"开始",
					"目标",
					"启动"
				]
			},
			prototype: {
				strong: [
					"原型",
					"试错",
					"候选方案",
					"快速验证"
				],
				weak: [
					"想法",
					"验证",
					"方案",
					"方向"
				]
			},
			plan: {
				strong: [
					"执行计划",
					"里程碑",
					"验收标准",
					"依赖"
				],
				weak: [
					"计划",
					"目标",
					"安排",
					"步骤"
				]
			},
			deviation: {
				strong: [
					"偏离",
					"记录偏离",
					"关键决定",
					"变更"
				],
				weak: [
					"记录",
					"过程",
					"复盘"
				]
			},
			retro: {
				strong: [
					"复盘",
					"retro",
					"重来一次",
					"可复用经验",
					"实际 vs 计划"
				],
				weak: [
					"回顾",
					"总结",
					"任务",
					"项目"
				]
			},
			quiz: {
				strong: [
					"反向考验",
					"出题",
					"选择题",
					"判断题",
					"盲区"
				],
				weak: [
					"考验",
					"检验",
					"主题",
					"理解"
				]
			}
		};
		/** 命中统计：专属词×2 + 通用词×1（子串匹配，忽略大小写） */
		function scoreDraft(draft, tpl) {
			const words = SMART_WORDS[tpl.id];
			if (!words) return {
				score: 0,
				strong: [],
				weak: []
			};
			const text = draft.toLowerCase();
			const strong = words.strong.filter((w) => text.includes(w.toLowerCase()));
			const weak = words.weak.filter((w) => text.includes(w.toLowerCase()));
			return {
				score: strong.length * 2 + weak.length,
				strong,
				weak
			};
		}
		/**
		* 自定义评分（#32）：自选标签命中按强词 +2，名称/正文命中按弱词 +1（子串匹配，忽略大小写）。
		* 空 / 仅回落“自定义” / 单字标签不参评（0 分，仅 lastUsed 槽可见）。
		* 名称/正文用自身文本匹配（不用 templateHaystack——haystack 含 labels，会重复计分）。
		*/
		function scoreCustomLabels(draft, tpl) {
			const text = draft.toLowerCase();
			const labels = templateLabels(tpl).map((l) => l.trim()).filter((l) => Array.from(l).length >= 2 && l !== "自定义");
			if (labels.length === 0) return {
				score: 0,
				strong: [],
				weak: []
			};
			const strong = labels.filter((l) => text.includes(l.toLowerCase()));
			const weak = [];
			const name = (tpl.name || "").trim();
			if (name && text.includes(name.toLowerCase())) weak.push(name);
			const body = stripCursorMarkers(tpl.body || "").text.trim();
			if (body && text.includes(body.toLowerCase())) weak.push(body.slice(0, 12) + "…");
			return {
				score: strong.length * 2 + weak.length,
				strong,
				weak
			};
		}
		/** 代码块降权：draft 中 ``` 出现奇数次 → 视为处于代码块内 → 抑制出卡 */
		function insideCodeBlock(draft) {
			let n = 0;
			let i = 0;
			for (;;) {
				i = draft.indexOf("```", i);
				if (i < 0) break;
				n++;
				i += 3;
			}
			return n % 2 === 1;
		}
		/** 智能候选：draft → ≤3 条（top-2 评分 + 1 最近使用），不足不凑
		*  #22 决议：候选集不变（评分链、阈值、top-2 + 最近使用均不动），仅显示顺序改为统一 bottom-up——
		*  评分升序（最相关在底部）→ 用量升序 → 同键置顶更贴底 → 预制原始顺序/自定义创建时间；
		*  最近使用槽（score=0）不做特例，自然落到最顶部（Q4=A）。
		*  #32：自定义经自选标签进入评分（scoreCustomLabels），与预制同池竞争 top-2；
		*  空/回落/单字标签 0 分，仅 lastUsed 槽可见。
		*/
		function smartCandidates(draft) {
			const text = draft.trim().toLowerCase();
			if (!text || text.length < 2) return [];
			if (insideCodeBlock(draft)) return [];
			const usage = loadUsage();
			const scored = [];
			for (const tpl of allTemplates()) {
				const r = tpl.builtin ? scoreDraft(text, tpl) : scoreCustomLabels(text, tpl);
				if (r.score >= 2) scored.push({
					tpl,
					score: r.score,
					strongHits: r.strong,
					weakHits: r.weak
				});
			}
			scored.sort((a, b) => b.score - a.score || (usage[b.tpl.id] || 0) - (usage[a.tpl.id] || 0));
			const top = scored.slice(0, 2);
			const used = new Set(top.map((s) => s.tpl.id));
			const recentId = loadLastUsed();
			if (recentId && !used.has(recentId)) {
				const tpl = getTemplate(recentId);
				if (tpl) top.push({
					tpl,
					score: 0,
					strongHits: [],
					weakHits: []
				});
			}
			const pinned = loadPinned();
			const pinIdx = (id) => pinned.indexOf(id);
			top.sort((a, b) => {
				if (a.score !== b.score) return a.score - b.score;
				const ua = usage[a.tpl.id] || 0, ub = usage[b.tpl.id] || 0;
				if (ua !== ub) return ua - ub;
				const ap = pinIdx(a.tpl.id), bp = pinIdx(b.tpl.id);
				if (ap !== bp) return ap < 0 ? -1 : bp < 0 ? 1 : ap - bp;
				return tieBreakOrder(a.tpl, b.tpl);
			});
			return top;
		}
		/** DEC11 修订：插入后光标定位到第一个字段的冒号后（冒号表单式正文）；无字段 → 正文末尾 */
		function firstFieldCaret(body) {
			const i = body.indexOf("：");
			return i < 0 ? body.length : i + 1;
		}
		//#endregion
		//#region src/client/smart-card.ts
		/**
		* Smart Mode 悬浮卡宿主（#171 N6：可 import 者 —— index）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 智能模式悬浮卡（v1.1，shell.overlay root 作用域）
		* #5 定稿：全局单手柄点（点=缩小的卡，卡显示时点消失，互斥）/ 卡从点向右展开 /
		* 自由拖动 + 位置记忆（localStorage）+ 视口 clamp / 仅命中出现 / ≤3 候选（top-2 评分 + 最近使用，不足不凑）/
		* 评分=专属词×2+通用词×1（≥2 出卡）/ #22 bottom-up：评分升序（最相关在底部）→用量升序 / 序号按排名（1=最相关在底部）/ 点击即填入 + 光标定位首字段冒号后（DEC11 修订）/
		* 默认开可配置关闭 / 与面板各管各的；键盘可达（↑↓/Enter/Esc）。
		*/
		const DOT_SIZE = 12;
		const CARD_W = 280;
		const CARD_H_EST = 150;
		function clampPos(p, w, h) {
			const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
			const vh = typeof window !== "undefined" ? window.innerHeight : 800;
			return {
				x: Math.max(8, Math.min(p.x, vw - w - 8)),
				y: Math.max(8, Math.min(p.y, vh - h - 8))
			};
		}
		let bridgeNoticeShown = false;
		/**
		* 读取会话输入框草稿（DOM 真实值优先——与面板插入同源，见 template-browser.ts insertBody）：
		* - 焦点 textarea / 首个可见 textarea → { found: true, text: 真实值（可为空串） }
		* - 焦点落在面板新增/编辑弹窗内 → { found: true, text: '' }（明确不出卡）
		* - 找不到任何 textarea（焦点在非 textarea 元素、宿主换成富文本输入等）→ { found: false }
		*/
		function probeDraftFromDom() {
			try {
				if (typeof document === "undefined") return {
					found: false,
					text: ""
				};
				const ae = document.activeElement;
				if (ae && ae.tagName === "TEXTAREA") {
					try {
						if (ae.closest && ae.closest("[data-dsh-prompt-modal]")) return {
							found: true,
							text: ""
						};
					} catch (e) {}
					return {
						found: true,
						text: ae.value || ""
					};
				}
				const tas = document.querySelectorAll("textarea");
				for (let i = 0; i < tas.length; i++) {
					const ta = tas[i];
					if (ta.offsetParent !== null) {
						try {
							if (ta.closest && ta.closest("[data-dsh-prompt-modal]")) continue;
						} catch (e) {}
						return {
							found: true,
							text: ta.value || ""
						};
					}
				}
			} catch (e) {}
			return {
				found: false,
				text: ""
			};
		}
		function currentDraftInfo() {
			const p = probeDraftFromDom();
			if (p.found) return {
				text: p.text,
				source: "dom"
			};
			try {
				const d = getSmartInput().draft || "";
				if (d && !bridgeNoticeShown) {
					bridgeNoticeShown = true;
					const facts = domFacts();
					logEvent$1("smart.draft.fallback", {
						textareas: facts.textareas,
						activeKind: facts.active
					});
				}
				return {
					text: d,
					source: d ? "bridge" : "none"
				};
			} catch (e) {
				return {
					text: "",
					source: "none"
				};
			}
		}
		function currentDraft() {
			return currentDraftInfo().text;
		}
		function domFacts() {
			try {
				if (typeof document === "undefined") return {
					textareas: -1,
					active: "no-document",
					modal: false
				};
				return {
					textareas: document.querySelectorAll("textarea").length,
					active: document.activeElement && document.activeElement.tagName || "none",
					modal: !!(document.querySelector && document.querySelector("[data-dsh-prompt-modal]"))
				};
			} catch (e) {
				return {
					textareas: -1,
					active: "error",
					modal: false
				};
			}
		}
		let lastProbeKey = "";
		/** 现场快照只记一次（同值去重）：草稿长度变了才算新现场，避免每次轮询刷一行。 */
		function probeOnce(source, draftChars, candidates) {
			try {
				const facts = domFacts();
				const key = [
					source,
					facts.textareas,
					facts.active,
					facts.modal,
					candidates,
					draftChars
				].join("|");
				if (key === lastProbeKey) return;
				lastProbeKey = key;
				logEvent$1("smart.probe", {
					source,
					textareas: facts.textareas,
					activeKind: facts.active,
					modal: facts.modal,
					customs: allTemplates().filter((x) => !x.builtin).length,
					candidates,
					draftChars
				});
			} catch (e) {}
		}
		/** 光标位置：焦点 textarea（value===draft）的 selectionStart，找不到 → 末尾 */
		function caretInDraft(draft) {
			try {
				if (typeof document === "undefined") return draft.length;
				const tas = document.querySelectorAll("textarea");
				for (let i = 0; i < tas.length; i++) {
					const ta = tas[i];
					if (ta.value === draft && typeof ta.selectionStart === "number") return ta.selectionStart;
				}
			} catch (e) {}
			return draft.length;
		}
		/** 智能插入：光标处插入模板正文（不覆盖）；#178 R2 起有 {{cursor}} 时由宿主两编辑落位，
		*  无标记时沿用旧行为（插入后尝试定位首字段冒号后，只对 textarea 旧宿主有效）；用量+1；抑制卡片重现
		*  草稿源与出卡判定同源（currentDraft）——卡片按哪份草稿出现，就按哪份草稿拼接，绝不覆盖用户已输入内容。 */
		function smartInsert(body, id) {
			const { actions } = getSmartInput();
			if (!actions || typeof actions.setDraft !== "function") return;
			const draft = currentDraft();
			const caret = caretInDraft(draft);
			const parsed = stripCursorMarkers(body);
			const newDraft = draft.slice(0, caret) + parsed.text + draft.slice(caret);
			applyInsert(actions, draft, caret, body);
			if (parsed.caret === null) {
				const fieldCaret = caret + firstFieldCaret(parsed.text);
				setTimeout(() => {
					try {
						if (typeof document === "undefined") return;
						const tas = document.querySelectorAll("textarea");
						for (let i = 0; i < tas.length; i++) {
							const ta = tas[i];
							if (ta.value === newDraft) {
								ta.focus();
								ta.setSelectionRange(fieldCaret, fieldCaret);
								break;
							}
						}
					} catch (e) {}
				}, 0);
			}
			bumpUsage(id);
			logEvent$1("pick.insert", {
				source: "smart",
				templateKind: allTemplates().find((x) => x.id === id)?.builtin ? "preset" : "custom",
				idHash: id,
				draftChars: draft.length
			});
			suppressCard(newDraft);
		}
		function SmartCardHost(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const [enabled, setEnabled] = react.useState(isSmartEnabled());
			const [input, setInput] = react.useState(getSmartInput());
			const [draft, setDraft] = react.useState(() => currentDraft());
			const [pos, setPos] = react.useState(null);
			const [dismissed, setDismissed] = react.useState(false);
			const [manualOpen, setManualOpen] = react.useState(false);
			const [cardH, setCardH] = react.useState(0);
			const posRef = react.useRef(null);
			const cardRef = react.useRef(null);
			const rowsRef = react.useRef([]);
			const dragMovedRef = react.useRef(false);
			react.useEffect(() => {
				const off1 = onSmartInput(() => setInput(getSmartInput()));
				const off2 = onSmartEnabled((on) => setEnabled(on));
				return () => {
					off1();
					off2();
				};
			}, []);
			const remoteTickState = react.useState(0);
			react.useEffect(() => {
				let on = true;
				try {
					return subscribeRemote(() => {
						if (on) remoteTickState[1]((n) => n + 1);
					});
				} catch (e) {}
				return () => {
					on = false;
				};
			}, []);
			react.useEffect(() => {
				const sync = () => {
					const d = currentDraft();
					setDraft((prev) => prev === d ? prev : d);
				};
				sync();
				const timer = setInterval(sync, 350);
				const off = onSmartInput(sync);
				const onFocus = () => sync();
				if (typeof document !== "undefined") document.addEventListener("focusin", onFocus, true);
				return () => {
					clearInterval(timer);
					off();
					if (typeof document !== "undefined") document.removeEventListener("focusin", onFocus, true);
				};
			}, []);
			react.useEffect(() => {
				typeof window !== "undefined" && window.innerWidth;
				const vh = typeof window !== "undefined" ? window.innerHeight : 800;
				const p = clampPos(loadSmartPos() || {
					x: 32,
					y: Math.round(vh * .72)
				}, DOT_SIZE, DOT_SIZE);
				posRef.current = p;
				setPos(p);
			}, []);
			const applyPos = (p) => {
				const c = clampPos(p, DOT_SIZE, DOT_SIZE);
				posRef.current = c;
				setPos(c);
			};
			react.useEffect(() => {
				clearSuppression(draft);
				if (dismissed) setDismissed(false);
				if (manualOpen) setManualOpen(false);
			}, [draft]);
			const langState = react.useState(resolveLocale());
			const lang = langState[0];
			const t = (k) => tr(lang, STR[k]);
			react.useEffect(() => subscribeLocale((l) => {
				langState[1](l);
			}), []);
			const suppressed = isSuppressed(draft);
			const candidates = !enabled || suppressed ? [] : smartCandidates(draft);
			if (enabled) {
				const info = currentDraftInfo();
				probeOnce(info.source, info.text.length, candidates.length);
			}
			const fallbackUsage = loadUsage();
			const fallbackRows = [...allTemplates().slice(0, 3)].sort((a, b) => (fallbackUsage[a.id] || 0) - (fallbackUsage[b.id] || 0) || tieBreakOrder(a, b)).map((tpl) => ({
				tpl,
				score: 0,
				strongHits: [],
				weakHits: []
			}));
			const rows = candidates.length > 0 ? candidates : manualOpen ? fallbackRows : [];
			rowsRef.current = rows;
			const showCard = rows.length > 0 && !dismissed;
			react.useEffect(() => {
				if (showCard) {
					logEvent$1("smart.card.show", {
						rows: rows.length,
						source: currentDraftInfo().source,
						draftChars: draft.length,
						manual: manualOpen
					});
					return;
				}
				logEvent$1("smart.card.miss", {
					reason: suppressed ? "suppressed" : dismissed ? "dismissed" : !draft ? "empty-draft" : "no-match",
					draftChars: draft.length
				});
			}, [
				showCard,
				rows.length,
				draft,
				dismissed,
				manualOpen,
				suppressed
			]);
			react.useEffect(() => {
				if (!showCard) return;
				const el = cardRef.current;
				if (!el) return;
				const h = el.offsetHeight || 0;
				if (h > 0 && h !== cardH) setCardH(h);
			}, [showCard, rows.length]);
			const doPick = (c) => {
				smartInsert(c.tpl.body, c.tpl.id);
				setDismissed(true);
				setManualOpen(false);
			};
			const startDrag = (e) => {
				e.preventDefault();
				e.stopPropagation();
				dragMovedRef.current = false;
				const base = posRef.current || {
					x: 0,
					y: 0
				};
				const sx = e.clientX, sy = e.clientY;
				const move = (ev) => {
					dragMovedRef.current = true;
					applyPos({
						x: base.x + (ev.clientX - sx),
						y: base.y + (ev.clientY - sy)
					});
				};
				const up = (ev) => {
					document.removeEventListener("pointermove", move);
					document.removeEventListener("pointerup", up);
					const p = clampPos({
						x: base.x + (ev.clientX - sx),
						y: base.y + (ev.clientY - sy)
					}, DOT_SIZE, DOT_SIZE);
					posRef.current = p;
					setPos(p);
					saveSmartPos(p);
				};
				document.addEventListener("pointermove", move);
				document.addEventListener("pointerup", up);
			};
			const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
			const vh = typeof window !== "undefined" ? window.innerHeight : 800;
			const effectivePos = pos !== null ? pos : {
				x: 32,
				y: Math.round(vh * .72)
			};
			if (!enabled) return null;
			const base = "var(--dsw-alias-label-primary)";
			const muted = "var(--dsw-alias-label-secondary)";
			const dim = "var(--dsw-alias-label-tertiary)";
			const line = "1px solid var(--dsw-alias-border-l1)";
			const dot = h("div", {
				key: "dot",
				style: {
					position: "fixed",
					left: effectivePos.x,
					top: effectivePos.y,
					width: DOT_SIZE,
					height: DOT_SIZE,
					borderRadius: "50%",
					background: "var(--dsw-alias-label-tertiary)",
					opacity: .45,
					boxShadow: "var(--dsw-shadow-lv1)",
					cursor: "grab",
					zIndex: 400,
					pointerEvents: "auto",
					userSelect: "none"
				},
				title: t("smartDot"),
				onPointerDown: startDrag,
				onClick: () => {
					if (dragMovedRef.current) return;
					setManualOpen(true);
					setDismissed(false);
				}
			});
			const dotX = effectivePos.x, dotY = effectivePos.y;
			const cardHeight = cardH > 0 ? cardH : CARD_H_EST;
			const dotCx = dotX + DOT_SIZE / 2, dotCy = dotY + DOT_SIZE / 2;
			let cardX = dotCx;
			if (cardX + CARD_W > vw - 8) cardX = Math.max(8, dotCx - CARD_W);
			cardX = Math.max(8, Math.min(cardX, vw - CARD_W - 8));
			let cardY = dotCy - cardHeight;
			if (cardY < 8) cardY = 8;
			cardY = Math.max(8, Math.min(cardY, vh - cardHeight - 8));
			const cardPos = {
				x: cardX,
				y: cardY
			};
			const cardStyle = {
				position: "fixed",
				left: cardPos.x,
				top: cardPos.y,
				width: CARD_W,
				zIndex: 400,
				pointerEvents: "auto",
				background: "var(--dsw-specific-menu)",
				border: "1px solid var(--dsw-alias-border-inverted)",
				borderRadius: 12,
				boxShadow: "var(--dsw-shadow-lv3)",
				display: "flex",
				flexDirection: "column",
				gap: 6,
				padding: "8px 10px",
				fontFamily: "var(--dsw-font-family)",
				fontSize: scaledBaseFontSize(getRemotePrefs().enabled, getRemotePrefs().size),
				color: base
			};
			const headStyle = {
				display: "flex",
				alignItems: "center",
				gap: 4,
				padding: "4px 10px",
				borderBottom: line,
				cursor: "grab",
				minWidth: 0
			};
			const rowStyle = {
				display: "flex",
				alignItems: "center",
				gap: 6,
				padding: "3px 7px",
				minWidth: 0,
				background: "var(--dsw-alias-bg-layer-2)",
				border: "1px solid var(--dsw-alias-border-l1)",
				borderRadius: 8,
				cursor: "pointer",
				overflow: "hidden"
			};
			const rowNum = {
				color: dim,
				fontSize: "0.77em",
				flex: "none"
			};
			const rowName = {
				fontWeight: 500,
				fontSize: "0.88em",
				flex: "none",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
				maxWidth: 90
			};
			const rowTag = {
				color: muted,
				flex: "none",
				fontSize: "0.77em"
			};
			const rowHint = {
				color: dim,
				flex: "1 1 auto",
				minWidth: 0,
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap",
				fontSize: "0.77em"
			};
			const fillBtn = {
				flex: "none",
				border: "1px solid var(--dsw-alias-border-l2)",
				background: "var(--dsw-alias-bg-layer-3)",
				color: base,
				borderRadius: 5,
				padding: "1px 7px",
				cursor: "pointer",
				fontFamily: "var(--dsw-font-family)",
				fontSize: "0.8em",
				fontWeight: 500,
				whiteSpace: "nowrap"
			};
			const rowNodes = rows.map((c, i) => {
				const common = c.score === 0;
				const ink = inkColorOf(c.tpl);
				const tint = ink !== void 0 && inkOutlineOf(c.tpl);
				const suffixKey = common ? "smartCommonSuffix" : "smartScoreSuffix";
				const suffixText = common ? t("smartCommonSuffix") : t("smartScoreSuffix").replace("{n}", String(c.score));
				const hits = common ? t("smartCommon") : c.strongHits.join(" / ") + (c.weakHits.length ? " · " + c.weakHits.join(" / ") : "");
				return h("div", {
					key: c.tpl.id,
					style: rowStyle,
					onClick: () => doPick(c),
					title: t("smartFill")
				}, [
					h("span", { style: rowNum }, String(rows.length - i)),
					h("span", {
						style: ink ? {
							...rowName,
							color: ink,
							paddingBlock: 2,
							marginBlock: -2,
							paddingInline: 2,
							marginInline: -2
						} : rowName,
						...tint ? { [INK_TINT_ATTR]: "" } : {}
					}, c.tpl.name),
					h("span", {
						style: rowTag,
						...templateLabels(c.tpl).indexOf("自定义") >= 0 ? { "data-dsh-prompt-chrome": "labelFallback" } : {}
					}, [
						displayLabelString(c.tpl, lang),
						" ",
						h("span", {
							key: "suffix",
							"data-dsh-prompt-chrome": suffixKey
						}, suffixText)
					]),
					h("span", { style: rowHint }, hits),
					h("button", {
						style: fillBtn,
						title: t("smartFill"),
						onClick: (e) => {
							e.stopPropagation();
							doPick(c);
						}
					}, t("smartFill"))
				]);
			});
			const diagInfo = manualOpen ? currentDraftInfo() : null;
			const diagSrcLabel = diagInfo ? diagInfo.source === "dom" ? "输入框DOM" : diagInfo.source === "bridge" ? "输入桥" : "读不到" : "";
			const customCount = allTemplates().filter((x) => !x.builtin).length;
			const diagRow = diagInfo ? h("div", { style: {
				borderTop: line,
				paddingTop: 4,
				color: dim,
				fontSize: "0.72em",
				lineHeight: 1.35,
				wordBreak: "break-all"
			} }, "诊断(临时) 草稿=" + JSON.stringify(diagInfo.text).slice(0, 60) + " 来源=" + diagSrcLabel + " 自定义=" + customCount + "条 候选=" + candidates.length) : null;
			const card = h("div", {
				key: "card",
				ref: cardRef,
				style: cardStyle
			}, [
				h("div", {
					style: headStyle,
					onPointerDown: startDrag
				}, [
					h("span", { style: {
						fontWeight: 600,
						fontSize: "0.85em"
					} }, t("smartTitle")),
					h("span", { style: {
						color: dim,
						fontSize: "0.77em"
					} }, t("smartHint")),
					h("div", { style: { flex: 1 } }),
					h("button", {
						style: {
							border: 0,
							background: "transparent",
							color: dim,
							cursor: "pointer",
							fontSize: "0.92em",
							lineHeight: 1,
							padding: "0 2px",
							flex: "none"
						},
						title: t("smartDismiss"),
						onPointerDown: (e) => e.stopPropagation(),
						onClick: (e) => {
							e.stopPropagation();
							setDismissed(true);
							setManualOpen(false);
						}
					}, "×")
				]),
				h("div", { style: {
					maxHeight: 220,
					overflowY: "auto",
					overflowX: "hidden"
				} }, rowNodes),
				diagRow
			]);
			return showCard ? card : dot;
		}
		/** 记一条日志事件。出口只有一个：日志能力装进 globalThis.__dshPromptLog 的那个实例。
		*  走槽而不是 import 的原因：本仓既有回归脚本会把客户端模块逐个转译后单独 require
		*  （scripts/.rt-tmp/*.cjs），而单文件 bundle 里也没有可用的模块内 require——槽是两边都能用的唯一机制。
		*  能力缺席时是空操作，绝不因为记日志失败而影响功能。 */
		function logEvent$1(event, fields) {
			try {
				const log = globalThis.__dshPromptLog;
				if (log && typeof log.log === "function") log.log(event, fields);
			} catch (e) {}
		}
		//#endregion
		//#region src/client/host-content-font.ts
		/**
		* 宿主内容字声明式桥（唯一 DOM 接触点之一）（#171 N6：可 import 者 —— index）。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — 宿主内容字桥（#92 功能，机制 #148 重做）
		*
		* 目标（#92 用户拍板保留）：开远程后 DSH 宿主内容字按档位等比动，关远程恢复原样。
		* 机制（#148）：**声明式覆盖，零宿主状态写入**——
		* - 开 → 注入/更新自家 <style data-plugin>：body{--dsh-content-font-size:<hostContentFontPx>px !important;}
		* - 关 → 摘掉自家 <style>。宿主行内值当即原样可见，无需快照、无需回滚、无需判定“宿主后来写没写”。
		* - 注入缝不在本文件：`<style>` 的建/收养/更新/摘除归 style-ownership.ts 的
		*   applyOwnedStyle / dropOwnedStyle（#146 归属账本），本文件只决定“写什么 CSS、什么时候写”。
		*   三条桥共用同一份协议，本包不再有第三份拷贝——#146 的漏打归属正是“多份拷贝漂移”的产物。
		*
		* 为什么是 !important 覆盖而不是直接写变量（#148 实测，Chromium 8 项断言）：
		* - 这个变量的所有者是宿主：`ThemePresenter.apply` 每次 `theme/change` 都重放 body 行内
		*   `setProperty`，只有 `dispose()` 才 `removeProperty`（注释原文 “Body variable carrying the
		*   user's content font size in px.”）；宿主另有读回者 `bootstrapFontSize()` 读
		*   `body.style.getPropertyValue('--dsh-content-font-size')`（越界回 14）。
		*   插件写进去 = 写别人的状态：关远程时 `removeProperty` 删掉的是宿主的值（#148 报的就是这个），
		*   而下一次主题重放又会把插件的值冲掉（“谁后写谁赢”，宿主有持续重放权，插件没有）。
		* - 作者样式表的 !important 声明在 cascade 上高于行内**普通**声明
		*   （CSS Cascade 4：important author > 行内）；实测：宿主行内 17px + 自家 !important 42px
		*   → 算得 42px，且宿主行内 17px 原样保留；宿主随后重写 16px 仍被自家规则压住（重放免疫）；
		*   摘掉自家 <style> 当即回到宿主值。research/host-font-scale-bridge.md:29
		*   “行内样式优先级高于任何样式表规则，插件靠样式表覆盖赢不了水龙头”只在**普通**声明下成立。
		*   复跑用探针：research/probe-hostfont-cascade.html（自包含，headless Chrome `--dump-dom` 即出结论）。
		* - 落点必须是 body：:root 规则会被 body 行内值在 body 及其整棵子树赢掉（实测），
		*   旧稿的 documentElement 双写是无的放矢（宿主从不写 :root）。
		* - 派生链自动跟随：宿主在 body 的声明里由本变量推导 --dsh-content-font-delta /
		*   --dsh-content-font-size-secondary / --dsh-content-font-delta-secondary /
		*   --dsw-font-markdown-base-font-size 等（gradient-shadow-text.css），覆盖上游即整链等比。
		* - 已知局限（#92 拍板保留，非本票范围）：宿主定死 px 处不跟（small/code 阶梯）；#103 已用
		*   zoom 另行覆盖 AI 响应区。
		* - 已知交互（#148 审查记；#160 已改锚解决）：此前自家面 scaledBaseFontSize 锚
		*   --dsw-font-markdown-base-font-size（由被覆盖的这个变量派生）且自乘档位 ⇒ 远程开时
		*   自家面吃两遍档位（实测覆盖值 5 档 = 42px，自家面 calc(42px × 3) = 126px）。
		*   #160 后锚改到 --dsh-content-font-size 且不再自乘，只吃字桥这一遍。
		*   遗留语义（仍保留）：远程开着时用户在「设置→通用→字号大小」改的值不会立即见效（关远程即见）。
		* - 本文件是唯一的 DOM 接触点；remote-grid.ts 保持纯函数（禁 DOM/宿主调用）。
		* - 全程守卫 + try/catch fail-soft，不抛（单测无 DOM 时静默 no-op）。
		*/
		/** 宿主内容字覆盖段的自家 style 钩 */
		const HOST_FONT_STYLE_ID = "dsh-prompt-remote-hostfont";
		/** 工作区列表跟随样式钩（D-targeted，自家 style 注入惯例见 entry-button.ts 窄屏/反馈样式） */
		const ROWS_STYLE_ID = "dsh-prompt-remote-rows";
		/** 主会话 AI 跟随样式钩（#103：与 ROWS 同体例的第三条桥） */
		const ASSISTANT_STYLE_ID = "dsh-prompt-remote-assistant";
		/** 档位倍数（非法 / 非正 / 非有限 → null，调用方按“摘掉”处理） */
		function zoomScale(size) {
			let scale = NaN;
			try {
				scale = remoteSizeScale(size);
			} catch (e) {
				scale = NaN;
			}
			if (typeof scale !== "number" || !isFinite(scale) || scale <= 0) return null;
			return scale;
		}
		/**
		* 同步宿主内容字（fail-soft，不抛）：
		* - enabled=true 且档位是有限数值 → 覆盖变量为 hostContentFontPx(size) + 'px'（!important，压住宿主 body 行内）；
		* - 其它（关 / 非法档位）→ 摘掉自家覆盖段，宿主原值当即生效。
		*   非法档位按“摘掉”而不落 14px：宿主内容字可能被用户设成 18~22px，覆盖成 14px 等于以覆盖方式
		*   改写宿主的有效字号（与另两条桥的非法档语义也对齐）。
		* **永不读写宿主行内样式**（#148：那是宿主的状态，写它即删除宿主真相）。
		* 无 DOM（typeof document 缺席 / head 缺席）时静默 no-op。
		*/
		function syncHostFont(enabled, size) {
			try {
				const doc = styleDocument();
				if (!doc) return;
				if (enabled !== true || typeof size !== "number" || !isFinite(size)) {
					dropOwnedStyle(doc, HOST_FONT_STYLE_ID);
					return;
				}
				const px = hostContentFontPx(size) + "px";
				applyOwnedStyle(doc, HOST_FONT_STYLE_ID, "body{--dsh-content-font-size:" + px + " !important;}");
			} catch (e) {}
		}
		/**
		* 工作区列表跟随（D-targeted，野路子二期，用户拍板）：
		* - 工作区会话列表走 C 类硬编码（faucet 零引用），变量桥够不着，只能 targeted 覆盖；
		* - rem/px 体系下唯一能动硬编码 px 文字的纯 CSS 手段是 zoom（Chromium/Electron 支持），
		*   zoom 缩行整体（含命中区，触控正好），因子取档位全额 remoteSizeScale；
		* - 开→注入/更新自家 <style>（幂等：先查后建），关/非法→摘掉恢复原样；
		* - 全程守卫 + try/catch fail-soft，不抛，无新日志事件（沿用 setRemoteEnabled/Size 已有事件）。
		*/
		function syncRemoteRows(enabled, size) {
			try {
				const doc = styleDocument();
				if (!doc) return;
				if (enabled !== true) {
					dropOwnedStyle(doc, ROWS_STYLE_ID);
					return;
				}
				const scale = zoomScale(size);
				if (scale === null) {
					dropOwnedStyle(doc, ROWS_STYLE_ID);
					return;
				}
				applyOwnedStyle(doc, ROWS_STYLE_ID, "[data-row-key^=\"session:\"],[data-row-key^=\"workspace:\"]{zoom:" + scale + ";}");
			} catch (e) {}
		}
		/**
		* 主会话 AI 跟随（#103，野路子三期，用户拍板突破整机政策）：
		* - 0.2.0-rc.2 起主会话 AI 正文走定死 --dsw-font-xs-13（13px）+ 标题/code 定死 px，
		*   变量桥（--dsh-content-font-size）够不着，只能 targeted 覆盖；
		* - 与 syncRemoteRows 同理：rem/px 体系下唯一能动硬编码 px 文字的纯 CSS 手段是 zoom，
		*   zoom 缩响应组整体（含命中区，触控正好），因子取档位全额 remoteSizeScale；
		* - 开→注入/更新自家 <style>（幂等：先查后建），关/非法→摘掉恢复原样；
		* - 选择器只走稳定 data-chat-group-part="response"（AI 响应组；用户组另标，不在内），
		*   哈希类名一律不写；旧宿主无此属性时自然 no-op（选择器命中空，变量桥仍覆盖旧链路）；
		* - 全程守卫 + try/catch fail-soft，不抛，无新日志事件（沿用 setRemoteEnabled/Size 已有事件）。
		*/
		function syncAssistantZoom(enabled, size) {
			try {
				const doc = styleDocument();
				if (!doc) return;
				if (enabled !== true) {
					dropOwnedStyle(doc, ASSISTANT_STYLE_ID);
					return;
				}
				const scale = zoomScale(size);
				if (scale === null) {
					dropOwnedStyle(doc, ASSISTANT_STYLE_ID);
					return;
				}
				applyOwnedStyle(doc, ASSISTANT_STYLE_ID, "[data-chat-group-part=\"response\"]{zoom:" + scale + ";}");
			} catch (e) {}
		}
		/**
		* 卸载/回收清场（#148 审查补）：覆盖段必须有一条**插件侧**摘除路径。
		* 只靠宿主账本兜底的话，一旦 data-plugin 归属哪天失配（#146 立论所依赖的假设），
		* 这个 !important 段没有任何路径能摘掉，整机内容字会被钉死一整个会话——
		* 旧稿靠宿主重放能自愈，新机制不会。index.ts 的 effect cleanup 调它（退订后再摘）。
		*/
		function clearHostBridges() {
			try {
				const doc = styleDocument();
				if (!doc) return;
				dropOwnedStyle(doc, HOST_FONT_STYLE_ID);
				dropOwnedStyle(doc, ROWS_STYLE_ID);
				dropOwnedStyle(doc, ASSISTANT_STYLE_ID);
			} catch (e) {}
		}
		const SCOPE_SEL = "[data-dsh-prompt-bar],[data-dsh-prompt-list],[data-dsh-prompt-cloud],[data-dsh-prompt-id]";
		const TIP_CLASS = "dsh-prompt-hover-tip";
		const TIP_TEXT_CLASS = "dsh-prompt-hover-tip-text";
		const INSTALLED_FLAG = "__dshPromptHoverTipInstalled";
		const HOVER_TIP_CSS = (function() {
			return [
				".dsh-prompt-hover-tip{position:fixed;left:0;top:0;z-index:10000;pointer-events:none;max-width:min(420px,92vw);background:var(--dsw-alias-bg-layer-1,var(--dsw-specific-menu));color:var(--dsw-alias-label-primary);border:1px solid var(--dsw-alias-border-l1);border-radius:8px;box-shadow:var(--dsw-shadow-lv3);font-family:var(--dsw-font-family);font-size:12px;line-height:1.5;padding:5px 10px;opacity:0;transition:opacity .15s ease;overflow:visible;white-space:nowrap;}",
				".dsh-prompt-hover-tip.show{opacity:1;}",
				".dsh-prompt-hover-tip .dsh-prompt-hover-tip-text{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:min(400px,90vw);}",
				".dsh-prompt-hover-tip::after{content:\"\";position:absolute;left:var(--ax,50%);width:8px;height:8px;transform:translateX(-50%) rotate(45deg);background:inherit;}",
				".dsh-prompt-hover-tip[data-pos=\"above\"]::after{bottom:-5px;border-right:1px solid var(--dsw-alias-border-l1);border-bottom:1px solid var(--dsw-alias-border-l1);}",
				".dsh-prompt-hover-tip[data-pos=\"below\"]::after{top:-5px;border-left:1px solid var(--dsw-alias-border-l1);border-top:1px solid var(--dsw-alias-border-l1);}"
			].join("");
		})();
		/** 在该文档上装一次悬停接管（幂等，页面级；回收由页面生命周期负责）。 */
		function installHoverTip(doc) {
			let d = doc;
			if (!d) try {
				d = globalThis.document;
			} catch (e) {
				d = null;
			}
			if (!d || typeof d.addEventListener !== "function" || typeof d.createElement !== "function") return;
			try {
				if (d[INSTALLED_FLAG]) return;
				d[INSTALLED_FLAG] = true;
			} catch (e) {}
			let bubble = null;
			let label = null;
			const cur = {
				el: null,
				saved: "",
				timer: null,
				visible: false
			};
			function ensureBubble() {
				if (bubble && bubble.isConnected) return bubble;
				try {
					bubble = d.createElement("div");
					bubble.className = TIP_CLASS;
					try {
						bubble.setAttribute("aria-hidden", "true");
					} catch (e) {}
					label = d.createElement("span");
					label.className = TIP_TEXT_CLASS;
					bubble.appendChild(label);
					const body = d.body || d.documentElement;
					if (body && typeof body.appendChild === "function") body.appendChild(bubble);
					return bubble;
				} catch (e) {
					return null;
				}
			}
			function clearTimer() {
				if (cur.timer !== null) {
					try {
						clearTimeout(cur.timer);
					} catch (e) {}
					cur.timer = null;
				}
			}
			function restore() {
				clearTimer();
				const el = cur.el;
				cur.el = null;
				cur.visible = false;
				try {
					if (bubble) bubble.className = TIP_CLASS;
				} catch (e) {}
				if (el) try {
					if (el.isConnected !== false && !el.getAttribute("title") && cur.saved) el.setAttribute("title", cur.saved);
				} catch (e) {}
				cur.saved = "";
			}
			function inScope(el) {
				try {
					if (!el || typeof el.closest !== "function") return false;
					return !!el.closest(SCOPE_SEL);
				} catch (e) {
					return false;
				}
			}
			function pickCandidate(t) {
				try {
					if (cur.el && typeof cur.el.contains === "function") try {
						if (cur.el === t || cur.el.contains(t)) return cur.el;
					} catch (e) {}
				} catch (e) {}
				try {
					const el = t && t.nodeType === 1 ? t : t && t.parentElement || null;
					if (!el || typeof el.closest !== "function") return null;
					const cand = el.closest("[title]");
					if (!cand) return null;
					if (!inScope(cand)) return null;
					const s = cand.getAttribute("title");
					if (typeof s !== "string" || !s.trim()) return null;
					return cand;
				} catch (e) {
					return null;
				}
			}
			function showNow() {
				const el = cur.el;
				if (!el) return;
				let rect = null;
				try {
					rect = el.getBoundingClientRect();
				} catch (e) {
					rect = null;
				}
				if (!rect || rect.width <= 0 && rect.height <= 0) {
					restore();
					return;
				}
				const b = ensureBubble();
				if (!b || !label) {
					restore();
					return;
				}
				try {
					label.textContent = cur.saved;
					const w = b.offsetWidth || 0;
					const h = b.offsetHeight || 0;
					let vw = 800;
					let vh = 600;
					try {
						vw = d.documentElement && d.documentElement.clientWidth || vw;
						vh = d.documentElement && d.documentElement.clientHeight || vh;
					} catch (e) {}
					const cx = rect.left + rect.width / 2;
					const above = rect.top >= h + 14;
					const top = above ? rect.top - h - 8 : rect.bottom + 8;
					let left = cx - w / 2;
					if (left < 8) left = 8;
					if (left + w > vw - 8) left = Math.max(8, vw - w - 8);
					let ax = cx - left;
					if (ax < 14) ax = 14;
					if (w > 0 && ax > w - 14) ax = w - 14;
					b.style.left = left + "px";
					b.style.top = Math.max(4, Math.min(top, vh - h - 4)) + "px";
					try {
						b.style.setProperty("--ax", ax + "px");
					} catch (e) {}
					try {
						b.setAttribute("data-pos", above ? "above" : "below");
					} catch (e) {}
					try {
						b.classList.add("show");
					} catch (e) {}
					cur.visible = true;
				} catch (e) {
					restore();
				}
			}
			function arm(el, delay) {
				if (cur.el === el) return;
				restore();
				let s = "";
				try {
					s = el.getAttribute("title") || "";
				} catch (e) {
					s = "";
				}
				if (!s.trim()) return;
				cur.el = el;
				cur.saved = s;
				try {
					el.removeAttribute("title");
				} catch (e) {}
				clearTimer();
				try {
					cur.timer = setTimeout(() => {
						cur.timer = null;
						showNow();
					}, delay);
				} catch (e) {
					cur.timer = null;
				}
			}
			function onOver(e) {
				try {
					const cand = pickCandidate(e && e.target);
					if (!cand) {
						restore();
						return;
					}
					arm(cand, 280);
				} catch (err) {}
			}
			function onOut(e) {
				try {
					if (!cur.el) return;
					const to = e && e.relatedTarget || null;
					try {
						if (to && typeof to.closest === "function" && cur.el.contains(to)) return;
					} catch (err) {}
					restore();
				} catch (err) {}
			}
			function onFocusIn(e) {
				try {
					const cand = pickCandidate(e && e.target);
					if (!cand) return;
					arm(cand, 80);
				} catch (err) {}
			}
			function onFocusOut() {
				try {
					restore();
				} catch (e) {}
			}
			function onHide() {
				try {
					restore();
				} catch (e) {}
			}
			try {
				d.addEventListener("mouseover", onOver);
			} catch (e) {}
			try {
				d.addEventListener("mouseout", onOut);
			} catch (e) {}
			try {
				d.addEventListener("focusin", onFocusIn);
			} catch (e) {}
			try {
				d.addEventListener("focusout", onFocusOut);
			} catch (e) {}
			try {
				d.addEventListener("click", onHide);
			} catch (e) {}
			try {
				d.addEventListener("keydown", (e) => {
					if (e && e.key === "Escape") onHide();
				});
			} catch (e) {}
			try {
				d.addEventListener("scroll", onHide, true);
			} catch (e) {}
			try {
				const win = d.defaultView;
				if (win && typeof win.addEventListener === "function") win.addEventListener("resize", onHide);
			} catch (e) {}
		}
		//#endregion
		//#region event-list.dsh-prompt.json
		var event_list_dsh_prompt_default = {
			version: 1,
			pluginId: "dsh-prompt",
			valueDomain: {
				"enumPattern": "^[A-Za-z0-9._:\\/-]{0,32}$",
				"enumMaxLength": 32,
				"note": "ENUM 事件字符串值域基线（闸门权威，lib/log/gate.js 执行）。不把取值列全：host.call 等字段值来自更新包自身代码，列全会腐烂且必然误拦真实取值，故只约束标识符形状。桥侧语义白名单（src/update/host/safe-values.ts、lib/index.js）更严，不在表里的值先换成 8 位指纹；指纹仍符合本形状，故两层不漂移。长度 32 与闸门 MAX_FIELD_CHARS 对齐；桥侧旧形状 64 仅为发射点兜底历史值，权威以此 32 为准。形状挡不住纯 ASCII 标识符形状的用户数据（如 my-template-v3），该形状的完全保证只在桥侧四事件的语义表里，其余 ENUM 事件靠固定字面量发射点与调用点扫描兜住（见 test:log 第 11 节）。"
			},
			events: {
				"app.boot": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"hasReact",
						"lang",
						"entryCount"
					],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"store.snapshot.ok": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"customs",
						"pinned",
						"latencyMs"
					],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"store.snapshot.fail": {
					"level": "warn",
					"kind": "resident",
					"fields": ["reason", "latencyMs"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"store.persist.fail": {
					"level": "warn",
					"kind": "resident",
					"fields": ["route", "errorHash"],
					"codes": ["ENUM", "H_ERR"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"pick.insert": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"source",
						"templateKind",
						"idHash",
						"draftChars",
						"caret",
						"caretSrc",
						"draftLines"
					],
					"codes": ["ENUM", "H_ID"],
					"guard": "#76 追加落点诊断：caret=实际插入点下标、draftLines=插入前草稿行数、caretSrc=落点来源。全都不是正文（数字与短枚举），真机再报错位时一眼看出是活读(live)、编辑期采样(sample)、兜底末尾(end/none)还是史前 textarea(legacy)",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"panel.position.fail": {
					"level": "warn",
					"kind": "resident",
					"fields": ["attempts"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"smart.draft.fallback": {
					"level": "info",
					"kind": "resident",
					"fields": ["textareas", "activeKind"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.smart.toggle": {
					"level": "info",
					"kind": "resident",
					"fields": ["on"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.remote.toggle": {
					"level": "info",
					"kind": "resident",
					"fields": ["on", "size"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.remote.size": {
					"level": "info",
					"kind": "resident",
					"fields": ["on", "size"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.remote.orientation": {
					"level": "info",
					"kind": "resident",
					"fields": ["on", "orientation"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.remote.density": {
					"level": "info",
					"kind": "resident",
					"fields": ["on", "density"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"system.orientation.get": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"ok",
						"orientation",
						"source",
						"code"
					],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"system.orientation.set": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"ok",
						"orientation",
						"code"
					],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"remote.direct.open": {
					"level": "info",
					"kind": "resident",
					"fields": ["method", "ok"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.log.switch": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"on",
						"ok",
						"reason"
					],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.log.export": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"ok",
						"bytes",
						"fallback"
					],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.log.export.fail": {
					"level": "warn",
					"kind": "resident",
					"fields": ["reason", "errorHash"],
					"codes": ["ENUM", "H_ERR"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.log.clear": {
					"level": "info",
					"kind": "resident",
					"fields": ["ok", "removed"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.log.reconcile": {
					"level": "info",
					"kind": "resident",
					"fields": ["ok", "on"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"bridge.call.fail": {
					"level": "warn",
					"kind": "resident",
					"fields": ["phone", "kind"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.route.fail": {
					"level": "warn",
					"kind": "resident",
					"fields": [
						"route",
						"method",
						"status",
						"errorHash"
					],
					"codes": ["ENUM", "H_ERR"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.store.degraded": {
					"level": "error",
					"kind": "resident",
					"fields": ["reason", "errorHash"],
					"codes": ["ENUM", "H_ERR"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.bridge.reject": {
					"level": "warn",
					"kind": "resident",
					"fields": ["reason"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.log.export": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"ok",
						"bytes",
						"fallback",
						"date"
					],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.log.clear": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"ok",
						"removed",
						"scope"
					],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.log.switch.set": {
					"level": "info",
					"kind": "resident",
					"fields": ["enabled"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.log.manifest.fail": {
					"level": "warn",
					"kind": "resident",
					"fields": ["reason", "errorHash"],
					"codes": ["ENUM", "H_ERR"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.start": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"pid",
						"startedAt",
						"dir"
					],
					"guard": "日志包内部启动头（包语义冻结）；dir 为包内原文目录，不参与本仓字段白名单过滤",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"panel.open": {
					"level": "info",
					"kind": "resident",
					"fields": ["mode", "rows"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"panel.host.mount": {
					"level": "debug",
					"kind": "ondemand",
					"fields": [
						"propCount",
						"hasUseInput",
						"hasInputActions"
					],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"pick.probe": {
					"level": "debug",
					"kind": "ondemand",
					"fields": [
						"textareas",
						"activeKind",
						"editables",
						"storeChars",
						"actMask",
						"hasSub"
					],
					"codes": ["ENUM"],
					"guard": "#61 真机仍覆盖的诊断探针：点击瞬间只记 DOM 计数与桥形状，不记任何正文。textareas=0 且 editables>0 → 宿主输入框不是 textarea；storeChars=0 而用户框里有字 → 桥在点击时滞后；actMask=写 API 位图（位0=setDraft，1=insert，2=insertText，3=appendText，4=setValue，5=setText，6=focus，7=clear）",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"smart.card.show": {
					"level": "info",
					"kind": "ondemand",
					"fields": [
						"rows",
						"source",
						"draftChars",
						"manual"
					],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"smart.card.miss": {
					"level": "debug",
					"kind": "ondemand",
					"fields": ["reason", "draftChars"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"smart.probe": {
					"level": "debug",
					"kind": "ondemand",
					"fields": [
						"source",
						"textareas",
						"activeKind",
						"modal",
						"customs",
						"candidates",
						"draftChars"
					],
					"codes": ["ENUM"],
					"guard": "同值只记一次（客户端按载荷去重）",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"settings.log.broadcast": {
					"level": "debug",
					"kind": "ondemand",
					"fields": ["on"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.log.batch": {
					"level": "info",
					"kind": "ondemand",
					"fields": [
						"entries",
						"accepted",
						"dropped"
					],
					"guard": "每 20 批记一次（宿主侧计数器节流）",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.log.switch.get": {
					"level": "debug",
					"kind": "ondemand",
					"fields": ["enabled"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.call": {
					"level": "info",
					"kind": "resident",
					"fields": [
						"method",
						"latencyMs",
						"ok",
						"kind",
						"pluginId"
					],
					"guard": "更新包的成功轨迹（dist/host.js:203 的三参 emit，本仓宿主半按真实签名转交）。不声明就等于整条被闸门丢掉 —— 装更新成功那次调用会查不到",
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.call.fail": {
					"level": "warn",
					"kind": "selfmon",
					"fields": [
						"method",
						"kind",
						"errorHash",
						"pluginId"
					],
					"guard": "电话调用失败：日志包内部自监控（包语义冻结）与更新包 dist/host.js:207 共用同一形状；pluginId 由更新包与本仓宿主半填，日志包不填。**本仓的桥按 (method, kind) 只在状态首次出现时落一条**（该电话成功一次即清账，恢复后再失败重新落）—— 否则电话持续失败时是每请求一行 warn、绕过日志开关、用户关不掉（#39 复审 D 实测 62 次请求里 host.call.fail 62 行；三轮整改 H2），首条一定落。字段值另过一层值域安全网：不匹配安全字符集（标识符向字符以外，例如正文里的 CJK / 空格 / 标点）就落 8 位指纹，不落原文（#39 三轮整改 H1）",
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"update.install.exec": {
					"level": "warn",
					"kind": "resident",
					"fields": [
						"route",
						"ok",
						"exitCode",
						"durationMs",
						"pluginId"
					],
					"guard": "更新包执行安装那条事件（dist/store.js:273 的三参 log），route 判 cli-process / desktop-service。**route:\"none\" 不是一条真路由**：它表示「没有安装配方」（包 dist/store.js:333 的 catch 用 error?.exitCode ?? exitCode，配方为空时是 undefined），这条路径**根本没有 exitCode 键**（闸门只跳过 undefined、不补 0），所以按 route / exitCode 排障时别把 none 读成一次真实执行（#39 复审 D 的 A3）。级别是 warn 而不是 info：日志开关默认关，info 级在默认配置下不落盘，于是「装更新失败退了几 / 走的 cli 还是 desktop 路由」在默认配置下查不到（#39 复审 V2 实测：开关 off 时本事件落盘 0 行）。安装是低频事件，成功也值得留痕，故按 warn 走恒写通道",
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"update.route.fail": {
					"level": "warn",
					"kind": "resident",
					"fields": [
						"route",
						"reason",
						"errorHash"
					],
					"guard": "更新路由这一层的失败：reason 只记机器码（check-expired / phone-failed / install-failed 之类电话真失败的码，以及建能力时的 dep-load-fail / capability-degraded / capability-build-fail），错误原文只以 8 位指纹落盘。**能力缺席 / 降级这类状态型失败按状态落一次**（建能力时那一条），请求级不再落 —— 否则 warn 绕过日志开关，面板按 UPD_POLL=1000 轮询时会刷成 15 MiB/天（#39 复审 V1）。**电话真失败这一支同样按状态落一次**：请求级按 (route, reason) 去重、同一条路由成功一次即清账（恢复后再失败重新落），建能力时的三条也各落一次 —— 否则断网 / check-expired 持续时是每请求一行 warn、用户关不掉（#39 复审 D 实测 62 次请求 124 行 / 20402 B ⇒ 54.2 MiB/天）；首条一定要落，故障不许因去重而看不见（#39 三轮整改 H2）",
					"codes": ["ENUM", "H_ERR"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"update.bridge.unknown-event": {
					"level": "info",
					"kind": "resident",
					"fields": ["errorHash"],
					"guard": "更新包发出了本次内联版本事件目录（构建期快照 src/update/host/update-event-catalog.json）之外的事件名：桥每进程只自报一条，只落事件名的 8 位指纹（事件名本身不落盘）。#177 之前这条信息被折成 update.route.fail（reason=unknown-event）的 warn，目录内的正常事件被误报成路由失败；现在 route.fail 只归真实路由失败，目录外漂移单独走这条 info（kind=resident：日志开关关闭时也要能收；info/selfmon 会被开关挡掉）",
					"codes": ["H_ERR"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"log.persist.fail": {
					"level": "warn",
					"kind": "selfmon",
					"fields": [
						"op",
						"reason",
						"dirHash"
					],
					"guard": "日志包内部自监控（包语义冻结）",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"log.export.fail": {
					"level": "warn",
					"kind": "selfmon",
					"fields": [
						"op",
						"reason",
						"errorHash"
					],
					"guard": "日志包内部自监控（包语义冻结）",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"log.forward.summary": {
					"level": "warn",
					"kind": "selfmon",
					"fields": [
						"droppedDelta",
						"totalDropped",
						"reason",
						"windowMs"
					],
					"guard": "日志包内部自监控（包语义冻结）",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"log.switch.watchdog": {
					"level": "warn",
					"kind": "selfmon",
					"fields": [
						"op",
						"timeoutMs",
						"stage"
					],
					"guard": "日志包内部自监控（包语义冻结）",
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				},
				"host.batch.refuse": {
					"level": "warn",
					"kind": "resident",
					"fields": ["entries", "refused"],
					"codes": ["ENUM"],
					"rules": [
						"R_TOKEN",
						"R_WIN_ABS",
						"R_HOME_PATH",
						"R_URL",
						"R_EMAIL"
					]
				}
			}
		};
		//#endregion
		//#region node_modules/dsh-log/dist/core/level.js
		const LOG_LEVEL_ORDER = [
			"error",
			"warn",
			"info",
			"debug"
		];
		const LEVEL_SEVERITY = {
			error: 0,
			warn: 1,
			info: 2,
			debug: 3
		};
		function isKnownLevel(level) {
			return typeof level === "string" && Object.prototype.hasOwnProperty.call(LEVEL_SEVERITY, level);
		}
		function isUrgentLevel(level) {
			return level === "error" || level === "warn";
		}
		function isErrorLevel(level) {
			return level === "error";
		}
		//#endregion
		//#region node_modules/dsh-log/dist/config/constants.js
		const CLIENT_BATCH_INTERVAL_MS = 1e3;
		const CLIENT_PACKET_BYTES = 131072;
		const PHONE_ACTIONS = [
			"logBatch",
			"logExport",
			"logClear",
			"logGetSwitch",
			"logSetSwitch"
		];
		const EVENT_LEVELS = LOG_LEVEL_ORDER;
		const EVENT_KINDS = [
			"resident",
			"ondemand",
			"selfmon"
		];
		//#endregion
		//#region node_modules/dsh-log/dist/config/validate.js
		const ID_PATTERN = /^[a-z0-9-]{1,32}$/;
		function assertPluginId(value, role) {
			if (typeof value !== "string" || !ID_PATTERN.test(value)) throw new Error("[dsh-log] " + role + " 非法：只能用小写英文字母、数字、中横线，长度 1 到 32（收到 " + JSON.stringify(value) + "）");
			return value;
		}
		//#endregion
		//#region node_modules/dsh-log/dist/config/event-list.js
		function isNonEmptyString(value) {
			return typeof value === "string" && value.length > 0;
		}
		function assertStringArray(value, what) {
			if (!Array.isArray(value)) throw new Error("[dsh-log] 事件清单 eventList 非法：" + what + " 必须是字符串数组");
			const seen = [];
			for (const item of value) {
				if (!isNonEmptyString(item)) throw new Error("[dsh-log] 事件清单 eventList 非法：" + what + " 里有空字段名");
				if (seen.indexOf(item) >= 0) throw new Error("[dsh-log] 事件清单 eventList 非法：" + what + " 里字段名重复：" + item);
				seen.push(item);
			}
			return seen;
		}
		function parseEventListManifest(value) {
			if (typeof value === "string") throw new Error("[dsh-log] 事件清单 eventList 非法：路径形式请调用方自己读成对象再传入，日志包不读盘");
			if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("[dsh-log] 事件清单 eventList 非法：只收对象形式（空模板见包内的 event-list.template.json）");
			const input = value;
			if (input["version"] !== 1) throw new Error("[dsh-log] 事件清单 eventList 非法：version 现在只认 1（收到 " + JSON.stringify(input["version"]) + "）");
			const pluginId = assertPluginId(input["pluginId"], "事件清单 pluginId");
			const eventsRaw = input["events"];
			if (!eventsRaw || typeof eventsRaw !== "object" || Array.isArray(eventsRaw)) throw new Error("[dsh-log] 事件清单 eventList 非法：events 必须是事件名到条目的对象");
			const events = {};
			for (const name of Object.keys(eventsRaw)) events[name] = parseEventEntry(name, eventsRaw[name]);
			return {
				version: 1,
				pluginId,
				counts: computeEventCounts({
					version: 1,
					pluginId,
					counts: {
						resident: 0,
						ondemand: 0,
						selfmon: 0
					},
					events
				}),
				events
			};
		}
		function parseEventEntry(name, value) {
			if (!isNonEmptyString(name)) throw new Error("[dsh-log] 事件清单 eventList 非法：事件名不能为空");
			if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("[dsh-log] 事件清单 eventList 非法：事件 " + name + " 必须是对象");
			const input = value;
			if (EVENT_LEVELS.indexOf(input["level"]) < 0) throw new Error("[dsh-log] 事件清单 eventList 非法：事件 " + name + " 的 level 只许 error、warn、info、debug");
			if (EVENT_KINDS.indexOf(input["kind"]) < 0) throw new Error("[dsh-log] 事件清单 eventList 非法：事件 " + name + " 的 kind 只许 resident、ondemand、selfmon");
			for (const key of Object.keys(input)) if ([
				"level",
				"kind",
				"fields",
				"codes",
				"rules",
				"guard"
			].indexOf(key) < 0) throw new Error("[dsh-log] 事件清单 eventList 非法：事件 " + name + " 有不认识的键 " + key);
			const entry = {
				level: input["level"],
				kind: input["kind"],
				fields: assertStringArray(input["fields"], "事件 " + name + " 的 fields")
			};
			if (input["codes"] !== void 0) entry.codes = assertStringArray(input["codes"], "事件 " + name + " 的 codes");
			if (input["rules"] !== void 0) entry.rules = assertStringArray(input["rules"], "事件 " + name + " 的 rules");
			if (input["guard"] !== void 0) {
				if (typeof input["guard"] !== "string") throw new Error("[dsh-log] 事件清单 eventList 非法：事件 " + name + " 的 guard 必须是字符串");
				entry.guard = input["guard"];
			}
			return entry;
		}
		function computeEventCounts(manifest) {
			const actual = {
				resident: 0,
				ondemand: 0,
				selfmon: 0
			};
			for (const name of Object.keys(manifest.events)) actual[manifest.events[name].kind] += 1;
			return actual;
		}
		//#endregion
		//#region node_modules/dsh-log/dist/config/phones.js
		function buildPhoneNames(prefix) {
			const checked = assertPluginId(prefix, "电话名前缀 prefix");
			const names = {};
			for (const action of PHONE_ACTIONS) names[action] = checked + "." + action;
			return names;
		}
		function buildLogQueryPhoneName(prefix) {
			return assertPluginId(prefix, "电话名前缀 prefix") + ".logQuery";
		}
		//#endregion
		//#region node_modules/dsh-log/dist/core/ids.js
		/**
		* 短指纹：djb2 → 8 位十六进制小写。
		*
		* 目录、字段、导出内容都只记它，不记原文（脱敏）。**不抛错**：调用方多在写盘/回包路径上，
		* 不能因为一次散列失败把整批行带下水；出错回 `'00000000'`（与旧实现同形，历史散列值不变）。
		*/
		function hash8$1(value) {
			try {
				const t = String(value || "");
				let h = 5381;
				for (let i = 0; i < t.length; i++) h = (h << 5) + h + t.charCodeAt(i) >>> 0;
				return ("0000000" + h.toString(16)).slice(-8);
			} catch (e) {
				return "00000000";
			}
		}
		/**
		* 短 id：`len` 位十六进制（traceId 16 位、spanId 8 位）。
		*
		* 用 Math.random 而不是 crypto：宿主与浏览器闭包两边都要跑，本包不引入任何运行环境专属能力
		* （tsconfig 的 types 为空）。**它不是安全标识**——只用来把同一件事的多行串成一条链，
		* 不承担防伪职责；要防伪的场合调用方自己注入。
		*/
		function genHex(len) {
			try {
				const digits = "0123456789abcdef";
				let out = "";
				for (let i = 0; i < len; i++) out += digits[Math.floor(Math.random() * 16)];
				return out || "0".repeat(len);
			} catch (e) {
				return "0".repeat(len > 0 ? len : 8);
			}
		}
		//#endregion
		//#region node_modules/dsh-log/dist/core/resident.js
		const BUILTIN_RESIDENT_EVENTS = [
			"snapshot.request",
			"snapshot.cache.miss",
			"repo.resolve.tier",
			"gh.exec",
			"gh.timeout",
			"gh.resolve.fail",
			"graphql.fallback",
			"issues.fallback",
			"snapshot.built",
			"panelSync.dirty",
			"registry.select",
			"detection.detect",
			"skill.probe",
			"skill.pending.cap",
			"host.call",
			"host.call.fail",
			"snapshot.hydrate",
			"backend.switch",
			"naming.guard",
			"naming.lock",
			"panel.open",
			"statusbar.fallback",
			"dock.rehydrate",
			"storage.fail",
			"chain.derive.error",
			"fallback.chain",
			"client.snapshot.miss",
			"host.start",
			"update.install.exec",
			"labelColors.write",
			"guide.inject",
			"healthCheck.inject",
			"choiceStore.file.bad",
			"choiceStore.write.fail",
			"issues.page",
			"sessionTickets.chain",
			"chain.backoff",
			"host.dispatch.empty",
			"naming.summary",
			"cwd.persisted",
			"update.install.manifestSync",
			"git.exec",
			"git.exec.fail"
		];
		function declaredResidentEvents(manifest) {
			if (manifest === null || typeof manifest !== "object" || Array.isArray(manifest)) return [];
			const events = manifest.events;
			if (events === null || typeof events !== "object" || Array.isArray(events)) return [];
			const names = [];
			for (const name of Object.keys(events)) {
				const entry = events[name];
				if (entry !== null && typeof entry === "object" && entry.kind === "resident") names.push(name);
			}
			return names;
		}
		function residentEventSet(manifest) {
			const set = new Set(BUILTIN_RESIDENT_EVENTS);
			for (const name of declaredResidentEvents(manifest)) set.add(name);
			return set;
		}
		//#endregion
		//#region node_modules/dsh-log/dist/client/switch-cache.js
		function createSwitchCache(input) {
			const storage = input.storage;
			const debugKey = input.debugKey;
			const LOG_REV = input.rev;
			function readLocalDebugSwitch() {
				const fallback = {
					enabled: false,
					rev: LOG_REV
				};
				try {
					if (!storage || typeof storage.getItem !== "function") return fallback;
					const raw = storage.getItem(debugKey);
					if (!raw) return fallback;
					const saved = JSON.parse(raw);
					if (!saved || typeof saved !== "object") return fallback;
					return {
						enabled: saved.enabled === true,
						rev: typeof saved.rev === "number" && isFinite(saved.rev) ? saved.rev : LOG_REV
					};
				} catch (e) {
					return fallback;
				}
			}
			function persistLocalDebugSwitch(state) {
				try {
					if (!storage || typeof storage.setItem !== "function") return false;
					storage.setItem(debugKey, JSON.stringify({
						enabled: !!(state && state.enabled),
						rev: state && typeof state.rev === "number" && isFinite(state.rev) ? state.rev : LOG_REV
					}));
					return true;
				} catch (e) {
					return false;
				}
			}
			return {
				read: readLocalDebugSwitch,
				persist: persistLocalDebugSwitch
			};
		}
		//#endregion
		//#region node_modules/dsh-log/dist/client/trace.js
		function createTraceStage(input) {
			const traceState = input.state;
			function ensureSpanId() {
				if (!traceState.spanId) {
					traceState.spanId = genHex(8);
					if (traceState.spanSource === "none") traceState.spanSource = "auto";
				}
				return traceState.spanId;
			}
			function ensureTraceForLevel(level) {
				if (traceState.traceId) return traceState.traceId;
				if (isKnownLevel(level)) {
					traceState.traceId = genHex(16);
					traceState.traceSource = "auto";
					ensureSpanId();
					return traceState.traceId;
				}
				return traceState.traceId;
			}
			return {
				ensureSpanId,
				ensureForLevel: ensureTraceForLevel
			};
		}
		function estimateBatchBytes(entries) {
			try {
				const text = JSON.stringify(entries);
				const g = globalThis;
				if (typeof g.TextEncoder !== "undefined") return new g.TextEncoder().encode(text).length;
				return String(text).length;
			} catch (e) {
				return 131073;
			}
		}
		//#endregion
		//#region node_modules/dsh-log/dist/client/switch-ops.js
		function createSwitchOps(input) {
			const host = input.host;
			const phoneNames = input.phoneNames;
			const timer = input.timer;
			const LOG_WATCHDOG_MS = input.watchdogMs;
			const logSwitch = input.state;
			const setLogSwitchGen = input.gen;
			const persistLocalDebugSwitch = input.cache.persist;
			const broadcast = input.broadcast;
			const log = input.log;
			const watchSwitchOp = input.watch;
			function reconcileLogSwitch() {
				if (!host || typeof host.call !== "function") return Promise.resolve({
					ok: false,
					enabled: logSwitch.enabled
				});
				try {
					const pendingGet = host.call(phoneNames.logGetSwitch, {});
					watchSwitchOp("reconcile", pendingGet);
					return pendingGet.then(function(res) {
						const body = res && typeof res === "object" ? res : null;
						if (!body || body.ok !== true) return {
							ok: false,
							enabled: logSwitch.enabled
						};
						logSwitch.enabled = body.enabled === true;
						persistLocalDebugSwitch(logSwitch);
						try {
							if (broadcast) broadcast();
						} catch (e) {}
						return {
							ok: true,
							enabled: logSwitch.enabled
						};
					}).catch(function() {
						return {
							ok: false,
							enabled: logSwitch.enabled
						};
					});
				} catch (e) {
					return Promise.resolve({
						ok: false,
						enabled: logSwitch.enabled
					});
				}
			}
			const logSwitchSetFail = function(kind, hint) {
				try {
					log("warn", "host.call.fail", {
						method: phoneNames.logSetSwitch,
						kind: "set-switch-" + kind,
						errorHash: hash8$1(String(hint === void 0 || hint === null ? kind : hint).slice(0, 120))
					});
				} catch (e) {}
			};
			const switchThrowKind = function(e) {
				const msg = String((e && typeof e === "object" && ("code" in e || "message" in e) ? e.code || e.message : e) || "");
				if (/unknown endpoint/i.test(msg)) return "throw-unknown-endpoint";
				if (/connection|host\.call 不可用|unavailable/i.test(msg)) return "throw-connection";
				return "throw";
			};
			const failByThrow = function(e) {
				const kind = switchThrowKind(e);
				logSwitchSetFail(kind, (e && typeof e === "object" && "message" in e ? e.message : void 0) || e);
				return kind;
			};
			function setLogSwitch(enabled) {
				const next = { enabled: enabled === true };
				if (!host || typeof host.call !== "function") {
					logSwitchSetFail("host-unavailable", "host-unavailable");
					return Promise.resolve({
						ok: false,
						enabled: logSwitch.enabled,
						error: "host-unavailable"
					});
				}
				try {
					const pendingSet = host.call(phoneNames.logSetSwitch, next);
					watchSwitchOp("set", pendingSet);
					const myGen = setLogSwitchGen.n += 1;
					const timeoutAt = new Promise(function(resolve) {
						const fire = function() {
							resolve({ switchTimedOut: true });
						};
						try {
							if (timer !== null && timer !== void 0 && typeof timer.timeout === "function") {
								timer.timeout(fire, LOG_WATCHDOG_MS);
								return;
							}
						} catch (e) {}
						try {
							setTimeout(fire, LOG_WATCHDOG_MS);
						} catch (e2) {}
					});
					return Promise.race([pendingSet, timeoutAt]).then(function(res) {
						const body = res && typeof res === "object" ? res : null;
						if (body && body["switchTimedOut"] === true) {
							logSwitchSetFail("timeout", "timeout-" + LOG_WATCHDOG_MS);
							return {
								ok: false,
								enabled: logSwitch.enabled,
								error: "switch-timeout"
							};
						}
						if (myGen !== setLogSwitchGen.n) return {
							ok: false,
							enabled: logSwitch.enabled,
							error: "stale"
						};
						if (!body || body["ok"] !== true) {
							logSwitchSetFail("host-rejected", "host-rejected");
							return {
								ok: false,
								enabled: logSwitch.enabled,
								error: "host-rejected"
							};
						}
						logSwitch.enabled = body["enabled"] === true;
						persistLocalDebugSwitch(logSwitch);
						try {
							if (broadcast) broadcast();
						} catch (e) {}
						return {
							ok: true,
							enabled: logSwitch.enabled
						};
					}).catch(function(e) {
						if (myGen !== setLogSwitchGen.n) return {
							ok: false,
							enabled: logSwitch.enabled,
							error: "stale"
						};
						return {
							ok: false,
							enabled: logSwitch.enabled,
							error: failByThrow(e)
						};
					});
				} catch (e) {
					return Promise.resolve({
						ok: false,
						enabled: logSwitch.enabled,
						error: failByThrow(e)
					});
				}
			}
			return {
				reconcile: reconcileLogSwitch,
				set: setLogSwitch
			};
		}
		//#endregion
		//#region node_modules/dsh-log/dist/client/forward.js
		function createForwardStage(input) {
			const logDiagnostic = input.logDiagnostic;
			const logDroppedState = input.dropped;
			const logForwardState = input.forward;
			const timer = input.timer;
			const LOG_WATCHDOG_MS = input.watchdogMs;
			const hashFn = input.hashFn;
			function maybeForwardSummary() {
				const delta = logDroppedState.count - logForwardState.lastSummaryDropped;
				if (delta <= 0) return;
				logForwardState.lastSummaryDropped = logDroppedState.count;
				const now = Date.now();
				const windowMs = now - logForwardState.lastSummaryAt;
				logForwardState.lastSummaryAt = now;
				const fields = {
					droppedDelta: delta,
					totalDropped: logDroppedState.count,
					reason: logForwardState.lastReason || "send-fail",
					windowMs
				};
				if (logForwardState.lastAccepted >= 0) fields.accepted = logForwardState.lastAccepted;
				if (logForwardState.lastSkipped >= 0) fields.skipped = logForwardState.lastSkipped;
				if (logForwardState.lastRejected >= 0) fields.rejected = logForwardState.lastRejected;
				try {
					logDiagnostic("warn", "log.forward.summary", fields);
				} catch (e) {}
			}
			function logExportFail(op, reason, err) {
				try {
					const hash = hashFn && typeof hashFn === "function" ? hashFn : hash8$1;
					const raw = err && typeof err === "object" && "message" in err ? String(err.message) : String(err || reason);
					const sliced = String(raw || "").slice(0, 120);
					let hashed = "";
					try {
						hashed = hash(sliced);
					} catch (eH) {
						hashed = hash8$1(sliced);
					}
					logDiagnostic("warn", "log.export.fail", {
						op,
						reason,
						errorHash: hashed
					});
				} catch (e) {}
			}
			function watchSwitchOp(op, pending) {
				let settled = false;
				try {
					if (pending && typeof pending.then === "function") pending.then(function() {
						settled = true;
					}, function() {
						settled = true;
					});
				} catch (e) {}
				const fire = function() {
					if (!settled) {
						settled = true;
						try {
							logDiagnostic("warn", "log.switch.watchdog", {
								op,
								timeoutMs: LOG_WATCHDOG_MS,
								stage: "waiting-host"
							});
						} catch (e) {}
					}
				};
				try {
					if (timer !== null && timer !== void 0 && typeof timer.timeout === "function") {
						timer.timeout(fire, LOG_WATCHDOG_MS);
						return;
					}
				} catch (e) {}
				try {
					setTimeout(fire, LOG_WATCHDOG_MS);
				} catch (e2) {}
			}
			return {
				maybeForwardSummary,
				logExportFail,
				watchSwitchOp
			};
		}
		//#endregion
		//#region node_modules/dsh-log/dist/core/admission.js
		function findEvictableIndex(rows) {
			for (let i = 0; i < rows.length; i += 1) if (!isUrgentLevel(rows[i].level)) return i;
			return -1;
		}
		function findTrimmableIndex(rows, direction) {
			if (direction === "newest-first") {
				for (let i = rows.length - 1; i >= 0; i -= 1) if (!isErrorLevel(rows[i].level)) return i;
				return -1;
			}
			for (let i = 0; i < rows.length; i += 1) if (!isErrorLevel(rows[i].level)) return i;
			return -1;
		}
		//#endregion
		//#region node_modules/dsh-log/dist/client/send.js
		const LOG_BATCH_MAX = 50;
		const LOG_PACKET_BYTES = CLIENT_PACKET_BYTES;
		const LOG_QUEUE_MAX$1 = 100;
		function createSendStage(input) {
			const host = input.host;
			const phoneNames = input.phoneNames;
			const logQueue = input.queue;
			const logRetryState = input.retry;
			const logDroppedState = input.dropped;
			const logForwardState = input.forward;
			const logFlushTimer = input.flushTimer;
			input.timer;
			const laterRun = input.laterRun;
			const maybeForwardSummary = input.maybeForwardSummary;
			input.scheduleLogFlush;
			function userRowCount(rows) {
				let n = 0;
				for (let i = 0; i < rows.length; i += 1) if (rows[i].isDiagnostic !== true) n += 1;
				return n;
			}
			function settleSendFailure(reason, entries, onlySummary) {
				logForwardState.lastReason = reason;
				if (logRetryState.attempts < 3) {
					logRetryState.rows = entries.slice();
					logRetryState.attempts += 1;
					if (logRetryState.timer === null) {
						const wait = 500 * logRetryState.attempts;
						logRetryState.timer = laterRun(function() {
							logRetryState.timer = null;
							try {
								sendLogBatch();
							} catch (e) {}
						}, wait);
					}
				} else {
					const rc = logRetryState.rejectCount;
					const countable = userRowCount(entries);
					logDroppedState.count += rc >= 0 ? Math.min(rc, countable) : countable;
					logRetryState.rows = [];
					logRetryState.rejectCount = -1;
					logRetryState.attempts = 0;
				}
				if (!onlySummary) maybeForwardSummary();
				return {
					ok: false,
					sent: 0
				};
			}
			function sendLogBatch() {
				let entries;
				if (logRetryState.rows.length > 0) entries = logRetryState.rows.splice(0, LOG_BATCH_MAX);
				else {
					if (logQueue.length === 0) return Promise.resolve({
						ok: true,
						sent: 0
					});
					entries = logQueue.splice(0, LOG_BATCH_MAX);
				}
				let trimmed = 0;
				while (entries.length > 1 && estimateBatchBytes(entries) > LOG_PACKET_BYTES) {
					const victim = findTrimmableIndex(entries, "newest-first");
					if (victim < 0) break;
					if (entries[victim].isDiagnostic !== true) trimmed += 1;
					entries.splice(victim, 1);
				}
				while (logQueue.length > LOG_QUEUE_MAX$1) {
					const victim = findTrimmableIndex(logQueue, "oldest-first");
					if (victim < 0) break;
					if (logQueue[victim].isDiagnostic !== true) trimmed += 1;
					logQueue.splice(victim, 1);
				}
				if (trimmed > 0) {
					logDroppedState.count += trimmed;
					logForwardState.lastReason = "packet-trim";
					try {
						entries[entries.length - 1].truncated = true;
					} catch (e) {}
				}
				const args = {
					entries,
					droppedCount: logDroppedState.count
				};
				const onlySummary = entries.length === 1 && entries[0] && entries[0].event === "log.forward.summary";
				if (!host || typeof host.call !== "function") {
					logDroppedState.count += userRowCount(entries);
					logForwardState.lastReason = "send-fail";
					if (!onlySummary) maybeForwardSummary();
					return Promise.resolve({
						ok: false,
						sent: 0
					});
				}
				try {
					return host.call(phoneNames.logBatch, args).then(function(res) {
						const obj = res && typeof res === "object" ? res : null;
						const ok = !!obj && obj.ok === true;
						const countOf = (v) => typeof v === "number" && isFinite(v) && v >= 0 ? Math.floor(v) : -1;
						const acceptedRaw = countOf(obj ? obj.accepted : void 0);
						const skippedRaw = countOf(obj ? obj.skipped : void 0);
						const rejectedRaw = countOf(obj ? obj.rejected : void 0);
						logForwardState.lastAccepted = acceptedRaw;
						logForwardState.lastSkipped = skippedRaw;
						let rejected = rejectedRaw > 0 ? Math.min(rejectedRaw, entries.length) : 0;
						if (!ok && rejected === 0) rejected = acceptedRaw >= 0 ? Math.max(0, Math.min(entries.length - acceptedRaw, entries.length)) : entries.length;
						logForwardState.lastRejected = rejected;
						if (ok && rejected === 0) {
							logRetryState.attempts = 0;
							logRetryState.rejectCount = -1;
							maybeForwardSummary();
							return {
								ok: true,
								sent: entries.length
							};
						}
						logRetryState.rejectCount = rejected;
						return settleSendFailure("host-reject", entries, onlySummary);
					}).catch(function() {
						return settleSendFailure("send-fail", entries, onlySummary);
					});
				} catch (e) {
					return Promise.resolve(settleSendFailure("send-fail", entries, onlySummary));
				}
			}
			function flush() {
				if (logFlushTimer.id !== null) {
					try {
						clearTimeout(logFlushTimer.id);
					} catch (e) {}
					logFlushTimer.id = null;
				}
				try {
					sendLogBatch();
				} catch (e) {}
				return { ok: true };
			}
			function getDroppedCount() {
				return logDroppedState.count;
			}
			return {
				sendLogBatch,
				flush,
				getDroppedCount
			};
		}
		//#endregion
		//#region node_modules/dsh-log/dist/core/trace.js
		const SHADOW_FIELD = "_shadow";
		function isReservedTraceField(key) {
			return key === "traceId" || key === "spanId" || key === "seq";
		}
		function relocateReservedFields(userFields) {
			const fields = {};
			let shadow = null;
			let reservedMoved = false;
			try {
				for (const k of Object.keys(userFields)) if (isReservedTraceField(k)) {
					if (!shadow) shadow = {};
					shadow[k] = userFields[k];
					reservedMoved = true;
				} else if (k === "_shadow") continue;
				else fields[k] = userFields[k];
				const userShadow = userFields[SHADOW_FIELD];
				if (userShadow !== void 0) {
					if (userShadow && typeof userShadow === "object" && !Array.isArray(userShadow)) {
						if (!shadow) shadow = {};
						const src = userShadow;
						const target = shadow;
						for (const sk of Object.keys(src)) if (target[sk] === void 0) target[sk] = src[sk];
					} else if (!shadow) fields[SHADOW_FIELD] = userShadow;
				}
			} catch (e) {}
			return {
				fields,
				shadow,
				reservedMoved
			};
		}
		//#endregion
		//#region node_modules/dsh-log/dist/client/write.js
		const LOG_FLUSH_MS = CLIENT_BATCH_INTERVAL_MS;
		const LOG_QUEUE_MAX = 100;
		function createWriteStage(input) {
			const getSwitchEnabled = input.getSwitchEnabled;
			const logQueue = input.queue;
			const logDroppedState = input.dropped;
			const logForwardState = input.forward;
			const logFlushTimer = input.flushTimer;
			const traceState = input.traceState;
			const ensureSpanId = input.ensureSpanId;
			const ensureTraceForLevel = input.ensureTraceForLevel;
			const sendLogBatch = input.sendLogBatch;
			const timer = input.timer;
			const residentEvents = input.residentEvents;
			function isEnabled(level, event) {
				if (isUrgentLevel(level)) return true;
				try {
					if (typeof event === "string" && residentEvents.has(event)) return true;
					return getSwitchEnabled() === true;
				} catch (e) {
					return false;
				}
			}
			function dropForRoom(level) {
				if (isUrgentLevel(level)) {
					const victim = findEvictableIndex(logQueue);
					if (victim >= 0) {
						logQueue.splice(victim, 1);
						logDroppedState.count += 1;
						logForwardState.lastReason = "queue-full";
						return;
					}
					if (logQueue.length > 0) {
						logQueue.splice(0, 1);
						logDroppedState.count += 1;
						logForwardState.lastReason = "queue-full";
						return;
					}
				}
				logDroppedState.count += 1;
				logForwardState.lastReason = "queue-full";
			}
			function log(level, event, fields, isDiagnostic) {
				if (!isEnabled(level, event)) return "skipped";
				if (logQueue.length >= LOG_QUEUE_MAX) {
					dropForRoom(level);
					if (logQueue.length >= LOG_QUEUE_MAX) return "dropped";
				}
				const relocated = relocateReservedFields(fields && typeof fields === "object" ? fields : {});
				const out = relocated.fields;
				const shadow = relocated.shadow;
				if (shadow) out[SHADOW_FIELD] = shadow;
				if (shadow && relocated.reservedMoved) {
					traceState.shadowWarns += 1;
					try {
						if (logQueue.length + 1 < LOG_QUEUE_MAX) logQueue.push({
							v: 3,
							ts: Date.now(),
							level: "warn",
							event: "log.trace.shadow",
							fields: {
								event: String(event || ""),
								shadowed: Object.keys(shadow)
							},
							isDiagnostic: true
						});
					} catch (e2) {}
				}
				try {
					ensureTraceForLevel(level);
				} catch (e3) {}
				if (traceState.traceId) {
					try {
						ensureSpanId();
					} catch (e4) {}
					out.traceId = traceState.traceId;
					out.spanId = traceState.spanId;
				}
				try {
					out.seq = traceState.seq;
					traceState.seq += 1;
				} catch (e5) {}
				if (logQueue.length >= LOG_QUEUE_MAX) {
					dropForRoom(level);
					if (logQueue.length >= LOG_QUEUE_MAX) return "dropped";
				}
				logQueue.push({
					v: 3,
					ts: Date.now(),
					level,
					event: String(event || ""),
					fields: out,
					isDiagnostic: isDiagnostic === true
				});
				if (isUrgentLevel(level)) scheduleLogFlush(true);
				else scheduleLogFlush(false);
				return "queued";
			}
			function logDiagnostic(level, event, fields) {
				return log(level, event, fields, true);
			}
			function scheduleLogFlush(immediate) {
				const later = function(fn, ms) {
					try {
						if (timer !== null && timer !== void 0 && typeof timer.timeout === "function") return timer.timeout(fn, ms);
					} catch (e) {}
					return setTimeout(fn, ms);
				};
				if (immediate) {
					if (logFlushTimer.id !== null) {
						try {
							clearTimeout(logFlushTimer.id);
						} catch (e) {}
						logFlushTimer.id = null;
					}
					later(sendLogBatch, 0);
					return;
				}
				if (logFlushTimer.id !== null) return;
				logFlushTimer.id = later(function() {
					logFlushTimer.id = null;
					sendLogBatch();
				}, LOG_FLUSH_MS);
			}
			return {
				log,
				logDiagnostic,
				isEnabled,
				dropForRoom,
				scheduleLogFlush
			};
		}
		//#endregion
		//#region node_modules/dsh-log/dist/client.js
		function buildClientPhoneNames(prefix) {
			return buildPhoneNames(prefix);
		}
		function resolveClientLogConfig(input) {
			const raw = input === void 0 || input === null ? {} : input;
			const pluginId = raw.pluginId !== void 0 && raw.pluginId !== null ? assertPluginId(raw.pluginId, "插件标识 pluginId") : (function() {
				throw new Error("[dsh-log] 建客户端日志库缺少配置：插件标识 pluginId 必填（须显式传入，不再回退）");
			})();
			const prefix = raw.prefix !== void 0 && raw.prefix !== null ? assertPluginId(raw.prefix, "电话名前缀 prefix") : (function() {
				throw new Error("[dsh-log] 建客户端日志库缺少配置：电话名前缀 prefix 必填（须显式传入，不再回退到 pluginId）");
			})();
			const eventList = raw.eventList === void 0 ? null : raw.eventList;
			if (eventList !== null && typeof eventList === "object") parseEventListManifest(eventList);
			return {
				pluginId,
				prefix,
				eventList
			};
		}
		function debugStorageKey(pluginId) {
			return "dsws.debug." + pluginId;
		}
		const LOG_WATCHDOG_MS = 5e3;
		function createClientLog(deps, configInput) {
			const input = deps || {};
			const host = input.host === void 0 ? null : input.host;
			const timer = input.timer === void 0 ? null : input.timer;
			const storage = input.storage !== void 0 && input.storage !== null ? input.storage : input.localStorage === void 0 ? null : input.localStorage;
			const broadcast = typeof input.broadcastLogSwitch === "function" ? input.broadcastLogSwitch : null;
			const config = resolveClientLogConfig(configInput);
			const phoneNames = buildClientPhoneNames(config.prefix);
			const switchCache = createSwitchCache({
				storage,
				debugKey: debugStorageKey(config.pluginId),
				rev: 1
			});
			const readLocalDebugSwitch = () => switchCache.read();
			const persistLocalDebugSwitch = (state) => switchCache.persist(state);
			const logSwitch = readLocalDebugSwitch();
			const logQueue = [];
			const logDroppedState = { count: 0 };
			const logForwardState = {
				lastSummaryAt: Date.now(),
				lastSummaryDropped: 0,
				lastReason: "",
				lastAccepted: -1,
				lastSkipped: -1,
				lastRejected: -1
			};
			const logRetryState = {
				rows: [],
				rejectCount: -1,
				attempts: 0,
				timer: null
			};
			function laterRun(fn, ms) {
				try {
					if (timer !== null && timer !== void 0 && typeof timer.timeout === "function") return timer.timeout(fn, ms);
				} catch (e) {}
				return setTimeout(fn, ms);
			}
			const logFlushTimer = { id: null };
			const setLogSwitchGen = { n: 0 };
			const traceState = {
				traceId: null,
				spanId: null,
				seq: 0,
				traceSource: "none",
				spanSource: "none",
				shadowWarns: 0
			};
			const trace = createTraceStage({ state: traceState });
			const ensureSpanId = () => trace.ensureSpanId();
			const ensureTraceForLevel = (level) => trace.ensureForLevel(level);
			let sendBatchRef = () => Promise.resolve({
				ok: false,
				sent: 0
			});
			const write = createWriteStage({
				getSwitchEnabled: () => logSwitch.enabled,
				residentEvents: residentEventSet(config.eventList),
				queue: logQueue,
				dropped: logDroppedState,
				forward: logForwardState,
				flushTimer: logFlushTimer,
				traceState,
				ensureSpanId,
				ensureTraceForLevel,
				sendLogBatch: () => sendBatchRef(),
				timer
			});
			const log = (level, event, fields) => write.log(level, event, fields);
			const isEnabled = (level, event) => write.isEnabled(level, event);
			const scheduleLogFlush = (immediate) => write.scheduleLogFlush(immediate);
			const forward = createForwardStage({
				logDiagnostic: write.logDiagnostic,
				dropped: logDroppedState,
				forward: logForwardState,
				timer,
				watchdogMs: LOG_WATCHDOG_MS,
				hashFn: input && typeof input.hashFn === "function" ? input.hashFn : null
			});
			const maybeForwardSummary = () => forward.maybeForwardSummary();
			const logExportFail = (op, reason, err) => forward.logExportFail(op, reason, err);
			const watchSwitchOp = (op, pending) => forward.watchSwitchOp(op, pending);
			const send = createSendStage({
				host,
				phoneNames,
				queue: logQueue,
				retry: logRetryState,
				dropped: logDroppedState,
				forward: logForwardState,
				flushTimer: logFlushTimer,
				timer,
				laterRun,
				maybeForwardSummary,
				scheduleLogFlush
			});
			const sendLogBatch = () => send.sendLogBatch();
			const flush = () => send.flush();
			const getDroppedCount = () => send.getDroppedCount();
			sendBatchRef = sendLogBatch;
			const switchOps = createSwitchOps({
				host,
				phoneNames,
				timer,
				watchdogMs: LOG_WATCHDOG_MS,
				state: logSwitch,
				gen: setLogSwitchGen,
				cache: switchCache,
				broadcast,
				log,
				watch: watchSwitchOp
			});
			const reconcileLogSwitch = () => switchOps.reconcile();
			const setLogSwitch = (enabled) => switchOps.set(enabled);
			function child(ctx) {
				const next = createClientLog(input, {
					pluginId: config.pluginId,
					prefix: config.prefix,
					eventList: config.eventList
				});
				try {
					let tid = null;
					let tsrc = "none";
					const c = ctx;
					if (c && typeof c === "object" && typeof c.traceId === "string" && c.traceId) {
						tid = c.traceId;
						tsrc = "explicit";
					} else if (traceState.traceId) {
						tid = traceState.traceId;
						tsrc = "inherited";
					}
					next.traceState.traceId = tid;
					next.traceState.traceSource = tsrc;
					next.traceState.spanId = genHex(8);
					next.traceState.spanSource = "refreshed";
					next.traceState.seq = 0;
				} catch (e) {}
				return next;
			}
			function why() {
				const detail = "traceId 来源=" + traceState.traceSource + "（explicit=child(ctx)显式传入，inherited=从父实例继承，auto=缺链自动建链仅info以上+采样后debug，none=尚未建链）；spanId 来源=" + traceState.spanSource + "（child 每次刷新，首链自动生成）；seq=" + String(traceState.seq) + "（本实例内单调，子实例从0，按(seq,ts)排链）；保留字冲突_shadow 计" + String(traceState.shadowWarns) + "次（traceId/spanId/seq 永不拒收，error 照落）；旧行 v!=" + String(3) + " 跳过计数不抛（读侧 handleLogQuery）";
				return {
					traceId: traceState.traceId,
					spanId: traceState.spanId,
					seq: traceState.seq,
					sources: {
						traceId: traceState.traceSource,
						spanId: traceState.spanSource,
						seq: "per-instance"
					},
					shadowWarns: traceState.shadowWarns,
					detail
				};
			}
			function queryLogs(args) {
				const name = buildLogQueryPhoneName(config.prefix);
				if (!host || typeof host.call !== "function") return Promise.resolve({
					ok: false,
					entries: [],
					error: "host-unavailable"
				});
				try {
					return host.call(name, args || {}).catch(function(e) {
						return {
							ok: false,
							entries: []
						};
					});
				} catch (e) {
					return Promise.resolve({
						ok: false,
						entries: []
					});
				}
			}
			const logFn = log;
			try {
				logFn.child = child;
				logFn.why = why;
			} catch (e) {}
			return {
				config,
				phoneNames,
				logSwitch,
				logQueue,
				logDroppedState,
				logForwardState,
				logFlushTimer,
				traceState,
				isEnabled,
				log: logFn,
				child,
				why,
				queryLogs,
				scheduleLogFlush,
				estimateBatchBytes,
				maybeForwardSummary,
				hash8: hash8$1,
				logExportFail,
				watchSwitchOp,
				sendLogBatch,
				flush,
				getDroppedCount,
				readLocalDebugSwitch,
				persistLocalDebugSwitch,
				reconcileLogSwitch,
				setLogSwitch
			};
		}
		const HASH_RE = /^[0-9a-f]{8}$/;
		/** ENUM 值域默认（与清单顶层 valueDomain 同值；清单缺失或非法时回退到此，仍保持防护）。 */
		const ENUM_VALUE_PATTERN_SRC = "^[A-Za-z0-9._:\\/-]{0,32}$";
		const ENUM_VALUE_RE = /^[A-Za-z0-9._:\/-]{0,32}$/;
		/** 清单不可用时仍然放行的唯一事件（自报故障，字段硬编码），否则失败关闭会把告警本身吞掉。 */
		const MANIFEST_FAIL_EVENT = "host.log.manifest.fail";
		const MANIFEST_FAIL_FIELDS = ["reason", "errorHash"];
		/** 第二道网：具名规则命中就把该字段值换成规则名，不记原文。白名单是主防线，这里只兜已知高危形状。 */
		const RULE_TABLE = [
			["R_TOKEN", /(ghp_|gho_|github_pat_|bearer\s|sk-)[A-Za-z0-9_-]{8,}/i],
			["R_WIN_ABS", /(^|[^A-Za-z0-9])[A-Za-z]:[\\/]/],
			["R_HOME_PATH", /(users|home)[\\/][^\\/\s]+/i],
			["R_URL", /https?:\/\//i],
			["R_EMAIL", /[\w.+-]+@[\w-]+\.[A-Za-z]{2,}/]
		];
		/** 与包内 `hash8` 同形（把没散列、或形状不对的值就地散列，只用来判断同一性）。 */
		function hash8(value) {
			try {
				const text = String(value ?? "");
				let h = 5381;
				for (let i = 0; i < text.length; i++) h = (h << 5) + h + text.charCodeAt(i) >>> 0;
				return ("0000000" + h.toString(16)).slice(-8);
			} catch (e) {
				return "00000000";
			}
		}
		/** 清单最小形状自检：version 1、pluginId 是 dsh-prompt、events 里每条都有 fields 数组。 */
		function summarizeManifest(raw, pluginId = "dsh-prompt") {
			try {
				if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {
					ok: false,
					reason: "shape-fail",
					table: null
				};
				if (raw.version !== 1 || raw.pluginId !== pluginId) return {
					ok: false,
					reason: "shape-fail",
					table: null
				};
				if (!raw.events || typeof raw.events !== "object" || Array.isArray(raw.events)) return {
					ok: false,
					reason: "shape-fail",
					table: null
				};
				let enumPattern = ENUM_VALUE_PATTERN_SRC;
				let enumMaxLength = 32;
				try {
					const vd = raw.valueDomain;
					if (vd && typeof vd === "object" && !Array.isArray(vd)) {
						if (typeof vd.enumPattern === "string" && vd.enumPattern.length > 0) {
							new RegExp(vd.enumPattern);
							enumPattern = vd.enumPattern;
						}
						if (typeof vd.enumMaxLength === "number" && Number.isFinite(vd.enumMaxLength) && vd.enumMaxLength >= 0) enumMaxLength = Math.floor(vd.enumMaxLength);
					}
				} catch (e) {}
				const table = /* @__PURE__ */ new Map();
				for (const [name, entry] of Object.entries(raw.events)) {
					if (!entry || typeof entry !== "object" || !Array.isArray(entry.fields)) return {
						ok: false,
						reason: "shape-fail",
						table: null
					};
					const hasEnum = Array.isArray(entry.codes) && entry.codes.indexOf("ENUM") >= 0;
					table.set(name, {
						level: entry.level,
						kind: entry.kind,
						fields: entry.fields,
						hasEnum
					});
				}
				return {
					ok: true,
					reason: "ok",
					table,
					enumPattern,
					enumMaxLength
				};
			} catch (e) {
				return {
					ok: false,
					reason: "shape-fail",
					table: null
				};
			}
		}
		/**
		* 建闸门。`raw` 是清单原对象（不合规即失败关闭）；返回的 `filter` 是唯一写入前关口。
		* `onWarn` 可选，用于把"清单不可用"这件事通知给调用方（宿主往 stderr 说一次，客户端不吭声）。
		*/
		function createEventGate(raw, options = {}) {
			const summary = summarizeManifest(raw, options.pluginId ?? "dsh-prompt");
			const table = summary.table ?? /* @__PURE__ */ new Map();
			const stats = {
				undeclared: 0,
				droppedFields: 0,
				oversize: 0,
				scrubbed: 0
			};
			let warned = false;
			let enumRe = ENUM_VALUE_RE;
			try {
				enumRe = new RegExp(summary.enumPattern ?? "^[A-Za-z0-9._:\\/-]{0,32}$");
			} catch (e) {
				enumRe = ENUM_VALUE_RE;
			}
			const enumMax = typeof summary.enumMaxLength === "number" ? summary.enumMaxLength : 32;
			function coerce(hasEnum, field, value) {
				if (value === void 0 || value === null) return { skip: true };
				if (/Hash$/.test(field)) {
					const text = String(value);
					return { value: HASH_RE.test(text) ? text : hash8(text) };
				}
				if (typeof value === "boolean") return { value };
				if (typeof value === "number") {
					if (!Number.isFinite(value)) return { skip: true };
					return { value: Number.isInteger(value) ? value : Math.round(value) };
				}
				let text = String(value);
				for (const [ruleName, re] of RULE_TABLE) if (re.test(text)) {
					text = ruleName;
					stats.scrubbed += 1;
					break;
				}
				if (hasEnum) {
					if (text.length > enumMax || !enumRe.test(text)) {
						stats.droppedFields += 1;
						return { skip: true };
					}
				}
				return { value: text.length > 32 ? text.slice(0, 32) : text };
			}
			function filter(event, fields) {
				const name = String(event || "");
				const entry = table.get(name);
				const isManifestFail = name === MANIFEST_FAIL_EVENT;
				if (!entry && !isManifestFail) {
					if (table.size > 0) {
						stats.undeclared += 1;
						return {
							ok: false,
							reason: "undeclared-event",
							level: "info",
							fields: {}
						};
					}
					if (!warned) {
						warned = true;
						try {
							options.onWarn?.("事件清单不可用，日志字段已按失败关闭处理（只记事件名与级别）。");
						} catch (e) {}
					}
					stats.undeclared += 1;
					return {
						ok: true,
						reason: "no-manifest",
						level: "info",
						fields: {}
					};
				}
				const declared = entry ? entry.fields : MANIFEST_FAIL_FIELDS;
				const level = entry ? entry.level : "warn";
				const hasEnum = entry ? !!entry.hasEnum : isManifestFail;
				const input = fields && typeof fields === "object" ? fields : {};
				const safe = {};
				for (const [key, value] of Object.entries(input)) {
					if (declared.indexOf(key) < 0) {
						stats.droppedFields += 1;
						continue;
					}
					const out = coerce(hasEnum, key, value);
					if (!out.skip) safe[key] = out.value;
				}
				let line = "";
				try {
					line = JSON.stringify({
						ts: 0,
						level,
						event: name,
						fields: safe
					});
				} catch (e) {
					return {
						ok: false,
						reason: "unserializable",
						level,
						fields: {}
					};
				}
				if (line.length > 1024) {
					stats.oversize += 1;
					return {
						ok: false,
						reason: "oversize",
						level,
						fields: {}
					};
				}
				return {
					ok: true,
					reason: "ok",
					level,
					fields: safe
				};
			}
			return {
				filter,
				stats,
				manifestOk: table.size > 0,
				isDeclared: (event) => table.has(String(event)),
				levelOf: (event) => table.get(String(event))?.level ?? null,
				eventNames: () => [...table.keys()]
			};
		}
		Object.keys(event_list_dsh_prompt_default.events);
		const ENDPOINT_DEFAULT = "/_dsh/dsh-prompt/log";
		let current = null;
		const subscribers = /* @__PURE__ */ new Set();
		/**
		* 默认存储的安全求值（#59）：`typeof localStorage` 在「属性访问就抛」的环境下
		* （隐私模式 / 企业策略拦截）一样会抛 —— `typeof` 只对「未声明变量」安全，
		* 对「getter 一碰就抛」不安全。所以整段求值必须包在 `try` 里，失败回 `null`
		* （日志能力降级，整壳继续起；包内 `dsh-log` 对 `null` 本来就是无存储语义）。
		*
		* 落点取舍（#59 分诊口径 + #53 约束）：只住本文件内部，不新建 `src/client/storage.ts`
		* —— 本仓每个回归脚本都在 `scripts` 下的 `.rt-tmp` 系列目录里手写要转译的模块清单，往被普遍加载的
		* 路径上加一条 import 边会让既有脚本整批红（#53 实测 15 条里红 9 条）。`smart-draft.ts` /
		* 的同类访问本来就在 `try` 里（#127 `updauto.ts` 已删；降级值 `false` / `null` / `''` / `false`
		* 保持不变），为避免两套写法漂移刻意不收拢到一处共享封装 —— 本函数只保这一处爆点。
		*/
		function resolveDefaultStorage() {
			try {
				const s = globalThis.localStorage;
				if (typeof s === "undefined" || s === null) return null;
				return s;
			} catch (e) {
				return null;
			}
		}
		function notify() {
			subscribers.forEach((fn) => {
				try {
					fn();
				} catch (e) {}
			});
		}
		/** 建日志能力并登记为当前实例（热重载重跑 apply 时以最后一次为准）。 */
		function startLog(deps = {}) {
			const endpoint = deps.endpoint ?? ENDPOINT_DEFAULT;
			const gate = createEventGate(event_list_dsh_prompt_default);
			let channel = null;
			try {
				if (typeof BroadcastChannel !== "undefined") channel = new BroadcastChannel(deps.channelName ?? "dsh-prompt-log");
			} catch (e) {}
			let clientLog;
			const host = deps.host ?? { async call(name, args) {
				try {
					if (typeof fetch === "undefined") throw new Error("fetch-unavailable");
					const res = await fetch(endpoint, {
						method: "POST",
						headers: { "content-type": "application/json" },
						body: JSON.stringify({
							name,
							args
						})
					});
					if (!res.ok) throw new Error("http-" + res.status);
					const data = await res.json();
					if (!data || data.ok !== true) return {
						ok: false,
						error: data?.error ?? { code: "bridge-rejected" }
					};
					return data.value;
				} catch (e) {
					facade.log("bridge.call.fail", {
						phone: name,
						kind: typeof e === "object" && e && "message" in e ? String(e.message).slice(0, 32) : "bridge-error"
					});
					throw e;
				}
			} };
			clientLog = createClientLog({
				host,
				timer: deps.timer ?? null,
				storage: deps.storage ?? resolveDefaultStorage(),
				broadcastLogSwitch: channel ? () => {
					try {
						channel.postMessage({ on: clientLog.logSwitch.enabled });
					} catch (e) {}
				} : null
			}, {
				pluginId: "dsh-prompt",
				prefix: "dsh-prompt",
				eventList: event_list_dsh_prompt_default
			});
			if (channel) try {
				channel.addEventListener("message", (ev) => {
					const on = !!(ev && ev.data && ev.data.on);
					clientLog.logSwitch.enabled = on;
					facade.log("settings.log.broadcast", { on });
					notify();
				});
			} catch (e) {}
			const facade = {
				log(event, fields) {
					const res = gate.filter(String(event), fields);
					if (!res.ok) return false;
					try {
						clientLog.log(res.level, String(event), res.fields);
						return true;
					} catch (e) {
						return false;
					}
				},
				isEnabled(event) {
					if (gate.manifestOk && !gate.isDeclared(String(event))) return false;
					try {
						return clientLog.isEnabled(gate.levelOf(String(event)) ?? "info");
					} catch (e) {
						return false;
					}
				},
				status: () => ({
					dropped: clientLog.getDroppedCount(),
					undeclared: gate.stats.undeclared,
					droppedFields: gate.stats.droppedFields,
					oversize: gate.stats.oversize,
					scrubbed: gate.stats.scrubbed,
					manifestOk: gate.manifestOk
				}),
				getSwitch: () => ({ enabled: clientLog.logSwitch.enabled }),
				async setSwitch(enabled) {
					const res = await clientLog.setLogSwitch(enabled);
					notify();
					return {
						ok: !!res?.ok,
						enabled: !!(res?.enabled ?? clientLog.logSwitch.enabled),
						error: res?.error
					};
				},
				async reconcile() {
					const res = await clientLog.reconcileLogSwitch();
					facade.log("settings.log.reconcile", {
						ok: !!res?.ok,
						on: !!res?.enabled
					});
					notify();
					return {
						ok: !!res?.ok,
						enabled: !!res?.enabled
					};
				},
				async exportLog(date) {
					try {
						const res = await host.call(clientLog.phoneNames.logExport, date ? { date } : {});
						const out = {
							ok: !!res?.ok,
							fileName: res?.fileName,
							bytes: res?.bytes,
							fallback: res?.fallback,
							text: res?.text,
							dir: res?.dir,
							path: res?.path
						};
						if (out.ok) facade.log("settings.log.export", {
							ok: true,
							bytes: out.bytes ?? 0,
							fallback: !!out.fallback
						});
						else {
							out.reason = res?.error?.code ?? "export-failed";
							facade.log("settings.log.export.fail", {
								reason: out.reason,
								errorHash: hash8(out.reason)
							});
						}
						return out;
					} catch (e) {
						const reason = "host-unreachable";
						facade.log("settings.log.export.fail", {
							reason,
							errorHash: hash8(String(e?.message ?? e))
						});
						return {
							ok: false,
							reason
						};
					}
				},
				async clearLog() {
					try {
						const res = await host.call(clientLog.phoneNames.logClear, { date: "all" });
						const out = {
							ok: !!res?.ok,
							removed: Number(res?.removed ?? 0)
						};
						facade.log("settings.log.clear", out);
						return out;
					} catch (e) {
						facade.log("settings.log.clear", {
							ok: false,
							removed: 0
						});
						return {
							ok: false,
							removed: 0
						};
					}
				},
				flush() {
					try {
						clientLog.flush();
					} catch (e) {}
				},
				subscribe(fn) {
					subscribers.add(fn);
					return () => {
						subscribers.delete(fn);
					};
				},
				raw: () => clientLog
			};
			current = facade;
			try {
				globalThis.__dshPromptLog = facade;
			} catch (e) {}
			return facade;
		}
		/** 取当前实例；没建过就返回空操作实例，调用点不必判空。 */
		function getLog() {
			if (current) return current;
			return {
				log: () => false,
				isEnabled: () => false,
				status: () => ({
					dropped: 0,
					undeclared: 0,
					droppedFields: 0,
					oversize: 0,
					scrubbed: 0,
					manifestOk: false
				}),
				getSwitch: () => ({ enabled: false }),
				setSwitch: async (enabled) => ({
					ok: false,
					enabled,
					error: "log-not-started"
				}),
				reconcile: async () => ({
					ok: false,
					enabled: false
				}),
				exportLog: async () => ({
					ok: false,
					reason: "log-not-started"
				}),
				clearLog: async () => ({
					ok: false,
					removed: 0
				}),
				flush: () => void 0,
				subscribe: () => () => void 0,
				raw: () => null
			};
		}
		//#endregion
		//#region src/client/index.ts
		/**
		* 装配器（非 barrel，不扩转口）（#171 N6：可 import 者 —— 无（构建入口，不被源码进口））。
		* 跑浏览器 bundle 线；禁被 src/update/host 进口（DO-NOT-IMPORT），禁跨运行时进口。
		*/
		/**
		* dsh-prompt — client 入口（v1 常规模式 + v1.1 智能模式）
		* 装配：input.left 入口按钮 / input.overlay 面板浮层 / settings.section 配置页（直属设置面板）/ inputTriggers /prompt 触发源（#9）/ shell.overlay 智能悬浮卡（#10）
		*/
		/** 记一条调试级事件（先问开关再组装字段：关着开关时连字符串都不拼，包内兜底拦不住调用前的求值）。 */
		function logDebug(event, fields) {
			try {
				const log = getLog();
				if (!log.isEnabled(event)) return;
				log.log(event, fields);
			} catch (e) {}
		}
		/**
		* 为什么要有：真机/用户现场「面板没开 / 设置跳不过去 / 远程空白」时，观察者只能看 DOM 猜；
		* 一个按需开启的结构化快照能把「面板开合、触发方式、行数、设置项、远程/弹层/日志状态」一次说清。
		*
		* 为什么不走常规日志：日志清单（src/client/log/manifest 与 scripts/check-log-shape.mjs 的
		* EVENT_FIELDS）是冻结契约，里面没有这类瞬时快照字段；硬塞会让每次常规运行都多一条事件，
		* 还可能把模板名/正文带进日志。诊断是排障时才开的东西 ⇒ 默认零成本。
		*
		* 怎么开（三选一，默认全关）：
		*   ① URL 参数 `?dsh-prompt-diag=1`（只影响本页、不落盘；`=0` 显式关，优先级高于 localStorage）；
		*   ② localStorage 键 `dsh-prompt-diag` 值为 `1`（跨刷新常开）；
		*   ③ 已开启后控制台：`__dshPromptDiag.snapshot()` 取快照 / `.dump()` 打印 /
		*      `.disable()` / `.enable()` 反复开关（幂等；对象留在原地只为再次 enable）。
		*
		* 为什么这样设计：不新增任何 UI 入口（AC 要求不污染产品界面），开关都属于用户/排障者的主动动作；
		* 默认关时**不挂 window 对象、不注册监听、不打一行 console**，常规用户零感知；快照是只读聚合，
		* 不读模板正文/输入草稿，也不写常规日志（无隐私外溢、无噪声）；URL 只读不写回，localStorage
		* 只在用户自己写时参与，刷新后完全按配置重新决定（可重复、不残留上次会话状态）。
		*
		* 与门禁的关系：`scripts/check-real-hooks.mjs` 断言构建产物里含 `__dshPromptDiag`、
		* `dsh-prompt-diag`、`[dsh-prompt:diag]` 三个标记；`scripts/check-log-shape.mjs` 的诚实白名单
		* 允许且只允许本文件这一处 `console.debug`（诊断输出，默认关闭时永不执行）；改任一标记或挪这处调用
		* 必须同步门禁与 `docs/real/hooks.md`。
		*/
		const DIAG_CONTRACT_VERSION = 1;
		const DIAG_KEY = "dsh-prompt-diag";
		/**
		* 输出一行诊断信息。
		* 门禁白名单允许且只允许这一处 `console.debug`（见 `scripts/check-log-shape.mjs` 的
		* `checkConsoleAllowlist`）：常规输出必须走日志能力，诊断是不走日志能力的按需输出，
		* 所以在这里直白地调用 debug 通道一次；默认关闭时这段永远不会执行。
		*/
		function diagPrint(msg, payload) {
			try {
				if (typeof console === "undefined" || typeof console.debug !== "function") return;
				console.debug(msg, ...payload === void 0 ? [] : [payload]);
			} catch (e) {}
		}
		/** 把配置值归一成布尔；不认识的值返回 null（= 没配，继续看下一级来源）。 */
		function diagFlag(raw) {
			if (typeof raw !== "string" || raw === "") return null;
			const v = raw.trim().toLowerCase();
			if (v === "1" || v === "true" || v === "on" || v === "yes") return true;
			if (v === "0" || v === "false" || v === "off" || v === "no") return false;
			return null;
		}
		/** 优先级：URL 查询参数 > localStorage > 默认关。 */
		function readDiagConfig() {
			try {
				if (typeof window !== "undefined") {
					const search = window.location && window.location.search || "";
					const q = diagFlag(new URLSearchParams(search).get(DIAG_KEY));
					if (q !== null) return {
						on: q,
						source: "url"
					};
				}
			} catch (e) {}
			try {
				if (typeof window !== "undefined" && window.localStorage) {
					const s = diagFlag(window.localStorage.getItem(DIAG_KEY));
					if (s !== null) return {
						on: s,
						source: "localStorage"
					};
				}
			} catch (e) {}
			return {
				on: false,
				source: "default"
			};
		}
		/** 安全查一个元素（无 document / SSR / 选择器异常一律 null）。 */
		function diagEl(sel) {
			try {
				return typeof document !== "undefined" && document ? document.querySelector(sel) : null;
			} catch (e) {
				return null;
			}
		}
		function diagAttr(sel, name) {
			const el = diagEl(sel);
			try {
				return el && typeof el.getAttribute === "function" ? el.getAttribute(name) : null;
			} catch (e) {
				return null;
			}
		}
		/** 只读聚合：不读正文、不触发任何渲染，缺失/异常一律降级成 null。 */
		function diagSnapshot() {
			let hidePreset = null;
			try {
				const el = diagEl("[data-dsh-prompt-hide-toggle]");
				hidePreset = el ? !!el.checked : null;
			} catch (e) {}
			const surface = [];
			try {
				if (typeof document !== "undefined" && document) {
					const list = document.querySelectorAll("[data-dsh-prompt-panel-surface]");
					for (let i = 0; i < list.length; i++) {
						const el = list[i];
						const v = el && typeof el.getAttribute === "function" ? el.getAttribute("data-dsh-prompt-panel-surface") : null;
						if (v && surface.indexOf(v) < 0) surface.push(v);
					}
				}
			} catch (e) {}
			const rows = {
				total: 0,
				insert: 0,
				settings: 0,
				names: []
			};
			try {
				if (typeof document !== "undefined" && document) {
					const list = document.querySelectorAll("[data-dsh-prompt-row-role]");
					rows.total = list.length;
					for (let i = 0; i < list.length; i++) {
						const el = list[i];
						try {
							const role = el.getAttribute("data-dsh-prompt-row-role");
							if (role === "insert") rows.insert += 1;
							else if (role === "settings") rows.settings += 1;
							const name = el.getAttribute("data-dsh-prompt-row-name");
							if (name && rows.names.length < 20) rows.names.push(name);
						} catch (e) {}
					}
				}
			} catch (e) {}
			let remote = {
				enabled: false,
				size: 0,
				orientation: "auto",
				density: "a"
			};
			try {
				const p = getRemotePrefs();
				remote = {
					enabled: !!p.enabled,
					size: p.size,
					orientation: p.orientation,
					density: p.density
				};
			} catch (e) {}
			let logOn = null;
			try {
				logOn = !!getLog().getSwitch().enabled;
			} catch (e) {}
			let panelOpen = null;
			try {
				panelOpen = isPanelOpen();
			} catch (e) {}
			let triggerMode = null;
			try {
				triggerMode = isHoverTriggerEnabled() ? "hover" : "click";
			} catch (e) {}
			let at = "";
			try {
				at = (/* @__PURE__ */ new Date()).toISOString();
			} catch (e) {}
			return {
				contract: DIAG_CONTRACT_VERSION,
				at,
				panel: {
					open: panelOpen,
					state: diagAttr("[data-dsh-prompt-entry]", "data-dsh-prompt-panel-state"),
					surface
				},
				trigger: { mode: triggerMode },
				rows,
				settings: {
					hidePreset,
					triggerMode: diagAttr("[data-dsh-prompt-trigger]", "data-dsh-prompt-trigger-mode"),
					remote
				},
				remote: {
					state: diagAttr("[data-dsh-prompt-remote-panel]", "data-dsh-prompt-remote-state"),
					open: !!diagEl("[data-dsh-prompt-remote-panel]")
				},
				modal: {
					kind: diagAttr("[data-dsh-prompt-modal-kind]", "data-dsh-prompt-modal-kind"),
					open: !!diagEl("[data-dsh-prompt-modal]")
				},
				log: { enabled: logOn }
			};
		}
		/**
		* 安装 `window.__dshPromptDiag`；已存在则复用（幂等）。
		* disable 只把 `enabled` 置 false、不删对象 —— 这是「可反复开关」的落点：控制台还能再 enable。
		*/
		function publishDiag() {
			try {
				const g = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : null;
				if (!g) return null;
				if (g.__dshPromptDiag && typeof g.__dshPromptDiag === "object") {
					try {
						g.__dshPromptDiag.enabled = true;
					} catch (e) {}
					return g.__dshPromptDiag;
				}
				const api = {
					contract: DIAG_CONTRACT_VERSION,
					enabled: true,
					snapshot: () => {
						try {
							return diagSnapshot();
						} catch (e) {
							return {
								contract: DIAG_CONTRACT_VERSION,
								error: String(e && e.message || e)
							};
						}
					},
					dump: () => {
						const snap = api.snapshot();
						diagPrint("[dsh-prompt:diag] snapshot", snap);
						return snap;
					},
					enable: () => {
						try {
							publishDiag();
							return true;
						} catch (e) {
							return false;
						}
					},
					disable: () => {
						try {
							api.enabled = false;
							return false;
						} catch (e) {
							return false;
						}
					}
				};
				g.__dshPromptDiag = api;
				return api;
			} catch (e) {
				return null;
			}
		}
		/** apply() 调用的页面级安装：配置为开才发布对象并打一行固定前缀的提示。 */
		function installDiag() {
			let cfg = {
				on: false,
				source: "default"
			};
			try {
				cfg = readDiagConfig();
			} catch (e) {}
			if (!cfg.on) return;
			if (!publishDiag()) return;
			diagPrint("[dsh-prompt:diag] enabled (source: " + cfg.source + "); snapshot: __dshPromptDiag.snapshot()");
		}
		const inject = ["slots", "inputTriggers"];
		/** 面板浮层（conversation.input.overlay，session 作用域 → 有 useInput/inputActions） */
		function PanelHost(props) {
			const react = getReact();
			if (!react) return null;
			const h = react.createElement;
			const openState = react.useState(isPanelOpen());
			const open = openState[0];
			react.useEffect(() => {
				onPanelOpen((v) => openState[1](v));
				logDebug("panel.host.mount", {
					propCount: Object.keys(props || {}).length,
					hasUseInput: !!props.useInput,
					hasInputActions: !!props.inputActions
				});
			}, []);
			react.useEffect(() => {
				const readDraft = () => {
					try {
						const u = props.useInput;
						if (u && typeof u.getState === "function") return u.getState()?.draft || "";
					} catch (e) {}
					try {
						if (typeof document !== "undefined") {
							const ae = document.activeElement;
							if (ae && ae.tagName === "TEXTAREA") {
								try {
									if (ae.closest && ae.closest("[data-dsh-prompt-modal]")) return "";
								} catch (e) {}
								return ae.value || "";
							}
						}
					} catch (e) {}
					return "";
				};
				const push = () => {
					try {
						setSmartInput({
							sessionId: props.sessionId,
							draft: readDraft(),
							useInput: props.useInput,
							actions: props.inputActions
						});
					} catch (e) {}
				};
				push();
				let unsub = null;
				try {
					const u = props.useInput;
					if (u && typeof u.subscribe === "function") unsub = u.subscribe(push);
				} catch (e) {}
				const timer = setInterval(push, 300);
				return () => {
					try {
						if (typeof unsub === "function") unsub();
					} catch (e) {}
					try {
						clearInterval(timer);
					} catch (e) {}
				};
			}, [
				props.sessionId,
				props.useInput,
				props.inputActions
			]);
			react.useEffect(() => {
				const sid = props.sessionId;
				return () => {
					if (sid !== void 0) setSmartInput({ draft: "" });
				};
			}, [props.sessionId]);
			if (!open) return null;
			return h(PanelPortal, null, h(TemplateBrowser, {
				compact: true,
				useInput: props.useInput,
				inputActions: props.inputActions
			}));
		}
		/**
		* 注入染色描边样式段（CSS 本体在 `template-browser.ts` 的 `INK_TINT_CSS`，与钩子属性同一处；这里只做注入机制）。
		* 三条「不这么写」的原因：① 内联 textShadow 优先级高于注入规则，会把方案焊死；② `@media
		* (prefers-color-scheme)` 在纯浏览器里反映的是 OS 而不是手动选的主题（桌面端被 nativeTheme 同步、
		* 浏览器端不会）⇒ 一律用令牌；③ 不用 `-webkit-text-stroke`：外露环只有半像素、DPR 1.25 时实心环
		* 掉 77%，且不带 `paint-order` 会把字心填色吃光（研究 152 §1/§3/§4）。
		* 为什么注入点在这里而不是 template-browser.ts：`template-browser.ts:47-52` 记着「往该文件加 import 边会让既有回归脚本
		* 全部找不到模块」的代价（`./style-ownership` 是 10+ 张手抄表的共同依赖）；index.ts 没有回归脚本把它
		* 当手抄根，这条边零外溢。归属走 style-ownership 的共用注入缝（`data-plugin='dsh-prompt'` + 私有标记，
		* 幂等、同值不重写）；页面级只注一次，回收交给宿主样式账本，不随会话拆装。
		*/
		const INK_STYLE_MARKER = "ink-tint";
		function applyInkTintStyle() {
			try {
				const doc = styleDocument();
				if (!doc) return;
				applyOwnedStyle(doc, INK_STYLE_MARKER, INK_TINT_CSS);
			} catch (e) {}
		}
		/**
		* 取色浮层的交互反馈样式段（CSS 本体在 `template-browser.ts` 的 `INK_UI_CSS`）：可点控件的 hover / active /
		* focus 反馈，同样走归属缝注入（另一条私有标记，互不覆盖），页面级只注一次。
		*/
		const INK_UI_STYLE_MARKER = "ink-ui";
		function applyInkUiStyle() {
			try {
				const doc = styleDocument();
				if (!doc) return;
				applyOwnedStyle(doc, INK_UI_STYLE_MARKER, INK_UI_CSS);
			} catch (e) {}
		}
		/**
		* 小列表的交互反馈样式段（CSS 本体在 `template-browser.ts` 的 `BAR_UI_CSS`，#165 需求 1/3）：
		* 底栏/云/搜索/行内动作/图钉/屏蔽钮/关闭的 hover / active / focus 反馈，
		* 同样走归属缝注入（第三条私有标记，互不覆盖），页面级只注一次。
		*/
		const BAR_UI_STYLE_MARKER = "bar-ui";
		function applyBarUiStyle() {
			try {
				const doc = styleDocument();
				if (!doc) return;
				applyOwnedStyle(doc, BAR_UI_STYLE_MARKER, BAR_UI_CSS);
			} catch (e) {}
		}
		/**
		* 悬停提示 portal 的样式段 + 事件接管（CSS 本体在 `./hover-tip` 的 `HOVER_TIP_CSS`）：
		* 整面 title 原生提示 → 按钮上方单行 popover。同样走归属缝注入（第四条私有标记，
		* 互不覆盖），页面级只注/只装一次；监听挂在样式文档上，随页面走。
		*/
		const HOVER_TIP_STYLE_MARKER = "hover-tip";
		function applyHoverTipStyle() {
			try {
				const doc = styleDocument();
				if (!doc) return;
				applyOwnedStyle(doc, HOVER_TIP_STYLE_MARKER, HOVER_TIP_CSS);
				installHoverTip(doc);
			} catch (e) {}
		}
		function apply(ctx) {
			const log = startLog();
			log.reconcile().catch(() => void 0);
			log.log("app.boot", {
				hasReact: !!getReact(),
				lang: getLang(),
				entryCount: 8
			});
			ctx.effect(() => {
				let localeSvc = void 0;
				try {
					localeSvc = ctx.get ? ctx.get("locale") : void 0;
				} catch (e) {
					localeSvc = void 0;
				}
				let adapter = void 0;
				if (localeSvc && typeof localeSvc.getSnapshot === "function") adapter = {
					getActive: () => {
						try {
							return (localeSvc.getSnapshot() || {}).active || "";
						} catch (e) {
							return "";
						}
					},
					subscribe: (fn) => {
						try {
							return typeof localeSvc.subscribe === "function" ? localeSvc.subscribe(fn) : void 0;
						} catch (e) {
							return;
						}
					}
				};
				const uninstall = installLocaleService(adapter);
				return () => {
					uninstall();
				};
			}, "dsh-prompt: locale");
			ctx.effect(() => {
				ensureLoaded().catch(() => void 0);
			}, "dsh-prompt: store load");
			ctx.effect(() => {
				const sync = () => {
					try {
						setHoverTriggerEnabled(loadHoverTrigger());
					} catch (e) {}
				};
				sync();
				let off;
				try {
					off = subscribeStore(sync);
				} catch (e) {
					off = void 0;
				}
				return () => {
					try {
						if (typeof off === "function") off();
					} catch (e) {}
				};
			}, "dsh-prompt: trigger mode");
			ctx.effect(() => {
				ensureRemoteLoaded().then(() => {
					try {
						if (getRemotePrefs().enabled !== true) return;
						warmEnvOrientation(() => getSystemOrientation()).catch(() => void 0);
					} catch (e) {}
				}).catch(() => void 0);
			}, "dsh-prompt: remote load");
			ctx.effect(() => {
				const sync = () => {
					try {
						const p = getRemotePrefs();
						syncHostFont(p.enabled, p.size);
						syncRemoteRows(p.enabled, p.size);
						syncAssistantZoom(p.enabled, p.size);
					} catch (e) {}
				};
				try {
					sync();
				} catch (e) {}
				let off;
				try {
					off = subscribeRemote(sync);
				} catch (e) {
					off = void 0;
				}
				return () => {
					try {
						if (typeof off === "function") off();
					} catch (e) {}
					clearHostBridges();
				};
			}, "dsh-prompt: host font sync");
			armInputFocusTrack();
			applyInkTintStyle();
			applyInkUiStyle();
			applyBarUiStyle();
			applyHoverTipStyle();
			installDiag();
			ctx.effect(() => ctx.slots.inject("conversation.input.left", () => ctx.slots.register({
				name: "conversation.input.left",
				id: "dsh-prompt-entry",
				order: 10,
				label: () => "dsh-prompt"
			}, (props) => {
				const react = getReact();
				if (!react) return null;
				const h = react.createElement;
				const openState = react.useState(isPanelOpen());
				react.useEffect(() => onPanelOpen((v) => openState[1](v)), []);
				let sidebarCtl = void 0;
				let sidebarLeftCtl = void 0;
				let workspaceSessions = void 0;
				let workspaceList = void 0;
				let workspaceUI = void 0;
				try {
					sidebarCtl = ctx.get ? ctx.get("sidebarRight") : void 0;
				} catch (e) {
					sidebarCtl = void 0;
				}
				try {
					sidebarLeftCtl = ctx.get ? ctx.get("sidebarLeft") : void 0;
				} catch (e) {
					sidebarLeftCtl = void 0;
				}
				try {
					workspaceSessions = ctx.get ? ctx.get("sessions") : void 0;
				} catch (e) {
					workspaceSessions = void 0;
				}
				try {
					workspaceList = ctx.get ? ctx.get("workspaces") : void 0;
				} catch (e) {
					workspaceList = void 0;
				}
				try {
					workspaceUI = ctx.get ? ctx.get("uiWorkspace") : void 0;
				} catch (e) {
					workspaceUI = void 0;
				}
				return h(EntryButton, {
					open: openState[0],
					sidebarCtl,
					sidebarLeftCtl,
					workspaceSessions,
					workspaceList,
					workspaceUI,
					sessionId: props.sessionId
				});
			})), "dsh-prompt: entry");
			ctx.effect(() => ctx.slots.inject("conversation.input.overlay", () => ctx.slots.register({
				name: "conversation.input.overlay",
				id: "dsh-prompt-panel",
				order: 2,
				label: () => "dsh-prompt panel"
			}, PanelHost)), "dsh-prompt: panel");
			ctx.effect(() => ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "dsh-prompt-toolbox",
				priority: 10,
				order: 50,
				label: () => tr(getLang(), STR.sectionName)
			}, SettingsPage)), "dsh-prompt: settings");
			const SETTINGS_TRIGGER_LABEL_RE = /设置|Settings/i;
			const goSettings = (done) => {
				const finish = (ok, error) => {
					if (!ok) logEvent("remote.direct.open", {
						method: "dom",
						ok: false
					});
					if (done) try {
						done(ok, error);
					} catch (e) {}
				};
				try {
					if (typeof document === "undefined") {
						finish(false, "no-document");
						return;
					}
					const label = tr(getLang(), STR.sectionName);
					const isOwnChrome = (b) => {
						try {
							if (b.hasAttribute && b.hasAttribute("data-dsh-prompt-chrome")) return true;
							return !!(b.closest && b.closest("[data-dsh-prompt-bar]"));
						} catch (e) {
							return false;
						}
					};
					const allButtons = () => {
						try {
							return Array.prototype.slice.call(document.querySelectorAll("button")).filter((b) => !isOwnChrome(b));
						} catch (e) {
							return [];
						}
					};
					const clickCell = () => {
						try {
							const cell = allButtons().find((b) => (b.textContent || "").trim() === label);
							if (!cell) return false;
							cell.click();
							let tries = 0;
							const scroller = setInterval(() => {
								try {
									const el = document.querySelector("[data-dsh-prompt-remote-section]");
									if (el && typeof el.scrollIntoView === "function") {
										el.scrollIntoView({ block: "start" });
										clearInterval(scroller);
									} else if (++tries > 10) clearInterval(scroller);
								} catch (e) {
									clearInterval(scroller);
								}
							}, 200);
							return true;
						} catch (e) {}
						return false;
					};
					if (clickCell()) {
						finish(true);
						return;
					}
					const hostOpenSettings = () => {
						try {
							const sc = ctx.shortcuts;
							const reg = sc && sc.registry;
							if (!reg || typeof reg.invoke !== "function") return false;
							reg.invoke("settings.open", { modal: null });
							return true;
						} catch (e) {
							return false;
						}
					};
					const launcherAnchor = () => {
						try {
							const row = document.querySelector("[class*=\"triggerRow\"]");
							const btn = row ? row.querySelector("button[aria-haspopup]") || row.querySelector("button") : null;
							return btn && !isOwnChrome(btn) ? btn : null;
						} catch (e) {
							return null;
						}
					};
					const settingsMenuItem = () => {
						try {
							const items = Array.prototype.slice.call(document.querySelectorAll("button[role=\"menuitem\"]")).filter((b) => !isOwnChrome(b));
							return items.find((b) => SETTINGS_TRIGGER_LABEL_RE.test((b.textContent || "").trim())) || items.find((b) => !!b.getAttribute("aria-keyshortcuts")) || null;
						} catch (e) {
							return null;
						}
					};
					const named = (b) => {
						const hay = [
							b.getAttribute("aria-label"),
							b.getAttribute("title"),
							(b.textContent || "").trim()
						].filter((s) => !!s).join(" ");
						return SETTINGS_TRIGGER_LABEL_RE.test(hay);
					};
					const dialogTriggers = () => {
						try {
							return Array.prototype.slice.call(document.querySelectorAll("button[aria-haspopup=\"dialog\"]")).filter((b) => !isOwnChrome(b));
						} catch (e) {
							return [];
						}
					};
					const trig = dialogTriggers().find(named) || dialogTriggers().find((b) => /trigger/i.test(String(b.className || ""))) || dialogTriggers().find((b) => !!b.getAttribute("aria-keyshortcuts")) || allButtons().find(named);
					const commandSent = hostOpenSettings();
					const anchor = launcherAnchor();
					if (!commandSent && !anchor && !trig) {
						finish(false, "no-trigger");
						return;
					}
					const clickDomEntries = () => {
						if (anchor) try {
							anchor.click();
						} catch (e) {}
						if (trig) try {
							trig.click();
						} catch (e) {}
					};
					if (!commandSent) clickDomEntries();
					let n = 0;
					const tid = setInterval(() => {
						try {
							if (clickCell()) {
								clearInterval(tid);
								finish(true);
								return;
							}
							n += 1;
							const item = settingsMenuItem();
							if (item) try {
								item.click();
							} catch (e) {}
							if (n === 6) {
								hostOpenSettings();
								if (!item) clickDomEntries();
							}
							if (n > 18) {
								clearInterval(tid);
								finish(false, "timeout");
							}
						} catch (e) {
							try {
								clearInterval(tid);
							} catch (err) {}
							finish(false, "exception");
						}
					}, 200);
				} catch (e) {
					finish(false, "exception");
				}
			};
			setGoSettingsHandler(goSettings);
			try {
				globalThis.__dshPromptGoSettings = goSettings;
			} catch (e) {}
			if (ctx.inputTriggers && typeof ctx.inputTriggers.registerSource === "function") ctx.effect(() => ctx.inputTriggers.registerSource(buildPromptSource()), "dsh-prompt: /prompt source");
			ctx.effect(() => ctx.slots.inject("shell.overlay", () => ctx.slots.register({
				name: "shell.overlay",
				id: "dsh-prompt-smart",
				order: 200,
				label: () => "dsh-prompt smart"
			}, SmartCardHost)), "dsh-prompt: smart card");
		}
		/** 记一条日志事件（槽机制与 template-browser.ts/remote-mode.ts 同构：#149 起「设置→模板管理」失败不再静默）。 */
		function logEvent(event, fields) {
			try {
				const log = globalThis.__dshPromptLog;
				if (log && typeof log.log === "function") log.log(event, fields);
			} catch (e) {}
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map