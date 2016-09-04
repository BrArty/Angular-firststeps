var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$http', '$element', function ($scope, $http, $element) {

    $scope.resp = 'Not assigned';

    $scope.serv = function () {
        $http({method: 'GET', url: '/api?id=' + $element.find('input').val()})
            .success(function (data) {
                if (data.Country) {
                    $scope.resp = "Put id first"
                } else if (data.length == 0) {
                    $scope.resp = "This id is not present"
                } else if (data.length == 1) {
                    $scope.resp = data[0].name + ', ' + data[0].id;
                }
            })
            .error(function (data) {
                console.log("Error in service");
            });
    };
}]);