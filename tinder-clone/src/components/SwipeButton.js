import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
import "./SwipeButton.css"; 

function SwipeButton() {
	return (
		<div className="Swipe-button">
			<IconButton className="Swipe-button-repeat">
				<ReplayIcon />
			</IconButton>
			<IconButton className="Swipe-button-left">
				<CloseIcon />
			</IconButton>
			<IconButton className="Swipe-button-star">
				<StarIcon />
			</IconButton>
			<IconButton className="Swipe-button-right">
				<FavoriteIcon />
			</IconButton>
			<IconButton className="Swipe-button-lightning">
				<FlashOnIcon />
			</IconButton>
		</div>
	);
}

export default SwipeButton;
