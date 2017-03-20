(function () {
    var app = angular.module('payment', []);

    app.controller('PaymentController', function ($scope, $http) {

        // Default data
        $scope.newPayment = {
            date: new Date()
        };

        // Fake data
        $scope.data = data_mock;

        //HTTP POST method
        $scope.submitPayment = function () {
            $scope.confirmed = false;
            $scope.errorreceived = false;

            console.log("submitPayment");
            console.log($scope.newPayment);

            $http({
                method: "POST",
                url: "http://localhost:8888/api/payments",
                data: angular.toJson($scope.newPayment),
                headers: { 'Content-Type': 'application/json' }
            }).then(submitPayment_success, submitPayment_error);
        }

        function submitPayment_success(response) {
            console.log("submitPayment_success");
            console.log(response);
            $scope.submittedPayment = response.data;
            $scope.confirmed = true;
            $scope.errorreceived = false;
            $scope.getPayments();
        }

        function submitPayment_error(response) {
            console.log("submitPayment_error");
            console.log(response);
            $scope.confirmed = false;
            $scope.errorreceived = true;
        }

        //HTTP GET method
        $scope.getPayments = function () {
            console.log("getPayments");

            $http({
                method: "GET",
                url: "http://localhost:8888/api/payments",
                headers: { 'Content-Type': 'application/json' }
            }).then(getPayments_success, getPayments_error);
        }

        function getPayments_success(response) {
            console.log("getPayments_success");
            $scope.payments = response.data;
            console.log(response);
        }

        function getPayments_error(response) {
            console.log("getPayments_error");
            console.log(response);
        }

        $scope.getPayments();
    });

    // Number validation
    app.directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attr, ctrl) {
                function inputValue(val) {
                    if (val) {
                        var digits = val.replace(/[^0-9.]/g, '');

                        if (digits.split('.').length > 2) {
                            digits = digits.substring(0, digits.length - 1);
                        }

                        if (digits !== val) {
                            ctrl.$setViewValue(digits);
                            ctrl.$render();
                        }
                        return parseFloat(digits);
                    }
                    return undefined;
                }
                ctrl.$parsers.push(inputValue);
            }
        };
    });

    var data_mock = {
        accounts: [
            {
                id: 1,
                description: 'Main account - CA80 2310 0001 1800 0001 2345 - CAD 500',
                balance: 500
            },
            {
                id: 2, description: 'Savings account - CA80 2310 0001 1800 0001 9876 - CAD 10000',
                balance: 10000
            },
        ],
        payees: [
            { id: 1, name: 'Mobile phone - 644356789' },
            { id: 2, name: 'Electricity - 78965' },
            { id: 3, name: 'Water service -     1255532' }
        ]
    };
})();
