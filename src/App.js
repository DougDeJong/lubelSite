import logo from "./logo.svg";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Al Lubel became a lawyer to please his mother and a year later became
					a standup comedian in order to displease her. Getting stage time is
					hard for a new comic so he decided to, unannounced, stand up in the
					middle of restaurants while people were eating and do his five
					minutes. As he says, “I almost always got big laughs because I had
					everyone’s complete attention because they were scared I might hurt
					them.” . . .
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
