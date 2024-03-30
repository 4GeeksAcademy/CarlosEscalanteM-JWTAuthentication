import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(()=>{
		if( store.localStorageCheck && !store.token){
			navigate("/login");
		}
	},[store.token, navigate])

	return (
		<div className="text-center mt-5">
			<h1>'Sup Profile'</h1>
		</div>
	);
};