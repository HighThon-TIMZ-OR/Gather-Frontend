import styled from "styled-components";

export const AuthBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const AuthLeftWrap = styled.div`
  width: 609px;
  height: 639px;

  background: #6949ff;
  border-radius: 20px;

  margin-left: 88px;
`;

export const AuthTitleWrap = styled.div`
  padding: 70px 0px 10px 70px;
  color: white;
`;

export const AuthBigTitle = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
`;

export const AuthSmallTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const AuthInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 70px;
`;

export const AuthInputName = styled.label`
  font-size: 16px;
  line-height: 24px;
  margin-top: 9px;

  color: #ffffff;
`;

export const AuthInput = styled.input`
  width: 400px;
  height: 48px;
  margin-bottom: 30px;
  border-radius: 10px;

  border: none;
  outline: none;
  padding: 10px;
`;

export const AuthBottomTextWrap = styled.div`
  display: flex;
`;

export const AuthBottomText = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  margin-left: 70px;
  color: #ffffff;
  span {
    margin-left: 9px;
    color: #12d18e;
    cursor: pointer;
  }
`;

export const AuthFormBtn = styled.button`
  width: 60px;
  height: 30px;

  border: none;
  border-radius: 10px;
  margin-left: 426px;
  &:hover {
    background: #12d18e;
  }
`;

export const AuthRightImg = styled.img`
  width: 800px;
`;
