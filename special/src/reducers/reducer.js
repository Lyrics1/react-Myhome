export default (state = "off",action)=>{
	switch(action.type){
		case 'SHOWMENU' :
			return 'ON';
		case 'HIDEMENU' :
		 	return 'OFF';
	}
}