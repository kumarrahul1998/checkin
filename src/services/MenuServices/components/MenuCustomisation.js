import React,{useState} from 'react';
import NonVegIcon from '../../../assets/home/nonvegicon.jpg';
import Checkbox from '@material-ui/core/Checkbox';
import VegIcon from '../../../assets/home/vegicon.png'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Radio from '@material-ui/core/Radio';
import { addItem, removeItem } from "../../Cart/actions/actionCreator"
import { connect } from 'react-redux'
import CustomizationItem from './CustomizationItem';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function MenuCusomisation({dish, _add_item, _remove_item,cart }) {
    const classes = useStyles();
    // my code 
    const [selectedType,setSelectedType]= useState(null);
    const [open, setOpen] = React.useState(false)

    const [selection, setSelection] = React.useState([])

    const toggleDrawer = () => {
        setOpen((prevState) => !prevState)
    }

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    let Width = window.innerWidth;
    let Height = window.innerHeight;

    const addToCart =() => {
        selection.forEach( (item)=>{
            let temp ={...dish};
            temp.variantChosen=item;
             _add_item(temp,cart)

    })
        
    toggleDrawer()
    }
    // console.log(dish)
    const handleTypeChange=(e)=>{
        setSelectedType(e.target.value);
    }
    return (
        <div>
            <div
                style={{ paddingTop: '5px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
                onClick={() => toggleDrawer()}
            >
                ADD
            </div>
            <Drawer anchor={"bottom"} open={open} onClose={() => toggleDrawer()}>
                <div
                    style={{ height: window.innerHeight * 0.6 }}
                >
                    <div
                        style={{ width: '100%', height: '50px',overflow:"scroll",marginBottom:"20px" }}
                    >
                        <div >
                            <div className="text-center"
                                style={{ fontSize: '20px', color: '#6d6d6d', marginTop: '13px', fontWeight: 600 }}
                            >
                                {dish?.name}
                        </div>
                        </div>
                    </div>
                    {dish.types.length>1?<>
                    <div style={{ margin: "20px", color: '#6d6d6d', }}><b>Choose Type&nbsp;</b></div>
                        {dish.types.map((element,index)=>
                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <div style={{ marginTop: '15px',marginLeft:"20px" }}>   
                                    <div style={{ color: '#6d6d6d' }}>{element}</div>
                                </div>
                                <div style={{ display: 'flex', }}>
                                    <div style={{ marginTop: '15px', color: '#6d6d6d' }}> &#8377;&nbsp; {dish.costs[index]}</div>
                                    <div style={{ margin: '0', }}>
                                    <Radio
                                    checked={selectedType === element}
                                    onChange={handleTypeChange}
                                    value={element}
                                    style={{color:"#ff5656"}}
                                    />
                                </div>

                            </div>
                            </div>

                        )}
                    </>:null}

                    {dish.customizations.length>1?<><div style={{ margin: "20px", color: '#6d6d6d', }}><b>Choose Add-Ons&nbsp;</b> </div>
                    <div >
                        {dish.customizations.map((item,i) =>
                        <CustomizationItem item={item} i={i} dish={dish}/>                            
                        )

                    }
                    </div>
                    </>:null}
                    {/* <div style={{ margin: "20px", color: '#6d6d6d', }}><b>Other Beverages Add On&nbsp;</b>(1/5)</div> */}
                    <div style={{
                        height: Height * 0.07 + 'px',
                        width: Width * 0.85 + 'px',
                        background: '#32c282',
                        marginTop: Height * 0.48 + 'px',
                        position: 'fixed',
                        marginLeft: '7.75%',
                        zIndex: 1000,
                        borderRadius: '5px',
                        bottom: 10
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"center",height:"100%", color: '#fff', position: 'sticky' }}>
                            <div style={{padding:"0 1rem"}}>
                                Total&nbsp;&#8377; 123.00
                            </div>
                            <div style={{padding:"0 1rem",cursor:"pointer"}} onClick={addToCart} >
                                ADD ITEM
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>

        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    _add_item: (item,cart) => dispatch(addItem(item,cart)),
    _remove_item: (item,cart) => dispatch(removeItem(item,cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuCusomisation)
