import styled from "styled-components"
import { weakColor } from "../../constants/colors"

export default function CreatingHabit() {
    <CreatingHabitContainer>
        <input></input>
        <WeekDays>
            <Day>D</Day>
            <Day>S</Day>
            <Day>T</Day>
            <Day>Q</Day>
            <Day>Q</Day>
            <Day>S</Day>
            <Day>S</Day>
        </WeekDays>
    </CreatingHabitContainer>
};

const CreatingHabitContainer = styled.div`
    display: flex;
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    input {
        width: 303px;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: ${weakColor};
        }
    }
`
const WeekDays = styled.div`
    display: flex;
`
const Day = styled.button`
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid ${weakColor};
    border-radius: 5px;
`