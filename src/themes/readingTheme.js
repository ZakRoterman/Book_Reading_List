import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#858cb9',
    },
    secondary: {
      main: '#161616',
    },
    background: {
      default: '#6f5e5e',
      paper: '#694c4c',
    },
  },
};

const theme = createTheme(themeOptions);
  
export default theme