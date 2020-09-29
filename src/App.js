import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Forgot from "./components/forgotPass";
import Reset from "./components/Reset";
import Verify from "./components/VerifyEmail";
import Verified from "./components/VerifiedEmail";
import AfterForgot from "./components/AfterForgot"

function App() {
	return (
		<UserProvider>
			<Router>
				<NavBar />
				<div className="App">
					<Switch>
						<Route exact path="/login" component={Login}></Route>
						<Route exact path="/register" component={Register}></Route>
						<Route exact path="/forgotPassword" component={Forgot}></Route>
						<Route exact path="/AfterForgot" component={AfterForgot}></Route>
						<Route exact path="/resetPassword" component={Reset}></Route>
						<Route exact path="/verifyEmail" component={Verify}></Route>
						<Route exact path="/verifiedEmail" component={Verified}></Route>

						<Route path="/" component={Login}></Route>
					</Switch>
				</div>
			</Router>
		</UserProvider>

	);
}

export default App;

