import React,{Component} from 'react';
import '../Style/CardView.less';
import 'whatwg-fetch';
export default class CardView extends Component{

	constructor(){
		super();
		this.state={left:0}
		this._autoPlay = this._autoPlay.bind(this)
	}

	/* 
	时间周期函数
	*/
	// 初始化组件状态

	//准备加载组件
	componentWillMount(){
		
	}
	
	//组件加载完毕
	componentDidMount() {
		this._autoPlay();
	}

	/*
	自定义函数
	*/
	_autoPlay(){
		//获取dom
		var onePointDOM = this.refs.ONE;
		var twoPointDOM = this.refs.TWO;
		var threePointDOM = this.refs.THREE;
		//设置轮播图动画实现效果
		this.timer=setInterval(function(){
			//显示平滑的效果在css里面实现
			console.log(onePointDOM.style.animation)
			// onePointDOM.style.display="none"
			onePointDOM.style.animation = "";console.log(onePointDOM.style.animation)
			setTimeout(function(){
				onePointDOM.style.animation = 'point 2s';
			},2700)
			var temp = onePointDOM.src;
			onePointDOM.src = twoPointDOM.src;
			twoPointDOM.src = threePointDOM.src;
			threePointDOM.src = temp;

		},3000)
	   
		
	}

	


	render(){
		return(
			<div className="CardView">
				
					<img src={require('../image/1.jpg')} style={{animation:'point 2s'}} alt="" ref="ONE" />
				
			
					<img src={require('../image/2.jpg')} alt="" ref="TWO"  />
				
				
					<img src={require('../image/bg.jpg')} alt=""ref="THREE"  />
				

				
			</div>
			)
	}
} 