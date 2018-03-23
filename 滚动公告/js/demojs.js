$(function(){
	//$("ul>:first").css("background","red");
	
	setInterval(function(){
		var newLi = $("ul>:first").clone(true);
		$("ul").append(newLi);
		$("ul>:first").remove();

	},500);
	
})