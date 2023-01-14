import React from "react";
import styled from "styled-components";
import logo from "../../asset/logo/logo.svg";

const Room = () => {
  return (
    <>
      <Container>
        <_Logo src={logo} />
        <Udwrap>
          <Button>방 나가기</Button>
          <Title>같이 보석십자수해요</Title>
          <Button>방 삭제하기</Button>
        </Udwrap>
      </Container>
    </>
  );
};

export default Room;

const Container = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
`;

const _Logo = styled.img`
  width: 149px;
  height: 31px;
  margin: 0 auto;
  margin-top: 15px;
`;

const Udwrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  width: 700px;
  height: 60px;
  background: #6949ff;
  border-radius: 30px;
  text-align: center;
  padding-top: 20px;
  color: white;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 87px;
  height: 34px;
`;
