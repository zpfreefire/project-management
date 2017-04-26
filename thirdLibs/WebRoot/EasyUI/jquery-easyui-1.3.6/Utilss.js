var Utils = {
	AJ_STATUS_NOARCHIVE:1,//案卷未归档
	AJ_STATUS_DELETE:3, //案卷标记删除 回收站
	AJ_STATUS_ARCHIVE:2,//案卷已归档
	
	AJ_pageSizeDefault : 10 ,   //datagrid默认一页显示
	AJ_pageDefault : 1 ,     //datagrid默认为第一页

	// ajax同步请求
	//访问链接，参数，数据类型
	JQAjax : function(url, data,dataType) {
		var obj={url : url,async : false,cache:false,type : 'POST'};
		if(data){
			obj.data=data;
		}
		 
		if(dataType){
			obj.dataType=dataType;
		}
		var a = $.ajax(obj);
		var ret=a.responseText;
		if(dataType){
			if(dataType=='json'){
				ret=a.responseJSON;
			}
		}
		return ret;
	},
	 
	pagerFilter : function(data) {

		if (typeof data.length == 'number' && typeof data.splice == 'function') { // is
																					// array
			data = {
				total : data.length,
				rows : data
			}
		}
		var dg = $("#" + this.id);
		var opts = dg.datagrid('options');
		var pager = dg.datagrid('getPager');
		pager.pagination({
					pageSize: 10,//每页显示的记录条数，默认为10  
        			pageList: [5,10,15],//可以设置每页记录条数的列表  
        			beforePageText: '第',//页数文本框前显示的汉字  
        			afterPageText: '页    共 {pages} 页', 
        				displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录',  
					onSelectPage : function(pageNum, pageSize) {
						opts.pageNumber = pageNum;
						opts.pageSize = pageSize;
						pager.pagination('refresh', {
									pageNumber : pageNum,
									pageSize : pageSize
								});
						dg.datagrid('loadData', data);
					}
				});
		if (!data.originalRows) {
			data.originalRows = (data.rows);
		}
		var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
		var end = start + parseInt(opts.pageSize);
		data.rows = (data.originalRows.slice(start, end));
		return data;
	},
	//禁用backspace
	forbidBackspace : function() {
		document.getElementsByTagName("body")[0].onkeydown = function() {
			// 获取事件对象
			var elem = event.relatedTarget || event.srcElement || event.target
					|| event.currentTarget;
			if (event.keyCode == 8) {// 判断按键为backSpace键
				 
				// 获取按键按下时光标做指向的element
				var elem = event.srcElement || event.currentTarget;
				// 判断是否需要阻止按下键盘的事件默认传递
				var name = elem.nodeName;
				if (name != 'INPUT' && name != 'TEXTAREA') {
					return Utils._stopIt(event);
				}
				var type_e = elem.type.toUpperCase();
				if (name == 'INPUT'
						&& (type_e != 'TEXT' && type_e != 'TEXTAREA'
								&& type_e != 'PASSWORD' && type_e != 'FILE')) {
					return Utils._stopIt(event);
				}
				if (name == 'INPUT'
						&& (elem.readOnly == true || elem.disabled == true)) {
					return Utils._stopIt(event);
				}
				if (name == 'TEXTAREA'
						&& (elem.readOnly == true || elem.disabled == true)) {
					return Utils._stopIt(event);
				}
			}
		}
	},
	_stopIt : function(e) {
		if (e.returnValue) {
			e.returnValue = false;
		}
		if (e.preventDefault) {
			e.preventDefault();
		}

		return false;
	}  
};

 $(function(){
 	Utils.forbidBackspace();//禁用backspace键
 });
 
// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) 
{ //author: meizz 
  var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
    "S"  : this.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o) 
    if(new RegExp("("+ k +")").test(fmt)) 
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
  return fmt; 
}
