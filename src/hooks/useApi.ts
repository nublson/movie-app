import { useContext } from "react";
import { ApiContext } from "../context/api";

const useApi = () => {
  const context = useContext(ApiContext);

  if (context === undefined) {
    throw new Error("`useApi` must be within a `ApiProvider`");
  }

  return context;
};

export default useApi;
