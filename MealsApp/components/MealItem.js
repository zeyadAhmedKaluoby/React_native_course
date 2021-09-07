import React from "react";
import {Text,View,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native'
const  MealItem =(props)=>{
    return ( <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onTap} >
        
        <View style={{...styles.mealRow,...styles.mealHeader}}>
            <ImageBackground
            style={styles.bgImage}
            source={{uri:props.image}}>
            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
            </ImageBackground>
        </View>
        <View style={{...styles.mealRow,...styles.mealDetails}}>
<Text>{props.duration}m</Text>
<Text>{props.complexity.toUpperCase()}</Text>
<Text>{props.affordability}</Text>

        </View>
    </TouchableOpacity>  
    </View>
    )
}
export default MealItem;
const styles=StyleSheet.create({
    mealItem:{
        backgroundColor:'#f5f5f5',
        width:'100%',
        height:200,
        borderRadius:20,
        overflow:'hidden'
    },
    mealRow:{
        flexDirection:'row'
    },
    mealHeader:{
        height:'80%'
    },
    mealDetails:{
        paddingHorizontal:10,
        justifyContent:'space-between'
    ,alignItems:'center',
    height:'15%'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    title:{
        textAlign:'center',
        fontSize:22,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.7)',
        paddingVertical:10
    }
})
