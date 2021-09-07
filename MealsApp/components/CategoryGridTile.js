import React from "react";
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
export default  CategoryGridTile =(props)=>{
    return ( <TouchableOpacity
    
        style={styles.gridItem}
         onPress={props.onTap}>
             <View style={{...styles.container,backgroundColor:props.color}}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
      )
}
const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150
    },
    container:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        elevation:3
    }
})
