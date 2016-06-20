/**
 * Created by Administrator on 2016/6/12.
 */
'use strict';

angular.module('app').controller('ReaderCreateCtrl', function ReaderCreateCtrl($scope) {
  var vm = $scope.vm = {};
  vm.submit = function (form) {
    console.log(form);
  }
});
