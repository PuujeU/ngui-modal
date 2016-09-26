angular.module('modal-demo', ['ngRoute', 'ngui-modal-component'])
      .config(function ($routeProvider, $locationProvider) {
            $routeProvider
            .when('/modal', {
                templateUrl: '/demo/modal/view.html',
                controller: ModalCtrl,
                page:'modal'
            })
      })

      .run(['$rootScope', '$route', function ($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function () {
              $rootScope.$pageName = document.title = $route.current.page;
            });
      }])
;

angular.module('ngui-modal-component', [
        'ngui-modal'
])
.config(function ($nguiModalConfigProvider) {
        $nguiModalConfigProvider.setBaseTemplateUrl('/template');
})
;
