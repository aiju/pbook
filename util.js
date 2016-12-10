function show(e){
	if(e.srcElement.innerHTML == "show"){
		e.srcElement.nextSibling.className = 'hidden-vis';
		e.srcElement.innerHTML = 'hide';
	}else{
		e.srcElement.nextSibling.className = 'hidden';
		e.srcElement.innerHTML = 'show';
	}
}
