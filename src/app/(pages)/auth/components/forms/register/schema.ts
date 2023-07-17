import { z } from 'zod';

export const registerFormSchema = z.object({
  name: z.string().nonempty(),
  email: z
    .string()
    .nonempty('campo obrigatório')
    .email('formato de email inválido'),
  password: z.string().min(8, 'a senha precisa ter no mínimo 8 digitos')
});

export type registerForm = z.infer<typeof registerFormSchema>;
