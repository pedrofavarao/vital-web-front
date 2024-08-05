export type Donator = {
  id: number;
  firstName: string;
  lastName: string;
  gender: 'm' | 'f';
  age: number;
  weight: number;
  height: number;
  imc: number;
  bloodType: 'a+' | 'a-' | 'b+' | 'b-' | 'ab+' | 'ab-' | 'o+' | 'o-';
  bloodDonation: ('a+' | 'a-' | 'b+' | 'b-' | 'ab+' | 'ab-' | 'o+' | 'o-')[];
  bloodReceive: ('a+' | 'a-' | 'b+' | 'b-' | 'ab+' | 'ab-' | 'o+' | 'o-')[];
  address: {
    city: string;
    state: string;
  };
};

export type ImcAverage = {
  ageRange: string;
  averageIMC: number;
};

export type ObesityPercent = {
  gender: 'm' | 'f';
  percentage: number;
}

export type AverageAgeByBloodType = {
  bloodType: string;
  averageAge: number;
}

export type PossibleDonors = 	{
  bloodType: string;
  donorCount: number;
}