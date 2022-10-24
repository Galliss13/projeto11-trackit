import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreatingHabit from "./CreatingHabit";
import Habit from "./Habit";
import styled from "styled-components";
import { baseColor, mainColor, textColor } from "../../constants/colors";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [creatinghabit, setCreatingHabit] = useState(false);
  useEffect(() => {
    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    );
    request.then((resp) => setHabits(resp.data));
    request.catch((err) => alert(err.response.data));
  }, []);
  return (
    <HabitsPage>
      <Header />
      <CreateNewHabits>
        <p>Meus Hábitos</p>
        <PlusIcon onClick={() => setCreatingHabit(true)}>+</PlusIcon>
      </CreateNewHabits>
      {creatinghabit ? (
        <CreatingHabit
          habits={habits}
          setHabits={setHabits}
          setCreatingHabit={setCreatingHabit}
        />
      ) : (
        ""
      )}
      {habits.length === 0 ? (
        <NotYetHabits>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </NotYetHabits>
      ) : (
        habits.map((h) => <Habit name={h.name} days={h.days} />)
      )}

      <Footer />
    </HabitsPage>
  );
}

const HabitsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  height: 774px;
`;
const CreateNewHabits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 80px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color: ${baseColor};
`;
const PlusIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 35px;
  color: #fff;
  border: none;
  background-color: ${mainColor};
  border-radius: 4.7px;
`;

const NotYetHabits = styled.p`
  width: 338px;
  height: 74px;
  margin-top: 10px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${textColor};
`;
