import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const addItem = (payload,cart) =>{ 
  // console.log(cart)
  // console.log(cart?.items?.data?.find(i=>i.pk==payload.pk&&i.variantChosen.pk==payload.variantChosen.pk))
  if(cart?.items?.data?.find(i=>i.pk==payload.pk&&i.variantChosen?.pk==payload.variantChosen?.pk)){
  const index= cart.items.data.findIndex((i)=>i.pk==payload.pk&&i.variantChosen?.pk==payload.variantChosen?.pk);
  const item = cart;
  
  item.items.data[index].quantity= item.items.data[index].quantity+1;
  // console.log(item);
  return ({
    type:ACTION.INCREASE_ITEM,
    payload: item,
  })
}
else{
  const item= payload;
  if(item.quantity==undefined)item.quantity=0
  item.quantity=item.quantity+ 1;
  return ({
  type: ACTION.ADD_ITEM,
  payload:item,
})
}
}
export const removeItem = (payload,cart) =>{
 
  var quantity=0;
 quantity= cart.items.data.find(i=>i.pk==payload.pk&&i.variantChosen==payload.variantChosen).quantity
  if(quantity>1){
    const index= cart.items.data.findIndex(i=>i.pk==payload.pk&&i.variantChosen==payload.variantChosen);
    const item = cart;
    
    item.items.data[index].quantity= item.items.data[index].quantity-1;
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
          total = total+((item.variantChosen.price+item.price)*item.quantity)
      }else{
        total=total+(item.price*item.quantity)
        
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