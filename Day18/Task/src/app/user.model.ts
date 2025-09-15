export interface User {
  id: number;
  name: string;
  age: number;
  track: string;
  email: string;
}

export interface UserForm {
  id: number;
  name: string;
  age: number | null;
  track: string;
  email: string;
}
