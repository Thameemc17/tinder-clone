import Header from "./components/Header";
import SwipeButton from "./components/SwipeButton";
import TinderCard from "./components/TinderCard";
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="App-body">
				<Header />
				<TinderCard />
				<SwipeButton />
			</div>
		</div>
	);
}

export default App;
