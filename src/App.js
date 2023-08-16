/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

import {AppStateN as AppStateComponent} from './components';
import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';
import {NetworkInfoHelper} from './helpers';
import {appStateActions} from './features/appState/appStateSlice';
import applyConfigSettings from './config';
import Navigation from './navigate';
import Utils from './util';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

applyConfigSettings();
consoleLog = Utils.consoleLog;

const App: () => Node = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log('Initial state: ', store.getState());
    // const unsubscribe = store.subscribe(() => {
    //   // console.log('Updated state: ', store.getState());
    // });
    // return () => {
    //   unsubscribe();
    // };

    LogBox.ignoreAllLogs();

    return () => {
      NetworkInfoHelper.removeNetworkInfoListener();
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      loadingCompleted();
    }
  }, [isLoading]);

  const onBeforeLift = () => {
    setIsLoading(false);
  };

  const loadingCompleted = () => {
    NetworkInfoHelper.networkInfoListener(store.dispatch);
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
          <Navigation />
        </PersistGate>
      </Provider>
      <AppStateComponent
        handleAppState={nextState => {
          store.dispatch(appStateActions.appStateChange(nextState));
        }}
      />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

AppRegistry.registerComponent(appName, () => App);
