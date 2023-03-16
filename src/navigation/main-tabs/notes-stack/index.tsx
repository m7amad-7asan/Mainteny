import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NotesRoutes} from '@Core';
import {NotesListScreen, NoteEditScreen} from '@Screens';

const NotesStackNavigator = createStackNavigator<NotesRoutes>();

export const NotesStack = () => (
  <NotesStackNavigator.Navigator
    initialRouteName="NotesList"
    screenOptions={{headerShown: false}}>
    <NotesStackNavigator.Screen name="NotesList" component={NotesListScreen} />
    <NotesStackNavigator.Screen name="NoteEdit" component={NoteEditScreen} />
  </NotesStackNavigator.Navigator>
);
