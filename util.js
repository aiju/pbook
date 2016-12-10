function show(e){
	if(e.target.innerHTML == "show"){
		e.target.nextSibling.className = 'hidden-vis';
		e.target.innerHTML = 'hide';
	}else{
		e.target.nextSibling.className = 'hidden';
		e.target.innerHTML = 'show';
	}
}
