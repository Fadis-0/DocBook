
export interface Doctor {
  id: string;
  name: string;
  specialty: Specialty;
  rating: number;
  reviews: number;
  gender: 'Male' | 'Female';
  availability: string[];
  insurances: string[];
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  bio: string;
  imageUrl: string;
}

export enum Specialty {
  Cardiology = 'Cardiology',
  Dermatology = 'Dermatology',
  Neurology = 'Neurology',
  Orthopedics = 'Orthopedics',
  Pediatrics = 'Pediatrics',
  General = 'General Practice',
}
