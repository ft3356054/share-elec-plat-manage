define(['./app'], function() {
 //章节1.1.3中的其他一些参数设置也在此设置

	var PageViewModel = function() {
		var self = this;
	};
	
	var pvm = new PageViewModel();
	
	$(document).ready(function(e){
		cube.startWebPage(pvm);
	});
});
