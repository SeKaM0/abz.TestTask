/// <reference types="react-scripts" />
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string
}

interface Data {
  count: string;
  links: {
    next_url: string
  };
  page: number;
  users: User[];
}

interface Position {
  id: number;
  name: string;
}
