import React, { Component } from 'react'
import Video from './Video'
import Home from './Home'
import MainPage from './view/main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './view/login';
import { AuthProvider } from "./contexts/AuthContexts";


class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<AuthProvider>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/main" component={MainPage} />
							<Route path="/:url" component={Video} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		)
	}
}

export default App;