
1.The significance of union and intersection types in Typescript.

Union Types (|):
Union types allow a value to be one of many types, giving flexibility to handle values that could vary between different options. 

example:
type Shape = 'circle' | 'square' | 'triangle';
const selectedShape: Shape = 'circle';

Intersection Types (&):
Intersection types combine multiple types into one, making the value meet all the requirements of those types.
example:
type ContactInfo = {
  email: string;
  phone: string;
}

type Address = {
  street: string;
  city: string;
}

type UserProfile = ContactInfo & Address;

const user: UserProfile = {
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  street: '123 Elm St',
  city: 'Metropolis'
};

Union types are flexible, while intersection types make the value more specific.
