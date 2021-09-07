import React from "react";
import {CATEGORIES} from '../data/dummy-data'
import {Text,View,StyleSheet,FlatList,TouchableOpacity, Button} from 'react-native'
import CategoryGridTile from "../components/CategoryGridTile";
import Icon from 'react-native-vector-icons/Ionicons';

export default CategoriesScreen=(props)=>{
  const renderGridItem =(itemData)=>{
    return <CategoryGridTile title={itemData.item.title}
    color={itemData.item.color}
     onTap={()=>{
        props.navigation.navigate({routeName:'CategoryMeals',params:{
            categoryId:itemData.item.id
        }})
    }} />
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

CategoriesScreen.navigationOptions=(navData)=>{return{
    headerTitle:'Meal Categories',
    headerLeft:()=>{ return <TouchableOpacity  onPress={()=>{navData.navigation.openDrawer()}}
    ><View><Text>Drawer</Text></View></TouchableOpacity>
}
}}