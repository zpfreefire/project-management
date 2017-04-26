$(function(){
	$('#box').tabs({
		width : 500,
		height : 300,
//		plain : true,
//		fit : true,
//		border : true,
//		tabWidth : 200,//标签条的宽度
//		tabHeight : 50,
//		scrollIncrement : 150,//选项卡滚动条每次滚动的像素值。
//		scrollDuration : 1000,//每次滚动动画持续的时间，单位：毫秒。
//		tools : [{
//			iconCls : 'icon-add',
//			handler : function(){
//				alert('添加')
//			}
//		},{
//			iconCls : 'icon-save',
//			handler : function(){
//				alert('保存')
//			}
//		}],
//		toolPosition : 'left',//工具栏位置。可用值：'left','right'
//		tabPosition : 'left',//选项卡位置
//		headerWidth : 100,//选项卡标题宽度，在tabPosition属性设置为'left'或'right'的时候才有效
//		selected : 2,
//		showHeader : false,
//		justifield : false,//
//		narrow : true,//设置为true时，删除选项卡标题之间的空间（该属性自1.4.2版开始可用）
		
		
//		onSelect : function(title, index){//在ajax选项卡面板加载完远程数据的时候触发
//			alert(title+'|'+index);
//		},
		
//		onUnselect : function(title, index){//用户在取消选择一个选项卡面板的时候触发
//			alert(title+'|'+index);
//		},
		
//		onClose : function(title, index){//在用户关闭一个选项卡面板的时候触发
//			alert(title+'|'+index);
//		}
		
//		onBeforeClose : function(title, index){//在选项卡面板关闭的时候触发，返回false取消关闭操作
//			alert(title+'|'+index);
//		}
		
//		onContextMenu : function(e, title, index){//在右键点击一个选项卡面板的时候触发
//			alert(e.type+'|'+title+'|'+index);
//		}
		
//		onAdd : function(title, index){//在添加一个新选项卡面板的时候触发
//			alert(title+'|'+index);
//		}
		
//		onLoad : function(panel){//在ajax选项卡面板加载完远程数据的时候触发
//			alert(panel);
//		}
		
//		onUpdate : function(title, index){//在更新一个选项卡面板的时候触发
//			alert(title+'|'+index);
//		}
		
	})/*.css('display','none')*/;
//	console.log($('#box').tabs('options'));
////	console.log($('#box').tabs('tabs'));//返回所有选项卡面板
//	$(document).click(function () {
//		$('#box').css('display','block');
//		$('#box').tabs('resize');//调整选项卡容器大小和布局
//	});
	$('#box').tabs('add',{//添加一个新选项卡面板
		id : 'bbb',
		title : '新选项卡',
		content : '新面板',
		href : 'content.html',
		iconCls : 'icon-add',
		width : 1,
		height : 1,
		collapsible : true,
		closable : true,
		selected : false,
	});
//	$('#box').tabs('close',1);
//	console.log($('#box').tabs('getTab',1));//获取指定选项卡面板
//	console.log($('#box').tabs('getTabIndex', $('#tab2')))
//	console.log($('#box').tabs('getTabIndex', '#tab2'))
//	console.log($('#box').tabs('getSelected'));
//	console.log($('#box').tabs('select',2));
//	console.log($('#box').tabs('unselect',2));
//	console.log($('#box').tabs('hideHeader'));
//	console.log($('#box').tabs('showHeader'));//显示选项卡的标签头
//	console.log($('#box').tabs('exists',3));//表明指定的面板是否存在，'which'参数可以是选项卡面板的标题或索引。
//	$('#box').tabs('update',{
//		tab : $('#tab2'),
//		options : {
//			title : '修改标题',
//		},
//	});
//	$('#box').tabs('disableTab',1);//禁用指定的选项卡面板
//	$('#box').tabs('enableTab',1);//启用指定的选项卡面板，'which'参数可以是选项卡面板的标题或索引
//	$('#box').tabs('scrollBy', 100);//滚动选项卡标题指定的像素数量，负值则向右滚动，正值则向左滚动
	$(document).click(function () {
		$('#box').tabs('update',{
			tab : $('#tab2'),
			options : {
				title : '修改标题',
			},
		});
	});
});