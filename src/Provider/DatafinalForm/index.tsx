import { createContext, ReactNode, useState } from "react";

interface ItypeChildren {
  children: ReactNode;
}

interface DataState {
    question: string;
    questionCorrect: string;
    questionCheck: string;
}

interface ItypeContext {
    dataFormContext: DataState[];
    setdataFormContext: React.Dispatch<React.SetStateAction<DataState[]>>;
}

export const DataFormContext = createContext<ItypeContext>(
  {} as ItypeContext
);

export const DataFormProvider = ({ children }: ItypeChildren) => {
  const [dataFormContext, setdataFormContext] = useState<DataState[]>([]);

  return (
    <DataFormContext.Provider
      value={{ dataFormContext, setdataFormContext }}
    >
      {children}
    </DataFormContext.Provider>
  );
};
