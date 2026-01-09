
import React, { useState } from 'react';

interface DonationModalProps {
  onClose: () => void;
  onConfirm: (amount: number) => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose, onConfirm }) => {
  const [selectedIdx, setSelectedIdx] = useState(1); // Default to 20
  const [customAmount, setCustomAmount] = useState('');
  const [isAnonymouse, setIsAnonymouse] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const amounts = [10, 20, 50, 100];
  const getCurrentAmount = () => selectedIdx === -1 ? Number(customAmount) : amounts[selectedIdx];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 transition-opacity">
      <div className="bg-white rounded-t-3xl p-6 animate-slide-up max-w-md mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">本次将捐出 <span className="text-red-500 text-xl">{getCurrentAmount() || 0}元</span></h2>
          <button onClick={onClose} className="text-gray-400"><i className="fa-solid fa-xmark text-xl"></i></button>
        </div>
        <p className="text-sm text-gray-500 mb-6">感谢您的善意</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {amounts.map((amt, i) => (
            <button 
              key={i}
              onClick={() => { setSelectedIdx(i); setCustomAmount(''); }}
              className={`py-4 rounded-xl border-2 transition-all font-bold ${selectedIdx === i ? 'border-red-500 text-red-500 bg-red-50' : 'border-gray-100 text-gray-600'}`}
            >
              {amt}元
            </button>
          ))}
        </div>
        
        <div className={`relative mb-6 border-2 rounded-xl flex items-center px-4 py-4 transition-all ${selectedIdx === -1 ? 'border-red-500 bg-red-50' : 'border-gray-100'}`}>
          <span className="text-gray-400 mr-2">自定义金额</span>
          <input 
            type="number"
            placeholder="请输入金额"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedIdx(-1);
            }}
            className="flex-1 bg-transparent outline-none font-bold text-gray-800"
          />
          <span className="text-gray-400 ml-2">元</span>
        </div>

        <div className="flex items-center justify-between mb-8 text-xs text-gray-400">
           <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={agreed} 
                onChange={() => setAgreed(!agreed)}
                className="accent-red-500 w-4 h-4"
              />
              <span>我已同意《用户捐赠协议》</span>
           </div>
           <div className="flex items-center space-x-2">
              <span className={isAnonymouse ? 'text-red-500' : ''}>匿名捐赠</span>
              <button 
                onClick={() => setIsAnonymouse(!isAnonymouse)}
                className={`w-10 h-5 rounded-full relative transition-colors ${isAnonymouse ? 'bg-red-500' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${isAnonymouse ? 'translate-x-5' : 'translate-x-1'}`}></div>
              </button>
           </div>
        </div>

        <button 
          disabled={!agreed || (!customAmount && selectedIdx === -1)}
          onClick={() => onConfirm(getCurrentAmount())}
          className="w-full bg-red-500 text-white font-bold py-4 rounded-xl disabled:bg-gray-300 transition-all active:scale-[0.98]"
        >
          捐一笔
        </button>
        <div className="h-6 safe-bottom"></div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DonationModal;
