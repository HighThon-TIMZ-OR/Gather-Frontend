import { useRef } from "react";

const useLogin = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  return { idRef, pwRef, nameRef };
};

export default useLogin;
