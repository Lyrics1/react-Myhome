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
	// constructor(props,context) {
	// 	super(props,context);
	// 	this.state={

	// 	}
	// }
	render() {
		return (
			<Router>
				<nav className="Header">
					
						<ul>
							<li>
								<Link to="/">
									<img src="" alt="主页"/>
								</Link>
							</li>
							<li>
								<Link to="/">One Page</Link>
								<Link to="/">One Page</Link>
								<Link to="/">One Page</Link>
							</li>
						</ul>
					
				</nav>
			</Router>

			)
	}
}
