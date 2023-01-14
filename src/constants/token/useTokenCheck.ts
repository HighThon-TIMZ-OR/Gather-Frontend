import { useEffect, useState } from "react";
import token from "../../lib/token/token";
import { ACCESS_KEY } from "./token";
const useTokenCheck = () => {
  const [isAuthority, setIsAuthority] = useState(true);

  useEffect(() => {
    if (token.getToken(ACCESS_KEY) === null) {
      setIsAuthority(false);
    } else {
      setIsAuthority(true);
    }
  }, []);

  return { isAuthority };
};

export default useTokenCheck;
