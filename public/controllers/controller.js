angular.module('app')
.controller('controller', function($scope, service){
    $scope.test = 'working';
    $scope.test1 = service.test1;
    service.readProducts().then(function(resp){
        console.log(resp.data)
        $scope.products = resp.data;
    })
})