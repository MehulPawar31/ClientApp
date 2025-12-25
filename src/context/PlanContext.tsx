import React, { createContext, useContext, useState } from 'react';

// Definitions from your blueprint
export type PlanTier = 'starter' | 'growth' | 'business';

interface PlanContextType {
  plan: PlanTier;
  setPlan: (p: PlanTier) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [plan, setPlan] = useState<PlanTier>('business'); // Default to Business for now

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used within PlanProvider");
  return context;
};