import CssBaseline from '@mui/material/CssBaseline';
import { AppContainer, Converter, Header } from 'components';
import { useAppDispatch } from 'store/hooks';
import { useEffect } from 'react';
import { onPageLoad } from 'store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onPageLoad());
  }, []);

  return (
    <AppContainer>
      <CssBaseline />
      <Header />
      <Converter />
    </AppContainer>
  );
}

export default App;
