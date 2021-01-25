import "./App.css";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import Header from "./components/AppBar";
import Home from "./components/home";
import CreateList from "./components/CreateList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#3A3A3A",
    },
    primary_dark: {
      main: "#282828",
    },
    primary_light: {
      main: "#616161",
    },

    secondary: {
      main: "#a38846",
    },
    secondary_dark: {
      main: "#a38846",
    },
    secondary_light: {
      main: "#eecf83",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
