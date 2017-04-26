$(function(){
	$("#box").dialog({
		title : '标题',
		content : '对话框',
		width : 400,
		height : 250,
//		toolbar : '#tt',
		toolbar : [{
			text : '编辑',
			iconCls : 'icon-edit',
			handler : function () {
				alert('edit');
			}
		},{}],
		buttons : [{
			text : '确定',
			plain : true,
			iconCls : 'icon-ok',
		},{
			text : '取消',
			plain : true,
			iconCls : 'icon-cancel',
		}],
//		collapsible : true,
//		minimizable : true,
//		maximizable : true,
//		resizable : true,
		onClose : function () {
			alert('关闭后触发');
		},
	});
//	$.parser.parse();
//	$.parser.parse('#box');
	console.log($('#box').dialog('dialog'));
//	console.log($('#box').dialog('body'));
});
//$.parser.auto = false;
//$.parser.onComplete = function(){
//	alert('ui解析完毕');
//}