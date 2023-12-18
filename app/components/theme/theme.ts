import { createTheme } from '@mui/material/styles';
import { green, purple, cyan } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default theme;