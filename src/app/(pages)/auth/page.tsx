'use client';

import { useState } from 'react';
import { ConteinerFlex } from '@/components/containers';
import * as styles from './styles';
import { ConteinerLogin } from './components/conteiners/login';
import { ConteinerRegister } from './components/conteiners/register';

export default function AuthPage() {
  const [showRegister, setShowRegister] = useState(false);

  const handleClick = () => {
    setShowRegister(!showRegister);
  };
  return (
    <ConteinerFlex
      as="section"
      {...styles.ConteinerWrap}
      before={showRegister ? styles.beforeRegister : styles.beforeLogin}
      breakpoints={
        showRegister
          ? [styles.beforeRegisterBreakPoints]
          : [styles.beforeLoginBreakPoints]
      }
    >
      <ConteinerLogin show={showRegister} handleClick={handleClick} />
      <ConteinerRegister show={showRegister} handleClick={handleClick} />
    </ConteinerFlex>
  );
}
