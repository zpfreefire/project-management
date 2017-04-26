function allowFormsInIscroll(){
	 [].slice.call(document.querySelectorAll('input, select, button')).forEach(function(el){
		 el.addEventListener(('ontouchstart' in window)?'touchstart':'mousedown', function(e){
		 e.stopPropagation();
	 
		 })
	 })
}

document.addEventListener('DOMContentLoaded', allowFormsInIscroll, false);
//解决下拉刷新过程中标签input输入无法获取焦点或无法输入内容，无法提交表单

//#########
function iScrollClick(){
	if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
	if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
	if (/Silk/i.test(navigator.userAgent)) return false;
	if (/Android/i.test(navigator.userAgent)) {
	   var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
	   return parseFloat(s[0]+s[3]) < 44 ? false : true
    }
}
//配置实例：
 myScroll = new IScroll("#ID", {
	click:iScrollClick(), //调用判断函数
        scrollbars: true,//有滚动条
        mouseWheel: true,//允许滑轮滚动
        fadeScrollbars: true//滚动时显示滚动条，默认影藏，并且是淡出淡入效果
    });