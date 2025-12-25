import { usePlan } from '../../context/PlanContext';
import { MoreVertical, Lock } from 'lucide-react';

const MOCK_PRODUCTS = [
  { id: '1', name: 'Raw Steel', sku: 'RM-001', type: 'Raw', qty: 500, status: 'In Stock' },
  { id: '2', name: 'Engine Block', sku: 'PR-992', type: 'Processed', qty: 12, status: 'Low Stock' },
  { id: '3', name: 'Assembly Kit', sku: 'CB-441', type: 'Combo', qty: 45, status: 'In Stock' },
];

export const InventoryTable = () => {
  const { plan } = usePlan();

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr className="text-xs uppercase text-slate-500 font-bold tracking-wider">
            <th className="px-6 py-4">Product / SKU</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Stock Level</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {MOCK_PRODUCTS.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className="font-semibold text-slate-900">{item.name}</div>
                <div className="text-xs text-slate-500">{item.sku}</div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                  item.type === 'Raw' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                }`}>
                  {item.type}
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-mono text-slate-600">{item.qty}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${item.status === 'In Stock' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  <span className="text-sm text-slate-700">{item.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                {/* PLAN GATING: Disable actions if on Starter plan for complex items */}
                {plan === 'starter' && (item.type === 'Processed' || item.type === 'Combo') ? (
                  <div className="flex items-center text-slate-400 gap-1 text-xs italic">
                    <Lock size={12} /> Locked
                  </div>
                ) : (
                  <button className="p-1 hover:bg-slate-200 rounded text-slate-500">
                    <MoreVertical size={18} />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};