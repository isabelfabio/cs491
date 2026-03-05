import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');

  const addItem = () => {
    if (value.trim()) {
      setItems(i => [...i, value.trim()]);
      setValue('');
    }
  };

  const onKey = e => e.key === 'Enter' && addItem();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6 border border-white/50">
        <h1 className="text-3xl font-black text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg">
          Grocery List
        </h1>
        <div className="flex gap-3">
          <input
            className="flex-1 px-5 py-4 text-lg rounded-2xl border-2 border-slate-200 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100/50 shadow-inner transition-all duration-300 placeholder-slate-400"
            placeholder="Milk, eggs..."
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={onKey}
          />
          <button
            onClick={addItem}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-4 focus:ring-emerald-400 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            +
          </button>
        </div>
        <div className="max-h-80 overflow-auto space-y-2 pr-2 -mr-2">
          {items.length ? items.map((item, i) => (
            <div key={i} className="group flex items-center p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl hover:from-emerald-50 hover:to-cyan-50 hover:shadow-md hover:translate-x-1 transition-all duration-200 border border-slate-200 hover:border-emerald-300">
              <span className="flex-1 font-medium text-slate-800 ml-3">{item}</span>
            </div>
          )) : (
            <div className="text-center py-12 text-slate-400">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-200 animate-pulse" />
              <p className="text-lg">Add your first item</p>
            </div>
          )}
        </div>
        {items.length > 0 && (
          <p className="text-center pt-4 text-sm font-medium text-slate-600 border-t border-slate-200">
            {items.length} item{items.length > 1 ? 's' : ''}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
