import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet, Modal } from 'react-native'
const GoalInput = (props) => {
    const [text, setText] = useState('')
    const handleInputTxt = (value) => {
        setText(value);
    }
    return (
        <Modal visible={props.visiblity} animationType="slide" >
        <View style={styles.textContainer}>
            <TextInput placeholder="Course Goal" value={text} onChangeText={handleInputTxt} style={styles.textInput} />
            
            <View style={{flexDirection:'row', justifyContent:'space-between' ,width:'50%'}}>
            <View >
            <Button  title="Cancel " color='red'  onPress={() => {
                props.onCancelModal()
            }} />
            </View>
            <View >
            <Button  title="Add Goal" onPress={() => {
                props.onAddGoalHandler(text)
                setText('')
            }} />
            </View>

            </View>
            </View>
        </Modal>);
}
export default GoalInput;
const styles = StyleSheet.create({
    textContainer: {
       justifyContent: 'center', alignItems: 'center',flex:1
    },
    textInput: { borderColor: "lightblue", borderWidth: 1, padding: 5 ,width:"70%",marginBottom:10},

},


);