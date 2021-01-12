define([], function() {
 			var PageViewModel = function(params) {
 				var self = this;
// 				self.url=cube.gatway_dept+"/authorityUserRole/leftTree/userid1"
 				self.nodes = [
				    {id:"a",text: '节点1',expanded:false,hasChildren:true, childNodes:[
				       {id:"a-1",text: '节点1-1',expanded: false,hasChildren:true, childNodes:[
							{id:"a-1-1",text: '节点1-1-1',expanded: false,childNodes:[]}
				       ]}
				    ]},
				    {id:"b",text: '节点2',expanded: false,childNodes: []}
				]
 				self.onSelectedChanged=function(p_value){
// 					params.depId(p_value.id)
 					console.log(params)
 					console.log(p_value.id)
 					console.log(self)
 				}
 				PubSub.subscribe("1","depsave",function(topics,data){
 					debugger
 					cube.getPageViewModelByNode($("#tree")).load();
 					//cube.getPageViewModelByNode($("#tree"))._init();
 				})
				cube.endViewModel(self, params);
 			};
 			return PageViewModel;
 		});