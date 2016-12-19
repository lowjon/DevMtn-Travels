angular.module('devmtnTravel')
  .controller('bookedCtrl', function ($scope, mainSrv, $state) {
    var packageId = $state.params.id;

    var newData = mainSrv.travelInfo;
      newData.forEach(function (val) {
        if (val.id === Number(packageId)){
          $scope.city = val;
        }

      })




  })
