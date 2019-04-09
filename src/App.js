import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from './pages/Main';

const palette = {
  primary: { main: '#8E24AA' },
  secondary: { main: '#FF4081' }
};
const themeName = 'Seance Wild Strawberry Corydoras';
const theme = createMuiTheme({ palette, themeName });

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  )
};

export default App;
