
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native'
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {

  const [courseList, setCourseList] = useState([])
  const[visibleModal,setVisible]=useState(false)

  const addGoalHandler = (tx) => {
    setCourseList([...courseList, 
      {id:Math.random(),title: tx}]);
    setVisible(false)
  }
  const cancelModal=()=>{
    setVisible(false);
  }

  const deleteHandler=(id)=>
  {
    setCourseList(courseList=>{return courseList.filter(obj=>obj.id!==id)})
  }
  return <SafeAreaView style={styles.screen}>
    <Button title="Add new goal" onPress={()=>{setVisible(true)}}/>
    <GoalInput visiblity={visibleModal} onAddGoalHandler={addGoalHandler} onCancelModal={cancelModal} />
    <FlatList
      keyExtractor={(item, index) => {
        return item.id
      }}
      data={courseList}
      renderItem={(courseListItem) => {
        return <GoalItem id={courseListItem.item.id}
         titleObj={courseListItem.item}
          onDelete={deleteHandler} />
      }}
    />
  </SafeAreaView>
};

const styles = StyleSheet.create({
  screen: {
    padding: 20
  },
  textContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'
  },
  textInput: { borderColor: "lightblue", borderWidth: 1, padding: 5, width: '60%' },

},


);

export default App;
