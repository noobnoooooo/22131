
import React from 'react';

interface ArticleDetailProps {
  id: string;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ id, onBack }) => {
  const files = [
    { type: 'PDF', name: '青岛市刚性支出困难家庭认定实施细则.PDF', color: 'bg-[#E40114]' },
    { type: 'DOC', name: '青岛市刚性支出困难家庭认定实施细则.DOC', color: 'bg-[#1D71B8]' },
    { type: 'XLS', name: '青岛市刚性支出困难家庭认定实施细则.XLS', color: 'bg-[#21A366]' },
    { type: 'PPTX', name: '青岛市刚性支出困难家庭认定实施细则.XLS', color: 'bg-[#E40114]' },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col relative pb-24 animate-fade-in">
      {/* Status Bar Mock */}
      <div className="bg-white flex justify-between items-center px-6 py-2">
        <span className="text-[12px] font-bold">9:41</span>
        <div className="flex items-center space-x-1">
           <i className="fa-solid fa-signal text-[10px]"></i>
           <i className="fa-solid fa-wifi text-[10px]"></i>
           <i className="fa-solid fa-battery-full text-[12px]"></i>
        </div>
      </div>

      {/* Header */}
      <div className="sticky top-0 bg-white z-[100] px-4 py-4 flex items-center justify-between shadow-sm">
        <button onClick={onBack} className="w-8 h-8 flex items-center justify-start text-gray-800 active:opacity-50 transition-opacity">
          <i className="fa-solid fa-chevron-left text-lg"></i>
        </button>
        <h1 className="text-[17px] font-bold text-[#222]">政策解读</h1>
        <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 flex space-x-4 items-center scale-90">
          <i className="fa-solid fa-ellipsis text-gray-800 text-sm"></i>
          <div className="w-[1px] h-3 bg-gray-200"></div>
          <i className="fa-regular fa-circle-dot text-gray-800 text-sm"></i>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1">
        <h2 className="text-[20px] font-bold text-[#222] leading-tight mb-4">
          2025年青岛市刚性支出困难家庭认定最新实施细则
        </h2>
        <div className="flex items-center space-x-2 text-gray-400 text-[12px] mb-6">
           <i className="fa-regular fa-eye"></i>
           <span>690</span>
        </div>

        {/* File List */}
        <div className="space-y-4">
          {files.map((file, i) => (
            <div key={i} className="bg-white rounded-xl p-5 flex items-center space-x-4 shadow-sm active:bg-gray-50 transition-all border border-transparent active:border-red-100">
               <div className="w-[4rem] h-[4rem] flex-shrink-0 relative bg-gray-50 rounded-lg flex flex-col items-center justify-center p-2 border border-gray-100">
                  <div className={`absolute top-0 left-1 ${file.color} text-white text-[8px] px-1 rounded-sm font-bold scale-90`}>
                    {file.type}
                  </div>
                  <div className="w-8 h-[1px] bg-gray-300 mt-2"></div>
                  <div className="w-8 h-[1px] bg-gray-300 mt-1"></div>
                  <div className="w-5 h-[1px] bg-gray-300 mt-1 mr-3"></div>
               </div>
               <div className="flex-1">
                  <p className="text-[14px] text-gray-700 font-medium leading-tight">
                    {file.name}
                  </p>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-md p-4 flex items-center space-x-4 safe-bottom z-50 border-t border-gray-50">
        <button onClick={onBack} className="flex flex-col items-center justify-center w-12 active:opacity-50">
           <i className="fa-solid fa-house text-lg text-[#222]"></i>
           <span className="text-[10px] text-gray-500 mt-0.5">回首页</span>
        </button>
        <button className="flex-1 bg-[#E40114] text-white font-bold py-3.5 rounded-xl active:scale-95 transition-all shadow-lg shadow-red-100">
           分享
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ArticleDetail;
