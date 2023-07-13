'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CiLock, CiMail } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { Form } from '@/components/form';
import * as style from '../styles';
import { RegisterNewUser } from '@/app/services/firebase/auth/register';

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z
    .string()
    .nonempty('campo obrigatório')
    .email('formato de email inválido'),
  password: z.string().min(8, 'a senha precisa ter no mínimo 8 digitos')
});

type form = z.infer<typeof formSchema>;

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<form>({ resolver: zodResolver(formSchema) });

  const submit = async (data: form) => {
    await RegisterNewUser(data);
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

      <Form.button.wrap type="submit" {...style.FormButtonsWrap}>
        <Form.button.text {...style.FormButtonText}>Cadastrar</Form.button.text>
      </Form.button.wrap>
    </Form.wrap>
  );
}
