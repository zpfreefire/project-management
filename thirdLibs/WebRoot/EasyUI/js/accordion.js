$(function() {
	$('#box').accordion({
//		width : 500,
//		height : 300,
//		fit : true,
//		border : false,
//		animate : false,
//		multiple : true,//如果为true时，同时展开多个面板
//		selected : 1,
//		onSelect : function (title, index) {
//			alert(title+'|'+index);
//		},
//		onUnselect : function (title, index) {
//			alert(title+'|'+index);
//		},
//		onAdd : function (title, index) {
//			alert(title+'|'+index);
//		},
		
		onBeforeRemove : function (title, index) {
			alert(title+'|'+index);
		},
	
		onRemove : function (title, index) {
			alert(title+'|'+index);
		},
		
	})/*.hide()*/;
//	console.log($('#box').accordion('panels'));//获取所有面板
//	$(document).click(function(){
//		$('#box').accordion().show();
//		$('#box').accordion('resize');
//	});
//	console.log($('#box').accordion('getSelected'));
//	$(document).click(function () {
//		console.log($('#box').accordion('getSelections')); 
//	});
//	console.log($('#box').accordion('getPanel',1));
//	console.log($('#box').accordion('getPanelIndex','#a2'));
//	console.log($('#box').accordion('select',1));
//	console.log($('#box').accordion('unselect',1));
	
//	$('#box').accordion('add',{
//		title : '新面板',
//		closable : true,
//		content : '内容部分',
//		onClose : function () {
//			alert('close');//继承panel的属性，及事件
//		},
//		select : false,
////		collapsible : false,
//	});

	$('#box').accordion('remove',0);
});