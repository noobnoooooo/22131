
import React from 'react';

const LogicAnalysis: React.FC<{onBack: () => void}> = ({onBack}) => {
  return (
    <div className="bg-white min-h-full p-6 text-gray-800">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 text-gray-400"><i className="fa-solid fa-arrow-left"></i></button>
        <h1 className="text-xl font-bold">uni-app 业务逻辑与组件化方案</h1>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-red-600 border-l-4 border-red-600 pl-3 mb-4">一、 核心业务逻辑梳理</h2>
        <div className="space-y-4 text-sm leading-relaxed">
          <div className="bg-red-50 p-4 rounded-xl">
            <p className="font-bold mb-2">1. 捐赠全链路流程：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><b>项目发现：</b>通过分类导航（社区基金、专项基金、慈善超市）进入列表，筛选目标项目。</li>
              <li><b>信息透明：</b>项目详情页展示“筹款进展”、“执行预算”、“捐款明细”和“财务披露”，增强公信力。</li>
              <li><b>快捷捐赠：</b>支持固定金额（10/20/50/100）+ 自定义金额；支持匿名捐赠。</li>
              <li><b>获得反馈：</b>捐赠成功后自动生成电子“捐赠证书”并支持保存至手机。</li>
              <li><b>后续服务：</b>用户可在“我的-我捐赠的项目”中申请电子发票，并在“公益秀”看到动态。</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="font-bold mb-2">2. 社交与激励逻辑：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><b>实时轮播：</b>详情页顶部滚动展示最新捐赠动态（跑马灯效果）。</li>
              <li><b>公益秀广场：</b>Timeline形式展示全平台爱心记录，支持点击进入项目页。</li>
              <li><b>慈善榜样：</b>通过内容专题报道，树立社区公益典型。</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-red-600 border-l-4 border-red-600 pl-3 mb-4">二、 组件划分 (uni-app 标准)</h2>
        <div className="grid grid-cols-1 gap-4 text-xs">
          <div className="border border-dashed border-gray-300 p-3 rounded-lg">
            <p className="font-bold text-gray-500 mb-2 uppercase">通用 UI 组件 (Common)</p>
            <p><b>ls-navbar:</b> 自定义导航栏（支持沉浸式、返回、标题居中）</p>
            <p><b>ls-tabbar:</b> 底部三栏导航（首页、公益秀、我的）</p>
            <p><b>ls-auth-popup:</b> 微信昵称头像授权弹窗</p>
          </div>
          <div className="border border-dashed border-gray-300 p-3 rounded-lg">
            <p className="font-bold text-gray-500 mb-2 uppercase">业务逻辑组件 (Business)</p>
            <p><b>project-card:</b> 通用项目卡片（包含图片、统计数据格、捐赠按钮）</p>
            <p><b>stat-grid:</b> 统计数据网格（已筹、支出、人次）</p>
            <p><b>donation-modal:</b> 捐赠选择弹窗（含自定义金额输入逻辑）</p>
            <p><b>certificate-card:</b> 捐赠证书模板（用于Canvas生成/图片展示）</p>
            <p><b>timeline-record:</b> 公益秀时间轴记录项</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-red-600 border-l-4 border-red-600 pl-3 mb-4">三、 组件化开发 Prompt (AI 助手用)</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto whitespace-pre-wrap">
{`# Role: uni-app 开发专家
# Task: 开发“乐善市南”捐赠弹窗组件

1. 请使用 Vue3 + TypeScript + SCSS 编写。
2. 组件名: DonationModal.vue
3. 功能要求:
   - props: projectId (String)
   - emit: 'confirm'(amount), 'close'
   - UI: 
     - 弹出层动画从底部升起。
     - 顶部显示“本次将捐出 X 元”。
     - 中间 2x2 网格显示 10, 20, 50, 100 元快捷选项。
     - 下方自定义金额 input 绑定。
     - 底部包含勾选框《用户捐赠协议》、匿名捐赠 Switch。
     - 大红色主按钮“捐一笔”，需校验协议勾选状态。
4. 样式规范: 
   - 使用 rpx 单位适配。
   - 主色调 #e53e31。
   - 按钮圆角 16rpx，带 active 缩放效果。`}
        </div>
      </section>

      <div className="h-10"></div>
    </div>
  );
};

export default LogicAnalysis;
