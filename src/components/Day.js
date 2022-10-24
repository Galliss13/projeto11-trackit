import { useState } from "react"
import styled from "styled-components"

export default function Day({day, index, habitDays, setHabitDays}) {
    const [color, setColor] = useState('#fff')
    function verifyDay(index) {
        console.log(habitDays)

        if (!habitDays.includes(index)) {
            setColor('#d5d5d5')
            setHabitDays([...habitDays, index])
        } else {
            const newHabitDays = [...habitDays]
            setColor('#fff')
            setHabitDays(newHabitDays.splice(index, 1))
        }
        console.log(habitDays)
    }

    return (
        <DayContainer color={color} onClick={() => verifyDay(index)}>
            {day}
        </DayContainer>
    )
};

const DayContainer = styled.button`
    width: 30px;
    height: 30px;
    margin: 5px;
    background: ${props => props.color};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
`
