import React from 'react';
import { Platform, Text } from 'react-native';
import{createStackNavigator,} from 'react-navigation-stack'
import{createBottomTabNavigator,} from 'react-navigation-tabs'
import{createDrawerNavigator} from 'react-navigation-drawer'
import {
  createAppContainer,
} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FilterScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
 
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailsScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavouritesScreen,
    MealDetail: MealDetailsScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);
const FiltersNavigator = createStackNavigator(
  {
    Filters: {screen:FilterScreen} 
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
   
  },
  Favorites: {
    screen: FavNavigator,

  },
  Filter:FiltersNavigator
};

const MealsFavTabNavigator =
  createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
         
          activeTintColor: Colors.accentColor
        }
      });



const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
    
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);
