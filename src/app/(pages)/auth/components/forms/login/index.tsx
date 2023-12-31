'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/redux/hook';
import { CiLock, CiMail } from 'react-icons/ci';
import { userSignin } from '@/app/services/firebase/user/controller';
import { Form } from '@/components/form';
import * as style from '../styles';
import { loginForm, loginFormSchema } from './schema';
import type { user } from '@/types/user';
import { login } from '@/redux/models/user';

type resp = {
  result: string;
  user?: user;
};

export function LoginForm() {
  const dispatch = useAppDispatch();
  const [msgError, setMsgError] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginForm>({ resolver: zodResolver(loginFormSchema) });
  const submit = async (data: loginForm) => {
    const resp: resp = await userSignin(data.email, data.password);

    switch (resp.result) {
      case 'Success': {
        if (resp.user) {
          dispatch(login(resp.user));
          router.push('/');
        }
        break;
      }
      case 'Firebase: Error (auth/wrong-password).': {
        setMsgError('Usuário ou senha inválidos.');
        break;
      }
      case 'Firebase: Error (auth/user-not-found).': {
        setMsgError('Usuário não encontrado.');
        break;
      }
      default: {
        setMsgError('Servidor indisponível, tente novamente mais tarde.');
      }
    }
  };

  return (
    <Form.wrap onSubmit={handleSubmit(submit)} {...style.FormWrap}>
      <Form.title {...style.FormTitle}>Login</Form.title>
      <Form.field.label {...style.FormLabel}>
        <Form.field.icon icon={<CiMail />} {...style.FormIcon} />
        <Form.field.input
          type="email"
          placeholder="E-mail"
          {...register('email')}
          {...style.FormInput}
        />
      </Form.field.label>
      {errors.email && (
        <Form.text {...style.FormMsgError}>{errors.email.message}</Form.text>
      )}

      <Form.field.label {...style.FormLabel}>
        <Form.field.icon icon={<CiLock />} {...style.FormIcon} />
        <Form.field.input
          type="password"
          placeholder="Senha"
          {...register('password')}
          {...style.FormInput}
        />
      </Form.field.label>
      {errors.password && (
        <Form.text {...style.FormMsgError}>{errors.password.message}</Form.text>
      )}

      {msgError && <Form.text {...style.FormMsgError}>{msgError}</Form.text>}

      <Form.button.wrap type="submit" {...style.FormButtonsWrap}>
        <Form.button.text {...style.FormButtonText}>Entrar</Form.button.text>
      </Form.button.wrap>
    </Form.wrap>
  );
}
