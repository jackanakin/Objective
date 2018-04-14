import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducer';

import { uiTheme } from './style/theme'
import { ThemeProvider } from 'react-native-material-ui';

import MyStatusBar from './component/MyStatusBar';

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
          <View style={{ flex: 1 }}>
            <MyStatusBar />
            <Routes />
          </View>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;