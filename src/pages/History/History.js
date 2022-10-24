import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";
import { baseColor, textColor } from "../../constants/colors";

export default function History() {
    return (
        <HistoryContainer>
            <Header />
            <HistoryTitle>Histórico</HistoryTitle>
            <NotYetHistory>Em breve você poderá ver o histórico dos seus hábitos aqui!</NotYetHistory>
            <Footer />
        </HistoryContainer>
    )
};

const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const HistoryTitle = styled.p`
    display: flex;
    align-items: center;
    width: 90%;
    height: 80px;
    margin: auto;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: ${baseColor};
`

const NotYetHistory = styled.p`
    width: 338px;
    height: 74px;
    margin: auto;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${textColor};
`
