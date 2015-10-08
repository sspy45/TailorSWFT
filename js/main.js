/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
"use strict";
var app = angular.module('tailorApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('productCtrl', ['$scope',function($scope){
  $scope.products = [
    {
      productId:1,
      name: 'prod1',
      imgSrc: 'images/products/prod1.jpg',
      imgUrl: 'something',
    },
    {
      productId:2,
      name: 'prod2',
      imgSrc: 'images/products/prod2.jpg',
      imgUrl: 'something',
    },
    {
      productId:3,
      name: 'prod3',
      imgSrc: 'images/products/prod3.jpg',
      imgUrl: 'something',
    },
    {
      productId:4,
      name: 'prod4',
      imgSrc: 'images/products/prod4.jpg',
      imgUrl: 'something',
    },
    {
      productId:5,
      name: 'prod5',
      imgSrc: 'images/products/prod5.jpg',
      imgUrl: 'something',
    },
  ],
  $scope.banana ="Banana!"

}]);

app.directive('newProducts', function() {
  return {
    restrict: 'E',
    scope:{
      product: '=',
    },
    replace: true,
    templateUrl: "templates/directives/products.html",
    controller: function($scope) {
      console.log($scope.product);
    }
  };
});

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});