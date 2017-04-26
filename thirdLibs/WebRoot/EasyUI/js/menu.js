$(function () {
	$(document).on('contextmenu', function (e) {
		e.preventDefault();
		$('#box').menu('show', {
			left : e.pageX,
			top : e.pageY,
		});
	});
	
//	$(document).on('contextmenu', function (e) {
//		e.preventDefault();
//		$('#box').menu('hide');
//	});
	
//	console.log($('#box').menu('options'));
//	$('#box').menu('destroy')
//	console.log($('#box').menu('getItem','#new'));
	/*$('#box').menu('setIcon', {
		target : '#new',
		iconCls : 'icon-add',
	});*/
//	console.log($('#box').menu('findItem','退出'));
	
//	$('#box').menu('appendItem', {
//		id : 'add',
//		text : '新增',
//		iconCls : 'icon-add',
//		href : '123.html',
//		onclick : function () {
//			console.log($('#box').menu('findItem','新增'));
//		}
//	}); 
	
//	$('#box').menu('removeItem', '#new');
//	$('#box').menu('disableItem', '#new');
//	$('#box').menu('enableItem', '#new'); 
	$('#box').menu({
//		onShow : function () {
//			alert('显示时触发');
//		},
//		onHide : function () {
//			alert('隐藏时触发');
//		},
		onClick : function (item) {
			alert(item.text)
		}
	});
});