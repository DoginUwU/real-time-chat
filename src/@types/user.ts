import { User as FirebaseUser } from 'firebase/auth';

type User = FirebaseUser;

type SingleUser = {
  uid: string;
  email: string;
  name: string;
  photoURL: string;
};

export type { User, SingleUser };
