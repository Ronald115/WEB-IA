import { useState } from "react";
import { submitModel } from "../services/modelService";

export const useModel = () => {
  const [model, setModel] = useState<any>(null);

  const submitModelToServer = async () => {
    if (model) {
      const result = await submitModel(model);
      console.log("Model result received from API: ", result);
      setModel((prevState: any) => ({ ...prevState, result }));
    }
  };

  return { model, setModel, submitModel: submitModelToServer };
};
