import Product from "../../model/product"

export const DELETE_PRODUCT ='DELETE_PRODUCT'
export const CREATE_PRODUCT='CREATE_PRODUCT'
export const UPDATE_PRODUCT='UPDATE_PRODUCT'
export const SET_PRODUCTS='SET_PRODUCTS'


export const deleteProduct=(productId)=>{

    return async (dispatch,getState)=>{
        const token = getState().auth.token
        await fetch(`https://shopapp-34979-default-rtdb.firebaseio.com/products/${productId}.json?auth=${token}`,{
            method:'DELETE',
            
        });
     dispatch({type:DELETE_PRODUCT,pid:productId});
    }
}


export const createProduct=(title,description,imageUrl,price)=>{
    return async (dispatch,getState)=>{
        const token = getState().auth.token
        const userId = getState().auth.userId

       const response = await fetch(`https://shopapp-34979-default-rtdb.firebaseio.com/products.json?auth=${token}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title, ownerId:userId,description,imageUrl,price})
        });

        const data = await response.json();
        console.log(data)
        dispatch({
            type:CREATE_PRODUCT,
                productData:{
                    id:data.name,
                    ownerId:userId,
                    title,
                    description,
                    imageUrl,
                    price
                
                }
        })
    }


}

export const updateProduct=(id,title,description,imageUrl,price)=>{
    return async (dispatch,getState)=>{
        const token = getState().auth.token
         await fetch(`https://shopapp-34979-default-rtdb.firebaseio.com/products/${id}.json?auth=${token}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title,description,imageUrl,price})
        });
        dispatch(
             {type:UPDATE_PRODUCT,
        pid:id,
    productData:{
        title,
        description,
        imageUrl  ,
        price
    }
    }
        );
}
}


export const fetchProducts =()=>{
    return async (dispatch,getState)=>{
            const userId = getState().auth.userId
        try{
       const response = await fetch('https://shopapp-34979-default-rtdb.firebaseio.com/products.json',{
            method:'GET'
          });
          if(!response.ok)
          {
              throw new Error('Something went wrong')
          }

        const data = await response.json();
        console.log(data)
        const loadedProducts =[];
        for(const key in data)
        {
            loadedProducts.push(new Product(key,
                userId,
                data[key].title,
                data[key].imageUrl,
                data[key].description,
                data[key].price,

                ))
        }
        console.log(loadedProducts)
        
        dispatch({
            type:SET_PRODUCTS,
            products:loadedProducts   ,
            userProducts:loadedProducts.filter(prop=>prop.ownerId===userId)  
        })
    }
    catch(e)
    {
        throw e
    }
    }
}
