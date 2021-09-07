import React from "react";
import {Text,View,StyleSheet, Button, FlatList} from 'react-native'
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";


export default CategoryMealsScreen=(props)=>{
 
 const catId=props.navigation.getParam('categoryId');

 const availableMeals =useSelector(state=>state.meals.filteredMeals)

const displayedMeals = availableMeals.filter(meal =>meal.categoryIds.indexOf(catId)>=0)
// const selectedCat = CATEGORIES.find(cat=>cat.id==catId);
return (<MealList listData={displayedMeals} navigation ={props.navigation} />)
}


CategoryMealsScreen.navigationOptions=(navigationData)=>{
    const catId=navigationData.navigation.getParam('categoryId');

    const selectedCat = CATEGORIES.find(cat=>cat.id==catId);
   return{ headerTitle:selectedCat.title}
}
