import {
  CreateContainer,
  CreateTable,
  CreateTableBtn,
  CreateTableTitle,
  CreateTableTitleInput,
  CreateTableTitleWrap,
  CreateTitle,
} from "./style";

const Create = () => {
  return (
    <CreateContainer>
      <CreateTitle>방 만들기</CreateTitle>
      <CreateTable>
        <CreateTableTitleWrap>
          <CreateTableTitle>제목</CreateTableTitle>
          <CreateTableTitleInput />
        </CreateTableTitleWrap>
        <CreateTableTitleWrap>
          <CreateTableTitle>해시태그</CreateTableTitle>
          <CreateTableTitleInput />
        </CreateTableTitleWrap>
        <CreateTableBtn>방 만들기</CreateTableBtn>
      </CreateTable>
    </CreateContainer>
  );
};
export default Create;
