import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import _ from 'lodash';

import Routes from './Routes';
import reducers from './reducer';

import { uiTheme } from './style/theme'
import { ThemeProvider } from 'react-native-material-ui';

import MyStatusBar from './component/MyStatusBar';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
/*console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};*/

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
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
