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

	render(){
		return(
			<div>
				<form action={this.props.url}>
					<lable> user
						<input type="text"  placeholder ="请输入用户名"/>
					</lable>
					<lable>pass 
							<input type="password"  placeholder ="请输入密码"/>
					</lable>
				
				  <input type="submit" value="submit"/>
				</form>
				
			</div>
			)
	}
}

Login.propTypes ={
	url:PropTypes.string.isRequired
}
export default Login;