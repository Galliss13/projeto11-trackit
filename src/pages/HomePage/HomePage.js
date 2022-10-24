import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { mainColor, weakColor } from "../../constants/colors";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate();

  function Login(event) {
    event.preventDefault();
    
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      { email: email, password: password }
    );
    setLoading(true)
    request.then(() => navigate("/habitos"));
    request.catch((err) => alert(err.response.data.details))
  }

  return (
    <HomeContainer>
      <img
        src="https://trackit.io/wp-content/uploads/2019/08/Logo1-colour-CMYK-small.png"
        alt="logo"
      />
      <FormLogin onSubmit={Login}>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <ButtonLogin type="submit">Entrar</ButtonLogin>
      </FormLogin>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>      
      </Link>
      <ThreeDots 
      height="80" 
      width="80" 
      radius="9"
      color="#4fa94d" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={loading ? true : false}
      />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 80%;
    margin: 30px auto;
  }
  p {
    color: ${mainColor};
  }
`;


const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  input {
    width: 303px;
    height: 45px;
    margin-bottom: 5px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    &::placeholder {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      color: ${weakColor};
    }
  }
`;

const ButtonLogin = styled.button`
  width: 309px;
  height: 45px;
  background: ${mainColor};
  color: #fff;
  border-radius: 4.63636px;
  border: none;
`;
