import React, { useCallback, useEffect, useState } from "react";
import {Text,View,StyleSheet,Switch} from 'react-native'
import Colors from "../constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";

export default FilterScreen=(props)=>{
  const [isGuten,setIsGuten]=useState(false)
  const [isLactos,setIsLactos]=useState(false)
  const [isVegan,setIsVegan]=useState(false)

  const savedFilters= useCallback(()=>{
    const appliedFilters={
      glutenFree:isGuten,
      lactosFree:isLactos,
      veganFree:isVegan
    }
    console.log(appliedFilters)
  },[isGuten,isLactos,isVegan])

  useEffect(()=>{
    props.navigation.setParams({save:savedFilters})
  },[savedFilters])
  return (<View style={styles.screen}>
    <Text style={{fontSize:22,margin:20,textAlign:'center'}}>Available Filters</Text>
    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%'}} >
      <Text>Gluten Free</Text>
      <Switch value={isGuten} onValueChange={(newVal)=>{
        setIsGuten(newVal)
      }}/>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%'}} >
      <Text>Lactos Free</Text>
      <Switch value={isLactos} onValueChange={(newVal)=>{
        setIsLactos(newVal)
      }}/>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%'}} >
      <Text>vegan </Text>
      <Switch value={isVegan} onValueChange={(newVal)=>{
        setIsVegan(newVal)
      }}/>
    </View>
  </View>)

}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    }
})
FilterScreen.navigationOptions=(navData)=>{
    return{headerTitle:'Filters',
    headerRight:()=> <TouchableOpacity onPress={navData.navigation.getParam('save')}>
      <View>
      <Text>Save</Text>

    </View></TouchableOpacity>
  }}
