import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ACCESS_KEY } from "../../../constants/token/token";
import useLogin from "../../../hooks/auth/useLogin";
import token from "../../../lib/token/token";
import { useSendLoginMutation } from "../../../queries/auth/signup.query";
import { postLoginParam } from "../../../repositories/auth/auth.param";

const Login = () => {
  const navigate = useNavigate();
  const { idRef, pwRef } = useLogin();
  const sendLoginMutation = useSendLoginMutation();

  const onSubmit = async ({ account_id, password }: postLoginParam) => {
    console.log(account_id);
    sendLoginMutation.mutateAsync(
      { account_id, password },
      {
        onSuccess: ({ token: accessToken }) => {
          token.setToken(ACCESS_KEY, accessToken);
          navigate("/");
          window.location.reload();
        },
        onError: (error: any) => {
          window.alert(error.response.data.details);
        },
      }
    );
  };

  return (
    <AuthBackground>
      <AuthLeftWrap>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({
              account_id: idRef.current?.value,
              password: pwRef.current?.value,
            } as postLoginParam);
          }}
        >
          <AuthTitleWrap>
            <AuthBigTitle>Login</AuthBigTitle>
            <AuthSmallTitle>로그인</AuthSmallTitle>
          </AuthTitleWrap>
          <AuthInputWrap>
            <AuthInputName>아이디</AuthInputName>
            <AuthInput
              placeholder="아이디를 입력해주세요"
              type="text"
              name="input_id"
              ref={idRef}
            />
            <AuthInputName>비밀번호</AuthInputName>
            <AuthInput
              placeholder="비밀번호를 입력해주세요"
              type="password"
              name="input_pw"
              ref={pwRef}
            />
          </AuthInputWrap>
          <AuthFormBtn>로그인</AuthFormBtn>
          <AuthBottomTextWrap>
            <AuthBottomText>
              계정이 없으신가요?{" "}
              <span onClick={() => navigate("/signup")}>회원가입</span>
            </AuthBottomText>
          </AuthBottomTextWrap>
        </form>
      </AuthLeftWrap>
    </AuthBackground>
  );
};

export default Login;

const AuthBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const AuthLeftWrap = styled.div`
  width: 500px;
  height: 639px;
  display: flex;
  justify-content: center;
  background: #6949ff;
  border-radius: 20px;
  position: absolute;
  z-index: 2;
  margin-left: 88px;
`;

const AuthTitleWrap = styled.div`
  padding: 70px 0px 10px 0px;
  color: white;
`;

const AuthBigTitle = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
`;

const AuthSmallTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const AuthInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
`;

const AuthInputName = styled.label`
  font-size: 16px;
  line-height: 24px;
  margin-top: 9px;

  color: #ffffff;
`;

const AuthInput = styled.input`
  width: 400px;
  height: 48px;
  margin-bottom: 30px;
  border-radius: 10px;

  border: none;
  outline: none;
  padding: 10px;
`;

const AuthBottomTextWrap = styled.div`
  display: flex;
`;

const AuthBottomText = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #ffffff;
  span {
    margin-left: 9px;
    color: #12d18e;
    cursor: pointer;
  }
`;

const AuthFormBtn = styled.button`
  width: 400px;
  height: 48px;
  margin-bottom: 10px;
  margin-top: 30px;
  border-radius: 10px;

  border: none;
  &:hover {
    background: #12d18e;
  }
`;

const AuthRightImg = styled.img`
  width: 800px;
`;

const BgImg = styled.img`
  width: 100vw;
  height: 100vh;
`;
