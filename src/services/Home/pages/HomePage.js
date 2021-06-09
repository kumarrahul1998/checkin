import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import OrderStatus from '../components/OrderStatus'
import Trending from '../components/Trending'
import MenuItem from '../components/MenuButton'
import CartIcon from '../../../assets/home/shopping_cart.svg';
import Badge from '@material-ui/core/Badge';
import BillingBottomBar from '../components/BillingBottomBar';
// import Box from '@material-ui/core/Box'
import { _load_orders, _load_restaurent_details, _load_trending_dishes } from '../middleware'
import { connect } from "react-redux"
import {useHistory} from 'react-router-dom';


function HomePage(props) {
    const { loadRestaurentDetails, state, loadOrders, loadTrendingDishes } = props
    const { details } = state
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    document.body.style.backgroundColor = "#fff"
    
    useEffect(() => {
        loadRestaurentDetails()
        loadOrders()
        loadTrendingDishes()

    }, [])

    const cartStyle = {
        position : 'absolute',
        top: '2vh',
        right: '5vw'
    }

    const cartLength = props.cart.items.data.length;

    const history = useHistory();

    // useEffect(() => {
    //     if (details.data.restaurant.pk)
    //         loadTrendingDishes()
    // }, [details.data.restaurant.pk])
    return (
        <div >
            <div >

                <div>
                    <div
                        style={{ width: '100%', borderBottom: "1px solid grey" }}
                    >
                        <div style={{ margin: '15px' }}><div style={{ color: "#ff5656", fontWeight: 600 }}>Room  301</div>
                            <div style={{ fontSize: '10px', fontWeight: 600, marginTop: '5px', color: '#6d6d6d' }}> {details.data.restaurant.display_name ? <h3>{details.data.restaurant.display_name}</h3> : <h3>Oyo Townhouse 032</h3>}  </div>
                            <div style={cartStyle} onClick={() => history.push('/viewcart')}>
                                <Badge style={{ marginBottom: "10vh", marginRight: "-12vw" }} badgeContent={cartLength} color="error">
                                </Badge>
                                <img src={CartIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel />
                <Services />
                <OrderStatus />
                <Trending />

                 <MenuItem style={{position: "fixed" ,right:"100px"}}/>
                <div style={{
                    width: "100%",
                    height: "45px",
                    overflow: "hidden",
                    position: "fixed",
                    bottom: 0,
                    backgroundColor: "#0295aa",
                }}>
                    <BillingBottomBar />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state.home,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    loadRestaurentDetails: () => dispatch(_load_restaurent_details()),
    loadOrders: () => dispatch(_load_orders()),
    loadTrendingDishes: () => dispatch(_load_trending_dishes()),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)