import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import AbsoluteItems from '../components/AbsoluteComponents'
import CartItems from '../components/CartItems';
import complete from "../../../assets/order/complete.gif"
import { makeStyles,Typography } from '@material-ui/core';

const useStyles= makeStyles({
    completeImage:{
        height:"auto",
        width:"100vw",
        // display:"block",
        // margin: "0 auto"
    },
    orderText:{
        color:"#6d6d6d"
    }
})


export const ViewCartPage = () => {
    const history = useHistory()
    const height = window.innerHeight;

    React.useEffect(() => {
        console.log(history);
    })

    // console.log(completeImage)
    const cartNavStyle = {
        width: '100vw',
        borderBottom: "1px solid lightgrey",
        boxShadow: '0px 1.5px 1px 0px lightgrey',
        backgroundColor: '#ececec',
        height: '50px',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex:"20",
    }
    const classes = useStyles();
    return (
        <div >
            <div id="complete" style={{display:"none",position:"absolute"}}>
            <div style={{display:"flex" ,alignItems:"center",height:"90vh",justifyContent:"center",flexDirection:"column",background:"#ffffff",zIndex:"1000"}}>
            <img className={classes.completeImage} src={complete} width={50} height={50}    />
            <Typography variant="h6" className={classes.orderText}>Order Placed</Typography>
            </div>
            </div>
            <div
                style={cartNavStyle}
            >
                <div style={{ display: 'flex', }}>
                    <div style={{ marginTop: '15px', marginLeft: '10px' }}>
                        <ArrowBackIosIcon style={{ color: '#6d6d6d',cursor:"pointer" }} onClick={() => history.hasOwnProperty("goBack") ? history.goBack() : history.push("/menu")} />
                    </div>
                    <div>
                        <div style={{ color: "#6d6d6d", marginTop: '20px', fontSize: '20px' }}>
                            Cart
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '50px',}}>
                <CartItems />
            </div>
            
            <div style={{
                width: "100%",
                height: "5.5vh",
                overflow: "hidden",
                position: "sticky",
                bottom: 0,
                backgroundColor: "#32c282",
                marginTop: height * 0.8 + 'px',
            }}>

                <AbsoluteItems />

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCartPage)
