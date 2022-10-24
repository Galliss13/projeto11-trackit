import { useEffect, useState } from "react"
import styled from "styled-components"
import Day from "../../components/Day"
import { weakColor, mainColor } from "../../constants/colors"

export default function CreatingHabit({ habits, setHabits, setCreatingHabit }) {
    const [habitName, setHabitName] = useState("")
    const [habitDays, setHabitDays] = useState([])
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
    <CreatingHabitContainer>
        
        <input onChange={(e) => setHabitName(e.target.value)} 
        type={"text"} 
        value={habitName} 
        placeholder="nome do hábito">
        </input>

        <WeekDays>
            {days.map((d, i) => <Day 
            day={d}
            index={i}
            habitDays={habitDays}
            setHabitDays={setHabitDays} />)}
        </WeekDays>

        <Buttons>
            <CancelButton onClick={() => setCreatingHabit(false)}>Cancelar</CancelButton>

            <SaveButton onClick={() => {
                setHabits([{name: habitName, days: habitDays}, ...habits])
                setCreatingHabit(false)
                }}>Salvar
            </SaveButton>
        </Buttons>

    </CreatingHabitContainer>
    )
};

const CreatingHabitContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 180px;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    input {
        width: 303px;
        height: 45px;
        margin-top: 10px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            color: ${weakColor};
        }
    }
`
const WeekDays = styled.div`
    display: flex;
`

const Buttons = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
`

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: ${mainColor};
    color: #FFF;
    border-radius: 4.63636px;
    border: none
`

const CancelButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #fff;
    color: ${mainColor};
    border-radius: 4.63636px;
    border: none
`