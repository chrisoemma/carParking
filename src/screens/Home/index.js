import React from 'react';
import {View, Text} from 'react-native';
import HomeComponent from '../../components/HomeComponent';

const Home = ({navigation}) => {
  return (
    <View>
      <HomeComponent  navigation={navigation} />
    </View>
  );
};

export default Home;
