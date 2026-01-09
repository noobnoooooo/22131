
import React from 'react';
import { DonationRecord } from '../types';

const PublicShow: React.FC = () => {
  const records: DonationRecord[] = [
    {
      id: '1',
      userName: '李**',
      userAvatar: 'https://picsum.photos/seed/u1/80/80',
      amount: 20.00,
      projectName: '关爱空巢老人',
      time: '刚刚',
      image: 'https://picsum.photos/seed/p1/200/120'
    },
    {
      id: '2',
      userName: '爱心用户',
      userAvatar: 'https://picsum.photos/seed/u2/80/80',
      amount: 10.50,
      projectName: '无声合唱团关爱计划',
      time: '5分钟前',
      image: 'https://picsum.photos/seed/p2/200/120'
    },
    {
      id: '3',
      userName: '欧阳泉',
      userAvatar: 'https://picsum.photos/seed/u3/80/80',
      amount: 20.00,
      projectName: '珠海路街道辛家庄社区慈善基金',
      time: '12-20 20:56',
      image: 'https://picsum.photos/seed/p3/200/120'
    }
  ];

  return (
    <div className="bg-white min-h-full">
      <div className="p-4 bg-gradient-to-b from-red-50 to-white">
        <h1 className="text-xl font-bold flex items-center space-x-2">
          <span>乐善市南</span>
          <span className="text-red-500 font-black">【公益秀】</span>
        </h1>
      </div>

      <div className="px-4 space-y-6">
        {records.map((record) => (
          <div key={record.id} className="relative pl-6 border-l-2 border-red-100 pb-2 last:border-0">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500 border-4 border-red-100"></div>
             
             <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                   <img src={record.userAvatar} className="w-10 h-10 rounded-full border border-gray-100" />
                   <span className="font-bold text-gray-700">{record.userName}</span>
                </div>
                <span className="text-xs text-gray-400">{record.time}</span>
             </div>

             <p className="text-sm text-gray-600 mb-3">
               捐赠<span className="text-red-500 font-bold mx-1">{record.amount.toFixed(2)}元</span>给【{record.projectName}】项目
             </p>

             <div className="bg-gray-50 rounded-xl p-3 flex items-center space-x-4 active:bg-gray-100 transition-colors">
                <img src={record.image} className="w-24 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                   <h3 className="text-sm font-bold text-gray-800 line-clamp-1">{record.projectName}</h3>
                   <div className="flex justify-end mt-2">
                      <i className="fa-solid fa-chevron-right text-xs text-gray-300"></i>
                   </div>
                </div>
             </div>
          </div>
        ))}
        <div className="py-10 text-center text-gray-300 text-xs">已经到底了～</div>
      </div>
    </div>
  );
};

export default PublicShow;
