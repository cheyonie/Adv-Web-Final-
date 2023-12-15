angular.module('fanClub', [])
.controller('FanController', function($scope) {
var fan = [
{firstName: "Tracy", lastName: "Jones", address: "3261 Lowe Street",
city: "Houston", state: "TX", country:"USA"}
];
$scope.addThisFan = function() {
$scope.students.push({firstName:$scope.firstName, lastName:
$scope.lastName, address:$scope.address, city:$scope.city, state:$scope.state,
country:$scope.country});
//firstName = '';
};
$scope.fan = fan;
$scope.firstName = fan.firstName;
$scope.lastName = fan.lastName;
$scope.address = fan.address;
$scope.city = fan.city;
$scope.state = fan.state;
$scope.country = fan.country;
});