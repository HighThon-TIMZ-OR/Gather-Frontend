import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #f7f6ff;
`;

export const HomeSearchBar = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  background: #6949ff;
  border-radius: 30px;
  border: none;
  outline: none;
  color: white;
  padding: 20px;
  justify-content: center;
`;

export const HomeSearchBox = styled.div`
  position: relative;
  width: 940px;
  height: 80px;
  margin: 0 auto;
  padding-top: 46px;
  display: flex;
  flex-wrap: wrap;
`;

export const HomeSearchImg = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 17px;
  right: 78px;
`;

export const ItemContainer = styled.div`
  padding: 50px;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  z-index: 3;
`;

export const ItemPeople = styled.p``;
