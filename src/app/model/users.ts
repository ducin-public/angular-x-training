export interface Address {
  street: string;
  city: string;
  country: string;
}

export type DateString = string;

export interface User {
  id: number;
  departmentId: number;
  firstName: string;
  lastName: string;
  title: string;
  age: number;
  salary: number;
  email: string;
  addresses: Address[];
  bio: string;
  hiredAt: DateString;
  expiresAt: DateString;
}
