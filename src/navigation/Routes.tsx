import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenData} from '.';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../constants/Colors';

const Routes = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'gray'},
      }}>
      {screenData?.map((item, index) => {
        return (
          <BottomTab.Screen
            key={index.toString()}
            name={item.name}
            component={item.component}
            options={{
              headerShown: false,
              tabBarIcon: ({focused, color, size}) => {
                return item.family === 'Ionicons' ? (
                  <Ionicons
                    name={item.iconName}
                    color={focused ? Colors.lightPurple : Colors.offIconColor}
                    size={30}
                  />
                ) : (
                  <MaterialIcons
                    name={item.iconName}
                    color={focused ? Colors.lightPurple : Colors.offIconColor}
                    size={30}
                  />
                );
              },
              title: item.tabName,
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
