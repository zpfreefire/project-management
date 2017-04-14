ExtractionGridHeaderGroup = function(){debugger;
	/** 列表头  text,align */
	var theadObj = {},
		theadArray = [],
		tabName,
		danwei,
		tjType,
		dataRows = [],
		form,
		
		_changedata = function (arrs){//转换数据
			var i,l,m;
			
			for(var j=0,m=arrs.length;j<m;j++)
			{
			    var dataobj=arrs[j];
			    var row=[];
			    var row=row.splice(0,row.length);
			    for(i=0,l=theadArray.length;i<l;i++)
			    {
			        var dataIndex=theadArray[i].dataIndex?theadArray[i].dataIndex:"";
				    if(dataIndex=="")
				    {
				    	row.push(j+1);
				    	continue;
				    }
					else
					{
					    for(var p in dataobj)
						{
						    if(p==dataIndex)
						    {
						        row.push(dataobj[p]);
						        break;
						    }
						    	
						}
					}
				}
				dataRows.push(row);
			}
			return dataRows;
		};
		_subForm = function ( getrowdataurl,params,url){//提交
			var  rowStyle=[] ;
			for(i=0,l=theadArray.length;i<l;i++){
				if(!theadArray[i].hidden){
					rowStyle.push(theadArray[i].align);
				};
			};/*
			for(i=0,l=arrs.length;i<l;i++){
				var arr = arrs[i],
					row = [];
				for(var j=0,k = arr.length;j<k;j++){
					if(!theadArray[j].hidden){
						row.push(arr[j]);
					};
				};
				rows.push(row.join('<&$&>'))
			};*/
			l = '<#$#>';
			var inputs = [
			{name: 'filename', value: tabName},
			//{name: 'depth', value: theadObj.length},
			{name: 'dw', value: danwei},
			{name: 'tjType', value: tjType},
			{name: 'headerStr', value: function(){
				var result = '';
				var je = '<*>',jg='!*!',jk='&$&';
				for(i=0;i<theadObj.length;i++){
					for(var j=0,l = theadObj[i].length;j<l;j++){
						var o = theadObj[i][j];
						var colspan=o.colspan||'1';
						var rowspan=o.rowspan||'1';
						var hidden=o.hidden||'false';
						var align=o.align||'left';
						var width=o.width||'80';
						result += o.title +je+ align +je+ hidden +je+ colspan +je+rowspan+je+width +je +jg;
					}
					result += jk;
				}
				return result;
			}()},
			{name: 'headerColStr', value: function(){
				var result = '';
				var jk='&$&';
				debugger
				for(i=0;i<theadObj.length;i++){
					for(var j=0,l = theadObj[i].length;j<l;j++){
						var o = theadObj[i][j];
						var colspan=o.colspan||'1';
						if(colspan>1){
							continue;
						}
						result += o.field +jk;
					}
					//result += jk;
				}
				return result;
			}()},
			{name: 'styleStr', value: rowStyle.join(l)},
			{name: 'dataurl', value: getrowdataurl},
			{name: 'dataparams', value: params}
			];
			if(!form){
				form = document.createElement("form");
				form.method = 'post';
				//form.target="_blank"
				document.body.appendChild(form);form.style.display="none";
			};
			form.action = url;
			while(form.firstChild){ //判断是否有子节点
				 form.removeChild(form.firstChild);
			};
			for(i=0,l=inputs.length;i<l;i++){
				var input = document.createElement("input");
				input.value = inputs[i].value;
				input.name = inputs[i].name;
				form.appendChild(input);
			};
			MaskUtil.unmask();
			form.submit();
		};
	return function(gridpanel, url,getrowdataurl,params,dw,AAA,type){debugger;
		//Ext.getBody().mask("加载数据……");
		MaskUtil.mask('正在导出...请稍后...');
		theadArray=[];
		gridpanel.datagrid('options').title;
		tabName = gridpanel.datagrid('options').title||'';
		if(tabName == ''){
			tabName = AAA;
		}
		danwei=dw;
		tjType=type;
		dataRows.splice(0,dataRows.length);
		theadObj=gridpanel.datagrid('options').columns;
		var ColumnFields=gridpanel.datagrid('getColumnFields');
		for(i=0,l=ColumnFields.length;i<l;i++){
			var cols =gridpanel.datagrid('getColumnOption',ColumnFields[i]);
			var hidden_ = cols.hidden||false,
				align_ = cols.align||'left',
				dataIndex_=cols.field;
	    	theadArray.push({
			    dataIndex:dataIndex_,
				hidden:hidden_,
				align:align_
			});
		}
		
		if(getrowdataurl!="") 
		{
		return _subForm(getrowdataurl,params, url);
		/*
			if(params!="")
			{
				return _subForm(getrowdataurl,params, url);
				 
				$.ajax({
					type : "POST",
					url:getrowdataurl,
					data:params,
					success : function(data) {
						var responseJson = $.parseJSON(data);
                        dataRows=_changedata(responseJson);
                        
						return _subForm(dataRows, url);
					},
					error : function(e) {
						MaskUtil.unmask();
						 $.messager.alert("提示", "导出失败！", "info", function () {
				            
				        });
					}
				}); 
	        }
	        else
	        {
	        	$.ajax({
					type : "POST",
					url:getrowdataurl,
					success : function(msg) {
						var responseJson = $.parseJSON(data);
                        dataRows=_changedata(responseJson);
                        
						return _subForm(dataRows, url);
					},
					error : function(e) {
						MaskUtil.unmask();
						 $.messager.alert("提示", "导出excel失败！", "info", function () {
				            
				        });
					}
				});
	        }  */
        }
	};
}();