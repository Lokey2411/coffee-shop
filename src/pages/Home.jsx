import { makeStyles } from "@mui/styles";
import React from "react";
import { useStyles } from "tss-react";

const Home = () => {
	const { classes } = useStyles(styles);
	return <div className={classes.container}>Home</div>;
};

export default Home;

const styles = makeStyles({
	container: {
		fontWeight: "bold",
		textDecoration: "underline",
	},
});
