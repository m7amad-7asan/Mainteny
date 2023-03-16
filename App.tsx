import React from 'react';
import {LogBox} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Application} from '@App';
import {ThemeProvider} from '@Theme';
import {useApp} from '@Store';

const App = () => {
  LogBox.ignoreAllLogs();

  const theme = useApp((state) => state.dark);

  return (
    <ThemeProvider dark={theme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Application />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
