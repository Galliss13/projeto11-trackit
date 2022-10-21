import styled from "styled-components"
import { mainColor } from "../constants/colors"

export default function Footer() {
    return (
        <FooterContainer>
            <p>Hábitos</p>
            <FooterToday>
                <p>Hoje</p>
            </FooterToday>
            <p>Histórico</p>
        </FooterContainer>
    )
};
const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
        width: 68px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: ${mainColor};
    }
`
const FooterToday = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92px;
    height: 92px;
    border-radius: 46px;
    background-color: #52B6FF;
    p {
        position: absolute;
        width: 40px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
    }
    `