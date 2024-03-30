import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Singup = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Don't forget to Sign-up!</h1>
		</div>
	);
};