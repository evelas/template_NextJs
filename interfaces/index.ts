// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:

export type User = {
  id: number
  name: string
}

export type UserProfileType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: company;
}

type address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geo;
}

type geo = {
  lat: string;
  lng: string;
}

type company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type Nullable<T> = null | T;