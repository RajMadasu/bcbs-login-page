import { Grid, Pagination } from '@mui/material';
import AppLayout from '../components/AppLayout';
import useUserPage from '../hooks/useUserPage';
import UserCard from '../components/UserCard';
import { IUser } from '../types/IUser';

const UserPage = () => {
  const { users, page, totalPageNumber, setPage } = useUserPage();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <AppLayout>
      <Grid container spacing={5}>
        {users.map((user: IUser) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Pagination count={totalPageNumber} page={page} onChange={handleChange} />
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default UserPage;
