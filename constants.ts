import { Doctor, Specialty } from './types';

export interface Patient {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  lastVisit: string;
  emContact: { name: string; phone: string; relation: string; };
  history: { date: string; reason: string; }[];
}

export type AppointmentStatus = 'Upcoming' | 'Completed' | 'Canceled';
export interface Appointment {
  id: string;
  patient: Patient;
  date: string;
  time: string;
  reason: string;
  status: AppointmentStatus;
  notes?: string;
}

export interface Message {
  id: string;
  sender: 'doctor' | 'patient';
  text: string;
  timestamp: string;
}
export interface Conversation {
  id: string;
  patient: Patient;
  messages: Message[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}


export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    specialty: Specialty.Cardiology,
    rating: 4.9,
    reviews: 215,
    gender: 'Female',
    availability: ['Mon', 'Wed', 'Fri'],
    insurances: ['Cigna', 'Aetna', 'BlueCross'],
    location: {
      address: '123 Heartbeat Ave, Cardio City, NY',
      lat: 40.7128,
      lng: -74.0060,
    },
    bio: 'Dr. Reed is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is a pioneer in minimally invasive cardiac procedures.',
    imageUrl: 'https://picsum.photos/id/201/200/200',
  },
  {
    id: '2',
    name: 'Dr. Samuel Chen',
    specialty: Specialty.Dermatology,
    rating: 4.8,
    reviews: 189,
    gender: 'Male',
    availability: ['Tue', 'Thu'],
    insurances: ['UnitedHealthcare', 'Aetna'],
    location: {
      address: '456 SkinCare Blvd, Dermville, CA',
      lat: 34.0522,
      lng: -118.2437,
    },
    bio: 'Dr. Chen specializes in cosmetic dermatology and skin cancer surgery. He is dedicated to providing personalized care and the latest treatments to his patients.',
    imageUrl: 'https://picsum.photos/id/202/200/200',
  },
  {
    id: '3',
    name: 'Dr. Maria Garcia',
    specialty: Specialty.Pediatrics,
    rating: 5.0,
    reviews: 320,
    gender: 'Female',
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    insurances: ['BlueCross', 'Humana'],
    location: {
      address: '789 Childswell Ln, Kidstown, TX',
      lat: 29.7604,
      lng: -95.3698,
    },
    bio: 'With a passion for children\'s health, Dr. Garcia has been a trusted pediatrician for over 20 years. She creates a warm and friendly environment for her little patients.',
    imageUrl: 'https://picsum.photos/id/203/200/200',
  },
  {
    id: '4',
    name: 'Dr. Ben Carter',
    specialty: Specialty.Neurology,
    rating: 4.7,
    reviews: 150,
    gender: 'Male',
    availability: ['Mon', 'Wed'],
    insurances: ['Cigna', 'UnitedHealthcare'],
    location: {
      address: '101 Brainwave Dr, Cerebrum City, MA',
      lat: 42.3601,
      lng: -71.0589,
    },
    bio: 'Dr. Carter is a leading neurologist, focusing on movement disorders and neurodegenerative diseases. He is actively involved in clinical research to find new therapies.',
    imageUrl: 'https://picsum.photos/id/204/200/200',
  },
  {
    id: '5',
    name: 'Dr. Chloe Kim',
    specialty: Specialty.Orthopedics,
    rating: 4.9,
    reviews: 250,
    gender: 'Female',
    availability: ['Tue', 'Thu', 'Fri'],
    insurances: ['Aetna', 'Humana', 'BlueCross'],
    location: {
      address: '246 Joint Relief Rd, Bonedale, FL',
      lat: 25.7617,
      lng: -80.1918,
    },
    bio: 'Dr. Kim is a renowned orthopedic surgeon specializing in sports medicine and joint replacement. She helps athletes and individuals return to their active lifestyles.',
    imageUrl: 'https://picsum.photos/id/206/200/200',
  },
   {
    id: '6',
    name: 'Dr. Marcus Holloway',
    specialty: Specialty.General,
    rating: 4.6,
    reviews: 124,
    gender: 'Male',
    availability: ['Mon', 'Tue', 'Wed', 'Thu'],
    insurances: ['Cigna', 'Humana'],
    location: {
      address: '555 Wellness Way, Healthburg, WA',
      lat: 47.6062,
      lng: -122.3321,
    },
    bio: 'Dr. Holloway is a family medicine physician dedicated to comprehensive healthcare for all ages. He believes in a preventative approach to medicine.',
    imageUrl: 'https://picsum.photos/id/208/200/200',
  },
];

export const PATIENTS: Patient[] = [
    { id: 'p1', name: 'Liam Gallagher', avatar: 'https://picsum.photos/id/1005/40/40', email: 'liam.g@email.com', phone: '555-0101', lastVisit: '2023-05-12', emContact: { name: 'Noel Gallagher', phone: '555-0102', relation: 'Brother' }, history: [{ date: '2023-05-12', reason: 'Follow-up' }, { date: '2023-03-01', reason: 'Initial Consultation' }] },
    { id: 'p2', name: 'Olivia Wilde', avatar: 'https://picsum.photos/id/1011/40/40', email: 'olivia.w@email.com', phone: '555-0103', lastVisit: '2023-06-20', emContact: { name: 'Jason Sudeikis', phone: '555-0104', relation: 'Partner' }, history: [{ date: '2023-06-20', reason: 'Annual Check-up' }] },
    { id: 'p3', name: 'Noah Robinson', avatar: 'https://picsum.photos/id/1025/40/40', email: 'noah.r@email.com', phone: '555-0105', lastVisit: '2023-07-01', emContact: { name: 'Sarah Robinson', phone: '555-0106', relation: 'Spouse' }, history: [{ date: '2023-07-01', reason: 'New Patient Visit' }] },
    { id: 'p4', name: 'Emma Stone', avatar: 'https://picsum.photos/id/1027/40/40', email: 'emma.s@email.com', phone: '555-0107', lastVisit: '2023-06-15', emContact: { name: 'Dave McCary', phone: '555-0108', relation: 'Spouse' }, history: [{ date: '2023-06-15', reason: 'Lab Results' }, { date: '2023-06-01', reason: 'Bloodwork' }] },
    { id: 'p5', name: 'James Anderson', avatar: 'https://picsum.photos/id/103/40/40', email: 'james.a@email.com', phone: '555-0109', lastVisit: '2023-04-22', emContact: { name: 'Clara Anderson', phone: '555-0110', relation: 'Wife' }, history: [{ date: '2023-04-22', reason: 'Prescription Refill' }] },
];

export const APPOINTMENTS: Appointment[] = [
    { id: 'a1', patient: PATIENTS[0], date: '2023-08-15', time: '09:30 AM', reason: 'Follow-up Consultation', status: 'Upcoming' },
    { id: 'a2', patient: PATIENTS[1], date: '2023-08-15', time: '10:15 AM', reason: 'Annual Check-up', status: 'Upcoming' },
    { id: 'a3', patient: PATIENTS[2], date: '2023-08-15', time: '11:00 AM', reason: 'New Patient Visit', status: 'Upcoming' },
    { id: 'a4', patient: PATIENTS[3], date: '2023-08-14', time: '02:00 PM', reason: 'Lab Results Review', status: 'Completed', notes: 'Discussed cholesterol levels, advised dietary changes.' },
    { id: 'a5', patient: PATIENTS[4], date: '2023-08-14', time: '03:30 PM', reason: 'Prescription Refill', status: 'Completed' },
    { id: 'a6', patient: PATIENTS[0], date: '2023-08-12', time: '10:00 AM', reason: 'Initial Consultation', status: 'Canceled', notes: 'Patient called to reschedule.' },
];

export const CONVERSATIONS: Conversation[] = [
    { id: 'c1', patient: PATIENTS[0], messages: [
        { id: 'm1', sender: 'patient', text: 'Hi Dr. Chen, I have a quick question about my new prescription.', timestamp: '10:30 AM' },
        { id: 'm2', sender: 'doctor', text: 'Hello Liam, of course. What is your question?', timestamp: '10:32 AM' },
    ], lastMessage: 'Hello Liam, of course. What is your question?', lastMessageTime: '10:32 AM', unreadCount: 0 },
    { id: 'c2', patient: PATIENTS[3], messages: [
        { id: 'm3', sender: 'patient', text: 'Hello, I wanted to confirm my appointment for next week.', timestamp: 'Yesterday' },
    ], lastMessage: 'Hello, I wanted to confirm my appointment...', lastMessageTime: 'Yesterday', unreadCount: 1 },
    { id: 'c3', patient: PATIENTS[1], messages: [
        { id: 'm4', sender: 'doctor', text: 'Hi Olivia, your test results are in. Please give us a call at your convenience to discuss.', timestamp: '2 days ago' },
    ], lastMessage: 'Hi Olivia, your test results are in...', lastMessageTime: '2 days ago', unreadCount: 0 },
];


export const INSURANCES = ['Cigna', 'Aetna', 'BlueCross', 'UnitedHealthcare', 'Humana'];
export const GENDERS = ['Male', 'Female'];
export const AVAILABILITY_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];