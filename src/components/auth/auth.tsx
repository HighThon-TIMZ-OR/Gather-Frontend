import {
  AuthBackground,
  AuthBigTitle,
  AuthBottomText,
  AuthBottomTextWrap,
  AuthFormBtn,
  AuthInput,
  AuthInputName,
  AuthInputWrap,
  AuthLeftWrap,
  AuthSmallTitle,
  AuthTitleWrap,
} from "./styled";
import signup from "../../asset/auth/signup.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSendSignupMutation } from "../../queries/auth/signup.query";
import token from "../../lib/token/token";
import { ACCESS_KEY } from "../../constants/token/token";
import { postSignupParam } from "../../repositories/auth/auth.param";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<postSignupParam>();

  const { idRef, pwRef, nameRef } = useLogin();

  const onSubmit = async ({ account_id, name, password }: postSignupParam) => {
    console.log(account_id);
    sendSignupMutation.mutateAsync(
      { account_id, name, password },
      {
        onSuccess: ({ token: accessToken }) => {
          token.setToken(ACCESS_KEY, accessToken);
          navigate("/");
        },
        onError: (error: any) => {
          window.alert(error.response.data.details);
        },
      }
    );
  };

  const sendSignupMutation = useSendSignupMutation();
  return (
    <AuthBackground>
      <AuthLeftWrap>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({
              account_id: idRef.current?.value,
              name: nameRef.current?.value,
              password: pwRef.current?.value,
            } as postSignupParam);
          }}
        >
          <AuthTitleWrap>
            <AuthBigTitle>Sign up</AuthBigTitle>
            <AuthSmallTitle>회원가입</AuthSmallTitle>
          </AuthTitleWrap>
          <AuthInputWrap>
            <AuthInputName>이름</AuthInputName>
            <AuthInput placeholder="이름을 입력해주세요" ref={nameRef!!} />
            <AuthInputName>아이디</AuthInputName>
            <AuthInput placeholder="아이디를 입력해주세요" ref={idRef!!} />
            <AuthInputName>비밀번호</AuthInputName>
            <AuthInput
              placeholder="비밀번호를 입력해주세요"
              ref={pwRef!!}
              type="password"
            />
          </AuthInputWrap>
          <AuthBottomTextWrap>
            <AuthBottomText>
              이미 계정이 있으신가요? <span>로그인</span>
            </AuthBottomText>
          </AuthBottomTextWrap>
          <AuthFormBtn>다음</AuthFormBtn>
        </form>
      </AuthLeftWrap>
    </AuthBackground>
  );
};

export default Login;
