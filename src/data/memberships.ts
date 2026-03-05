import { MembershipPlan } from '@/types/models';

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'single-prime',
    name: 'Single Prime',
    annualFee: 445,
    primeType: 'Prime',
    description: 'Prime Time Block Booking: Mon-Fri(5pm-10pm) + Sat and Sun'
  },
  {
    id: 'junior-player',
    name: 'Junior player',
    annualFee: 270,
    primeType: 'Junior',
    description: 'Junior Player (18 and under academy player)'
  },
  {
    id: 'couple-prime',
    name: 'Couple Prime',
    annualFee: 655,
    primeType: 'Prime',
    description: 'Prime Time Block Booking: Mon-Fri(5pm-10pm) + Sat and Sun'
  },
  {
    id: 'single-non-prime',
    name: 'Single Non-Prime',
    annualFee: 370,
    primeType: 'Non-Prime',
    description: 'Non Prime Time Block Booking: Mon-Fri(9am to 5pm)'
  },
  {
    id: 'couple-non-prime',
    name: 'Couple Non-Prime',
    annualFee: 545,
    primeType: 'Non-Prime',
    description: 'Non Prime Time Block Booking: Mon-Fri(9am to 5pm)'
  },
  {
    id: 'student-rec',
    name: 'Student within Rec Program',
    annualFee: 270,
    primeType: 'Student',
    description: 'available to players registered in any indoor program'
  }
];
