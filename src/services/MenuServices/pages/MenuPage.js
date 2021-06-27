import React, { useEffect,useState } from 'react'
import AbsoluteItems from '../components/AbsoluteComponents'
import Offers from '../components/Offers'
import CategoriesMenu from '../components/CategoriesMenu'
import Items from '../components/FoodCategories'
import BrowseMenu from '../components/BrowseMenu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { getPromos, loadRecommendedRestaurants, _load_menu } from '../middleware'
import { connect } from "react-redux"
import BottomBar from "../components/AbsoluteComponents";
import Divider from '@material-ui/core/Divider';
import dishes from '../components/Dishes'
import Displaydish from '../components/DisplayDish';

function MenuPage(props) {
    const {
        _load_recommended_restaurants,
        _get_promos,
        _get_Menu,
        menu,
    } = props
    const history = useHistory()
    const handleChange = () => {
        history.push("/home")
    }
    const [dishArr,setDishArr]= useState([]);
    const [currentCategory,setCurrentCategory]= useState('default');
    useEffect(() => {
        _load_recommended_restaurants()
        _get_promos("11")
        _get_Menu()
        
    }, [])

    const windowWidth = window.innerWidth;
    const ids=dishes.map((dish) => ({name: dish.categoryName, href: dish.id, ndish: dish.data.length}))
    // console.log(Dishes);

    const menuNavBarStyle = {
        width: "100vw",
        borderBottom: "1px solid lightgrey",
        boxShadow: '0px 1.5px 1px 0px lightgrey',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '100',
        background: 'white',
        height: 'auto',
        background: 'white'
    }
    // console.log(menu.menudata.data.groups);
    const handleCategoryClick=(category)=>{
        if(currentCategory==='default'){
            // console.log('category clicked==>',category)
            setDishArr(menu.menudata.data.groups.filter(i=>i.category==category))
            setCurrentCategory(category);
        }
        else if(currentCategory===category){
            // setDishArr(menu.menudata.data.groups)
            setCurrentCategory('default');
        }
        else if(currentCategory!==category){
            setDishArr(menu.menudata.data.groups.filter(i=>i.category==category))
            setCurrentCategory(category);
        }
    }
    return (
        <div style={{width: '100vw'}} id="container">
            <div style={menuNavBarStyle} id="MenuNav">
                <div style={{ margin: '15px 2vw 15px 15px', display: 'flex' }}>
                    <div style={{cursor: 'pointer',color:"#6d6d6d"}}>
                        <ArrowBackIosIcon onClick={handleChange} />
                    </div>
                    <div>
                        <div style={{ color: "#ff5656" }}>
                            Menu 
                        </div>
                        <div style={{ fontSize: '10px', marginTop: '5px' ,color:"#6d6d6d"}}>
                            Grey Orange - Lavel Road
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '8vh'}}>
                <Offers />
            </div>
            

            <div style={{ position: 'absolute', zIndex: 10, width: '100%', }} > <CategoriesMenu /></div>
            <Items handleCategoryClick={handleCategoryClick} currentCategory={currentCategory}/>
            {currentCategory==='default'?(menu.menudata.isLoading==false)&&menu.menudata?.data?.groups.map((item, index) => { 
                return( 
                    <div>                                                       
                        <Displaydish key={item.name} obj = {JSON.parse(JSON.stringify(item))} index = {index}/>
                        <Divider style={{ height: '5px', width: "100%" }} />             
                    </div>
                )
            })
            :
            dishArr.map((item, index) => { 
                return( 
                    <div>                                                       
                        <Displaydish key={item.name} obj = {JSON.parse(JSON.stringify(item))} index = {index}/>
                        <Divider style={{ height: '5px', width: "100%" }} />             
                    </div>
                )
            })}
            <BrowseMenu ids={ids}/>
             <BottomBar /> 
        </div>
    )

}
const mapStateToProps = (state) => ({
    menu: state.menu,
})

const mapDispatchToProps = (dispatch) => ({
    _load_recommended_restaurants: () => dispatch(loadRecommendedRestaurants()),
    _get_promos: (id) => dispatch(getPromos(id)),
    _get_Menu: ()=>dispatch(_load_menu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)
