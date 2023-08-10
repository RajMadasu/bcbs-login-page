import { ILoginRequest, ILoginResponse } from '../types/login';
import serviceInstance from './index';

export const loginRequest = (data: ILoginRequest): Promise<ILoginResponse> => {
  return serviceInstance.post(`/login`, data);
};
