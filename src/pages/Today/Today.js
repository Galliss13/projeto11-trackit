import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { baseColor} from '../../constants/colors';
import HabiToday from './HabiToday';

export default function Today() {
    return (
        <TodayContainer>
            <Header />
                <DayWeekSelected>
                    <DayWeek>Segunda, 17/05</DayWeek>
                    <HabitsDoneStatus>Nenhum hábito concluído ainda</HabitsDoneStatus>
                </DayWeekSelected>
                <HabiToday />
                <HabiToday />
                <HabiToday />
                <HabiToday />

            <Footer />
        </TodayContainer>
    )
};

const TodayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    height: 774px;
`

const DayWeekSelected = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 50px;
    margin: 20px;
`

const DayWeek = styled.p`
    color: ${baseColor};
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
`
const HabitsDoneStatus = styled.p`
    color: #BABABA;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

`
