angular.module('indexApp',[])
.controller('indexCtrl',function($scope){
			$scope.login="dfs";
			$scope.userdata={};
			$scope.submitForm=function(){
				if($scope.signUpForm.$invalid){
				console.log('表单出错了')
					return;
				}
				console.log($scope.userdata)
				console.log('表单提交啦')
			};
		})
.directive('compare',function(){
	var o={};
	o.strict='AE';
	o.scope={
		orgText:'=compare'
	}
	o.require='ngModel';
	o.link=function(sco,ele,att,con){
		con.$validators.compare=function(v){
			return v==sco.orgText;
		}

		sco.$watch('orgText',function(){
			con.$validate();
		})

	}
	return o;
})
;
