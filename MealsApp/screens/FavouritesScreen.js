import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
export default FavouritesScreen=(props)=>{
  const favMeals =useSelector(state=>state.meals.favouriteMeals)
  if (favMeals.length ===0)
  {
    return <Text>No favourite items</Text>
  }
  return (<MealList listData={favMeals} navigation={props.navigation}/>)

}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
