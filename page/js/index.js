/**
 * Created by Administrator on 2017/1/5.
 */
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('PaginationDemoCtrl', function ($scope,$http) {
    $http.get('json/uploadList.json').success(function(data)
    {  
        $scope.auditList = data;
        console.log($scope.auditList);
        var data = data;
        var num = data.length;
        $scope.totalItems = num;
    });  

    $scope.currentPage = 1;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
        $scope.items = $scope.data.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));
    };

    $scope.pageChanged = function() {
        // $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
});