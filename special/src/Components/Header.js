import React,{Component} from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
/*
  公共头部

*/
export default class Header extends Component {
	render() {
		return (
			<Router>
				<nav className="Header">					
						<ul>
							<li><Link to="/">Lyrics</Link></li>
							<li><Link to="/">One Page</Link></li>
							<li><Link to="/">One Page</Link></li>
							<li><Link to="/">One Page</Link></li>
						</ul>					
				</nav>
			</Router>

			)
	}
}
