import styled from "styled-components"

export default function HomePage() {
    return (
        <HomeContainer>
            <img src=".../assets/logo.png" alt="logo"/>
            <form>
                <input></input>
                <input></input>
                <button type="submit">Entrar</button>
            </form>
            <p>Não tem uma conta? Cadastre-se!</p>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`
