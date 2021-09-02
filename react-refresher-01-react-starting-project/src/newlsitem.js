import React, { useState } from'react'
const NewListItem = (props)=>{
    const [inpTxt,setInpTxt] = useState('')

    const goalHandler = (e)=>{
        e.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            title: inpTxt
        }
        props.addNewItem(newGoal);
        setInpTxt('')

    }
    return <form onSubmit={
goalHandler
    }>
        <input type="text" value={inpTxt} onChange={(event)=>{
            setInpTxt(event.target.value);
        }}/>
        <button type="submit" >add item</button>
    </form>
}

export default NewListItem;