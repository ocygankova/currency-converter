import { ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Paper, useTheme } from '@mui/material';

interface Props {
  children?: ReactNode;
}

function AppContainer({ children }: Props) {
  const theme = useTheme();
  const isWidthXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xs" disableGutters={isWidthXs}>
      <Paper elevation={0} square={isWidthXs} sx={{ p: 2, mt: 10, maxWidth: 'xs' }}>
        {children}
      </Paper>
    </Container>
  );
}

export default AppContainer;
