'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CiLock, CiMail } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import { Form } from '@/components/form';
import * as style from '../styles';
import { RegisterNewUser } from '@/app/services/firebase/user/controller';
import { registerForm, registerFormSchema } from './schema';
import { useDispatch } from 'react-redux';
import { user } from '@/types/user';
import { login } from '@/redux/models/user';
import { useRouter } from 'next/navigation';

type resp = {
  message: string;
  user?: user;
};

export function RegisterForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [msgError, setMsgError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<registerForm>({ resolver: zodResolver(registerFormSchema) });

  const submit = async (data: registerForm) => {
    const resp: resp = await RegisterNewUser(data);
    switch (resp.message) {
      case 'Success': {
        console.log(resp.user);
        resp.user && dispatch(login(resp.user));
        router.push('/');
        break;
      }
      case 'Firebase: Error (auth/email-already-in-use).': {
        setMsgError('Endereço de e-mail já utilizado');
        break;
      }
      default: {
        setMsgError('Servidor indisponível no momento!');
      }
    }
  };

  return (
    <Form.wrap onSubmit={handleSubmit(submit)} {...style.FormWrap}>
      <Form.title {...style.FormTitle}>Register</Form.title>

      <Form.field.label {...style.FormLabel}>
        <Form.field.icon icon={<BsPerson />} {...style.FormIcon} />
        <Form.field.input
          type="text"
          placeholder="name"
          {...register('name')}
          {...style.FormInput}
        />
      </Form.field.label>
      {errors.name && (
        <Form.text {...style.FormMsgError}>{errors.name.message}</Form.text>
      )}

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
        <Form.button.text {...style.FormButtonText}>Cadastrar</Form.button.text>
      </Form.button.wrap>
    </Form.wrap>
  );
}
