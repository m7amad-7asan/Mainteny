import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainRoutes} from '@Core';
import {HomeScreen, SettingsScreen} from '@Screens';
import {BottomTabs} from '@Components';

import {NotesStack} from './notes-stack';

const MainTabsNavigator = createBottomTabNavigator<MainRoutes>();

export const MainTabs = () => (
  <MainTabsNavigator.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false}}
    tabBar={(props) => <BottomTabs {...props} />}>
    <MainTabsNavigator.Screen name="Home" component={HomeScreen} />
    <MainTabsNavigator.Screen name="Notes" component={NotesStack} />
    <MainTabsNavigator.Screen name="Settings" component={SettingsScreen} />
  </MainTabsNavigator.Navigator>
);
