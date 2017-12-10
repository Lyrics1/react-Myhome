import React,{Component} from 'react';
import  PropTypes from 'prop-types';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import '../Style/header.less';
import Login from './LOGIN';
/*
  公共头部

*/
export default class Header extends Component {
	constructor(props){
		super();
		this.state = {
			menu:'OFF'
		}
		this._controlMenu = this._controlMenu.bind(this)
	}

	componentDidMount(){
		// this._controlMenu();

	}
	
	_controlMenu(){

		var nav = this.refs.nav;
		var nava = this.refs.nava;
		var navb = this.refs.navb;
		if(this.state.menu == "OFF"){
			this.setState({
				menu:"ON"
			});
			nav.style.display="block";
			nava.style.display="block";
			navb.style.display="block";
		}else{
			this.setState({
				menu:"OFF"
			});
			nav.style.display="none";
			nava.style.display="none";
			navb.style.display="none";

		}

	}
	render() {

		return (
			<Router>
				<div>
					<nav className="Header">					
							<ul >
								<li>
									<Link to="/">Lyrics</Link>
									 <img src={require('../image/menu2.png') } alt="菜单" onClick={this._controlMenu}  />

								</li>
								<li ref="nav"> <Link to="/">One Page</Link></li>
								<li ref="nava"><Link to="/signIn">One Page</Link></li>
								<li ref="navb"><Link to="/signUp">One Page</Link></li>
							</ul>

											
					</nav>
					<Route path="/signUp" component={SIGNIN}/>	
					<Route path="/signIn" component={SIGNUP}/>
				</div>
			</Router>

			)
	}
}

const SIGNIN = ({ match }) => (
  <div>
		<Login />
  </div>
)

const SIGNUP = ({ match }) => (
  <div>
    <p>SIGNUP</p>
  </div>
)
