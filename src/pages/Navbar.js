import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Link from '@material-ui/core/Link';
import { ReactComponent as LogoSvg } from './logo.svg';


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    nav: {
        backgroundColor: "#fff",
        boxShadow: "none"
    },
    nav__navbar: {
        float: "right"
    },
    nav__menu: {
        width: 570,
        height: 21,
        fontFamily: "Raleway",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#303133",
        float: "right"
    },
    nav__menu__item: {
        color: "#303133",
        paddingLeft: 21,
        paddingRight: 21
    },
    nav__menu__item__popover: {
        padding: theme.spacing(2),
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const guides = open ? 'simple-popover' : undefined;
    const directory = open ? 'simple-popover' : undefined;

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={classes.navbar}>
            <AppBar position="static" className={classes.nav}>
                <Toolbar>
                    <Typography variant="h6" className={classes.nav__brand}>
                        <LogoSvg />
                    </Typography>
                    <Toolbar className={classes.nav__navbar}>
                        <Typography className={classes.nav__menu}>
                            <Link href="#" className={classes.nav__menu__item}>
                                Home
                            </Link>

                            <Link href="#" className={classes.nav__menu__item}>
                                Services
                            </Link>

                            <Link href="#"  aria-describedby={guides} variant="contained" onClick={handleClick} className={classes.nav__menu__item}>
                                Guides
                            </Link>
                            <Popover
                                id={guides}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center',
                                }}
                            >
                                <Typography className={classes.nav__menu__item__popover}>The content of the Popover.</Typography>
                            </Popover>

                            <Link href="#"  aria-describedby={directory} variant="contained" onClick={handleClick} className={classes.nav__menu__item}>
                                Directory
                            </Link>
                            <Popover
                                id={directory}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center',
                                }}
                            >
                                <Typography className={classes.nav__menu__item__popover}>The content of the Popover.</Typography>
                            </Popover>

                            <Link href="#" className={classes.nav__menu__item}>
                                Recipes
                            </Link>
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
}