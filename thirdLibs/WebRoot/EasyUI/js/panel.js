$(function(){
	$('#box').panel({
//		id : 'pox',
		width : 500,
		height : 150,
		title : 'My Panel',
		iconCls : 'icon-search',
//		top : 200,
//		left : 200,
//		cls : 'a',
//		headerCls : 'b',
//		bodyCls : 'c',
//		style : {
//			'min-height' : '300px',
//		},
//		fit : true,//当设置为true的时候面板大小将自适应父容器
//		border : false,//定义是否显示面板边框
//		doSize : false,//如果设置为true，在面板被创建的时候将重置大小和重新布局
//		noheader : true,//如果设置为true，那么将不会创建面板标题
//		content : '修改了',//面板主体内容
		collapsible : true,//定义是否显示可折叠按钮
		minimizable : true,//定义是否显示最小化按钮
		maximizable : true,//定义是否显示最大化按钮
		closable : true,//定义是否显示关闭按钮
//		tools : '#tt',//自定义工具菜单
		tools : [{   //自定义工具菜单method two
			iconCls : 'icon-reload',
			handler : function () {
//				alert('reload');
				$('#box').panel('refresh');
			}
		},{
			iconCls : 'icon-save',
			handler : function () {
				alert('save');
			}
		}],
//		collapsed : true,//初始化收起状态
//		minimized : true,//定义是否在初始化的时候最小化面板
//		maximized : true,//定义是否在初始化的时候最大化面板
//		closed : true, //定义是否在初始化的时候关闭面板
//		loadingMessage : '加载中', //在加载远程数据的时候在面板内显示一条消息
//		extractor : function (data) {
//			return data;//定义如何从ajax应答数据中提取内容，返回提取数据
//		}
		
//		onBeforeLoad : function () {
//			alert('远程加载前触发');
//			return false;             //取消远程加载
//		}
		
//		onLoad : function () {
//			alert('远程加载后触发');
//		}
		
//		onBeforeOpen : function () {
//			alert('面板打开之前触发');
//			return false;             //取消打开面板
//		}
		
//		onOpen : function () {
//			alert('面板打开之后触发');
//		}
		
//		onBeforeClose: function () {
//			alert('关闭之前触发');
////			return false;               //取消关闭 
//		}
		
//		onClose : function () {        //这个事件用不了原因不详
//			alert('关闭之后触发');     
//		}
		
//		onBeforeDestroy : function () {
//			alert('面板销毁之前触发');
//			return false;             	//取消销毁操作
//		}
//	
//		onDestroy : function () {
//			alert('面板销毁之后触发');
//		}
//		
//		onBeforeDestroy : function () {
//			alert('面板销毁之前触发');
//			return false;             	//取消销毁操作
//		}
//		
//		onDestroy : function () {
//			alert('面板销毁之后触发');
//		}
//		
//		onBeforeCollapse : function () {
//			alert('面板折叠之前触发');
//			return false;             	//终止折叠操作
//		}
//		
//		onCollapse : function () {
//			alert('面板折叠之后触发');
//		}
//		
//		onBeforeExpand : function () {
//			alert('面板展开之前触发');
//			return false;             	//终止展开操作
//		}
//		
//		onExpand : function () {
//			alert('面板展开之后触发');
//		}
		
//		onMaximze : function () {
//			alert('窗口最大化时触发');
//		}
//	
//		onRestore : function () {
//			alert('窗口还原时触发');
//		}
//		
//		onMinimize : function () {
//			alert('窗口最小时触发');
//		}
		
//		onResize : function (width, height) {
//			alert(width+"|"+ height);
//		}
		
		onMove : function (left, top) {
			alert(left+ '|'+ top);
		}
		
	}); 
//	$('#box').panel('panel').css('position','absolute');
//	$(document).click(function () {
//		$('#box').panel('resize',{
//			'width' : 600,
//			'height' : 300,
//		});
//	});
	
//	$(document).click(function () {
//		$('#box').panel('move',{
//			'left' : 600,
//			'top' : 300,
//		});
//	});
//	console.log($('#box').panel('options'));
//	console.log($('#box').panel('panel'));
//	$('#box').panel('setTitle','标题');
//	$('#box').panel('open');
//	$('#box').panel('close');
//	$('#box').panel('destroy');
//	$('#box').panel('maximize');
//	$('#box').panel('minimize');
//	$('#box').panel('collapse');
//	$('#box').panel('expand');
//	$('#box').panel('restore');
});