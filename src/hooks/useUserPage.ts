import React, { useEffect, useState } from 'react';
import { IUser } from '../types/IUser';
import { getUsers } from '../services/userService';

const useUserPage = () => {
  const [page, setPage] = useState<number>(1);
  const [totalPageNumber, setTotalPageNumber] = useState<number>(2);
  const [users, setUsers] = useState<IUser[]>([]);

  const getUserData = async () => {
    const res = await getUsers(page);
    setUsers(res?.data || []);
    setTotalPageNumber(res?.total_pages || 0);
  };

  useEffect(() => {
    getUserData();
  }, [page]);

  return { page, users, totalPageNumber, setPage };
};

export default useUserPage;
