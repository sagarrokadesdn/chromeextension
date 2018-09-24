document.querySelectorAll("ul li p a").forEach(function(ele,index){
	var iframe = document.createElement('iframe');
	document.body.appendChild(iframe);
	iframe.src = ele.href;
	iframe.hidden= true;
});