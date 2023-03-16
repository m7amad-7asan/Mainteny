import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppRoutes} from '@Core';
import {WelcomeScreen} from '@Screens';

import {MainTabs} from '../main-tabs';

const AppStackNavigator = createStackNavigator<AppRoutes>();

export const AppStack = () => (
  <AppStackNavigator.Navigator
    initialRouteName="Welcome"
    screenOptions={{headerShown: false}}>
    <AppStackNavigator.Screen name="Welcome" component={WelcomeScreen} />
    <AppStackNavigator.Screen name="Tabs" component={MainTabs} />
  </AppStackNavigator.Navigator>
);
