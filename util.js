function show(e){
	if(e.srcElement.nextSibling.style.display == "none"){
		e.srcElement.nextSibling.style.display = 'block';
		e.srcElement.innerHTML = 'hide';
	}else{
		e.srcElement.nextSibling.style.display = 'none';
		e.srcElement.innerHTML = 'show';
	}
}
