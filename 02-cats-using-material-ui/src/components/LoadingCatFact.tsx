import { Typography } from '@mui/material';
import RotateRightRoundedIcon from '@mui/icons-material/RotateRightRounded';

export const LoadingCatFact = () => {
  return (
    <>
      <RotateRightRoundedIcon sx={{ float: 'left', margin: '3px 10px 0 0' }} />
      <Typography variant="h5">Loading...</Typography>
    </>
  );
};
