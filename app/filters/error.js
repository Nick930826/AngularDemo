/**
 * Created by Administrator on 2016/6/13.
 */
'use strict';

angular.module('app').filter('error', function () {
  var messages = {
    email:'不是有效格式的邮箱',
    required:'此项不能为空'
  };
  return function (name) {
    return messages [name] || name;
  };
});
