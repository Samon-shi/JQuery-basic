;(function($){
	$.fn.table=function(options){
		var defaults= {
			//各种参数  各种属性	
			evenRownClass:'evenRow',
			oddRownClass:'oddRow',
			currentRowClass:'currentRow',
			eventType:'mouseover',
			eventType2:'mouseout',
			
		}
		
		var options =$.extend(defaults,options);
		
		this.each(function(){
			var _this=$(this);
			
			//实现功能的代码    偶数行
			 _this.find('tr:even').addClass(options.evenRownClass);
			 
			 //奇数行	
			 _this.find('tr:odd').addClass(options.oddRownClass);
			 
			 //鼠标进入c
//			 _this.find('tr').mouseover(function(){
//			 		$(this).addClass(options.currentRowClass);
//			 }).mouseout(function(){
//			 	$(this).removeClass(options.currentRowClass);
//			 })
//			
			_this.find('tr').bind(options.eventType,function(){
				$(this).addClass(options.currentRowClass);
			});
			
			_this.find('tr').bind(options.eventType2,function(){
				$(this).removeClass(options.currentRowClass);
			});
			
			
		});
		
		return this;
	}
})(jQuery)
