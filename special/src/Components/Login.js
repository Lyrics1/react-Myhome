import React,{Component} from 'react';
import PropTypes from 'prop-types';
import '../Style/Login.less';

class Login extends Component{
	constructor(){
		super();
		this.state={
			URL:"/signUp"
		}
	}
	componentWillMount(){
		console.log(this.props)
	}

	render(){
		return(
			<div>
				<form action={this.props.url}>
					<div className="input-groups">
						<label> user </label>
						<input type="text"  placeholder ="请输入用户名"/>
					</div>
					
					<div className="input-groups">
						<label>pass </label>
						<input type="password"  placeholder ="请输入密码"/>
					</div>
					
					
				
				  <button type="submit">submit</button>
				</form>
				
			</div>
			)
	}
}

Login.propTypes ={
	url:PropTypes.string.isRequired
}
export default Login;