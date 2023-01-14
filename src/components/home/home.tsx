import {
  HomeContainer,
  HomeSearchBar,
  HomeSearchBox,
  HomeSearchImg,
  ItemContainer,
} from "./style";
import search from "../../asset/common/search.svg";
import { useGetHobbiesQuery } from "../../queries/hobby/create.query";
import HomeItem from "./homeItem";

const Home = () => {
  const { data } = useGetHobbiesQuery();

  return (
    <>
      <HomeContainer>
        <HomeSearchBox>
          <HomeSearchBar />
          <HomeSearchImg src={search} />
        </HomeSearchBox>
        <ItemContainer>
          {data &&
            (data.hobby_response_list?.map((v: any) => (
              <HomeItem data={v} />
            )) as any[])}
        </ItemContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
