angular.module('directivePractice').directive('lessonHider', function() {

  return {
    restrict: "E",
    templateUrl: "lessonHider.html",
    scope: {
      lesson: "=",
      dayAlert: "&"
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule()
    },
    link: function(scope, element, attrs) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(e) {
          if (e.lesson === scope.lesson) {
            scope.lessonDay = e.weekday;
            element.css('text-decoration', 'line-through');
            return;
          };
        })

      });
    }
  }


});