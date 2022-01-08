import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ACTIVEPARKING,HOME } from '../constants/routeName';
import ActiveParking from '../screens/ActiveParking';
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();


const  AppStack=()=>{
  return (
    <Stack.Navigator initialRouteName={HOME}
     
    >
       <Stack.Screen 
       options={{headerShown: false}}
       name={HOME} component={Home} />
      <Stack.Screen name={ACTIVEPARKING} component={ActiveParking} />

    </Stack.Navigator>
  );
}

export default AppStack