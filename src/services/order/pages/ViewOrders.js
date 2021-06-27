import React from 'react'
import {Card,Grid,makeStyles,Typography} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import OrderCard from "../components/OrderCard";
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import {SEND_ORDER_STATUS_REQ} from '../middleware/index';

const useStyles= makeStyles(theme=>({
    container:{
        padding: "1rem 4rem",
        [theme.breakpoints.down('sm')]:{
            padding: '0rem 2rem',
        }
    },
    heading:{
        color: "#6d6d6d",
        [theme.breakpoints.down('sm')]:{
            fontSize: '2rem',
            marginTop: '1.125rem'
        }
    }
}))

const ViewOrders = (props) => {
    
    const orderArr= [
    {name:"Farmhouse Pizza",quantity:"3F",status:"pending",time: "3 Minutes ago",addOn:[{heading:"Add On",content:"Extra Cheese"},{heading:"Pizza Crust",content: "Plain Bread"}],request:{heading:"Your Request",content:"Spread the cheese on the crust evenly"}},
    {name:"Butter Chicken",quantity:"1F",status:"progress",time: "3 Minutes ago",request:{heading:"Your Request",content:"Spread the cheese on the crust evenly"}},
    {name:"Garlic Nan",quantity:"1F",status:"cancelled",time: "3 Minutes ago"},
    {name:"Garlic Nan",quantity:"1F",status:"delivered",time: "3 Minutes ago"},
    ];

    React.useEffect(()=>{
        props._get_order_status("11");
        console.log('[ViewOrders.js]orderStatus Data: ',props.orderStatus);
    },[])

    const history= useHistory();
    const handleBackClick=()=>{
        history.push('/home')
    }

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid className={classes.container} item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.heading} variant="h3"><ArrowBackIosIcon onClick={handleBackClick} style={{cursor:"pointer"}} /> Order Status</Typography>
                </Grid>
                <Grid container>
                    <Grid className={classes.container} item lg={12} md={12} sm={12} xs={12}>
                    {props.orderStatus === 'Failed to get Order Status'? (<p>Error Loading Order Status</p>) : orderArr.map((item,index)=><OrderCard key={index} data={item} />)}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    orderStatus: state.order.orderStatus
})

const mapDispatchToProps = dispatch => ({
    _get_order_status: (id) => dispatch(SEND_ORDER_STATUS_REQ(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ViewOrders);
