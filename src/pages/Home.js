import React from "react";
import Typing from "react-typing-animation";
import styles from "./Home.module.css";
import DoneAll from "@material-ui/icons/DoneAll";
import EuroSymbol from "@material-ui/icons/EuroSymbol";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import Contacts from "@material-ui/icons/Contacts";
import People from "@material-ui/icons/People";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Navbar from './Navbar';
import Header from './Header';
import JoinUs from './Joinus';

const Home = () => {
	return (
		<div className={styles.root}>
			<Navbar />
			<Header />
			<JoinUs />
		</div>
	);
};

export default Home;
