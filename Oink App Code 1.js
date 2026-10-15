import React, { useState } from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  Award, 
  Newspaper, 
  User, 
  Flame, 
  Zap, 
  Wallet, 
  ShieldCheck, 
  LogOut, 
  ArrowUpRight,
  Database,
  Users,
  Lock
} from 'lucide-react';

export default function OinkAppWithAdmin() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isAdmin, setIsAdmin] = useState(false); // Toggle to simulate admin access

  // Sample Data States
  const [portfolioValue] = useState(2801.35);
  const [cashBalance] = useState(818.10);
  const [unrealizedGain] = useState(578.85);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 font-sans">
      
      {/* Creator / Admin Demo Bar (Outside Mobile Frame) */}
      <div className="mb-4 bg-slate-800 text-white px-4 py-2 rounded-xl text-xs flex items-center space-x-3 border border-slate-700 shadow-lg">
        <span className="font-semibold text-rose-400">Creator Mode:</span>
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className={`px-3 py-1 rounded-lg font-bold transition ${isAdmin ? 'bg-rose-600 text-white' : 'bg-slate-700 text-slate-300'}`}
        >
          {isAdmin ? 'Admin View Active 🔓' : 'Switch to Admin View 🔒'}
        </button>
      </div>

      {/* Mobile Frame Container */}
      <div className="w-full max-w-sm h-[812px] bg-amber-50/50 rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden flex flex-col relative">
        
        {/* Status Bar */}
        <div className="h-11 bg-transparent flex justify-between items-center px-6 pt-2 text-slate-800 text-xs font-semibold select-none">
          <span>9:41</span>
          <div className="flex items-center space-x-1.5">
            <span>5G</span>
            <div className="w-4 h-2.5 bg-slate-800 rounded-sm"></div>
          </div>
        </div>

        {/* Scrollable App Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-20 pt-2">
          
          {/* Persistent Top Header Card */}
          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-amber-100 mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white text-xl shadow-inner">
                🐷
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-slate-800 text-sm">{isAdmin ? 'Admin (Creator)' : 'Tim'}</h3>
                  <span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {isAdmin ? 'Superuser' : 'Level 3'}
                  </span>
                </div>
                <p className="text-slate-400 text-xs">{isAdmin ? 'Backend Access Granted' : 'Money Basics'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-amber-100 mb-4 grid grid-cols-3 divide-x divide-slate-100 text-center">
            <div>
              <div className="flex items-center justify-center space-x-1 text-orange-500 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 fill-orange-500" />
                <span>1d</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Streak</span>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-1 text-amber-500 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 fill-amber-500" />
                <span>+241</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Total XP</span>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-1 text-emerald-600 text-xs font-semibold">
                <Wallet className="w-3.5 h-3.5" />
                <span>${cashBalance}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Cash Vault</span>
            </div>
          </div>

          {/* TAB CONTENT: PROFILE (With Secure Admin Section) */}
          {activeTab === 'profile' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100 space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-2xl shadow">
                    🐷
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{isAdmin ? 'Creator / Admin' : 'Tim'}</h4>
                    <p className="text-xs text-slate-500">{isAdmin ? 'Full System Privileges' : 'Level 3 • Money Basics'}</p>
                    <div className="bg-rose-50 text-rose-600 text-[10px] font-semibold px-2 py-0.5 rounded-md inline-block mt-1">
                      {isAdmin ? 'Role: Admin • ID: CREATOR_01' : 'User ID: U284 • Level 3 of 100'}
                    </div>
                  </div>
                </div>

                {/* Conditional Admin Backend Analytics Box */}
                {isAdmin ? (
                  <div className="bg-slate-900 text-white p-4 rounded-xl space-y-3 shadow-inner border border-rose-500">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center space-x-2 text-rose-400">
                        <Database className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Creator Backend Analytics</span>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">LIVE DB</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                        <span className="text-[10px] text-slate-400 block">Total Users</span>
                        <span className="text-sm font-extrabold text-white">1,482</span>
                      </div>
                      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                        <span className="text-[10px] text-slate-400 block">Active Today</span>
                        <span className="text-sm font-extrabold text-emerald-400">328</span>
                      </div>
                      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                        <span className="text-[10px] text-slate-400 block">Total Portfolio Vol</span>
                        <span className="text-sm font-extrabold text-amber-400">$4.12M</span>
                      </div>
                      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                        <span className="text-[10px] text-slate-400 block">Lessons Finished</span>
                        <span className="text-sm font-extrabold text-rose-400">12,490</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 bg-slate-800/80 p-2 rounded border border-slate-700 flex items-center space-x-2">
                      <Users className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                      <span>Security Check Passed: Admin credentials verified for creator session.</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center space-y-1">
                    <Lock className="w-4 h-4 text-slate-400 mx-auto" />
                    <p className="text-xs font-semibold text-slate-600">Restricted Area</p>
                    <p className="text-[11px] text-slate-400">Backend analytics data is only visible when logged in as the app creator.</p>
                  </div>
                )}

                {/* Stats Grid */}
                {!isAdmin && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-xs text-slate-400 block">Total XP</span>
                      <span className="text-base font-bold text-slate-800">+241</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-xs text-slate-400 block">Accuracy</span>
                      <span className="text-base font-bold text-emerald-600">100%</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-xs text-slate-400 block">Cash Vault</span>
                      <span className="text-base font-bold text-slate-800">${cashBalance}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-xs text-slate-400 block">Levels Completed</span>
                      <span className="text-base font-bold text-slate-800">2 / 100</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <button 
                  onClick={() => setActiveTab('portfolio')}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-xl shadow-md transition flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Go to Virtual Portfolio</span>
                  <TrendingUp className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => setIsAdmin(!isAdmin)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl transition flex items-center justify-center space-x-2 text-sm border border-slate-200"
                >
                  <span>{isAdmin ? 'Exit Creator Mode' : 'Simulate Creator Login'}</span>
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Simulation</span>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">${portfolioValue.toLocaleString()}</h2>
                  <p className="text-xs font-semibold text-emerald-600 flex items-center">
                    <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                    +${unrealizedGain} (+41.22%) All Time
                  </p>
                </div>

                <div className="h-28 w-full bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-end px-2 pb-2 justify-between">
                  <div className="w-[12%] h-[30%] bg-emerald-300 rounded-t"></div>
                  <div className="w-[12%] h-[45%] bg-emerald-400 rounded-t"></div>
                  <div className="w-[12%] h-[60%] bg-emerald-400 rounded-t"></div>
                  <div className="w-[12%] h-[50%] bg-emerald-500 rounded-t"></div>
                  <div className="w-[12%] h-[80%] bg-emerald-500 rounded-t"></div>
                  <div className="w-[12%] h-[95%] bg-emerald-600 rounded-t"></div>
                </div>

                <div className="flex justify-between text-[11px] font-bold text-slate-400 pt-1">
                  <span className="bg-rose-50 text-rose-600 px-2 py-0.5 rounded">1D</span>
                  <span>1W</span>
                  <span>1M</span>
                  <span>ALL</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Holdings</h4>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 text-sm block">AAPL</span>
                    <span className="text-xs text-slate-400">5 shares • Avg $225.50</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-800 text-sm block">$1,706.35</span>
                    <span className="text-xs font-semibold text-emerald-600">+51.34%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="font-bold text-slate-800 text-sm block">NVDA</span>
                    <span className="text-xs text-slate-400">2 shares • Avg $138.45</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-800 text-sm block">$276.90</span>
                    <span className="text-xs font-semibold text-slate-400">0.00%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: QUIZZES */}
          {activeTab === 'quizzes' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100 space-y-3">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Active Challenge</span>
                <h4 className="font-bold text-slate-800 text-base">High-Yield Savings Accounts vs Checking</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Oink asks: You just earned $600 from a summer job. Should you put it in a 0.01% checking account or an FDIC-insured 4.5% HYSA?
                </p>
                <button className="w-full bg-rose-600 text-white font-semibold py-2.5 rounded-xl text-xs shadow">
                  Lock In Decision & Pass Level 2
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: MARKET NEWS */}
          {activeTab === 'market-news' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today, Oct 15 • Feed</span>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">MACRO 🔥</span>
                    <h5 className="font-bold text-slate-800 text-xs mt-1">Federal Reserve Signals Rate Pause as Core Inflation Cools to 2.4%</h5>
                    <p className="text-[11px] text-slate-500 mt-1">Teen Takeaway: Lower rates mean cheaper car loans and student debt in the future.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: LESSONS */}
          {activeTab === 'lessons' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Chapter 1</span>
                <h4 className="font-bold text-slate-800">Money Basics & Purchasing Power</h4>
                <div className="space-y-2">
                  <div