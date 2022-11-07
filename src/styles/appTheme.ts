import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    background: {
      default: '#ddd'
    }
  },
  typography: {
    h6: {
      fontSize: '1.1rem'
    },
    subtitle1: {
      color: '#70757a'
    },
    subtitle2: {
      color: '#70757a'
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
