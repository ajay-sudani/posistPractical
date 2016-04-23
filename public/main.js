require.config({
    paths: {
        angular: "/starts/bower_components/angular/angular",
        ngRoute: "/starts/bower_components/angular-route/angular-route",
        ngAnimate: "/starts/bower_components/angular-animate/angular-animate",
        ngAria: "/starts/bower_components/angular-aria/angular-aria",
        ngMaterial: "/starts/bower_components/angular-material/angular-material",
        ngMessages:"/starts/bower_components/angular-messages/angular-messages",
        satellizer: "/starts/bower_components/satellizer/satellizer.min",
        uiBootstrap:"http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.9.0"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        ngRoute: {
            deps: ["angular"]
        },
        ngMessages:{
            deps: ["angular"],
            exports: "ngMessages"
        },
        satellizer: {
            deps: ["angular"]
        },
        ngAnimate: {
            deps: ["angular"],
            exports: "angularAnimate"   
        },
        ngAria: {
            exports: "angularAria",
            deps: [ "angular" ]
        },
        ngMaterial: {
            exports: "angularMaterial",
            deps: ["angular"]
        },
        angularMaterial: {
            deps: ['angular', 'angularAnimate', 'angularAria']
        }
    },
    //packages: ["starter"]
});

require(["angular", "app"], function(angular) {
    angular.bootstrap(document.documentElement, ["app"]);
});