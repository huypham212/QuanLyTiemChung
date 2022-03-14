import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { MainNavigator } from './navigations';
import store from './redux';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});