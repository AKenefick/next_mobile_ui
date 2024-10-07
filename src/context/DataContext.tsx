import React, { createContext, useContext, useState, ReactNode } from "react";
import { Data } from "../type/index";

// Define the type for the context.
type DataContextType = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

// Create the context with default values.
const DataContext = createContext<DataContextType | undefined>(undefined);

// Define a provider component.
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Data>({
    userId: "EFA123",
    triageTime: "13:38 30-09-2024",
    canEat: false,
    canDrink: false,
    queue: [
      "DH282",
      "8HD8HD",
      "FS8EW1",
      "S0F8SU",
      "EFA123",
      "S11983",
      "8YHJD1",
      "349B7W",
      "C453SR",
    ],
    numOfDocs: 2,
    location: "Waiting Room A",
    status: "Doctor Assigned",
    avgAptTime: 0.75,
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the context.
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
