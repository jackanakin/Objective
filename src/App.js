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
      apiKey: "AIzaSyAry4RDke0xA1km2Q0ArjkJpOTXqrFHRK0",
      authDomain: "ark-objective.firebaseapp.com",
      databaseURL: "https://ark-objective.firebaseio.com",
      projectId: "ark-objective",
      storageBucket: "ark-objective.appspot.com",
      messagingSenderId: "637300781377"
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