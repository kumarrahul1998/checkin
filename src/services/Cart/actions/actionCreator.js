import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const addItem = (payload,cart) =>{ 
  // console.log(cart)
  // console.log(cart?.items?.data?.find(i=>i.name==payload.name&&i.variantChosen.name==payload.variantChosen.name))
  if(cart?.items?.data?.find(i=>i.name==payload.name&&i.variantChosen?.name==payload.variantChosen?.name)){
  const index= cart.items.data.findIndex((i)=>i.name==payload.name&&i.variantChosen?.name==payload.variantChosen?.name);
  const item = cart;
  
  item.items.data[index].cartValue= item.items.data[index].cartValue+1;
  // console.log(item);
  return ({
    type:ACTION.INCREASE_ITEM,
    payload: item,
  })
}
else{
  const item= payload;
  if(item.cartValue==undefined)item.cartValue=0
  item.cartValue=item.cartValue+ 1;
  return ({
  type: ACTION.ADD_ITEM,
  payload:item,
})
}
}
export const removeItem = (payload,cart) =>{
 
  var cartValue=0;
 cartValue= cart.items.data.find(i=>i.name==payload.name&&i.variantChosen==payload.variantChosen).cartValue
  if(cartValue>1){
    const index= cart.items.data.findIndex(i=>i.name==payload.name&&i.variantChosen==payload.variantChosen);
    const item = cart;
    
    item.items.data[index].cartValue= item.items.data[index].cartValue-1;
    console.log(item);
    return ({
      type:ACTION.DECREASE_ITEM,
      payload: item,
    })
  }
  else{
    return ({
      type: ACTION.REMOVE_ITEM,
      payload
    })
  }
}
export const calculateAmount = (cart)=>{
  var total=0;
  if(cart.items.data.length>=1){
    //  const total = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
    cart.items.data.forEach(item=>{
      if(item.variantChosen){
          total = total+((item.variantChosen.price+item.price)*item.cartValue)
      }else{
        total=total+(item.price*item.cartValue)
        
      }
    
    })
// console.log(total);
  }
  return {
  type: ACTION.CALCULATE_AMOUNT,
  payload:{
    Total: total.toFixed(2),
  }
}
}