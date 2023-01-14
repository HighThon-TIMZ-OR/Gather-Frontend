import Header from "../common/header/Index";
import { HomeSearchBar, HomeSearchBox, HomeSearchImg } from "./style";
import search from "../../asset/common/search.svg";

const Home = () => {
  return (
    <>
      <HomeSearchBox>
        <HomeSearchBar />
        <HomeSearchImg src={search} />
      </HomeSearchBox>
    </>
  );
};

export default Home;
