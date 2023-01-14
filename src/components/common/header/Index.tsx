import {
  HeaderBetween,
  HeaderContainer,
  HeaderHome,
  HeaderLogo,
  HeaderMakeRoom,
  HeaderMypage,
} from "./styled";
import logo from "../../../asset/logo/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderLogo src={logo} />
      <HeaderBetween>
        <HeaderHome onClick={() => navigate("/")}>홈</HeaderHome>
        <HeaderMakeRoom onClick={() => navigate("/create")}>
          방만들기
        </HeaderMakeRoom>
        <HeaderMypage>마이페이지</HeaderMypage>
      </HeaderBetween>
    </HeaderContainer>
  );
};
export default Header;
