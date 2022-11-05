import { Box, Divider, Stack, Typography } from '@mui/material';

function Header() {
  return (
    <Box>
      <Stack direction="row" justifyContent="center" spacing={2} py={2}>
        <Typography>36.77 UAH / USD</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>37.02 UAH / EUR</Typography>
      </Stack>
      <Divider />
    </Box>
  );
}

export default Header;
