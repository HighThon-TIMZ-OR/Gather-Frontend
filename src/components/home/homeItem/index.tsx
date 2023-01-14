import styled from "styled-components";
import { ItemPeople } from "../style";

const HomeItem = ({ data }: any) => {
  return (
    <>
      <HomeItemStyle>
        {data.title}

        <ItemPeople>
          {data.current_people}/{data.max_people}
        </ItemPeople>
      </HomeItemStyle>
    </>
  );
};

const HomeItemStyle = styled.div`
  width: 325px;
  height: 279px;
  border-radius: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default HomeItem;
