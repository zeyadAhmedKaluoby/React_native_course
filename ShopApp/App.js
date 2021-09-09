/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {

  StyleSheet,

} from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore ,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from'./store/reducers/oreder'
import authReducer from'./store/reducers/auth'
import NavigationContainer from './navigation/NavigationContainer';

const rootReducer = combineReducers({
products:productReducer,
cart:cartReducer,
orders:ordersReducer,
auth:authReducer});
const store=createStore(rootReducer,applyMiddleware(ReduxThunk));

const App= () => {
  

  return (
<Provider store={store}>
  <NavigationContainer/>
</Provider>  )};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
