import React from "react";
import Typing from "react-typing-animation";
import styles from "./Home.module.css";
import { ReactComponent as LogoSvg } from "./logo.svg";
import { ReactComponent as HeroSvg } from "./home_fold_1.svg";

const Logo = () => {
	return <LogoSvg className={styles.logo} />;
};

const Nav = () => {
	return (
		<ul className={styles.nav}>
			<li>Home</li>
			<li>Services</li>
			<li className={styles.nav_with_children}>Guides</li>
			<li className={styles.nav_with_children}>Directory</li>
			<li>Recipes</li>
		</ul>
	);
};

const LoginButton = () => {
	return (
		<button type="button" className={styles.login}>
			Login
		</button>
	);
};

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

const CallToAction = () => {
	return (
		<div className={styles.call_to_action_container}>
			<fieldset aria-hidden="true" />
			<input placeholder="Enter your email to start" />
			<button>Start Matching</button>
		</div>
	);
};

const Home = () => {
	return (
		<div className={styles.root}>
			<Logo />
			<Nav />
			<LoginButton />
			<h1 className={styles.hero_text}>
				Achieve your International Career dreams
			</h1>
			<h1 className={styles.hero_text_animated}>
				<HeroText />
			</h1>
			<span className={styles.hero_text_caption}>
				Match your qualifications and goals to over 4000 International
				Universities and careers. We will help you get a guaranteed admission
			</span>
			<CallToAction />
			<span className={styles.call_to_action_caption}>
				Avail the first free blockchain account to manage all your docs at one
				place.
			</span>
			<HeroSvg className={styles.hero_svg} />
			<div className={styles.section_2}>
				<div>
					<h1>1000+</h1>
					<h3>Successful Admissions</h3>
				</div>
				<div>
					<h1>94%</h1>
					<h3>Get 1st Choice Uni</h3>
				</div>
				<div>
					<h1>100%</h1>
					<h3>Admit Guarantee</h3>
				</div>
			</div>
			<div className={styles.section_3}>
				<div className={styles.complete_preparation}>
					<h1>Complete Preparation</h1>
					<h3>
						Course & Recipes for Study goals, IELTS prep, Application essays &
						more
					</h3>
				</div>
				<div className={styles.guaranteed_funding}>
					<h1>Guaranteed Funding</h1>
					<h3>
						Through EdCoins* received when you sign-up. Cover your Application
						or other costs
					</h3>
				</div>
				<div className={styles.guaranteed_admit}>
					<h1>Guaranteed Admit</h1>
					<h3>
						To the best-fit University programs matching your profile and study
						goals
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Home;
