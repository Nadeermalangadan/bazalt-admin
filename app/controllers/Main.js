define('controllers/Main', [
    'app',

    'bootstrap/modal'
], function(app) {
    'use strict';

    app.controller('Backend.Controllers.Main', ['$scope', '$rootScope', 'bcPages.Factories.Page',
        function($scope, $rootScope, PageResource) {
        $scope.loginRequest = false;
        /**
         * On 'event:loginRequest' send credentials to the server.
         */
        $rootScope.$on('bzAuthorization:$loginRequired', function() {
            $scope.loginRequest = true;

            $('#loginForm').modal('show');
        });
        $rootScope.$on('baUserLogin', function() {
            $('#loginForm').modal('hide');
        });
    }]);
});