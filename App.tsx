import React, { useState } from 'react';
import Host from './views/Host';
import Contestant from './views/Contestant';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'host' | 'contestant'>('landing');

  // Removed hash-based routing (href="#") to prevent iframe connection errors.
  // Using direct state manipulation ensures the app stays within the same page context.

  if (view === 'host') return <Host />;
  if (view === 'contestant') return <Contestant />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold font-sans">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-3xl mb-8 text-gray-800">Chọn vai trò</h1>
        <div className="flex gap-6">
          <button 
            onClick={() => setView('host')}
            className="block w-40 py-4 bg-[#800080] text-white rounded-lg shadow hover:bg-[#ffa500] transition-colors font-bold cursor-pointer text-center flex items-center justify-center"
          >
            Host / Quản lý
          </button>
          <button 
            onClick={() => setView('contestant')}
            className="block w-40 py-4 bg-[#008000] text-white rounded-lg shadow hover:bg-[#ffa500] transition-colors font-bold cursor-pointer text-center flex items-center justify-center"
          >
            Thí sinh
          </button>
        </div>
        <p className="mt-8 text-gray-500 text-sm font-normal">
            Note: Requires Supabase setup.
        </p>
      </div>
    </div>
  );
};

export default App;