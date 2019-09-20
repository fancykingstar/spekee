import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typing from "react-typing-animation";
import styles from "./Home.module.css";
import { ReactComponent as HeroSvg } from "./home_fold_1.svg";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DoneAll from "@material-ui/icons/DoneAll";
import EuroSymbol from "@material-ui/icons/EuroSymbol";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import { ReactComponent as HeroSvg2 } from "./home_fold_3.svg";
import { ReactComponent as HeroSvg3 } from "./home_fold_5.svg";

const useStyles = makeStyles(theme => ({
	why_join_us: {
		fontFamily: "Raleway",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#7e8085",
        textAlign: "center"
	},

	one_platform_solves: {
		fontFamily: "Raleway",
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.35",
        letterSpacing: "normal",
        color: "#2c2e30",
        textAlign: "center"
	},

    join_us__list: {
    	display: "grid",
    	gridTemplateColumns: "auto auto auto",
    	justifyContent: "center",
    	marginBottom: 104
    },

    join_us__list__item: {
    	paddingLeft: 55,
    	paddingRight: 55,
    	boxShadow: "none",
    	textAlign: "center"
    },

    join_us__list__item__icon: {
    	border: "3px solid #6a7071",
		borderRadius: "100%",
		width: 108,
		height: 108,
    },

    join_us__list__item__caption: {
    	fontFamily: "Raleway",
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.42",
        letterSpacing: "normal",
        color: "#303133",
        textAlign: "center"
    },

    join_us__list__item__description: {
    	fontFamily: "Raleway",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.22",
        letterSpacing: "normal",
        color: "#303133",
        textAlign: "center"
    },

    live_your_dream: {
    	display: "grid",
    	gridTemplateColumns: "auto auto"
    },

    live_your_dream_left: {
    	paddingLeft: 165
    },

    live_your_dream_title: {
		fontFamily: "Raleway",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#7e8085"
	},

	its_your_time_to_sh: {
		fontFamily: "Raleway",
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.35",
        letterSpacing: "normal",
        color: "#2c2e30"
	},

	live_your_dreams_description: {
		fontFamily: "Raleway",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.22",
        letterSpacing: "normal",
        color: "#303133"
	}
}));

const JoinUs = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Typography variant="h6" className={classes.why_join_us}>
				WHY JOIN US?
			</Typography>
			<Typography variant="h3" className={classes.one_platform_solves}>
				One platform, solves everything
			</Typography>
			<Paper className={classes.join_us__list}>
				<Paper className={classes.join_us__list__item}>
					<paper className={classes.join_us__list__item__icon}>
						<DoneAll style={{fontSize: 52,  color: "#6a7071"}} />
					</paper>
					<Typography variant="h4" className={classes.join_us__list__item__caption}>Successful Admission</Typography>
					<Typography variant="body" className={classes.join_us__list__item__description}>Debitis amet minima cumque voluptate voluptate sunt qua.</Typography>
				</Paper>
				<Paper className={classes.join_us__list__item}>
					<paper className={classes.join_us__list__item__icon}>
						<EuroSymbol style={{fontSize: 52,  color: "#6a7071"}}/>
					</paper>
					<Typography variant="h4" className={classes.join_us__list__item__caption}>Successful Admission</Typography>
					<Typography variant="body" className={classes.join_us__list__item__description}>Debitis amet minima cumque voluptate voluptate sunt qua.</Typography>
				</Paper>
				<Paper className={classes.join_us__list__item}>
					<paper className={classes.join_us__list__item__icon}>
						<AssignmentInd style={{fontSize: 52,  color: "#6a7071"}} />
					</paper>
					<Typography variant="h4" className={classes.join_us__list__item__caption}>Successful Admission</Typography>
					<Typography variant="body" className={classes.join_us__list__item__description}>Debitis amet minima cumque voluptate voluptate sunt qua.</Typography>
				</Paper>
			</Paper>
			<Paper className={classes.live_your_dream}>
				<Paper className={classes.live_your_dream_left} >
					<Typography variant="h6" className={classes.live_your_dream_title}>
						LIVE YOUR DREAMS
					</Typography>
					<Typography variant="h3" className={classes.its_your_time_to_sh}>
						It’s your time to shine.
						<br />
						We will help you do that.
					</Typography>
					<Typography variant="body2" className={classes.live_your_dreams_description}>
						Match your profile and qualifications to over 4000 Universities and 12000 careers. We will help you with guaranteed admissions.
					</Typography>
				</Paper>
				<Paper className={classes.live_your_dream_right}>
					<HeroSvg2 />
				</Paper>
			</Paper>
			<Paper>
				<Typography variant="h6" className={classes.why_join_us}>
					More than a PLATFORM
				</Typography>
				<Typography variant="h3" className={classes.one_platform_solves}>
					Ensuring that the dream of an international career gets the right start
				</Typography>
			</Paper>
		</React.Fragment>
	);
};

export default JoinUs;