import './css/App.css';
import Navbar from './components/Navbar';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Home from './components/Home';
import New from './components/New';
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
				    <Route path="/" exact>
                        <Home />
					</Route>
					<Route path="/New" exact>
                        <New />
					</Route>

				</Switch>
			</Router>
		</>
    );
}

export default App;
