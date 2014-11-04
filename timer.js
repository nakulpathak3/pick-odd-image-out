

function timerCtrl ($scope, $interval) {
    $scope.seconds = 0;
    $scope.milliseconds = 00;
    $interval( function fn(){ $scope.seconds++}, 1000);
    $interval( function n() {
    while($scope.milliseconds <= 99)
       $scope.milliseconds++; 
    $scope.milliseconds = 0;
    } ,1 );
}