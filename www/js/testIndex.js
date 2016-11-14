angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.topic', {
      url: "/topic",
      views: {
        'topic-tab': {
          templateUrl: "templates/topic.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.picture', {
      url: "/picture",
      views: {
        'picture-tab': {
          templateUrl: "templates/picture.html"
        }
      }
    })
    .state('tabs.communication', {
      url: "/communication",
      views: {
        'communication-tab': {
          templateUrl: "templates/communication.html"
        }
      }
    })
    .state('tabs.shop', {
      url: "/shop",
      views: {
        'shop-tab': {
          templateUrl: "templates/shop.html"
        }
      }
    })
    // .state('tabs.navstack', {
    //   url: "/navstack",
    //   views: {
    //     'about-tab': {
    //       templateUrl: "templates/nav-stack.html"
    //     }
    //   }
    // })
    .state('tabs.account', {
      url: "/account",
      views: {
        'account-tab': {
          templateUrl: "templates/account.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/topic");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
