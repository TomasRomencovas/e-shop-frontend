import axios from "axios";

type LoginArguments = {
  email: string;
  password: string;
};

type User = {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  postCode: string;
};

type LoginResponse = {
  token: string;
  user: User;
};

const API_HOST = import.meta.env.VITE_API_HOST;

export async function handleLogin({ email, password }: LoginArguments) {
  const response = await axios.post<LoginResponse>(`${API_HOST}/login`, {
    email,
    password,
  });
  const data = response.data;

  return data;
}
