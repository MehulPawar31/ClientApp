import { PlanProvider } from './context/PlanContext';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <PlanProvider>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 p-10">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
            <p className="text-slate-500">Welcome to your inventory control center.</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-32 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <p className="text-slate-500 text-sm">Total Items</p>
              <p className="text-3xl font-bold">1,250</p>
            </div>
            <div className="h-32 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <p className="text-slate-500 text-sm">Active Orders</p>
              <p className="text-3xl font-bold">42</p>
            </div>
          </div>
        </main>
      </div>
    </PlanProvider>
  );
}

export default App;