import { PlanProvider } from './context/PlanContext';
import { Sidebar } from './components/Sidebar';
import { InventoryPage } from './features/inventory/InventoryPage';

function App() {
  return (
    <PlanProvider>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10">
          {/* Top Bar can go here */}
          <InventoryPage />
        </main>
      </div>
    </PlanProvider>
  );
}

export default App;