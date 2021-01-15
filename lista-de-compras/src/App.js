import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Header from "./components/AppBar";
import Home from "./components/home";
import CreateList from "./components/CreateList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3A3A3A",
      main_dark: "#282828",
      main_light: "#616161",
    },
    secondary: {
      main: "#a38846",
      main_dark: "#a38846",
      main_light: "#eecf83",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lista" component={CreateList} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
