var app=angular.module('my',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'main.html',
        controller:'mainCtrl'
     
    })
       .when('/entertainment',{
        templateUrl:'entertainment.html',
        controller:'entCtrl'
        
        
    })
        .when('/info',{
        templateUrl:'info.html',
        controller:'infoCtrl'
        
        
    })

});

app.controller('mainCtrl',['$scope',function($scope){
    $scope.nam='main';
    console.log($scope.nam);
    
}]);
                        
app.controller('entCtrl',['$scope','$http',function($scope,$http){
    $scope.nam='entertainment';
    console.log($scope.nam);
      $http.get('services.json').then(function(responce){
        console.log(responce.data);
        $scope.services=responce.data;
    });
    
    
}]);

app.controller('infoCtrl',['$scope','$http',function($scope,$http){
    $scope.nam='info';
    console.log($scope.nam);
    $http.get('services.json').then(function(responce){
        console.log(responce.data);
        
    });
    
}]);                        
                        