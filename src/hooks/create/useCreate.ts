import { useRef } from "react";

const useCreate = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const hobbyRef = useRef<HTMLInputElement>(null);
  const max_Ref = useRef<HTMLSelectElement>(null);
  return { nameRef, hobbyRef, max_Ref };
};

export default useCreate;
