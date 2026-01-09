
import React from 'react';

interface UserProfileProps {
  onNavigateDetail: (id: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onNavigateDetail }) => {
  return (
    <div className="bg-gray-50 min-h-full">
      {/* User Header */}
      <div className="h-48 bg-gradient-to-b from-pink-50 to-gray-50 flex items-center px-6 pt-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
             <img src="https://picsum.photos/seed/me/120/120" className="w-16 h-16 rounded-full border-2 border-white shadow-sm" />
             <div className="absolute -bottom-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-pen"></i>
             </div>
          </div>
          <div>
            <h2 className="text-xl font-bold flex items-center">李德尔 <i className="fa-solid fa-chevron-right text-xs ml-2 text-gray-300"></i></h2>
            <p className="text-xs text-gray-400 mt-1">136****6052</p>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="mx-4 -mt-10 bg-white rounded-2xl shadow-sm grid grid-cols-2 p-6 divide-x">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-1">累计捐款 (元)</p>
          <p className="text-2xl font-bold">5200.00</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-1">捐赠次数 (次)</p>
          <p className="text-2xl font-bold">107</p>
        </div>
      </div>

      {/* Donation Projects List */}
      <div className="mt-6 mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">我捐赠的项目</h3>
          <span className="text-xs text-gray-400">查看全部 <i className="fa-solid fa-chevron-right text-[10px]"></i></span>
        </div>
        
        <div className="space-y-4">
          {[
            { id: '1', title: '保护海洋你我同行', amount: 0.01, time: '2025-12-30 17:22:51', img: 'https://picsum.photos/seed/ocean/200/120' },
            { id: '2', title: '无声合唱团关爱计划', amount: 100.00, time: '2025-12-28 08:30:02', img: 'https://picsum.photos/seed/sing/200/120' }
          ].map(proj => (
            <div key={proj.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
               <div className="flex space-x-3 mb-4">
                  <img src={proj.img} className="w-24 h-16 rounded-lg object-cover" />
                  <div className="flex-1 flex flex-col justify-between">
                     <h4 className="font-bold text-sm">{proj.title}</h4>
                     <p className="text-[10px] text-gray-400">捐赠金额：<span className="text-red-500">{proj.amount.toFixed(2)}元</span></p>
                     <p className="text-[10px] text-gray-400">捐赠时间：{proj.time}</p>
                  </div>
               </div>
               <div className="flex justify-end space-x-2">
                  <button className="px-3 py-1.5 bg-gray-50 text-gray-600 text-[10px] rounded-md font-medium">我要开票</button>
                  <button onClick={() => onNavigateDetail(proj.id)} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-[10px] rounded-md font-medium">项目详情</button>
                  <button className="px-3 py-1.5 bg-gray-50 text-gray-600 text-[10px] rounded-md font-medium">查看证书</button>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="mt-6 mx-4 mb-10 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-3">
             <i className="fa-regular fa-file-lines text-lg text-gray-600"></i>
             <span className="text-sm font-medium">平台简介</span>
          </div>
          <i className="fa-solid fa-chevron-right text-xs text-gray-300"></i>
        </div>
        <div className="flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-3">
             <i className="fa-regular fa-address-book text-lg text-gray-600"></i>
             <span className="text-sm font-medium">联系我们</span>
          </div>
          <i className="fa-solid fa-chevron-right text-xs text-gray-300"></i>
        </div>
      </div>

      <div className="text-center pb-10">
         <div className="flex items-center justify-center space-x-2 opacity-50 mb-1">
            <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white text-[8px] font-bold">乐善</div>
            <span className="text-[10px] font-bold">乐善市南</span>
         </div>
         <p className="text-[10px] text-gray-300">青岛市市南慈善协会运营服务</p>
      </div>
    </div>
  );
};

export default UserProfile;
