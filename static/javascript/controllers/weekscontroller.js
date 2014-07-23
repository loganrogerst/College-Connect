

app.controller('weeksController', function($scope, weekService){
		// $scope.correctSelected = function();
		$scope.userText;
		$scope.passText;
		// weekService.savaData()
	});	


app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd'
  },
  function(username, password, done) {
    // ...
  }
));








