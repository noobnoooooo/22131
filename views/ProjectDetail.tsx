
import React, { useState } from 'react';
import DonationModal from '../components/DonationModal';

interface ProjectDetailProps {
  id: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showDonation, setShowDonation] = useState(false);
  const [isAnonymouse, setIsAnonymouse] = useState(false);

  const tabs = ['项目详情', '捐款明细', '项目进展', '募捐资质'];

  return (
    <div className="bg-white min-h-full flex flex-col relative">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 max-w-md mx-auto z-40 p-4 flex justify-between items-center pointer-events-none">
        <button onClick={onBack} className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-white pointer-events-auto">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <span className="text-white font-bold text-lg drop-shadow-md pointer-events-none">项目详情</span>
        <div className="w-10"></div>
      </div>

      {/* Main Image Banner */}
      <div className="relative h-64 overflow-hidden">
        <img src="https://picsum.photos/seed/detail/800/600" alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white to-transparent">
          <div className="flex flex-col space-y-2">
             <div className="flex items-center space-x-2 bg-black/40 text-white rounded-full px-3 py-1 text-[10px] w-fit">
                <img src="https://picsum.photos/seed/u1/40/40" className="w-4 h-4 rounded-full" />
                <span>簇拥烈日的化捐了10元</span>
             </div>
             <div className="flex items-center space-x-2 bg-black/40 text-white rounded-full px-3 py-1 text-[10px] w-fit">
                <img src="https://picsum.photos/seed/u2/40/40" className="w-4 h-4 rounded-full" />
                <span>我捐了50元</span>
             </div>
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="px-4 pb-20">
        <h1 className="text-xl font-bold mt-4 mb-2">宁夏路爱心小屋慈善超市</h1>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">为宁夏路爱心小屋慈善超市募捐运营经费，帮助附近的困难群众获得基本的生活保障物资，缓解经济压力</p>
        
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
          <div className="text-center">
            <p className="font-bold text-lg">500000.00</p>
            <p className="text-xs text-gray-400">已募集金额(元)</p>
          </div>
          <div className="text-center border-x">
            <p className="font-bold text-lg">100500.00</p>
            <p className="text-xs text-gray-400">支出金额(元)</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">17892</p>
            <p className="text-xs text-gray-400">捐赠人次</p>
          </div>
        </div>

        {/* Tab Header */}
        <div className="flex justify-between border-b mb-4">
          {tabs.map((tab, i) => (
            <button 
              key={i} 
              onClick={() => setActiveTab(i)}
              className={`pb-2 text-sm relative px-2 transition-all ${activeTab === i ? 'font-bold text-gray-800' : 'text-gray-400'}`}
            >
              {tab}
              {activeTab === i && <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-full mx-2"></div>}
            </button>
          ))}
        </div>

        {/* Tab Panel Content */}
        <div className="text-sm text-gray-600 leading-7">
          {activeTab === 0 && (
            <div className="space-y-4">
              <p>为宁夏路爱心小屋慈善超市募捐运营经费，帮助附近的困难群众获得基本的生活保障物资，缓解经济压力，提高生活质量。</p>
              <img src="https://picsum.photos/seed/detail2/800/400" className="w-full rounded-xl" />
              <p>慈善超市作为社区互助的重要载体，旨在通过汇聚社会爱心资源，为低保家庭、残疾人等特困群体提供精准帮扶。</p>
            </div>
          )}
          {activeTab === 1 && (
             <div className="space-y-4">
               {[1,2,3,4].map(item => (
                 <div key={item} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-3">
                      <img src={`https://picsum.photos/seed/donor${item}/40/40`} className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="font-bold text-gray-800">爱心用户</p>
                        <p className="text-[10px] text-gray-400">2024-12-30 10:22</p>
                      </div>
                    </div>
                    <span className="text-red-500 font-bold">捐赠 {item*10} 元</span>
                 </div>
               ))}
             </div>
          )}
          {activeTab > 1 && <div className="py-10 text-center text-gray-300">暂无更多信息展示</div>}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t p-4 flex items-center space-x-4 safe-bottom">
        <button className="flex flex-col items-center text-gray-400">
          <i className="fa-solid fa-arrow-up-from-bracket text-lg"></i>
          <span className="text-[10px]">分享</span>
        </button>
        <button 
          onClick={() => setShowDonation(true)}
          className="flex-1 bg-red-500 text-white font-bold py-3 rounded-xl active:scale-95 transition-transform"
        >
          捐一笔
        </button>
      </div>

      {/* Donation Modal */}
      {showDonation && (
        <DonationModal 
          onClose={() => setShowDonation(false)} 
          onConfirm={(amount) => {
             alert(`模拟支付成功：${amount}元`);
             setShowDonation(false);
          }}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
