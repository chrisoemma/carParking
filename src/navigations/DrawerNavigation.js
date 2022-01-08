import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import React from 'react';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown:false
    }}
    drawerContent={props=><DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation
