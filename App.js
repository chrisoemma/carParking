import React from 'react';
import {Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './src/screens/Home';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        <Home />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
