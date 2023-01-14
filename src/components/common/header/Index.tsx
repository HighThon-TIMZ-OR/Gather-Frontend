import {
  HeaderBetween,
  HeaderContainer,
  HeaderHome,
  HeaderLogo,
  HeaderMakeRoom,
  HeaderMypage,
} from "./styled";
import logo from "../../../asset/logo/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} />
      <HeaderBetween>
        <HeaderHome>홈</HeaderHome>
        <HeaderMakeRoom>방만들기</HeaderMakeRoom>
        <HeaderMypage>마이페이지</HeaderMypage>
      </HeaderBetween>
    </HeaderContainer>
  );
};
export default Header;
