import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import Tinder from "../images/tinder.svg";
import "./Header.css";

function refreshPage() {
	window.location.reload(false);
}

function Header() {
	return (
		<div className="Header">
			<IconButton>
				<PersonIcon fontSize="large" className="Header-icon" />
			</IconButton>
			<IconButton>
				<img
					onClick={refreshPage}
					className="Tinder-logo"
					src={Tinder}
					alt="Tinder Logo"
				/>
			</IconButton>
			<IconButton>
				<ForumIcon fontSize="large" className="Header-icon" />
			</IconButton>
		</div>
	);
}

export default Header;
