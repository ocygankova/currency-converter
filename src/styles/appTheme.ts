import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    background: {
      default: '#ddd'
    },
    divider: '#bbb'
  },
  typography: {
    h1: {
      fontSize: '4rem'
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none'
          },
          '& input[type=number]': {
            MozAppearance: 'textfield'
          }
        }
      }
    }
  }
});
