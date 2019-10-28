import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    title: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
    },
}))


const NavBar = (props) => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button href="/" color="inherit">Home</Button>
                    <Typography variant="h4" color="inherit" className={classes.title}>
                        {props.data}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;