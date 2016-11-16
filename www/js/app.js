
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('mainCtrl', function($scope){

  $scope.geraChave = function(){
    var dData = new Date();
    var iChave = 0;
    var sChave = '';

    //Calcula Ano
    iChave = dData.getFullYear() + 19;
    sChave = iChave;

    //Calcula Dia
    iChave = dData.getDate() + 3;
    sChave = sChave +''+ iChave;

    //Calcula Mes
    iChave = dData.getMonth() + 8;
    sChave = sChave +''+ iChave;

    function alertDismissed() {
    // do something
    };

    navigator.notification.alert(sChave, alertDismissed, 'Chave de Ativaçao NFe','Marvilha!');

     }

});
