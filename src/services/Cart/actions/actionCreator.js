import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const addItem = (payload) => ({
  type: ACTION.ADD_ITEM,
  payload
})

export const removeItem = (payload) => ({
  type: ACTION.REMOVE_ITEM,
  payload
})

export const calculateAmount = (cart)=>{
  var total=0;
  if(cart.items.data.length>=1){
    //  const total = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
    cart.items.data.forEach(item=>total=total+item.price)
// console.log(total);
  }
  return {
  type: ACTION.CALCULATE_AMOUNT,
  payload:{
    Total: total.toFixed(2),
  }
}
}