import React from 'react'
import { makeStyles,Typography } from '@material-ui/core';
import complete from "../../../assets/order/complete.gif"
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import {orderSent} from '../middleware/index';

const useStyles= makeStyles({
    completeImage:{
        height:"auto",
        width:"50vw",
        // display:"block",
        // margin: "0 auto"
    },
    orderText:{
        color:"#6d6d6d"
    }
})

const OrderSuccessful = (props) => {
    const history = useHistory()
    const classes = useStyles();
    setTimeout(()=>{
        history.push('/home');
        props.orderSent('11');
    },2500);

    return (
            <div style={{display:"flex" ,alignItems:"center",height:"100vh",justifyContent:"center",flexDirection:"column",background:"#ffffff",zIndex:"1000"}}>
            <img className={classes.completeImage} src={complete} />
            <Typography variant="h6" className={classes.orderText}>Order Placed</Typography>
            </div> 
    )
}

const mapDispatchToProps = dispatch => ({
    orderSent : id => dispatch(orderSent(id))
})

export default connect(null,mapDispatchToProps)(OrderSuccessful);
