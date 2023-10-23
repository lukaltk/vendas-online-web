import axios from 'axios';
import React, { useState } from 'react';

import Button from '../../../shared/buttons/button/button.tsx';
import SVGLogo from '../../../shared/icons/SVGLogo.tsx';
import Input from '../../../shared/inputs/input/input.tsx';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles.ts';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email,
        password,
      },
    })
      .then((result) => {
        alert('Fez login');
        return result.data;
      })
      .catch(() => {
        alert('Usuário ou senha inválido');
      });

    console.log(returnObject);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary">
            Login
          </TitleLogin>
          <Input title="Usuário" margin="32px 0 0" onChange={handleEmail} value={email} />
          <Input
            title="Senha"
            type="password"
            margin="32px 0 0"
            onChange={handlePassword}
            value={password}
          />
          <Button type="primary" margin="64px 0 16px 0" onClick={handleLogin}>
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
