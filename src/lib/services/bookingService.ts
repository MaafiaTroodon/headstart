import { Booking } from '@/types/models';
import { isPrimeTime, uid } from '@/lib/utils';

export const bookingService = {
  create: (input: Omit<Booking, 'id' | 'primeType'>): Booking => ({
    ...input,
    id: uid('booking'),
    primeType: isPrimeTime(input.date, input.startTime) ? 'Prime' : 'Non-Prime'
  })
};
