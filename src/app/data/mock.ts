import { Donator } from '../core/@types/donator';

export const mock: Donator[] = [
  {
    id: 1,
    firstName: 'john',
    lastName: 'doe',
    gender: 'm',
    age: 18,
    weight: 80,
    height: 180,
    imc: 30,
    bloodType: 'a+',
    bloodDonation: ['ab+', 'a+'],
    bloodReceive: ['a+', 'a-', 'o+', 'o-'],
    address: {
      city: 'ribeirao preto',
      state: 'sao paulo',
    },
  },
];
