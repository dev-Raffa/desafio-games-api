'use client';

import { ConteinerFlex } from '@/components/containers';
import { LoginForm } from './components/forms/login';
import * as styles from './styles';
import { RegisterForm } from './components/forms/register';
import { Logo } from './components/logo';
import { useState } from 'react';
import { Button } from '@/components/buttons';

export default function AuthPage() {
  const [showResgister, setShowRegister] = useState(false);

  const handleClick = () => {
    setShowRegister(!showResgister);
  };
  return (
    <ConteinerFlex
      as="section"
      {...styles.ConteinerWrap}
      before={showResgister ? styles.beforeRegister : styles.beforeLogin}
    >
      <ConteinerFlex
        as="article"
        opacity={showResgister ? '0' : '100%'}
        {...styles.Conteiners}
      >
        <ConteinerFlex as="section" {...styles.Sections}>
          <Logo />
          <Button.wrap
            itemType="button"
            onClick={handleClick}
            {...styles.ButtonsWrap}
          >
            <Button.text {...styles.ButtonsText}>cadastre-se</Button.text>
          </Button.wrap>
        </ConteinerFlex>
        <LoginForm />
      </ConteinerFlex>

      <ConteinerFlex
        as="article"
        opacity={showResgister ? '100%' : '0'}
        {...styles.Conteiners}
      >
        <RegisterForm />
        <ConteinerFlex as="section" {...styles.Sections}>
          <Logo />
          <Button.wrap
            itemType="button"
            onClick={handleClick}
            {...styles.ButtonsWrap}
          >
            <Button.text {...styles.ButtonsText}> voltar ao login </Button.text>
          </Button.wrap>
        </ConteinerFlex>
      </ConteinerFlex>
    </ConteinerFlex>
  );
}
