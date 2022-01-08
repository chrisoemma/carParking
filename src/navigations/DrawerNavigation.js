import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import { DrawerContent } from './DrawerContent';
import AppStack from './AppStack';


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown:false
    }}
    drawerContent={props=><DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home stack" component={AppStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation
