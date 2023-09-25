import React, { useState } from 'react';

import Button from '../../../shared/buttons/button/button.tsx';
import Input from '../../../shared/inputs/input/input.tsx';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles.ts';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            Login
          </TitleLogin>
          <Input title="Usuário" margin="32px 0 0" onChange={handleUserName} value={username} />
          <Input
            title="Senha"
            type="password"
            margin="32px 0 0"
            onChange={handlePassword}
            value={password}
          />
          <Button type="primary" margin="64px 0 16px 0">
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
