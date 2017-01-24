angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService) {

$scope.lessonsArray = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

$scope.announceDay = function(lesson, day) {
  
  if (day) {
    alert(lesson + ' is scheduled on ' + day + '.')
  }
  

}

});