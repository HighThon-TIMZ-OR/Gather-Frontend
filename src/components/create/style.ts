import styled from "styled-components";

export const CreateContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f6ff;
`;

export const CreateTitle = styled.h2`
  font-size: 35px;
  color: #6949ff;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const CreateTable = styled.div`
  width: 820px;
  height: 500px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 80px;

  background: #6949ff;
  border-radius: 30px;
`;

export const CreateTableTitleWrap = styled.div`
  width: 659px;
  height: 111px;
  margin-left: 81px;
  margin-bottom: 50px;
`;

export const CreateTableTitle = styled.label`
  font-size: 24px;
  color: #ffffff;
`;

export const CreateTableTitleInput = styled.input`
  width: 659px;
  height: 58px;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 10px;
`;

export const CreateTableBtn = styled.button`
  width: 260px;
  height: 58px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #12d18e;
  }
`;
