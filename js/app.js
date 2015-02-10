'use strict';
var app = angular.module('newTab', ['newTab.controllers', 'newTab.directives', 'newTab.filters']);

app.config(['$compileProvider', function($compileProvider) {
    // see https://github.com/angular/angular.js/issues/3889
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|chrome|chrome-extension):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|chrome|chrome-extension):/);
}]);

app.run();
