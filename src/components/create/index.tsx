import { Navigate, useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/token/token";
import useCreate from "../../hooks/create/useCreate";
import token from "../../lib/token/token";
import { useCreateMutation } from "../../queries/hobby/create.query";
import { postLoginParam } from "../../repositories/auth/auth.param";
import { createHobbyParam } from "../../repositories/hobby/hobby.param";
import {
  CreateContainer,
  CreateTable,
  CreateTableBtn,
  CreateTableSelector,
  CreateTableTitle,
  CreateTableTitleInput,
  CreateTableTitleWrap,
  CreateTitle,
} from "./style";

const Create = () => {
  const navigate = useNavigate();
  const { nameRef, hobbyRef, max_Ref } = useCreate();
  const createMutation = useCreateMutation();

  const onSubmit = ({ title, hobby_type, max_people }: createHobbyParam) => {
    createMutation.mutateAsync(
      { title, hobby_type, max_people },
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
  return (
    <CreateContainer>
      <CreateTitle>방 만들기</CreateTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            title: nameRef.current?.value,
            hobby_type: hobbyRef.current?.value,
            max_people: Number(max_Ref.current?.value),
          } as createHobbyParam);
        }}
      >
        <CreateTable>
          <CreateTableTitleWrap>
            <CreateTableTitle>제목</CreateTableTitle>
            <CreateTableTitleInput
              placeholder="제목을 입력해주세요"
              ref={nameRef}
            />
          </CreateTableTitleWrap>
          <CreateTableTitleWrap>
            <CreateTableTitle>해시태그</CreateTableTitle>
            <CreateTableTitleInput
              placeholder="해시태그를 입력해주세요"
              ref={hobbyRef}
            />
          </CreateTableTitleWrap>
          <CreateTableTitleWrap>
            <CreateTableTitle>인원</CreateTableTitle>
            <CreateTableSelector ref={max_Ref}>
              {new Array(20).fill(0).map((_, idx: number) => (
                <option value={idx + 1}>{idx + 1}명</option>
              ))}
            </CreateTableSelector>
          </CreateTableTitleWrap>
          <CreateTableBtn>방 만들기</CreateTableBtn>
        </CreateTable>
      </form>
    </CreateContainer>
  );
};
export default Create;
