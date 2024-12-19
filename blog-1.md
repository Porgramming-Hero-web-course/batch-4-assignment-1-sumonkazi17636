# The Significance of Union and Intersection Types in TypeScript

## Union Types (`|`)

Union types allow a value to be one of many types, providing flexibility to handle values that could vary between different options. 

### Example:


type Shape = 'circle' | 'square' | 'triangle';
const selectedShape: Shape = 'circle';

Intersection Types (&)
Intersection types combine multiple types into one, ensuring the value meets all the requirements of those types.

### Example:
typescript
Copy code
type ContactInfo = {
  email: string;
  phone: string;
};

type Address = {
  street: string;
  city: string;
};

type UserProfile = ContactInfo & Address;

const user: UserProfile = {
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  street: '123 Elm St',
  city: 'Metropolis'
};

Union Types are flexible and allow a value to be one of several types.
Intersection Types enforce a value to satisfy all the specified types, making it more specific.






