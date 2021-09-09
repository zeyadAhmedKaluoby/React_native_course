import Order from "../../model/order";

export const ADD_ORDER = "ADD_ORDER"
export const SET_ORDER ="SET_ORDER"


export const fetchOrders =()=>{
    return async (dispatch,getState)=>{
        const userId = getState().auth.userId
        try{
       const response = await fetch(`https://shopapp-34979-default-rtdb.firebaseio.com/orders/${userId}.json`,{
            method:'GET'
          });
          if(!response.ok)
          {
              throw new Error('Something went wrong')
          }

        const data = await response.json();
        console.log(data)
        const loadesdOrders =[];
        for(const key in data)
        {
            loadesdOrders.push(new Order(
                key,
                data[key].cartItems,
                data[key].totalAmount,
                new Date(data[key].date)
            ))
        }
        dispatch({
            type:SET_ORDER,
                orders:loadesdOrders     
        })
    }
    catch(e)
    {
        throw e
    }
    }
}


export const addOrder =(cartItems,totalAmount)=>{
    return async( dispatch,getState)=>{
         const date =new Date()
        const token = getState().auth.token
        const userId = getState().auth.userId

        const response = await fetch(`https://shopapp-34979-default-rtdb.firebaseio.com/orders/${userId}.json?auth=${token}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({cartItems, totalAmount:parseFloat(totalAmount) ,date:date.toISOString()})
        });

        const data = await response.json();
        
        dispatch({
        type:ADD_ORDER,
        orderData:{id:data.name,items:cartItems,amount:totalAmount,date:date}
    })}
}