// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type UserProfileType = {
  id: number;
  email: string;
  fullName: string;
  birthday: string;
  phone: string;
  calendar: string;
  result: string;
  graphs: string;
}

export type Nullable<T> = null | T;