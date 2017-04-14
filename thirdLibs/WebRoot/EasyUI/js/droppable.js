$(function(){
	$("#dd").droppable({
		accept : '#box',
//		disabled : true, 
		onDragEnter : function (e, source){
			$(this).css('background', 'yellow');
			alert('Enter');
		},
	
		onDragOver : function (e, source){
			$(this).css('background', 'red');
			alert('Over');
		},
		
		onDragLeave : function (e, source){
			$(this).css('background', 'blue');
			alert('Leave');
		},
		
		onDrop : function (e, source){
			$(this).css('background', 'black') 
		}
	});
	
//	console.log($('#dd').droppable('options'))
	$('#dd').droppable('disable')
	$('#dd').droppable('enable')
	
	$("#box").draggable(function(){
		
	});
	
	
});