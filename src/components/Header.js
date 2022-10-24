import styled from "styled-components";
import { baseColor } from "../constants/colors";

export default function Header() {
  return (
    <HeaderContainer>
      <LogoHeader>Trackir</LogoHeader>
      <ProfileImage src="https://trackit.io/wp-content/uploads/2019/08/Logo1-colour-CMYK-small.png" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: ${baseColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const LogoHeader = styled.p`
  width: 97px;
  height: 49px;
  margin-left: 10px;
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: #ffffff;
`;

const ProfileImage = styled.image`
  width: 30px;
`;
