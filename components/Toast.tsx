
import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="bg-primary text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl flex items-center gap-3">
        <span className="material-symbols-outlined text-sm">check_circle</span>
        {message}
      </div>
    </div>
  );
};

export default Toast;
