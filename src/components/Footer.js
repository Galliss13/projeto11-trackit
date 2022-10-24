import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mainColor } from '../constants/colors';

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/habitos">
        <Pfooter>Hábitos</Pfooter>
      </Link>
      <FooterToday>
        <Link to="/hoje">
          <PfooterToday>Hoje</PfooterToday>
        </Link>
      </FooterToday>
      <Link to="/historico">
        <Pfooter>Histórico</Pfooter>
      </Link>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Pfooter = styled.p`
  width: 68px;
  height: 22px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${mainColor};
`

const FooterToday = styled.button`
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 46px;
  border: none;
  background-color: #52B6FF;
    `;

const PfooterToday = styled.p`
  position: absolute;
  top: 35px;
  right: 25px;
  width: 40px;
  height: 22px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
`