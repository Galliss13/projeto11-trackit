import styled from 'styled-components';

export default function HabiToday() {
    return (
        <HabiTodayContainer>
            <HabitDescription>
                <HabiTitle>Ler 1 capítulo de Livro</HabiTitle>
                <CurrentSequence>Sequência atual: 4 dias</CurrentSequence>
                <RecordSequence>Seu recorde: 5 dias</RecordSequence>
            </HabitDescription>
            <BigCheck>✔</BigCheck>
        </HabiTodayContainer>
    )
};

const HabiTodayContainer = styled.div `
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 340px;
    height: 94px;
    margin: 5px;
    background-color: #fff;
`
const HabitDescription = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    color: #666666;
`
const BigCheck = styled.button`
    position: absolute;
    right: 10px;
    top: 15px;
    width: 69px;
    height: 69px;
    background-color: #EBEBEB;
    color: #fff;
    font-size: 50px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`

const HabiTitle = styled.p`
    font-size: 20px;
`

const CurrentSequence = styled.p`
    font-size: 13px;
`
const RecordSequence = styled.p`
    font-size: 13px;
`