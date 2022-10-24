import styled from "styled-components"
import { weakColor } from "../../constants/colors"

export default function Habit() {
    return (
        <HabitContainer>
            <p>Ler 1 capitulo de livro</p>
            <WeekDays>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
            </WeekDays>
        </HabitContainer>
    )
};

const HabitContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 90px;
    margin-top: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    p {
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 20px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        color: #666666;
    }
`
const WeekDays = styled.div`
    position: absolute;
    top: 40px;
    left: 10px;
    display: flex;
`
const Day = styled.button`
    width: 30px;
    height: 30px;
    margin: 3px;
    background-color: #FFFFFF;
    border: 1px solid ${weakColor};
    border-radius: 5px;
`