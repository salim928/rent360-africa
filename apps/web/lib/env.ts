import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
  API_URL: z.string().url().optional().default('http://localhost:3000/api'),
});

export const env = envSchema.parse(process.env);
