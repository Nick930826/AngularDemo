'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('reader', {
    url: '/reader',
    template: '<div ui-view></div>',
    abstract:true
  });

  $stateProvider.state('reader.create', {
    url: '/create',
    templateUrl: 'controllers/reader/index.html',
    controller: 'ReaderCreateCtrl'
  });

  $stateProvider.state('thread', {
    url: '/thread',
    template: '<div ui-view></div>',
    abstract:true
  });

  $stateProvider.state('thread.list', {
    url: '/list',
    templateUrl: 'controllers/thread/list.html',  
    controller: 'ThreadListCtrl'
  });

  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });

  $urlRouterProvider.otherwise('/notFound');
});
