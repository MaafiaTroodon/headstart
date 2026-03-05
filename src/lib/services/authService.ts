import { User } from '@/types/models';

export const authService = {
  signIn: async (email: string, password: string): Promise<User> => {
    await new Promise((r) => setTimeout(r, 350));
    return {
      id: email,
      name: email.split('@')[0],
      email,
      role: email.includes('admin') || password === 'admin123' ? 'admin' : 'member'
    };
  }
};
