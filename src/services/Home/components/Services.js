import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RoundedButton from '../../../shared/components/Button/Rounded';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import ScrollMenu from "react-horizontal-scrolling-menu";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import arrow5 from '../../../assets/home/arrow5.png'
import { shadows } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Radium from 'radium';

function TextFieldSizes() {

    const history = useHistory()
    var value = ""

    let items = [
        {

            services: "Room Service",
            imageUrl: "https://cdn.zeplin.io/5af42663188049271b3ae959/assets/C9479B3F-4E34-4794-BA30-4C139B82D6D2.svg"

        },
        {
            services: "Dental Kit",
            imageUrl: "https://cdn.zeplin.io/5af42663188049271b3ae959/assets/1726C101-BBE7-47C5-9F1A-A0E99736588B.svg"
        },
        {
            services: "Shaving Kit",
            imageUrl: "https://cdn.zeplin.io/5af42663188049271b3ae959/assets/A7289ADA-DA04-462B-8BB3-0C94B470877E.svg"
        },
        {
            services: "Fresh towels",
            imageUrl: "https://cdn.zeplin.io/5af42663188049271b3ae959/assets/A2E5D614-E32B-4D8A-B76D-67DAC4DD235F.svg"
        },
        {
            services: "water",
            imageUrl: "https://cdn.zeplin.io/5af42663188049271b3ae959/assets/4C1DBA35-E7E2-4986-A7BE-8A3B13A38B11.svg"
        },
        {
            services: "Tissue",
            imageUrl: "https://cdn.zeplin.io/5af42663188049271b3ae959/assets/2AD1B33C-A68B-4625-9767-707F22AACE59.svg"
        }
    ]
    let windowWidth = window.innerWidth;

    const pointerStyle = {
        color: '#ff5656',
        position: 'absolute',
        right: '6vw',
        top: '28%',
        cursor: 'pointer'
    }

    const serviceSearchStyle = {
        width: '85vw',
        height: '4vh',
        margin: '0 5vw',
        border: '1px solid #cdcdcd',
        borderRadius: '13px',
        fontSize: '14px',
        ":focus": {
            outline: 'none'
        },
        fontWeight: '500',
        fontFamily: '"Josefin Sans", sans-serif',
        padding: '8px',
        paddingLeft: '10px'
    }
    
    const goBack = () => {
        history.push('/requests');
    }
    return (


        <div style={{ width: "100%" }} >
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <div style={{ marginLeft: '10px', color: '#6d6d6d', fontSize: '14px', letterSpacing: '0.8px', marginBottom: '20px' }}><h3>Services</h3></div>
                <div style={{ marginTop: '-16px' }} >
                    <Badge style={{ marginBottom: "-40px", marginLeft: "100px" }} badgeContent={"!"} color="error">
                    </Badge>
                    <RoundedButton onClick={goBack} size="small" style={{ backgroundColor: "#0295aa", marginBottom: '25px' }}>My Requests</RoundedButton>
                </div>
            </div>
            <form noValidate autoComplete="off">


                <div>
                    {/* <TextField
                        // className={classes.inputfield}
                        label="Search"
                        id="outlined-size-small"
                        // defaultValue="Small"
                        placeholder="Ask for anything"
                        variant="outlined"
                        size="small"
                        fullWidth
                    /> */}
                    {/*<Paper
                        elevation={0}
                        component="form"
                        style={{
                            borderRadius: '20px',
                            margin: '5px',
                            height: '43px',
                            marginTop: '-10px',
                            border: "1px solid #cdcdcd",
                        }}
                    >
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "0px"
                        }}
                        >
                            <InputBase
                                placeholder="Ask for anything"
                                style={{ marginLeft: '10px' }}
                            />
                            <IconButton aria-label="search" style={{ marginLeft: windowWidth * 0.32 + 'px' }} >
                                <img src={arrow5} style={{ color: '#ff5656' }} width="20" height="20" viewBox="0 0 30 30"></img>
                            </IconButton>

                        </div>
                    </Paper>*/}
                    <div>
                        <form style={{position: 'relative'}}>
                            <input id="serviceSearch" style={serviceSearchStyle} type="text" placeholder="Ask for anything" autocomplete="off"/>
                            <img src={arrow5} style={pointerStyle} width="20" height="20" viewBox="0 0 30 30"></img>
                        </form>
                    </div>
                    
                </div>

            </form>

            <div style={{ display: "flex", overflow: "scroll", marginTop: "0px" }} >

                <ScrollMenu

                    data={items.map(res =>
                        <Box boxShadow={1} style={{ height: "90px", width: "100px", margin: "20px", marginRight: "10px", borderRadius: '10px' }}>
                            <CardMedia
                                style={{ height: "45px", marginTop: '10px', width: '50px', marginLeft: '25px', marginBottom: "0", }}
                                image={res.imageUrl}
                                title="services"
                            //  onClick={handleService}
                            />
                            <Typography>
                                <p style={{ fontSize: '12px', fontWeight: 600, textAlign: 'center', marginLeft: "6px", color: '#6d6d6c' }}>  {res.services}</p>
                            </Typography>
                        </Box>
                    )} />
            </div>

        </div>
    );
}

export default Radium(TextFieldSizes);
