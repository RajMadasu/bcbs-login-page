import { IUserResponse } from '../types/IUser';
import serviceInstance from './index';

export const getUserById = (id: number) => {
  return serviceInstance.get(`/users/${id}`);
};

export const getUsers = (page: number): Promise<IUserResponse> => {
  return serviceInstance.get(`/users?page=${page}`);
};

export const deleteUser = (id: number) => {
  return serviceInstance.delete(`/users/${id}`);
}
