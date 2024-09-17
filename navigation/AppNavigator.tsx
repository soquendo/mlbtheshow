import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemScreen from '../screens/ItemScreen';
import RosterScreen from '../screens/RosterScreen';
import PerformanceScreen from '../screens/PerformanceScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#003366' } // Medium navy blue
        }}
      >
        <Tab.Screen name="Items" component={ItemScreen} />
        <Tab.Screen name="Roster" component={RosterScreen} />
        <Tab.Screen name="Performance" component={PerformanceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;