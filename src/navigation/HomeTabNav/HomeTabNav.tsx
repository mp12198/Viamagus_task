import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../../constants/Colors';
import HomeProfile from '../../screen/Home/HomeProfile';
import GamesPlayed from '../../screen/Home/GamesPlayed';
import Badges from '../../screen/Home/Badges';

export default function Home() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <HomeProfile />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 13},
          tabBarStyle: {backgroundColor: Colors.white},
          tabBarInactiveTintColor: Colors.grayText,
          tabBarActiveTintColor: Colors.lightPurple,
          tabBarIndicatorStyle: {
            backgroundColor: Colors.lightPurple,
            height: 4,
          },
        }}>
        <Tab.Screen name="Games Played" component={GamesPlayed} />
        <Tab.Screen name="Badges" component={Badges} />
      </Tab.Navigator>
    </>
  );
}
