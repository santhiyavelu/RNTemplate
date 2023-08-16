import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  LoginScreen,
  SignupScreen,
  TestSaga,
  TestContainer,
  TestFeed,
} from '../containers';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Button, Text, View, Linking} from 'react-native';
import {userActions} from '../features/user/userSlice';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {}, []);

  getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="TestFeed" component={TestFeed} />
        <Stack.Screen name="Test" component={TestContainer} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="signupScreen" component={SignupScreen} />
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{getAuthStack()}</Stack.Navigator>;
};

export default Navigation;
