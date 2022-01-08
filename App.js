import React from 'react';
import {Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavContainer from './src/navigations';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
     <AppNavContainer />
    </GestureHandlerRootView>
  );
};

export default App;
