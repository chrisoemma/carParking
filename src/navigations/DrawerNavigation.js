import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import React from 'react';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation
