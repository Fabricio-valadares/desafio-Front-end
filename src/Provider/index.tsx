import { ReactNode } from "react";
import { QuatityQuestionProvider } from "./QuatityQuestion";
import { DataFormProvider } from "./DatafinalForm"

interface ItypeChildren {
  children: ReactNode;
}

const Providers = ({ children }: ItypeChildren) => {
  return (
        <DataFormProvider>
          <QuatityQuestionProvider>
            {children}
          </QuatityQuestionProvider>
        </DataFormProvider>
  )
};

export default Providers;