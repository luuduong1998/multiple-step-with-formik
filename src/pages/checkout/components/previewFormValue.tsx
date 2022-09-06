import { Typography } from '@mui/material';
import { useFormikContext } from 'formik';

const PreviewFormValue = () => {
  const { values } = useFormikContext();
  return (
    <Typography sx={{ wordBreak: 'break-all' }}>
      {JSON.stringify(values)}
    </Typography>
  );
};

export default PreviewFormValue;
