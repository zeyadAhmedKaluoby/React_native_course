import React from "react";
import {Text,View} from 'react-native'
import MealsNavigation from "./navigation/MealsNavigation";
import { combineReducers, createStore ,applyMiddleware} from "redux";
import ReduxPromise from 'redux-promise';

import mealsReducer from "./store/reducers/Meal";
import { Provider } from "react-redux";

export default App=()=>{
  const createStoreWithMiddleware =   applyMiddleware(ReduxPromise)(createStore);

  const rootReducer = combineReducers({
    meals:mealsReducer
  })
  
  const store= createStoreWithMiddleware(rootReducer)
  
  return <Provider store={store}><MealsNavigation /></Provider> 

}