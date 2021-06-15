import { createContext, ReactNode, useState } from "react";

interface ItypeChildren {
  children: ReactNode;
}

interface ItypeContext {
    quatityContext: number;
    setQuatityContext: React.Dispatch<React.SetStateAction<number>>;
}

export const QuatityQuestionContext = createContext<ItypeContext>(
  {} as ItypeContext
);

export const QuatityQuestionProvider = ({ children }: ItypeChildren) => {
  const [quatityContext, setQuatityContext] = useState<number>(0);

  return (
    <QuatityQuestionContext.Provider
      value={{ quatityContext, setQuatityContext }}
    >
      {children}
    </QuatityQuestionContext.Provider>
  );
};
