import Product from "../../model/product"

export const DELETE_PRODUCT ='DELETE_PRODUCT'
export const CREATE_PRODUCT='CREATE_PRODUCT'
export const UPDATE_PRODUCT='UPDATE_PRODUCT'
export const SET_PRODUCTS='SET_PRODUCTS'


export const deleteProduct=(productId)=>{

    return async dispatch=>{
        await fetch(`https://shopapp-34979-default-rtdb.firebaseio.com/products/${productId}.json`,{
            method:'DELETE',
            
        });
     dispatch({type:DELETE_PRODUCT,pid:productId});
    }
}


export const createProduct=(title,description,imageUrl,price)=>{
    return async dispatch=>{
        //any async code
       const response = await fetch('https://shopapp-34979-default-rtdb.firebaseio.com/products.json',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title, ownerId:'u1',description,imageUrl,price})
        });

        const data = await response.json();
        console.log(data)
        dispatch({
            type:CREATE_PRODUCT,
                productData:{
                    id:data.name,
                   
                    title,
                    description,
                    imageUrl,
                    price
                
                }
        })
    }


}

export const updateProduct=(id,title,description,imageUrl,price)=>{
    return async dispatch=>{
         await fetch(`https://shopapp-34979-default-rtdb.firebaseio.com/products/${id}.json`,{
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
    return async dispatch=>{
        //any async code
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
                'u1',
                data[key].title,
                data[key].imageUrl,
                data[key].description,
                data[key].price,

                ))
        }
        dispatch({
            type:SET_PRODUCTS,
                products:loadedProducts     
        })
    }
    catch(e)
    {
        throw e
    }
    }
}
