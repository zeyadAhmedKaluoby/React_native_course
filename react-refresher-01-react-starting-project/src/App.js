import React, { useState } from 'react';
import Ls from './ls'
import NewListItem from './newlsitem';
const App = () => {
  const[ ls , setLs] =useState( [
    {id:1,title:"finish section 1"},
    {id:2,title:"finish section 14"}
  ]);
  const addNewItem = (newGoal)=>{
    setLs(
      [...ls,newGoal]
    )
    console.log(ls)
    
  }
  return <div>
    <h2>My name is Zeyad</h2>
    <NewListItem addNewItem = {addNewItem}/>
    <Ls list={ls}/>
  </div>;
};

export default App;
