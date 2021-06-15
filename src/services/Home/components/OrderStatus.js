import React from "react"
import OrderFirstImage from '../../../assets/home/noun_shopping_basket.png'
import OrderSecondImage from '../../../assets/home/noun_cooking.png'
import OrderThirdImage from '../../../assets/home/noun_waiter.png'
import RoundedButton from '../../../shared/components/Button/Rounded'
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core"
import { useHistory } from "react-router"

const useStyles= makeStyles(theme=>({
    container:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "130px",
        backgroundColor: "#ffefef",
        [theme.breakpoints.down('sm')]:{
            padding: '10px',
            height: "18vh"
            }
    },
    imageContainer:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "70px",
        backgroundColor: "white",
        marginLeft: '30px',
        borderRadius: "6px", 
        [theme.breakpoints.down('sm')]:{
        marginLeft: '0',

        }

    },
    buttonContainer:{
        display: "flex",
        flexDirection: "column",
        padding: "0",
        width: "100%",
        [theme.breakpoints.down('sm')]:{
            marginTop: '10px',
    
            }
    },

}));


export default function OrderStatus() {
    const classes = useStyles();
    const history= useHistory();
    const handleClick=()=>{
        history.push('/order');
    }
    return (<>
        {/* <Grid style={{ height: "130px", backgroundColor: "#ffefef", marginTop: "15px" ,display:"flex",justifyContent:"space-between",padding:"0"}} container spacing={0}>
            <Grid style={{ margin: "10px", marginLeft: '30px', backgroundColor: "white", borderRadius: "6px", height: "70px", marginTop: "30px" }} item xs={7} lg={7} md={7} sm={7}>
                <Grid container spacing={1}>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderFirstImage} height="16px" />
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderSecondImage} height="16px" />
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderThirdImage} height="18px" />
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <p style={{ fontSize: 10, marginLeft: "6px", marginTop: "0", color: '#6d6d6d', fontSize: '9px', fontWeight: 600 }}>

                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                            
                            </span>
                                0&nbsp;New
                            </p>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <p style={{ fontSize: 9, marginLeft: "6px", marginTop: "0", color: '#6d6d6d', fontSize: '9px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                                2
                                </span>
                                &nbsp;In Progress
                            </p>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <p style={{ fontSize: 10, marginLeft: "6px", marginTop: "0", color: '#6d6d6d', fontSize: '8px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                                2
                                </span>
                                &nbsp;Delivered

                            </p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ marginTop: "30px", marginLeft: '-15px' }} item xs={4} lg={4} md={4} sm={4}>
                <div>
                    <div style={{ fontSize: 13, color: "#6d6d6d", fontWeight: 800, textAlign: "center" }}>Order Status</div>
                    <div >
                        <RoundedButton
                            size={"small"}
                            fullWidth
                        >
                            <span
                                style={{ fontSize: "14px" }}
                            >
                                View Items
                                </span>
                        </RoundedButton>
                    </div>
                </div>
            </Grid>
        </Grid> */}
        <Grid container spacing={0}>
            <Grid item container lg={12} md={12} sm={12} xs={12} className={classes.container} spacing={0}>
                <Grid item lg={5} md={5} sm={7} xs={7} className={classes.imageContainer} >
                <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderFirstImage} height="32px" style={{marginTop: '5px'}}/>
                        <p style={{ marginLeft: "2px", marginTop: "5px", color: '#6d6d6d', fontSize: '10px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >

                            </span>
                                0&nbsp;New
                            </p>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderSecondImage} height="32px"  style={{marginTop: '5px'}} />
                        <p style={{ marginLeft: "2px", marginTop: "5px", color: '#6d6d6d', fontSize: '10px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                                2
                                </span>
                                &nbsp;In Progress
                            </p>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderThirdImage} height="32px"  style={{marginTop: '5px'}} />
                        <p style={{ fontSize: 10, marginLeft: "4px", marginTop: "5px", color: '#6d6d6d', fontSize: '10px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                                2
                                </span>
                                &nbsp;Delivered

                            </p>
                    </Grid>
                    
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5} className={classes.buttonContainer}>
                
                    <div style={{ fontSize: "14px", color: "#6d6d6d", fontWeight: 800, textAlign: "center" }}>Order Status</div>
                    <div >
                        <RoundedButton
                            size={"small"}
                            style={{width: "73%",marginLeft: '15%'}}
                            onClick={handleClick}
                        >
                            <span
                                style={{ fontSize: "14px",fontWeight: 'bold' }}
                            >
                                View Order
                                </span>
                        </RoundedButton>
                    </div>
                
                </Grid>
            </Grid>
        </Grid>
    </>)
}