import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { IUser } from '../types/IUser';
import { deleteUser } from '../services/userService';

const UserCard = ({ user }: { user: IUser }) => {
  const handleDelete = async (id: number) => {
    await deleteUser(id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' alt='green iguana' height='140' image={user.avatar} />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div' color='text.primary'>
          {`${user.first_name} ${user.last_name}`}
        </Typography>
        <Typography
          gutterBottom
          variant='h6'
          component='div'
          color='text.primary'
          sx={{ fontSize: 12 }}
        >
          {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleDelete(user.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
