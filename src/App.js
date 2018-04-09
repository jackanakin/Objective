import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducer';

import { uiTheme } from './style/theme'
import { ThemeProvider } from 'react-native-material-ui';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAPJLKLvvWK45GXh8tZ0kmAeYSe_t2d0Is",
      authDomain: "ark-rn-template.firebaseapp.com",
      databaseURL: "https://ark-rn-template.firebaseio.com",
      projectId: "ark-rn-template",
      storageBucket: "ark-rn-template.appspot.com",
      messagingSenderId: "506495953196"
    };
    firebase.initializeApp(config);
  }

  render() {

    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ThemeProvider uiTheme={uiTheme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;