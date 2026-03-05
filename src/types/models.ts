export type ProgramCategory =
  | 'Adult'
  | 'Junior'
  | 'Clinics'
  | 'Leagues'
  | 'Camps'
  | 'Private Lessons';

export interface Program {
  id: string;
  name: string;
  category: ProgramCategory;
  type: string;
  description: string;
  day: string;
  time: string;
  startDate: string;
  endDate: string;
  ageMin: number;
  ageMax: number;
  totalSpots: number;
  availableSpots: number;
  waitlistCount: number;
  memberFee: number;
  nonMemberFee: number;
  allowNonMember: boolean;
  inviteOnly: boolean;
  lockCode?: string;
  coach: string;
  location: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  description: string;
  annualFee: number;
  primeType: 'Prime' | 'Non-Prime' | 'Junior' | 'Student';
}

export interface Booking {
  id: string;
  userId: string;
  date: string;
  startTime: string;
  duration: number;
  court: string;
  primeType: 'Prime' | 'Non-Prime';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  contactCTA: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  brand: 'Diadem' | 'Nike' | 'Headstart';
  category: 'Racquets' | 'Shoes' | 'Apparel' | 'Accessories' | 'Bags';
  price: number;
  imageUrl: string;
  sizes?: string[];
  inStock: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'admin';
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  imageUrl: string;
}
