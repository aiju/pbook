function show(e){
	if(e.srcElement.parentNode.childNodes[1].style.display == "none"){
		e.srcElement.parentNode.childNodes[1].style.display = 'block';
		e.srcElement.innerHTML = 'hide';
	}else{
		e.srcElement.parentNode.childNodes[1].style.display = 'none';
		e.srcElement.innerHTML = 'show';
	}
}
