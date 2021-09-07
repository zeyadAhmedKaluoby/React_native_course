import React from "react";
import { FlatList,StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

export default MealList = (props)=>{
return (<View style={styles.list}>
    <FlatList data={props.listData}
    style={{width:'100%'}}
     keyExtractor={(item,index)=>{
        return item.id
    }}
    renderItem={(itemData)=>{
        console.log(itemData.item.title);
        return (
        <MealItem
        image={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
         title ={itemData.item.title}
        onTap={()=>{
                props.navigation.navigate({routeName:'MealDetail',params:{
                    mealId: itemData.item.id,
                    mealTitle:itemData.item.title
                }})
        }}>
        </MealItem>)
    }}
    />
  </View>)
}

const styles=StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})