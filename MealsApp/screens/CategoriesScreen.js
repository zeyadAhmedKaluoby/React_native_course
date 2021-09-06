import React from "react";
import {CATEGORIES} from '../data/dummy-data'
import {Text,View,StyleSheet,FlatList,TouchableOpacity, Button} from 'react-native'
import Colors from "../constants/Colors";
export default CategoriesScreen=(props)=>{
  const renderGridItem =(itemData)=>{
    return <TouchableOpacity

    style={styles.gridItem}
     onPress={()=>{
        props.navigation.navigate({routeName:'CategoriesMeals',params:{
            categoryId:itemData.item.id
        }})
    }}>
         <View >
        <Text>{itemData.item.title}</Text>
    </View>
    </TouchableOpacity>
  }
  return (<View style={styles.screen}>
      <FlatList keyExtractor={(item,index)=>{
          return item.id
      }} numColumns={2}
       data={CATEGORIES}
        renderItem={renderGridItem}/>
  </View>)

}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150
    }
})

CategoriesScreen.navigationOptions={
    headerTitle:'Meal Categories',
    headerStyle:{
        backgroundColor: Colors.primaryColor,

    },
    headerTintColor:'white'
}