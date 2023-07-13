import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty('campo obrigatório')
    .email('formato de email inválido'),
  password: z.string().nonempty('campo obrigatório')
});

export type loginForm = z.infer<typeof loginFormSchema>;
