import React  from 'react'
import {Text,StyleSheet, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
const GoalItem = (props)=>{
return (
    <TouchableNativeFeedback onPress={()=>{props.onDelete(props.id)}}>
<Text style={styles.listItem}>{props.titleObj.title}</Text>
</TouchableNativeFeedback>
);
}
export default GoalItem;
const styles =StyleSheet.create({
    listItem:{
        padding:10,
        borderColor :'lightblue',borderWidth:1,marginVertical:10
        ,backgroundColor:'lightgrey'
      }
})
