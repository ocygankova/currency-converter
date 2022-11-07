import { Box, Stack, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { useAppSelector } from 'store/hooks';

function Header() {
  const { headerInfo } = useAppSelector((state) => state.converter);

  return (
    <Box minHeight="60px" borderBottom="1px solid #ccc">
      <Stack direction="row" spacing={4} p={3}>
        {headerInfo.length
          ? headerInfo.map(({ base, rates }) => (
              <Typography key={v4()} variant="h6">
                {rates.UAH.toFixed(2)}
                <Typography variant="body2" component="span" ml={0.5}>
                  UAH / 1 {base}
                </Typography>
              </Typography>
            ))
          : null}
      </Stack>
    </Box>
  );
}

export default Header;
