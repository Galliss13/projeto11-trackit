import logo from "../images/logo.png"
import styled from "styled-components"

export default function Register() {
    return (
    <RegisterContainer>
        <img src={logo} alt="logo"/>
        <form>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <input placeholder="nome"></input>
            <input placeholder="foto"></input>
            <button type="submit">Cadastrar</button>
        </form>
        <p>Não tem uma conta? Cadastre-se!</p>
    </RegisterContainer>
    )
};

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
