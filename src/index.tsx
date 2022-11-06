import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { store } from 'store';
import { appTheme } from 'styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </ReduxProvider>
  // </React.StrictMode>
);

reportWebVitals();
