import React from 'react'; //for return

const Ls =(props)=>{

    return     <ul className="ls">
        {
        props.list.map(
            (obj) =>{
              return  <li key={obj.id}>{obj.title}</li>
            }
        )
}

  </ul>
}
export default Ls