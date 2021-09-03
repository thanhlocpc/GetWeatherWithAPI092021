import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Provider} from 'react-redux';
import Main from './src/component/Main';
import store from './src/redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Main></Main>
        </View>
      </Provider>
    );
  }
}
