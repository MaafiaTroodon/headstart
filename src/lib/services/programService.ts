import { inviteCodes, programs } from '@/data/programs';

export const programService = {
  all: () => programs,
  byId: (id: string) => programs.find((p) => p.id === id),
  validateInvite: (code: string, programId: string) => inviteCodes[code as keyof typeof inviteCodes] === programId
};
