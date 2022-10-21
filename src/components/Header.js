import styled from "styled-components"
import { baseColor } from "../constants/colors"
import logo from "../pages/images/logo.png"

export default function Header() {
    return (
        <HeaderContainer>
            <LogoNav>Trackir</LogoNav>
            <ProfileImage src={logo}/>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: ${baseColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const LogoNav = styled.p`
    width: 97px;
    height: 49px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #FFFFFF;
`

const ProfileImage = styled.div
