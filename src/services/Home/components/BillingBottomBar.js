import React from 'react'
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import { Widgets } from '@material-ui/icons';
import {connect} from 'react-redux';
import {useHistory} from 'react-router'
import FastForwardIcon from '@material-ui/icons/FastForward';


function BillingBottomBar({cart,amount}) {
    const history = useHistory();
    // const amount = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
    return (
        <div style={{ color: "#fff"}} >
            <div style={{ display: "flex", justifyContent: "space-between", marginRight: "5px" }} >
                <div style={{ margin: "8px", display: "flex",alignItems:"center" }}> <ReceiptOutlinedIcon /><div style={{ marginTop: "3px", marginLeft: "6px" }}>Total: &#8377;{amount.Total}</div> </div>
                <div onClick={() => history.push('/settlebill')} style={{ display:"flex",alignItems:"center"}}>Settle Bill &nbsp; <FastForwardIcon fontSize="small" /></div>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    cart : state.cart,
    amount:state.amount
})

export default connect(mapStateToProps)(BillingBottomBar);
