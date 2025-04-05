import axios from 'axios';
import { LoginFormData } from '../schemas/login.schema';

const API_URL = 'http://localhost:5000/api/auth';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

export const loginUser = async (data: LoginFormData): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/login`, data);
  return response.data;
};
