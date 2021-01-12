define(['text'], function(text) {
        //注册组件根据项目实际注册所用到的组件，组件名称可查看API手册
	cube.gatway_dept = "http://localhost:8091"
	cube.loadWebpage({
		components: [
			"controls.menu",
			"layout.include",
			"datacontainer.tree"
             ]
	});
});
