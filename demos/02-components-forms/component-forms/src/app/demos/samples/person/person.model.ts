export class Person {
  id: number = 0;
  age: number = 0;
  name: string = '';
  email: string = '';
  wealth: string = '';
  gender: 'male' | 'female' | 'not set' = 'not set';
  lastname?: string;
  married?: boolean;
  imgUrl?: string;
  address?: Address = { street: '', city: '', postalCode: '' };
}

export class Address {
  street: string = '';
  city: string = '';
  postalCode: string = '';
}

export const wealthOptsValues = ['poor', 'rich', 'middle_class'];
