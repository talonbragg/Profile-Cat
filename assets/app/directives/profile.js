app.directive('profile', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'app/directives/profile.html' 
  }; 
});