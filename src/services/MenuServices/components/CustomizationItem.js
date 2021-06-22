import React from 'react'
import NonVegIcon from '../../../assets/home/nonvegicon.jpg';
import VegIcon from '../../../assets/home/vegicon.png'
import Checkbox from '@material-ui/core/Checkbox';

const CustomizationItem = ({item,i,dish}) => {
    return (
        <div style={i===dish.customizations.length-1?{paddingBottom:"60px"}:{}}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <div style={{ marginTop: '15px',marginLeft:"20px" }}>   
                                    <div style={{ color: '#6d6d6d' }}>{item.name}({item.min_select}/{item.max_select})</div>
                                </div>
                            </div>

                        {item.fields.map(subitem=>
                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <div style={{ marginTop: '15px' }}>   <div style={{ display: 'flex' }}><div style={{ marginLeft: '10px', marginRight: '10px' }}>
                                    {subitem.is_vegetarian? (<img style={{ height: '12px', marginLeft: '10px' }} src={VegIcon} />):(<img style={{ height: '12px', marginLeft: '5px' }} src={NonVegIcon} />)}
                                </div>
                                    <div style={{ color: '#6d6d6d' }}>{subitem.name}</div></div>
                                </div>
                                <div style={{ display: 'flex', }}>
                                    <div style={{ marginTop: '15px', color: '#6d6d6d' }}> &#8377;&nbsp; {subitem.cost}</div>
                                    <div style={{ margin: '0', }}>
                                        <Checkbox
                                            // checked={selection.some(t => t.variantId === item.variantId)}
                                            // onChange={(e) => e.target.checked ? setSelection((prevState) => [...prevState, item]) : setSelection((prevState) => prevState.filter(t => t.variantId !== item.variantId))}
                                            // inputProps={{ 'aria-label': 'success checkbox' }}
                                            style={{ color: 'red' }}
                                        />
                                        </div>
                                </div>
                            </div>
                            )}
        </div>
    )
}

export default CustomizationItem
