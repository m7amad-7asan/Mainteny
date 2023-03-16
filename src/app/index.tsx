import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import localStorage from '@react-native-async-storage/async-storage';

import {useApp} from '@Store';
import {Box} from '@Theme';
import {AppStack} from '@Navigation';
import {useStorage} from '@Hooks';

export const Application = () => {
  const [loading, setLoading] = useState(false);

  const setTheme = useApp((state) => state.setTheme);

  const {getNotes} = useStorage();

  const getAppTheme = useCallback(async () => {
    setLoading(true);
    const currentTheme = await localStorage.getItem('MojodatLens-Theme');
    if (currentTheme) {
      setTheme(currentTheme === 'true');
    }
    setLoading(false);
  }, [setTheme]);

  useEffect(() => {
    getAppTheme();
  }, [getAppTheme]);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        {loading ? (
          <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
            backgroundColor="Light"
          />
        ) : (
          <AppStack />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
