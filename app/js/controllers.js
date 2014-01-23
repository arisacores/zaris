'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyCtrl3', [function() {

  }])
  .controller('ProcedimentosCtrl', function ($scope) {
$scope.procedimentos = [
	{'ambito': 'Indisponibilidade SI', 'situacao': 'Se não for possível resolver a questão: "Vá tomar um cafézinho e volte mais tarde."'},
	{'ambito': 'Resolução sem despiste', 'situacao': 'Registar a chamada, venha outra!'},
	{'ambito': 'Dificuldade em manter ligação', 'situacao': 'Rodar 3 vezes, se não, siga po team leader'}
	];
$scope.socool = "so cool";
});