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
        boxShadow: "none",
        marginTop: 34
    },
    navbar: {
        display: 'grid',
        gridTemplateColumns: "auto auto",
        gridGap: 10
    },
    nav__navbar: {
        display: 'grid',
        gridTemplateColumns: "auto auto auto auto auto auto auto auto",
        justifyContent: "end",
        paddingRight: 0
    },
    nav__menu: {
        maxWidth: 570,
        minHeight: 21,
        fontFamily: "Raleway",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#303133",
        gridColumn: 1 / 8
    },
    nav__navbar_login: {
        display: "gird",
        justifyContent: "end"
    },
    nav__menu__item: {
        color: "#303133",
        paddingLeft: 45,
        paddingRight: 25
    },
    nav__menu__item__popover: {
        padding: theme.spacing(2),
    },
    nav__menu_button_login: {
        width: 159,
        height: 46,
        borderRadius: 5,
        backgroundColor: "#2f5bea",
        fontFamily: "Raleway",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "white",
        marginLeft: 100
    }
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
            <AppBar position="static" className={classes.nav}>
                <Toolbar className={classes.navbar}>
                    <div className={classes.nav__brand}>
                        <LogoSvg />
                    </div>
                    <Toolbar className={classes.nav__navbar}>
                        <div className={classes.nav__menu}>
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
                        </div>
                        <div className={classes.nav__navbar_login}>
                            <Button className={classes.nav__menu_button_login}>Login</Button>
                        </div>
                    </Toolbar>
                </Toolbar>
            </AppBar>
    );
}