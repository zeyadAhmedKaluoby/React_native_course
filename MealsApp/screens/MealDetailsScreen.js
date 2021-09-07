import React from "react";
import {Text,View,StyleSheet,ScrollView, TouchableOpacity, Image} from 'react-native'
import { MEALS } from "../data/dummy-data";
import Icon from 'react-native-vector-icons/Ionicons';
export default MealDetailsScreen=(props)=>{
  const meId= props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal=>meal.id==meId);

  return (<ScrollView>
    <Image  source={{uri:selectedMeal.imageUrl}} style={{width:'100%',height:200}}/>
    <View style={{flexDirection:'row',padding:15,justifyContent:'space-around'}}>
<Text>{selectedMeal.duration}m</Text>
<Text>{selectedMeal.complexity}</Text>
<Text>{selectedMeal.affordability}</Text>

        </View>
<Text>Ingrediants</Text>
{selectedMeal.ingredients.map(ingredient=>(<View key={ingredient} style={{marginVertical:10,marginHorizontal:20,borderColor:'#ccc',borderWidth:2,padding:10}}><Text >{ingredient}</Text></View>))}
  </ScrollView>)

}
MealDetailsScreen.navigationOptions=(navigationData)=>{
  const meId= navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal=>meal.id==meId);

  return{
    headerTitle:selectedMeal.title,
    headerRight:()=> <TouchableOpacity  >
      <View>
      <Text>Fav</Text>
    </View></TouchableOpacity>
  }
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
