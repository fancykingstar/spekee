import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typing from "react-typing-animation";
import styles from "./Home.module.css";
import { ReactComponent as HeroSvg } from "./home_fold_1.svg";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    header__top: {
    	display: "grid",
    	gridTemplateColumns: "auto auto",
    	boxShadow: "none",
    	paddingRight: 24,
    	paddingLeft: 24
    },

    header__top__left: {

    },

    header__top_left__title: {
    	marginTop: 130,
		fontSize: 52,
		color: "#303133",
		fontFamily: "Raleway",
		fontWeight: "bold",
		fontStyle: "normal",
		fontStretch: "normal",
		lineHeight: "normal",
		letterSpacing: "normal"
    },

    header__top_left__description: {
		fontSize: 18,
		color: "#303133",
		fontFamily: "Raleway",
		fontWeight: "normal",
		fontStyle: "normal",
		fontStretch: "normal",
		lineHeight: 1.22,
		letterSpacing: "normal",
		marginBottom: 50
    },

    call_to_action_container: {
    	borderRadius: 5,
    	border: "solid 2px #c9cdd5",
    	backgroundColor: "#ffffff",
    	height: 75,
    	boxShadow: "none",
    	display: "grid",
    	gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto auto auto',
    	marginBottom: 24
    },

    call_to_action_container__input: {
    	gridColumn: "1 / span 5",
    	height: 70
    }, 

    call_to_action_container__button: {
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
        marginLeft: 100,
        height: 75,
        marginLeft: 0
    },

    call_to_action_caption_description: {
    	fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.75",
        letterSpacing: "normal",
        color: "#a1a1a1"
    },

    header__bottom: {
    	display: "grid",
    	gridTemplateColumns: "auto auto auto",
    	justifyContent: "center",
    	marginBottom: 104
    },

    header__bottom__list_item: {
    	paddingLeft: 55,
    	paddingRight: 55,
    	boxShadow: "none",
    	textAlign: "center"
    }
}));

const HeroText = () => {
	const texts = [
		"With Guaranteed admission",
		"Without a compromise",
		"With Guaranteed funding"
	];
	return (
		<Typing loop={true}>
			{texts.map((text, idx) => (
				<React.Fragment key={idx}>
					{text}
					<Typing.Delay ms={1500} />
					<Typing.Backspace count={text.length + 1} />
				</React.Fragment>
			))}
		</Typing>
	);
};

const Header = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Paper className={classes.header__top}>
				<Paper className={classes.header__top__left}>
					<Typography variant="h1" className={classes.header__top_left__title}>
						Looking for a successful international career?
					</Typography>
					<Typography variant="body2" className={classes.header__top_left__description}>
						Match your qualifications and goals to over 4000 International
						Universities and careers. We will help you get a guaranteed admission
					</Typography>
					<Paper className={classes.call_to_action_container}>
						<input className={classes.call_to_action_container__input} placeholder="Enter your email to start" />
						<Button className={classes.call_to_action_container__button}>Start Matching</Button>
					</Paper>
					<Typography vareiant="span" className={styles.call_to_action_caption_description}>
						Avail the first free blockchain account to manage all your docs at one
						place.
					</Typography>
				</Paper>
				<Paper className={classes.header__top__right}>
					<HeroSvg className={styles.hero_svg} />
				</Paper>
			</Paper>
			<Paper className={classes.header__bottom}>
				<Paper className={classes.header__bottom__list_item}>
					<h1>1000+</h1>
					<h3>Successful Admissions</h3>
				</Paper>
				<Paper className={classes.header__bottom__list_item}>
					<h1>94%</h1>
					<h3>Get 1st Choice Uni</h3>
				</Paper>
				<Paper className={classes.header__bottom__list_item}>
					<h1>100%</h1>
					<h3>Admit Guarantee</h3>
				</Paper>
			</Paper>
		</React.Fragment>
	);
};

export default Header;