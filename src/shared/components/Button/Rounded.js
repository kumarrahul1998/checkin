// import React from 'react'
// import { Button } from "react"

// function Basic({ children, ...details }) {
//     return (
//         <div style={{ borderRadius: "100%" }}>
//             <Button


//                 {...details}
//             >
//                 {children}
//             </Button>
//         </div>
//     )
// }
// export default Basic
import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: '#ff5656',
        '&:hover': {
            backgroundColor: '#ff5656',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        borderRadius: '100px',
        height: '100%',
        backgroundColor: '#ff5656',
        textTransform: 'none'
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,

    },
});

export default function CustomizedButtons({ children, ...details }) {
    const classes = useStyles();

    return (
        <div>
            <ColorButton variant="contained" color="primary" className={classes.margin} {...details}>
                {children}
            </ColorButton>

        </div>
    );
}
