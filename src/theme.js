import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e91e63"
    },
    secondary: {
      main: "#00b0ff"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#e4e4e4"
    }
  }
});

export default theme;
