import { Box, Divider, Stack, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { useAppSelector } from 'store/hooks';

function Header() {
  const { headerInfo } = useAppSelector((state) => state.converter);

  return (
    <Box>
      <Stack direction="row" justifyContent="center" spacing={2} py={2}>
        {headerInfo.length
          ? headerInfo.map(({ base, rates }) => (
              <Typography key={v4()}>
                {rates['UAH'].toFixed(2)} UAH / {base}
              </Typography>
            ))
          : null}
      </Stack>
      <Divider />
    </Box>
  );
}

export default Header;
