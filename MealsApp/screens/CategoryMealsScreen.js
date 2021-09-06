import React from "react";
import {Text,View,StyleSheet, Button} from 'react-native'
import { CATEGORIES } from "../data/dummy-data";
export default CategoryMealsScreen=(props)=>{
 
 const catId=props.navigation.getParam('categoryId');

    const selectedCat = CATEGORIES.find(cat=>cat.id==catId);
return (<View style={styles.screen}>
    <Text>{selectedCat.title}</Text>
    <Button title='Go to details' onPress={()=>{
        props.navigation.navigate('MealDetail')
    }}/>

  </View>)

}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
