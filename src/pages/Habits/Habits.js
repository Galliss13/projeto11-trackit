import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CreatingHabit from "../Habits/CreatingHabit"
import styled from "styled-components"
import { baseColor, mainColor, textColor } from "../../constants/colors"

export default function Habits() {
    return (
        <HabitsPage>
            <Header/>
            <CreateNewHabits>
                <p>Meus Hábitos</p>
                <PlusIcon>+</PlusIcon>
            </CreateNewHabits>
            <CreatingHabit/>
            <NotYetHabits>Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
            </NotYetHabits>
            <Footer/>
        </HabitsPage>
    )
};

const HabitsPage = styled.div`
    display: flex;
    flex-direction: column;
`
const CreateNewHabits = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    width: 148px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: ${baseColor};
`
const PlusIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background-color: ${mainColor};
    border-radius: 4.63636px;
`

const NotYetHabits = styled.p`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${textColor};
`