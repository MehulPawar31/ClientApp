import { usePlan } from '../context/PlanContext';
import { LayoutDashboard, Box, ShoppingCart, ShieldCheck, Factory } from 'lucide-react';

export const Sidebar = () => {
  const { plan, setPlan } = usePlan();

  return (
    <aside className="w-64 bg-[#0f172a] h-screen text-slate-400 p-6 flex flex-col border-r border-slate-800">
      <div className="flex items-center gap-2 text-white font-bold text-xl mb-10">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">I</div>
        <span>IMS</span>
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
        <NavItem icon={<Box size={18} />} label="Inventory" />
        
        {/* GROWTH/BUSINESS ONLY: Sales Orders */}
        {(plan === 'growth' || plan === 'business') && (
           <NavItem icon={<ShoppingCart size={18} />} label="Sales Orders" />
        )}

        {/* BUSINESS ONLY: Manufacturing */}
        {plan === 'business' && (
          <div className="pt-4 mt-4 border-t border-slate-800">
            <p className="text-[10px] uppercase font-bold text-slate-500 mb-2">Enterprise</p>
            <NavItem icon={<Factory size={18} />} label="Manufacturing" />
            <NavItem icon={<ShieldCheck size={18} />} label="Audit Logs" />
          </div>
        )}
      </nav>

      {/* PLAN SWITCHER (For your testing) */}
      <div className="mt-auto bg-slate-800/50 p-3 rounded-lg border border-slate-700">
        <p className="text-[10px] text-slate-500 font-bold mb-2">SWITCH PLAN (DEV)</p>
        <div className="flex flex-col gap-1">
          <button onClick={() => setPlan('starter')} className={`text-xs text-left p-1 rounded ${plan === 'starter' ? 'bg-blue-600 text-white' : ''}`}>Starter</button>
          <button onClick={() => setPlan('business')} className={`text-xs text-left p-1 rounded ${plan === 'business' ? 'bg-blue-600 text-white' : ''}`}>Business</button>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active = false }: any) => (
  <div className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-slate-800 text-white' : 'hover:bg-slate-800 hover:text-slate-200'}`}>
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);