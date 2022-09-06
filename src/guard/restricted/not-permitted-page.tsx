/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-extraneous-dependencies */
import { Box } from '@mui/system';
import abc from '../../assets/img/lol.jpg';
import LinkRouter from '../../components/link-router';

const NotPermittedPage = () => (
  <Box sx={{ textAlign: 'center' }}>
    <Box mt={5}>
      <img src={abc} alt="test" style={{ width: '300px' }} />
    </Box>
    <LinkRouter to="/">Go to home</LinkRouter>
  </Box>
);

export default NotPermittedPage;
