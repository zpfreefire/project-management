$(function(){
	var div = '\
	<div id="key" style="position:absolute;display:none;border:solid 1px white;background-color:#A8A8A8;width:269px;height:352px;">\
		<ul id="keyboard" style="font-size:20px;margin:5px 3px 5px 5px">\
			<li class="symbol"><span class="off">1</span></li>\
			<li class="symbol"><span class="off">2</span></li>\
			<li class="symbol"><span class="off">3</span></li>\
			<li class="tab"><span class="off">4</span></li>\
			<li class="symbol"><span class="off">5</span></li>\
			<li class="symbol"><span class="off">6</span></li>\
			<li class="tab"><span class="off">7</span></li>\
			<li class="symbol"><span class="off">8</span></li>\
			<li class="symbol"><span class="off">9</span></li>\
			<li class="tab"><span class="off">0</span></li>\
			<li class="delete lastitem">del</li>\
			<li class="ok">ok</li>\
		</ul>\
	</div>\
	';
	$("#keyDiv").html(div);
	
	var sfzh = $('#sfzh');
	var character;
	
	$("#sfzh").click(function(){
		$("#key").toggle(showDiv($(this)));
	});
	
	$('#keyboard li').click(function(){

		// Delete
		if ($(this).hasClass('delete')) {
			var html = sfzh.val();
			
			sfzh.val(html.substr(0, html.length - 1));
			return false;
		}

		// ok
		if ($(this).hasClass('ok')) {
			$("#key").hide();
			return false;
		}
		
		// Special characters
		if ($(this).hasClass('symbol') || $(this).hasClass('tab')){
			character = $(this).text();
			
		}

		
		if(sfzh.val() == null || sfzh.val()=='undefined' || sfzh.val()==''){
			sfzh.val(character);
		}else{
			sfzh.val(sfzh.val() + character);
		}
	});
});

function showDiv(obj) {
	var objOffset = $(obj).offset();
	$("#key").each(function(){
		$(this).css("left", objOffset.left);
		$(this).css("top" , objOffset.top + $(obj).height()+15);
	});
}

