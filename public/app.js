

var app = angular.module("app", ['ngMessages','ui.bootstrap','ui.router','ngMaterial','angularModalService']);





/*Config function for various url*/

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/",
      templateUrl: "partials/customers.html",
      controller : 'getCutomersDataCtrl'
    })

    // use the HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});





app.controller('myCtrl',['$scope','ModalService','$mdToast',function($scope,ModalService,$mdToast){
    
    $scope.dataC = [{c_id:1,name:'ajay',mobile:7405510654,phone:123,DOB:'12/07/1993',address:'36,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:2,name:'rahul',mobile:123,phone:1234,DOB:'12/08/1993',address:'361,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:3,name:'hiren',mobile:456,phone:1213,DOB:'14/07/1993',address:'362,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:4,name:'chetan',mobile:789,phone:185,DOB:'15/07/1993',address:'363,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:5,name:'hetarth',mobile:012,phone:588,DOB:'22/07/1993',address:'346,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:6,name:'parth',mobile:12369,phone:777,DOB:'16/07/1993',address:'365,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:7,name:'sudani',mobile:4563,phone:666,DOB:'18/07/1993',address:'366,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:8,name:'ajay',mobile:7405510654,phone:123,DOB:'12/07/1993',address:'36,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:9,name:'rahul',mobile:123,phone:1234,DOB:'12/08/1993',address:'361,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:10,name:'hiren',mobile:456,phone:1213,DOB:'14/07/1993',address:'362,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:11,name:'chetan',mobile:789,phone:185,DOB:'15/07/1993',address:'363,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:12,name:'hetarth',mobile:012,phone:588,DOB:'22/07/1993',address:'346,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:13,name:'parth',mobile:12369,phone:777,DOB:'16/07/1993',address:'365,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:14,name:'sudani',mobile:4563,phone:666,DOB:'18/07/1993',address:'366,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:15,name:'ajay',mobile:7405510654,phone:123,DOB:'12/07/1993',address:'36,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:16,name:'rahul',mobile:123,phone:1234,DOB:'12/08/1993',address:'361,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:17,name:'hiren',mobile:456,phone:1213,DOB:'14/07/1993',address:'362,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:18,name:'chetan',mobile:789,phone:185,DOB:'15/07/1993',address:'363,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:19,name:'hetarth',mobile:012,phone:588,DOB:'22/07/1993',address:'346,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:20,name:'parth',mobile:12369,phone:777,DOB:'16/07/1993',address:'365,radhika reidency',email:'ajay@gmail.com'},
                    {c_id:21,name:'sudani',mobile:4563,phone:666,DOB:'18/07/1993',address:'366,radhika reidency',email:'ajay@gmail.com'}
    ];

    $scope.customerBills = [{b_id:1,bill_number:1,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:2,bill_number:2,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:3,bill_number:3,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:4,bill_number:4,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:5,bill_number:5,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:6,bill_number:6,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:7,bill_number:7,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:8,bill_number:8,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:9,bill_number:9,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:10,bill_number:10,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:11,bill_number:11,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:12,bill_number:12,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:13,bill_number:13,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:14,bill_number:14,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:15,bill_number:15,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:16,bill_number:16,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:17,bill_number:17,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:18,bill_number:18,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:19,bill_number:19,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:20,bill_number:20,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:21,bill_number:21,bill_data:'12/07/1993',discount:10,tax:100,c_id:1},
                {b_id:22,bill_number:22,bill_data:'12/07/1993',discount:10,tax:100,c_id:1}
    ];

    $scope.customerItems = [{i_id:1,bill_number:1,name:'a',quantity:2,date:'12/07/1993'},
            {i_id:2,bill_number:1,name:'a',quantity:2,date:'12/07/1993'},
            {i_id:3,bill_number:1,name:'b',quantity:2,date:'12/07/1993'},
            {i_id:4,bill_number:1,name:'c',quantity:2,date:'12/07/1993'},
            {i_id:5,bill_number:1,name:'d',quantity:2,date:'12/07/1993'},
            {i_id:6,bill_number:1,name:'e',quantity:2,date:'12/07/1993'},
            {i_id:7,bill_number:1,name:'f',quantity:2,date:'12/07/1993'},
            {i_id:8,bill_number:1,name:'g',quantity:2,date:'12/07/1993'},
            {i_id:9,bill_number:1,name:'h',quantity:2,date:'12/07/1993'},
            {i_id:10,bill_number:1,name:'i',quantity:2,date:'12/07/1993'},
            {i_id:11,bill_number:2,name:'a',quantity:2,date:'12/07/1993'},
            {i_id:12,bill_number:2,name:'b',quantity:2,date:'12/07/1993'},
            {i_id:13,bill_number:2,name:'c',quantity:2,date:'12/07/1993'},
            {i_id:14,bill_number:2,name:'d',quantity:2,date:'12/07/1993'},
            {i_id:15,bill_number:2,name:'e',quantity:2,date:'12/07/1993'},
            {i_id:16,bill_number:2,name:'f',quantity:2,date:'12/07/1993'},
            {i_id:17,bill_number:2,name:'g',quantity:2,date:'12/07/1993'},
            {i_id:18,bill_number:3,name:'a',quantity:2,date:'12/07/1993'},
            {i_id:19,bill_number:3,name:'b',quantity:2,date:'12/07/1993'},
            {i_id:20,bill_number:3,name:'c',quantity:2,date:'12/07/1993'},
            {i_id:21,bill_number:3,name:'d',quantity:2,date:'12/07/1993'},
            {i_id:22,bill_number:3,name:'e',quantity:2,date:'12/07/1993'},
            {i_id:23,bill_number:3,name:'f',quantity:2,date:'12/07/1993'}
    ];

    

    $scope.deleteCustomer = function(index) {
        ModalService.showModal({
            templateUrl: 'deleteCustomerModal.html',
            controller: "deleteModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                
                if(result=='Yes'){
                    $scope.dataC.splice(index, 1);
                }
                else{
                    console.log('No');
                }
            });
        });
    };
    $scope.editDataField = false;

    $scope.addCustomer = function() {
        
        ModalService.showModal({
            templateUrl: 'addCustomerModal.html',
            controller: "addModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                console.log($scope.dataC);
                $scope.dataC.splice($scope.dataC.length,0,result.data);
                console.log($scope.dataC);
            });
        });
    }; 

   $scope.editCustomer = function(index) {
        ModalService.showModal({
            templateUrl: 'editCustomerModal.html',
            controller: "editModalController",
            inputs: {
                customerObject: $scope.dataC[index]
            } 
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                console.log(result.data);
                if (result.result=="Save") {
                    $scope.dataC.splice(index, 1,result.data);
                }
                else{
                    console.log('cancel');
                }
            });
        });
    }; 
   

    $scope.deleteData = function(index){
        $scope.dataC.splice(index, 1);
    };
    
    $scope.save = function(){
        
        $scope.editedData = {name:$scope.editName,mobile:$scope.editNumber,phone:$scope.editPhone,DOB:$scope.editDOB
            ,address:$scope.editAddress}
        console.log($scope.editedData);
        $scope.editDataField = false;
    };
}]);




/*Modal for Edit Customer data*/
app.controller('editModalController',['$scope','close','customerObject','$mdToast',
 function($scope, close,customerObject,$mdToast) {
 $scope.customerName = customerObject.name;
 $scope.customernumber = customerObject.mobile;
 $scope.customerPhone = customerObject.phone;
 $scope.DOB = customerObject.DOB;
 $scope.customeraddress = customerObject.address;
 $scope.email = customerObject.email;
 var editedCustomerData = {};
 $scope.close = function(result) {
    
    if (result=='Save') {
        editedCustomerData = {result:result,data:{name:$scope.customerName,mobile:$scope.customernumber,phone:$scope.customerPhone,
            DOB:$scope.DOB,address:$scope.customeraddress,email:$scope.email}};
        $mdToast.show($mdToast.simple().textContent('Your Data Successfully Saved...'));
        // Could also do $mdToast.showSimple('Successfully Deleted...');
    }
    else{
         editedCustomerData ={result:result,data:{}};
         $mdToast.show($mdToast.simple().textContent('Cancelled...'));
    }
    close(editedCustomerData, 500); // close, but give 500ms for bootstrap to animate
 };

}]);


/*Modal for Delete Customer data*/
app.controller('deleteModalController', ['$scope','close','$mdToast',function($scope, close,$mdToast) {
  
 $scope.close = function(result) {
    if (result=='Yes') {
        $mdToast.show($mdToast.simple().textContent('Successfully Deleted...'));
        // Could also do $mdToast.showSimple('Successfully Deleted...');
    }
    else{
         $mdToast.show($mdToast.simple().textContent('Cancelled...'));
    }
    close(result, 500); // close, but give 500ms for bootstrap to animate

 };

}]);


/*Modal for Delete Customer data*/
app.controller('addModalController', ['$scope','close','$mdToast',function($scope, close,$mdToast) {
 var newCustomer = {}; 
 $scope.close = function(result) {
    if (result=='Save') {
        newCustomer = {result:result,data:{name:$scope.customerName,mobile:$scope.customernumber,
            phone:$scope.customerPhone,address:$scope.address1,DOB:$scope.DOB,email:$scope.email}};
        $mdToast.show($mdToast.simple().textContent('Your Data Successfully Added...'));
        // Could also do $mdToast.showSimple('Successfully Deleted...');
    }
    else{
        newCustomer ={result:result,data:{}};
         $mdToast.show($mdToast.simple().textContent('Cancelled...'));
        }
    
    close(newCustomer, 500); // close, but give 500ms for bootstrap to animate

 };

}]);



/*This controller is for getting Customers data*/

app.controller('getCutomersDataCtrl',['$http','$scope',function($http,$scope){
    $http.get('/getCutomersData').then(function(response) {
        $scope.customersData = response.data;
        console.log($scope.customersData);
        });  
}]);

// app.controller('addCustomer',['$scope','addCustomerDataFactory',function($scope,addCustomerDataFactory){

//     $scope.showCustomer = false;
//     $scope.otherAddress = false;
//     $scope.customerData = {};
//     $scope.id = 20;

//     $scope.addOtherAddress = function(){
//         $scope.otherAddress = true;
//     };

//     $scope.add = function(){
//         $scope.showCustomer = true;
//     };

//     $scope.addCustomerData = function(){
//         $scope.id = $scope.id + 1;
//         $scope.customerData ={
//             _id : $scope.id,
//             customerName : $scope.customerName,
//             customernumber : $scope.customernumber,
//             customerPhone : $scope.customerPhone,
//             address1 : $scope.address1,
//             address2 : $scope.address2,
//             DOB : $scope.DOB,
//             email : $scope.email
//         };
//         addCustomerDataFactory.add($scope.customerData);
//     };

// }]);


/*This factory is used to Post data*/

app.factory('addCustomerDataFactory', function($http) {
        var factory = {};
        factory.add = function(data) {
            $http.post('/addCutomer',data).then(function(response) {
            console.log(response);
        });    
    }
   
    return factory;
    }); 





// app.controller('deleteController', function($scope, ModalService) {
    
//     $scope.deleteCustomer = function() {
//         ModalService.showModal({
//             templateUrl: 'deleteCustomerModal.html',
//             controller: "deleteModalController"
//         }).then(function(modal) {
//             modal.element.modal();
//             modal.close.then(function(result) {
//                 $scope.message = "You said " + result;
//             });
//         });
//     };
    
// });

// app.controller('editController', function($scope, ModalService) {
    
//     $scope.editCustomer = function(index) {
//         ModalService.showModal({
//             templateUrl: 'editCustomerModal.html',
//             controller: "editModalController"
//         }).then(function(modal) {
//             modal.element.modal();
//             modal.close.then(function(result) {
//                 $scope.message = "You said " + result;
//             });
//         });
//     };
    
// });
