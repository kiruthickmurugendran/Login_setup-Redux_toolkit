import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Navbar from '../components/navbar';

const User = () => {
  const { name } = useParams();

  return (
    <>
     <Navbar/>
      <Typography variant="h4">
          hello,{name}
      </Typography>
    </>
  );
};

export default User