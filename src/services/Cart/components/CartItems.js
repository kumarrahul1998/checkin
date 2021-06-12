import React, { Component, useCallback,useState,useEffect } from 'react'
import { connect } from 'react-redux'
import VegIcon from '../../../assets/home/vegicon.png'
import NonVegIcon from '../../../assets/home/nonvegicon.jpg'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import actionTypes from '../actions/actionTypes';

export const CartItems = ({ cart,sendToCart,removeFromCart }) => {
  const items = cart.items.data
  const width = window.innerWidth
  const [value, setValue] = React.useState(1);
  const [major,setMajor]= useState([]);
  var arr=[];
  var uniqueArr=[];
  // items.forEach((item,index)=>{
  //   if(index!==0){
  //     for(let j=0;j<arr.length;j++){
  //       if(arr[j].length>1){
  //       arr[j].forEach((dish2)=>{
  //         if(dish2.name!==item.name){
  //           arr[index]=items.filter(dish=>dish.name==item.name);
  //         }
  //         }
  //       })
  //     }
  //   }else{
  //     arr[index]=items.filter(dish=>dish.name==item.name);

  //   }
  // })
    // useCallback(() => {
    //   items.forEach((item,index)=>{
    //     if(index!==0)
    //     { if(!uniqueArr.includes(item)){
    //       arr[index]= items.filter(dish=>dish.name==item.name)
    //       uniqueArr.push(item);
    //     }
    //     }
    //     else{
    //       arr[index]=items.filter(dish=>dish.name==item.name)
    //       uniqueArr.push(item);
    //     }
    //   })
    //   setMajor([...uniqueArr])
    // }, [items])

    useEffect(()=>{
      findArr();
      console.log(cart);
    },[])
    const findArr = ()=>{
      items.forEach((item,index)=>{
        if(index!==0)
        { const check = uniqueArr.filter(i=>i.name==item.name)
          if(check.length===0){
          // console.log("unique Arr===>",uniqueArr);
          arr[index]= items.filter(dish=>dish.name==item.name)
          uniqueArr.push(item);
        }
        }
        else{
          arr[index]=items.filter(dish=>dish.name==item.name)
          uniqueArr.push(item);
        }
      })
      setMajor([...uniqueArr])
    }
//     console.log("Unique Arr=>",uniqueArr);
// console.log("Array=>",arr);

const handleIncrease = (dish) => {
    sendToCart(dish)
  }
  const handleDecrease = (dish) => {
    if(items.filter(i=>i.name==dish.name).length>1){
      removeFromCart(dish) 
    }else{
      removeFromCart(dish) 
     findArr();
    }
  }
  const handleCustomize = () => {
    // console.log("this is customizeable")
  }

  // console.log(cart)
  // console.log(cart)
  // console.log(items[2].variantId)
  // (cart.items.data) ? console.log(cart.items.data) : console.log(cart)


  const cartSearchStyle = {
    width: '60vw',
    height: '2vh',
    margin: '1vh 4vw',
    border: '1px solid #cdcdcd',
    borderRadius: '1.5vw',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: '"Josefin Sans", sans-serif',
    padding: '8px',
    paddingLeft: '15px'
  }
  
  return (
    <div>
      <div>{major.map((item, index) =>
        <div>
          <div style={{ display: 'flex', }}>
            <div style={{ display: 'flex' }}>
              {item.type === "veg" ? (<div style={{ marginTop: '20px', marginLeft: '15px' }}>
                <img src={NonVegIcon} style={{ height: "10px", width: "10px", marginLeft: "5px", marginTop: "5px" }} />
              </div>) : (<div style={{ marginTop: '20px', marginLeft: '20px' }} ><img src={VegIcon} style={{ height: "11px", width: "11px", marginTop: "5px" }} /></div>)}

              <div style={{ marginTop: '22px', color: '#6d6d6d', fontSize: '14px', marginLeft: '10px', fontWeight: 500 }}>
                {item.name}


                <div> {item.variantId ? (<div style={{ fontStyle: 'JosefinSans-Regular', marginTop: '5px', color: '#ff5656', width: '200px', fontSize: '11px' }} onClick={handleCustomize()} >  Customize <BrightnessLowIcon style={{ fontSize: '8px' }} /> <span style={{ marginRight: '80px', fontWeight: 500, color: '#6d6d6d', marginBottom: '50px', fontSize: '15px', marginLeft: '10px' }} > &#8377;&nbsp;{item.price}</span>  </div>) :
                  <span style={{ marginRight: '100px', fontWeight: 500, color: '#6d6d6d', fontSize: '15px' }} > &#8377;&nbsp;{item.price}</span>}
                </div>

              </div>

              {/* marginLeft: width * 0.15 + 'px' */}
            </div>

            <div>{item.type === "veg" ?
              <div style={{ marginTop: '20px', marginLeft: '58px', color: '#fff' }}>
                <div style={{ width: '60px', height: '20px', backgroundColor: '#f5365c', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', marginLeft: '5px' }}>
                  <div style={{ marginLeft: '11px', marginTop: '2px',cursor:"pointer" }} onClick={()=>handleDecrease(item)}>-</div>
                  <div style={{ marginTop: '4px' }}>{items.filter(i=>i.name==item.name).length}</div>
                  <div style={{ marginRight: '10px', marginTop: '2px',cursor:"pointer" }} onClick={()=>handleIncrease(item)}>+</div>

                </div>

              </div> :
              <div style={{ marginTop: '20px', marginLeft: '108px', color: '#fff' }}>
                <div style={{ width: '60px', height: '20px', backgroundColor: '#f5365c', borderRadius: '5px', display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ marginLeft: '10px', marginTop: '2px',cursor:"pointer" }} onClick={()=>handleDecrease(item)}>-</div>
                  <div style={{ marginTop: '4px' }}>{items.filter(i=>i.name==item.name).length}</div>
                  <div style={{ marginRight: '10px', marginTop: '2px',cursor:"pointer" }} onClick={()=>handleIncrease(item)}>+</div>

                </div>

              </div>}

            </div>

          </div>

          <div>
            <input style={cartSearchStyle} type="text" placeholder="Write special instructions..." />
          </div>
        </div>
      )}

        <div style={{ position: 'fixed', bottom: 50, marginLeft: '65px', color: '#6d6d6d', fontSize: '12px' }}>
          " Does not include extra charges or discounts "
      </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})


const mapDispatchToProps = dispatch => ({
  sendToCart : (data) => dispatch({type : actionTypes.ADD_ITEM, payload : data}),
  removeFromCart: (data)=>dispatch({type:actionTypes.REMOVE_ITEM,payload:data})
})

export default connect(mapStateToProps,mapDispatchToProps)(CartItems);
