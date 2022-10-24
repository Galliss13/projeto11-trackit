import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { mainColor, weakColor } from "../../constants/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function RegisterUser(event) {
    console.log("rodou")
    console.log(email, password, name, image)
    event.preventDefault();


    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      { email: email, name: name, image: image, password: password }
    );
    request.then(() => navigate("/"))
    request.catch((err) => console.log(err))
  }

  return (
    <RegisterContainer>
      <img
        src="https://trackit.io/wp-content/uploads/2019/08/Logo1-colour-CMYK-small.png"
        alt="logo"
      />
      <FormRegister onSubmit={RegisterUser}>
        <input
          type={"email"}
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type={"password"}
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <input
          type={"text"}
          value={name}
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          type={"url"}
          value={image}
          placeholder="foto"
          onChange={(e) => setImage(e.target.value)}
          required
        ></input>
        <ButtonRegister type="submit">Cadastrar</ButtonRegister>
      </FormRegister>
      <p>Já tem uma conta? Faça login!</p>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 80%;
    margin: 30px auto;
  }
  P {
    color: ${mainColor};
    margin: auto;
  }
`;

const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  margin-right: 70px;
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

const ButtonRegister = styled.button`
  width: 303px;
  height: 45px;
  background: ${mainColor};
  color: #fff;
  border-radius: 4.6px;
  border: none;
`;
