$(function(){
	$.fn.progressbar.defaults.value = 60;
	$("#box").progressbar({
		width : 400,
		height : 30,
//		value : 40,
//		text : '{value}%',
		onChange : function(newValue, oldValue){
			console.log('newValue:'+newValue+",oldValue:"+oldValue);
		},
	});
	
//	setTimeout(function () {
//		$('#box').progressbar('setValue',70);
//	},1000);
	//实现动画效果
//	setInterval(function () {
//		$('#box').progressbar('setValue',$('#box').progressbar('getValue')+5);
//	},200);
	
//	console.log($('#box').progressbar('options'));
//	$('#box').progressbar('resize',600);//重新设置进度条宽度
});