var wp = angular.module("wp", []);

wp.controller("mainCtrl", function($scope) {
    $scope.title="Web Programming";
});

/* Lessons */

wp.controller("lessonCtrl", function($scope) {
    $scope.title="Lessons"
});

wp.controller("osCtrl", function($scope) {
    $scope.title="Operating Systems"
});

wp.controller("emacsGitCtrl", function($scope) {
    $scope.title="Editor and Version Control"
});

wp.controller("nodejsCtrl", function($scope) {
    $scope.title="Web Server"
});

wp.controller("htmlCtrl", function($scope) {
    $scope.title="HTML"
});

wp.controller("cssCtrl", function($scope) {
    $scope.title="CSS"
});

wp.controller("bootstrapCtrl", function($scope) {
    $scope.title="Twitter Bootstrap"
});

wp.controller("js1Ctrl", function($scope) {
    $scope.title="JavaScript 1"
});

wp.controller("js2Ctrl", function($scope) {
    $scope.title="JavaScript 2"
});

wp.controller("testingCtrl", function($scope) {
    $scope.title="Testing"
});

wp.controller("dbCtrl", function($scope) {
    $scope.title="Databases"
});

wp.controller("teamServerCtrl", function($scope) {
    $scope.title="Team Server"
});

wp.controller("agilefantCtrl", function($scope) {
    $scope.title="Scrum"
});

/* Labs */

wp.controller("labCtrl", function($scope) {
    $scope.title="Labs"
});

wp.controller("prefaceCtrl", function($scope) {
    $scope.title="Preface"
});

wp.controller("introCtrl", function($scope) {
    $scope.title="Introduction"
});

wp.controller("cliCtrl", function($scope) {
    $scope.title="Command Line Interface"
});

wp.controller("wimpCtrl", function($scope) {
    $scope.title="Windows, Icons, Menu, Pointer"
});

wp.controller("webInfCtrl", function($scope) {
    $scope.title="Web Infrastructure"
});

wp.controller("staticWebCtrl", function($scope) {
    $scope.title="Static Web"
});

wp.controller("activeMobileWebCtrl", function($scope) {
    $scope.title="Active and Mobile Web"
});

wp.controller("cleanCodeCtrl", function($scope) {
    $scope.title="Clean Code"
});

wp.controller("xtemplateCtrl", function($scope) {
    $scope.title="Add a controller for this page"
});
