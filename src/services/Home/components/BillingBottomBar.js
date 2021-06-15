import React from 'react'
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import { Widgets } from '@material-ui/icons';
import {connect} from 'react-redux';
import {useHistory} from 'react-router'


function BillingBottomBar({cart}) {
    const history = useHistory();
    const amount = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
    return (
        <div style={{ color: "#fff"}} >
            <div style={{ display: "flex", justifyContent: "space-between", marginRight: "5px" }} >
                <div style={{ margin: "8px", display: "flex" }}> <ReceiptOutlinedIcon /><div style={{ marginTop: "7px", marginLeft: "6px" }}>Total: &#8377;{amount}</div> </div>
                <div onClick={() => history.push('/settlebill')} style={{ marginTop: "15px", marginRight: "6px" }}>Settle Bill &#x27A4;&#x27A4;</div>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    cart : state.cart
})

export default connect(mapStateToProps)(BillingBottomBar);
