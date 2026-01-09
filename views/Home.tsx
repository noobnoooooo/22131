
import React, { useState } from 'react';
import { CharityProject } from '../types';

interface HomeProps {
  onNavigateDetail: (id: string) => void;
  onNavigateCategory: (category: string) => void;
  onNavigateArticle: (id: string) => void;
  onShowLogic: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateDetail, onNavigateCategory, onNavigateArticle, onShowLogic }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['政策解读', '公益课堂', '品牌项目', '慈善榜样'];

  const categories = [
    { name: '慈善项目', icon: 'https://lanhu-oss-proxy.lanhuapp.com/SketchPngf4a7819da9dd979fa3bb74561f63ebc2e2ef0f3b8e399cff87d2d732b92ca8e4' },
    { name: '社区基金', icon: 'https://lanhu-oss-proxy.lanhuapp.com/SketchPngaff3293f20a403e528561cd88d8d5acf706a9a8771098cc8014b058a635ff97c' },
    { name: '专项基金', icon: 'https://lanhu-oss-proxy.lanhuapp.com/SketchPng0d7c8928f0fe22e694c462bf1b9abb9b47df55911da6abe7d65eef26f39d8c63' },
    { name: '慈善超市', icon: 'https://lanhu-oss-proxy.lanhuapp.com/SketchPng395bc08f8b376cbacdd9f51e7f6151f5d2a59fe635e5f33b3d72faa4b7524f42' },
  ];

  const featured: CharityProject = {
    id: '1',
    title: '乐善市南——爱上你，疗愈我',
    summary: '汇聚微光，照亮需要帮助的邻里，让善意成为习惯。',
    image: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a20473a2814041038fe648f390d4efcd_mergeImage.png',
    goalAmount: 100000.00,
    raisedAmount: 28355.83,
    donorsCount: 2739,
    category: '全部',
    status: 'ongoing'
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // 政策解读
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {[1, 2].map((item, idx) => (
              <div key={item} className="group flex flex-col cursor-pointer" onClick={() => onNavigateArticle(`policy-${item}`)}>
                <div className="flex space-x-4">
                  <div 
                    className="w-28 h-20 rounded-2xl bg-cover bg-center shrink-0 border border-gray-100 shadow-sm transition-transform group-active:scale-95"
                    style={{ backgroundImage: `url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/${idx === 0 ? '8678897ec6bb4f02846aa38510be0daf_mergeImage.png' : '1066da6c73204b5cac12d581ca2c2abc_mergeImage.png'})` }}
                  />
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <h4 className="text-[14px] font-bold text-[#222] leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                      {idx === 0 ? '2025年青岛市刚性支出困难家庭认定最新实施细则' : '关于印发《青岛市刚性支出困难家庭认定实施细则》的通知'}
                    </h4>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-gray-400">2025-07-29</span>
                      <span className="text-red-500 text-[11px] font-medium flex items-center">
                        详情 <i className="fa-solid fa-chevron-right ml-1 text-[8px]"></i>
                      </span>
                    </div>
                  </div>
                </div>
                {idx === 0 && <div className="w-full h-px bg-gray-50 mt-4"></div>}
              </div>
            ))}
          </div>
        );
      case 1: // 公益课堂
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {[1, 2, 3].map((item, idx) => (
              <div key={item} className="flex flex-col cursor-pointer group" onClick={() => onNavigateArticle(`classroom-${item}`)}>
                <div className="flex space-x-4">
                  <div className="w-28 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 shrink-0 relative flex items-center justify-center overflow-hidden border border-white/20 shadow-sm transition-transform group-active:scale-95">
                    <span className="text-white/30 text-[16px] font-bold italic" style={{ fontFamily: 'DingTalk-JinBuTi' }}>公益课堂</span>
                    {idx > 1 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                        <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center border border-white/50">
                          <i className="fa-solid fa-play text-white text-xs ml-0.5"></i>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <h4 className="text-[14px] font-bold text-[#222] leading-snug line-clamp-2">
                      著名律师徐强详解《慈善法》——{idx === 0 ? '图文' : idx === 1 ? '文档' : '视频'}
                    </h4>
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] text-gray-400">2025-07-29</p>
                      <button className="text-red-500 text-[11px] font-medium">查看</button>
                    </div>
                  </div>
                </div>
                {idx < 2 && <div className="w-full h-px bg-gray-50 mt-4"></div>}
              </div>
            ))}
          </div>
        );
      case 2: // 品牌项目
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             {[1, 2, 3].map((item, idx) => (
              <div key={item} className="flex flex-col cursor-pointer group" onClick={() => onNavigateArticle(`brand-${item}`)}>
                <div className="flex space-x-4">
                  <img 
                    src={`https://picsum.photos/seed/brand${item}/200/120`}
                    className="w-28 h-20 rounded-2xl shrink-0 object-cover border border-gray-100 shadow-sm transition-transform group-active:scale-95"
                  />
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <h4 className="text-[14px] font-bold text-[#222] leading-snug line-clamp-2">
                      “鸽子树守护花开”儿童关爱保护项目
                    </h4>
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] text-gray-400">2025-07-29</p>
                      <button className="text-red-500 text-[11px] font-medium">了解更多</button>
                    </div>
                  </div>
                </div>
                {idx < 2 && <div className="w-full h-px bg-gray-50 mt-4"></div>}
              </div>
            ))}
          </div>
        );
      case 3: // 慈善榜样
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             {[1, 2].map((item, idx) => (
              <div key={item} className="flex flex-col cursor-pointer group" onClick={() => onNavigateArticle(`role-${item}`)}>
                <div className="flex space-x-4">
                  <div className="w-28 h-20 rounded-2xl bg-gray-100 shrink-0 overflow-hidden border border-gray-100 shadow-sm transition-transform group-active:scale-95">
                     <img src={`https://picsum.photos/seed/role${item}/200/120`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <h4 className="text-[14px] font-bold text-[#222] leading-snug line-clamp-2">
                      社区慈善先锋：{idx === 0 ? '张大妈十年的慈善路' : '李先生的企业公益实践'}
                    </h4>
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] text-gray-400">2025-08-01</p>
                      <button className="text-red-500 text-[11px] font-medium">致敬榜样</button>
                    </div>
                  </div>
                </div>
                {idx === 0 && <div className="w-full h-px bg-gray-50 mt-4"></div>}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F8F9FB] min-h-screen relative overflow-x-hidden">
      {/* 顶部模拟状态栏 */}
      <div className="bg-white flex justify-between items-center px-6 py-3 sticky top-0 z-[70] backdrop-blur-md bg-white/90">
        <span className="text-[14px] font-bold text-gray-800">9:41</span>
        <div className="flex items-center space-x-2">
           <i className="fa-solid fa-signal text-[12px] text-gray-700"></i>
           <i className="fa-solid fa-wifi text-[12px] text-gray-700"></i>
           <i className="fa-solid fa-battery-full text-[14px] text-gray-700"></i>
        </div>
      </div>

      {/* 微信风格 Header */}
      <div className="bg-white px-4 pb-3 pt-1 flex items-center justify-between shadow-sm sticky top-[42px] z-[60] backdrop-blur-md bg-white/90">
        <div className="flex items-center space-x-2 transition-transform active:scale-95">
           <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-100">
             <i className="fa-solid fa-heart text-white text-[12px]"></i>
           </div>
           <span className="text-[18px] font-extrabold text-[#222] tracking-tight">乐善市南</span>
        </div>
        <div className="bg-[#F2F2F2] rounded-full px-3 py-1.5 flex space-x-4 items-center border border-gray-100">
          <i className="fa-solid fa-ellipsis text-gray-700 text-[14px]"></i>
          <div className="w-px h-3.5 bg-gray-300"></div>
          <i className="fa-regular fa-circle-dot text-gray-700 text-[14px]"></i>
        </div>
      </div>

      {/* Banner 容器 */}
      <div 
        className="w-full h-[24rem] bg-no-repeat bg-cover relative pt-6 px-4"
        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 60%, #F8F9FB 100%), url(https://lanhu-oss-proxy.lanhuapp.com/SketchPngb83a9a8b0f93ce3631c1120276ff3a716d7e46348f2110ff03e769f49729e17d)' }}
      >
        {/* 标语 */}
        <div className="mt-4 animate-in fade-in slide-in-from-left duration-700">
          <h1 className="text-[22px] text-[#7F002A] font-bold leading-tight" style={{ fontFamily: 'DingTalk-JinBuTi' }}>
            让每一份善意<br/>都轻松抵达～
          </h1>
        </div>

        {/* 金刚区导航 */}
        <div className="flex justify-between mt-8 w-full max-md mx-auto px-1">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center w-[4.5rem] active:scale-90 transition-all cursor-pointer group"
              onClick={() => onNavigateCategory(cat.name)}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-2 group-hover:shadow-xl transition-shadow border border-white">
                <img src={cat.icon} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-[12px] text-gray-700 font-medium">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* 数据统计看板 */}
        <div className="absolute left-4 right-4 -bottom-10 bg-white/80 backdrop-blur-xl rounded-[24px] shadow-xl shadow-gray-200/50 flex flex-col pt-5 pb-5 border border-white px-2">
          <div className="flex items-center justify-center mb-4">
            <span className="text-[12px] text-gray-500 mr-1.5">累计募集爱心善款</span>
            <span className="text-[20px] font-black text-[#E40114] font-mono">68,013,705</span>
            <span className="text-[12px] text-[#E40114] font-bold ml-1">元</span>
          </div>
          <div className="w-[90%] h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent self-center"></div>
          <div className="flex flex-1 items-center justify-around mt-4">
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-baseline">
                <span className="text-[18px] font-black text-gray-800">1.2</span>
                <span className="text-[11px] font-bold text-gray-500 ml-0.5">万+</span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">捐赠人次</p>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-[18px] font-black text-gray-800">396</span>
              <p className="text-[11px] text-gray-400 font-medium">公益项目</p>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-[18px] font-black text-gray-800">120</span>
              <p className="text-[11px] text-gray-400 font-medium">爱心企业</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4">
        {/* 精选项目标题 */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-5 bg-red-500 rounded-full"></div>
            <span className="text-[18px] font-black text-gray-800">热门公益项目</span>
          </div>
          <div className="flex items-center text-gray-400 text-[12px] active:text-red-500 cursor-pointer" onClick={() => onNavigateCategory('慈善项目')}>
            <span>全部项目</span>
            <i className="fa-solid fa-chevron-right ml-1 text-[8px]"></i>
          </div>
        </div>

        {/* 特色项目卡片 - 按钮内嵌设计 */}
        <div 
          className="bg-white rounded-[28px] overflow-hidden shadow-md shadow-gray-200/30 relative active:scale-[0.99] transition-transform duration-300 border border-gray-50"
          onClick={() => onNavigateDetail(featured.id)}
        >
          <div className="relative h-[13rem]">
            <img src={featured.image} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-medium border border-white/20">
              进行中
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-[17px] font-black text-gray-800 leading-snug">{featured.title}</h3>
            <p className="text-[12px] text-gray-400 mt-2 mb-4 leading-relaxed line-clamp-1">{featured.summary}</p>
            
            {/* 统计数据展示 */}
            <div className="bg-[#F8F9FA] rounded-2xl p-4 flex justify-between items-center mb-4 border border-gray-100/50">
              <div className="flex flex-col items-center flex-1">
                <span className="text-[15px] font-black text-gray-800">10.0</span>
                <span className="text-[10px] text-gray-400 mt-0.5">目标(万)</span>
              </div>
              <div className="w-px h-6 bg-gray-200/50"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-[15px] font-black text-red-500">2.83</span>
                <span className="text-[10px] text-gray-400 mt-0.5">已筹(万)</span>
              </div>
              <div className="w-px h-6 bg-gray-200/50"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-[15px] font-black text-gray-800">2739</span>
                <span className="text-[10px] text-gray-400 mt-0.5">人次</span>
              </div>
            </div>

            {/* 内嵌式按钮：去除了外扩阴影，改用扁平化且色彩柔和的设计 */}
            <button className="w-full bg-[#E40114] text-white font-bold py-3.5 rounded-2xl active:brightness-90 transition-all text-[15px]">
              支持该项目
            </button>
          </div>
        </div>

        {/* 资讯选项卡部分 */}
        <div className="mt-10">
          <div className="flex space-x-1 mb-5 bg-white p-1 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto no-scrollbar">
            {tabs.map((tab, i) => (
              <div 
                key={i} 
                onClick={() => setActiveTab(i)}
                className={`flex-1 flex items-center justify-center rounded-xl text-[13px] font-bold py-2.5 transition-all whitespace-nowrap px-4 cursor-pointer ${activeTab === i ? 'bg-red-500 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[28px] p-5 shadow-md shadow-gray-200/30 mb-10 border border-gray-50">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* 页脚品牌 */}
      <div className="text-center pt-8 pb-32">
         <div className="flex items-center justify-center space-x-2 opacity-40 grayscale mb-2">
            <div className="w-5 h-5 bg-red-600 rounded-lg flex items-center justify-center text-white text-[8px] font-bold">乐善</div>
            <span className="text-[11px] font-black text-gray-800 tracking-wider">乐善市南慈善平台</span>
         </div>
         <p className="text-[10px] text-gray-300 font-medium">青岛市市南慈善协会 官方版权所有</p>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;
