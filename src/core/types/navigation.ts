import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type AppRoutes = {
  Welcome: undefined;
  Tabs: undefined;
};
export interface AppStackNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export type MainRoutes = {
  Home: undefined;
  Notes: undefined;
  Settings: undefined;
};
export interface MainTabskNavigationProps<RouteName extends keyof MainRoutes> {
  navigation: BottomTabNavigationProp<MainRoutes, RouteName>;
  route: RouteProp<MainRoutes, RouteName>;
}

export type NotesRoutes = {
  NotesList: undefined;
  NoteEdit: {noteID?: string};
};
export interface NotesStackNavigationProps<RouteName extends keyof NotesRoutes> {
  navigation: StackNavigationProp<NotesRoutes, RouteName>;
  route: RouteProp<NotesRoutes, RouteName>;
}
