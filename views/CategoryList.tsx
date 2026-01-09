
import React, { useState } from 'react';
import { CharityProject } from '../types';

interface CategoryListProps {
  category: string;
  onBack: () => void;
  onNavigateDetail: (id: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ category, onBack, onNavigateDetail }) => {
  const [activeTab, setActiveTab] = useState(0);

  // 模拟各个分类的数据
  const renderContent = () => {
    switch (category) {
      case '慈善项目':
        return renderCharityProjects();
      case '社区慈善基金':
        return renderCommunityFund();
      case '专项基金':
        return renderSpecialFund();
      case '慈善超市':
        return renderCharitySupermarket();
      default:
        return <div className="p-10 text-center text-gray-400">正在建设中...</div>;
    }
  };

  // --- 1. 慈善项目页面布局 ---
  const renderCharityProjects = () => {
    const tabs = ['全部', '综合', '助老', '扶贫', '助农', '教育'];
    const list = [
      { id: '101', title: '市南慈善协会综合募捐项目', summary: '非定向公益捐助，助力各类困难群体所需', donors: 520, img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8678897ec6bb4f02846aa38510be0daf_mergeImage.png' },
      { id: '102', title: '保护海洋你我同行', summary: '回收海洋垃圾，清理浒苔，守护300万平方公里蓝色家园！', donors: 187, img: 'https://picsum.photos/seed/ocean/200/120' },
      { id: '103', title: '无声合唱团关爱计划', summary: '关爱特殊儿童群体', donors: 69, img: 'https://picsum.photos/seed/sing/200/120' },
    ];

    return (
      <div className="flex flex-col animate-fade-in">
        {/* 严正声明 Banner */}
        <div className="mx-4 mt-2 bg-gradient-to-r from-red-600 to-red-500 rounded-xl p-4 relative overflow-hidden text-white shadow-sm">
          <div className="text-center relative z-10">
            <span className="bg-white/20 px-3 py-0.5 rounded-full text-[10px] mb-1 inline-block">· 严正声明 ·</span>
            <p className="text-[11px] font-bold leading-tight">捐款返现是诈骗信息，本机构从未推出过任何形式的此类活动</p>
          </div>
          <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
            <i className="fa-solid fa-building text-6xl"></i>
          </div>
        </div>

        {/* Tab 导航 */}
        <div className="flex space-x-6 px-4 py-4 overflow-x-auto no-scrollbar whitespace-nowrap bg-white sticky top-[60px] z-10">
          {tabs.map((tab, i) => (
            <div 
              key={tab} 
              onClick={() => setActiveTab(i)}
              className={`text-[14px] relative pb-1 transition-all ${activeTab === i ? 'text-[#222] font-bold' : 'text-[#737373]'}`}
            >
              {tab}
              {activeTab === i && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-red-500 rounded-full"></div>}
            </div>
          ))}
        </div>

        {/* 顶部推荐大卡片 */}
        <div className="mx-4 mt-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 mb-4">
          <img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a20473a2814041038fe648f390d4efcd_mergeImage.png" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-[16px] font-bold text-[#222]">乐善市南——爱上你，疗愈我</h3>
            <p className="text-[12px] text-[#737373] mt-1 mb-4">汇聚微光，照亮需要帮助的邻里，让善意成为习惯。</p>
            <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3 mb-4 border border-gray-100/50">
              <div className="text-center flex-1">
                <p className="text-[14px] font-bold">100000.00</p>
                <p className="text-[10px] text-gray-400">目标金额(元)</p>
              </div>
              <div className="text-center flex-1 border-x border-gray-100">
                <p className="text-[14px] font-bold">28355.83</p>
                <p className="text-[10px] text-gray-400">已筹集金额(元)</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-[14px] font-bold">2739</p>
                <p className="text-[10px] text-gray-400">捐赠人次(次)</p>
              </div>
            </div>
            {/* 优化后的内嵌式按钮 */}
            <button 
              onClick={() => onNavigateDetail('1')}
              className="w-full bg-[#E40114] text-white font-bold py-3.5 rounded-xl active:brightness-90 transition-all"
            >
              捐一笔
            </button>
          </div>
        </div>

        {/* 普通项目列表 */}
        <div className="px-4 space-y-3 pb-10">
          {list.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-3 flex space-x-3 shadow-sm active:bg-gray-50 transition-colors border border-gray-50/50" onClick={() => onNavigateDetail(item.id)}>
              <img src={item.img} className="w-[120px] h-[80px] rounded-xl object-cover" />
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <h4 className="text-[14px] font-bold text-[#222] line-clamp-1">{item.title}</h4>
                  <p className="text-[11px] text-[#737373] mt-1 line-clamp-1">{item.summary}</p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[11px] text-[#737373]">{item.donors}捐赠人次</span>
                  <button className="bg-[#F2F4F5] px-4 py-1.5 rounded-lg text-[12px] text-[#555] font-medium active:bg-gray-200">查看</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- 2. 社区慈善基金页面布局 ---
  const renderCommunityFund = () => {
    const streets = ['珠海路街道', '香港中路街道', '八大峡街道', '云南路街道'];
    return (
      <div className="animate-fade-in">
        {/* 背景 Banner */}
        <div 
          className="h-[200px] bg-cover bg-center flex flex-col items-center justify-center text-white"
          style={{ backgroundImage: 'linear-gradient(rgba(255,230,180,0.8), rgba(255,230,180,0.8)), url(https://lanhu-oss-proxy.lanhuapp.com/SketchPng728d8edde56a01e735d2157065fac85b69dd0fcbb58fa6717b85d9bcc52f6a8c)' }}
        >
          <span className="text-[12px] text-[#7C4D12] mb-1">青岛市市南慈善协会</span>
          <h2 className="text-[24px] font-bold text-[#7C4D12]" style={{ fontFamily: 'DingTalk-JinBuTi' }}>社区慈善基金</h2>
        </div>

        {/* 介绍文字 */}
        <div className="mx-4 -mt-10 bg-white/80 backdrop-blur rounded-2xl p-5 shadow-sm border border-white">
          <p className="text-[12px] text-[#666] leading-relaxed text-justify">
            市南慈善协会托管的社区慈善基金是指由市南慈善协会根据协会与基金发起人签订协议设立并进行管理的，用于特定社区内公益事业和慈善事业发展的专项基金。该基金主要应用于社区内扶贫、济困、助老、救孤以及教育、文化、卫生、环保等符合《中华人民共和国慈善法》规定的公益活动、社区治理等相关服务项目。
          </p>
        </div>

        {/* 搜索与街道 Tab */}
        <div className="px-4 mt-6">
          <div className="flex items-center justify-between mb-4">
             <h3 className="font-bold text-[16px]">社区慈善基金</h3>
             <div className="bg-[#F2F4F5] flex-1 ml-4 flex items-center px-4 py-2 rounded-full">
               <i className="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i>
               <input className="bg-transparent border-none outline-none ml-2 text-xs flex-1" placeholder="输入街道社区名称搜索" />
             </div>
          </div>
          <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-2">
            {streets.map((s, i) => (
              <div 
                key={s} 
                onClick={() => setActiveTab(i)}
                className={`text-[14px] whitespace-nowrap relative transition-all ${activeTab === i ? 'text-red-500 font-bold' : 'text-gray-400'}`}
              >
                {s}
                {activeTab === i && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-red-500 rounded-full"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* 基金列表 */}
        <div className="px-4 mt-4 space-y-4 pb-10">
          {[1, 2, 3].map(item => (
            <div key={item} className="bg-white rounded-2xl p-4 flex shadow-sm active:bg-gray-50 transition-colors" onClick={() => onNavigateDetail('fund-'+item)}>
              <div className="w-[120px] h-[90px] rounded-xl bg-gradient-to-br from-red-500 to-red-400 flex flex-col items-center justify-center text-white p-2 text-center shrink-0 shadow-sm">
                <span className="text-[10px] opacity-80 border-b border-white/30 pb-1 mb-1">珠海路街道</span>
                <span className="text-[14px] font-bold leading-tight">辛家庄社区慈善基金</span>
              </div>
              <div className="ml-4 flex-1 flex flex-col justify-between">
                <h4 className="text-[14px] font-bold text-[#222]">珠海路街道辛家庄社区慈善基金</h4>
                <div>
                  <p className="text-[12px] text-gray-400">已筹 <span className="text-red-500 font-bold">39200.87元</span></p>
                  <div className="flex justify-between items-end mt-1">
                    <span className="text-[11px] text-gray-400">520捐赠人次</span>
                    <button className="bg-[#F2F4F5] px-4 py-1.5 rounded-lg text-[12px] text-[#555] font-medium active:bg-gray-200">查看</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- 3. 专项基金页面布局 ---
  const renderSpecialFund = () => {
    const list = [
      { name: '文艺发展专项基金', color: 'from-blue-600 to-blue-400' },
      { name: '体育发展专项基金', color: 'from-blue-500 to-cyan-400' },
      { name: '音乐发展专项基金', color: 'from-indigo-500 to-blue-400' },
    ];
    return (
      <div className="px-4 py-4 space-y-4 pb-10 animate-fade-in">
        {list.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 flex shadow-sm active:bg-gray-50 transition-colors border border-gray-50/50" onClick={() => onNavigateDetail('special-'+idx)}>
            <div className={`w-[120px] h-[80px] rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shrink-0 shadow-sm`}>
              <div className="text-center">
                <p className="text-[16px] font-bold tracking-widest italic" style={{ fontFamily: 'DingTalk-JinBuTi' }}>专项基金</p>
              </div>
            </div>
            <div className="ml-4 flex-1 flex flex-col justify-between">
              <h4 className="text-[14px] font-bold text-[#222]">{item.name}</h4>
              <div>
                <p className="text-[12px] text-gray-400">已筹 <span className="text-red-500 font-bold">39200.87元</span></p>
                <div className="flex justify-between items-end mt-1">
                  <span className="text-[11px] text-gray-400">520捐赠人次</span>
                  <button className="bg-[#F2F4F5] px-4 py-1.5 rounded-lg text-[12px] text-[#555] font-medium active:bg-gray-200">查看</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // --- 4. 慈善超市页面布局 ---
  const renderCharitySupermarket = () => {
    const list = [
      { name: '宁夏路爱心小屋慈善超市' },
      { name: '澳门路小学爱心超市' }
    ];
    return (
      <div className="px-4 py-4 space-y-4 pb-10 animate-fade-in">
        {list.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 flex shadow-sm active:bg-gray-50 transition-colors border border-gray-50/50" onClick={() => onNavigateDetail('market-'+idx)}>
            <div className="w-[120px] h-[86px] rounded-xl bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 relative overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                 <i className="fa-solid fa-heart text-white text-7xl"></i>
              </div>
              <div className="text-white text-center z-10">
                <p className="text-[16px] font-bold" style={{ fontFamily: 'DingTalk-JinBuTi' }}>慈善</p>
                <p className="text-[16px] font-bold" style={{ fontFamily: 'DingTalk-JinBuTi' }}>超市</p>
              </div>
            </div>
            <div className="ml-4 flex-1 flex flex-col justify-between">
              <h4 className="text-[14px] font-bold text-[#222]">{item.name}</h4>
              <div>
                <p className="text-[12px] text-gray-400">累计筹款 <span className="text-red-500 font-bold">39200.87元</span></p>
                <div className="flex justify-between items-end mt-1">
                  <span className="text-[11px] text-gray-400">520捐赠人次</span>
                  <button className="bg-[#F2F4F5] px-4 py-1.5 rounded-lg text-[12px] text-[#555] font-medium active:bg-gray-200">查看</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#F4F3F7] min-h-screen">
      {/* 顶部通用自定义导航栏 */}
      <div className="sticky top-0 bg-white z-[100] px-4 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center">
          <button onClick={onBack} className="w-8 h-8 flex items-center justify-start text-gray-800 active:opacity-50 transition-opacity">
            <i className="fa-solid fa-chevron-left text-lg"></i>
          </button>
        </div>
        <h1 className="text-[17px] font-bold text-[#222]">{category}</h1>
        {/* 模拟微信胶囊按钮 */}
        <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 flex space-x-4 items-center scale-90">
          <i className="fa-solid fa-ellipsis text-gray-800 text-sm"></i>
          <div className="w-[1px] h-3 bg-gray-200"></div>
          <i className="fa-regular fa-circle-dot text-gray-800 text-sm"></i>
        </div>
      </div>

      {/* 页面主内容 */}
      <div className="min-h-full">
        {renderContent()}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default CategoryList;
