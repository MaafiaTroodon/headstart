import { membershipPlans } from '@/data/memberships';

export const membershipService = {
  all: () => membershipPlans,
  byId: (id: string) => membershipPlans.find((p) => p.id === id)
};
