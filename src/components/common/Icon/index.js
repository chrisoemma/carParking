import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
// import FontAwesome5Regular from 'react-native-vector-icons/FontAwesome5Regular';
// import FontAwesome5Solid from 'react-native-vector-icons/FontAwesome5Solid';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const getFontIcon = type => {
  switch (type) {
    case 'antiDesign':
      return AntDesign;

    case 'entypo':
      return Entypo;

    case 'evil':
      return EvilIcons;

    case 'feather':
      return Feather;

    case 'fontAwesome':
      return FontAwesome;

    case 'fontAwesome5':
        return FontAwesome5;
    // case 'fontAwesome5Brands':
    //   return FontAwesome5Brands;

    // case 'fontAwesome5Regular':
    //   return FontAwesome5Regular;

    // case 'fontAwesome5Solid':
    //   return FontAwesome5Solid;

    case 'foundation':
      return Foundation;

    case 'ionicons':
      return Ionicons;

    case 'materialIcons':
      return MaterialIcons;

    case 'materialCommunityIcons':
      return MaterialCommunityIcons;

    case 'simpleLineIcons':
      return SimpleLineIcons;

    case 'octicons':
      return Octicons;

    case 'zocial':
      return Zocial;

    case 'fontisto':
      return Fontisto;
     default:
     return FontAwesome
  }
};

const Icon = ({type,...props}) => {

     const FontIcon = getFontIcon(type)

      return <FontIcon {...props}/>

};

export default Icon
