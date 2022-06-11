// script.js
var app = angular.module("app", ["ngRoute"]);
app.controller("Controller", function($scope) {
    $scope.products = [
        {
            "name": "Cupcake",
            "price": 3.50,
            "options": [
                { "name": "Blue" },
                { "name": "Cake" }
            ]
        },
        {
            "name": "Donut",
            "price": 1.50,
            "options": [
                { "name": "Brown" },
                { "name": "Cupcake" }
            ]
        }
        ];
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<h1>Main Page</h1><p>{{$location.path()}}</p>"
        })
        .when("/products/:id", {
            template: "<h2>{{product.name}}</h2><p>{{product.price}}</p>"
        })
        .when("/products/:id/options/:id", {
            template: "<h3>{{product.name}}</h3><p>{{product.options[$index].name}}</p>"
        })
        .otherwise({
            template: "<h1>You should go to the products page</h1>"
        })
});