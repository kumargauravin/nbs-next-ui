import { createTheme } from '@mui/material/styles';
import { green, purple, cyan } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default theme;