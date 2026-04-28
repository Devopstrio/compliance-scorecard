import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { ShieldCheck, Target, TrendingUp, AlertTriangle, ExternalLink, RefreshCcw } from 'lucide-react';

const trendData = [
  { name: 'Jan', score: 65 },
  { name: 'Feb', score: 68 },
  { name: 'Mar', score: 75 },
  { name: 'Apr', score: 78 },
  { name: 'May', score: 82.5 },
];

const radarData = [
  { subject: 'ISO 27001', A: 92, fullMark: 100 },
  { subject: 'NIST CSF', A: 85, fullMark: 100 },
  { subject: 'PCI DSS', A: 74, fullMark: 100 },
  { subject: 'SOC 2', A: 88, fullMark: 100 },
  { subject: 'GDPR', A: 80, fullMark: 100 },
  { subject: 'CIS', A: 95, fullMark: 100 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-slate-800 pb-8">
        <div>
          <h1 className="text-5xl font-black text-white tracking-tighter italic uppercase">Corporate Scorecard</h1>
          <p className="text-slate-400 mt-3 text-xl max-w-2xl font-medium">Quantified risk intelligence and multi-framework posture benchmarking.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-900 border border-slate-800 text-slate-300 px-6 py-3 rounded-2xl font-bold hover:bg-slate-800 transition flex items-center gap-2">
             <RefreshCcw size={18} /> Re-Calculate
          </button>
          <button className="bg-rose-600 hover:bg-rose-500 text-white px-8 py-3 rounded-2xl font-bold transition shadow-xl shadow-rose-900/40 flex items-center gap-2">
             <Target size={18} /> Board Report
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Global Score" value="82.5%" change="+2.4" icon={<ShieldCheck className="text-rose-400" />} />
        <StatCard title="Maturity Tier" value="Level 4" change="Managed" icon={<Target className="text-emerald-400" />} />
        <StatCard title="Findings (Open)" value="45" change="-12%" icon={<TrendingUp className="text-indigo-400" />} />
        <StatCard title="Peer Percentile" value="Top 15%" change="Leader" icon={<TrendingUp className="text-sky-400" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trend Area Chart */}
        <div className="bg-slate-900/40 border border-slate-800 p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-rose-600 rounded-full"></span>
              Posture Improvement Trend (%)
            </h2>
            <div className="text-[10px] font-black uppercase text-rose-400 tracking-[0.2em] bg-rose-900/20 px-4 py-2 rounded-full border border-rose-800/50">Continuous Assurance</div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px' }}
                />
                <Area type="monotone" dataKey="score" stroke="#f43f5e" strokeWidth={4} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Framework Radar Chart */}
        <div className="bg-slate-900/40 border border-slate-800 p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
              Framework Maturity Radar
            </h2>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold italic">
               <TrendingUp size={20} />
               +12% Performance
            </div>
          </div>
          <div className="h-[400px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Maturity" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* BU Board */}
      <div className="bg-slate-900/40 border border-slate-800 p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-10 text-white flex items-center gap-3 text-emerald-400">
           <Target size={28} />
           Business Unit Leaderboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <BUCard name="Finance" score={85} status="Optimal" color="text-emerald-400" />
           <BUCard name="Engineering" score={68} status="Action Required" color="text-rose-400" />
           <BUCard name="Sales & Mkt" score={91} status="Leader" color="text-sky-400" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon }: any) => (
  <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] hover:border-rose-500/30 transition-all group overflow-hidden relative shadow-2xl">
    <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-1000 rotate-12">
       {React.cloneElement(icon, { size: 160 })}
    </div>
    <div className="relative z-10">
      <div className="p-4 bg-slate-950 rounded-2xl w-fit mb-6 border border-slate-800/50 shadow-inner group-hover:scale-110 transition duration-500">{icon}</div>
      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
      <div className="flex items-end gap-3">
        <p className="text-4xl font-black text-white tracking-tighter">{value}</p>
        <span className={`text-[11px] font-black pb-1.5 ${change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{change}</span>
      </div>
    </div>
  </div>
);

const BUCard = ({ name, score, status, color }: any) => (
  <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-3xl hover:bg-slate-800/50 transition cursor-pointer group">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-slate-100">{name}</h3>
      <span className={`text-2xl font-black ${color}`}>{score}%</span>
    </div>
    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
       <div className={`h-full ${color.replace('text', 'bg')}`} style={{ width: `${score}%` }}></div>
    </div>
    <div className="flex justify-between items-center">
       <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{status}</span>
       <ExternalLink size={14} className="text-slate-700 group-hover:text-white transition" />
    </div>
  </div>
);

export default Dashboard;
