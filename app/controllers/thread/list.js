/**
 * Created by Administrator on 2016/6/12.
 */
'use strict';

angular.module('app').controller('ThreadListCtrl',function ThreadListCtrl($scope){
	var vm = $scope.vm = {};
	vm.items = [
		{
			title:'这是第一个主贴',
			poster:'雪狼',
			dateCreated:'2015-02-19T00:00:00'
		},
		{
			title:'这是第二个主贴，含有字母abcd和数字1234',
			poster:'破狼',
			dateCreated:'2015-02-19T00:00:00'
		}
	];
	for(var i=0;i<10;++i){
		vm.items.push({
			title:'主题'+i,
			poster:'user'+i,
			dateCreated:'2015-02-18T00:00:00'
		})
	}
})