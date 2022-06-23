import React, { useState } from "react";
import TinderCards from "react-tinder-card";
import "./TinderCard.css";

function TinderCard() {
	const [people, setPeople] = useState([
		{
			name: "Tom Holland",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg",
		},
		{
			name: "Tony Stark",
			url: "https://imageio.forbes.com/blogs-images/scottmendelson/files/2018/04/infinitywar5a4bb101945c2-1200x800.jpg?format=jpg&width=960",
		},
	]);

	const swiped = (direction, nameToDelete) => {
		console.log("Removing " + nameToDelete);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen");
	};
	return (
		<div className="Tinder-card">
			<div className="Tinder-card-container">
				{people.map((person) => (
					<TinderCards
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(direction) => swiped(direction, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCards>
				))}
			</div>
		</div>
	);
}

export default TinderCard;
