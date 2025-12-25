import { InventoryTable } from '../../components/ui/InventoryTable';
import { usePlan } from '../../context/PlanContext';
import { Plus, Factory } from 'lucide-react';

export const InventoryPage = () => {
  const { plan } = usePlan();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Inventory Management</h1>
          <p className="text-slate-500 text-sm">Manage SKU lifecycle from Raw to Combo products.</p>
        </div>

        <div className="flex items-center gap-3">
          {/* BUSINESS ONLY FEATURE: Manufacturing */}
          {plan === 'business' && (
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-white text-sm font-medium transition-all shadow-sm">
              <Factory size={16} />
              Build Recipe
            </button>
          )}
          
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium shadow-md transition-all">
            <Plus size={16} />
            Add Product
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Total Stock Value" value="$128,450" />
        <StatCard label="Low Stock Alerts" value="3" isAlert />
        {/* GROWTH/BUSINESS ONLY: Warehouse stats */}
        {plan !== 'starter' ? (
          <StatCard label="Active Warehouses" value="5" />
        ) : (
          <div className="bg-slate-100 border border-dashed border-slate-300 rounded-xl flex items-center justify-center p-6 italic text-slate-400 text-sm">
            Upgrade to view Multi-warehouse stats
          </div>
        )}
      </div>

      <InventoryTable />
    </div>
  );
};

const StatCard = ({ label, value, isAlert }: any) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</p>
    <p className={`text-3xl font-bold mt-2 ${isAlert ? 'text-amber-600' : 'text-slate-900'}`}>{value}</p>
  </div>
);