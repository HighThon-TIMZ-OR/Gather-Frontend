import { useRef } from "react";

const useLogin = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  return { idRef, pwRef };
};

export default useLogin;
