// // web.js
// var express = require("express");
// var logfmt = require("logfmt");
// var app = express();
// var mongoose = require('mongoose');
// var http = require('http');
// var bodyParser = require('body-parser');
// //////////////


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// // parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// app.use(function (req, res, next) {
//   console.log(req.body) // populated!
//   next()
// });
// //////////////////

// app.use(express.static(__dirname + '/static'));

// app.use(logfmt.requestLogger());

// app.post("/login",function(req, res){
//   // console.log(req.body);
//   res.send('hello');
// });

// var port = Number(process.env.PORT || 5000);
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });








var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Configure to serve static files
app.use(express.static(__dirname + '/public'));

// Configure to parse the request body in the express 4.0 way
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/login',function(req,res){
  console.log(req.body);
  res.send(req.body);
});

app.listen(5000);

// initialize and setup passport
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  	return done(null, true)
  	if(username=="logan"){
  		if(password=="password123"){
  			return done(null, true)
  		}
  	}else{
  		return done("the username and password did not match", false)
  	}
  }
));

//-----------------------------Database---------------------//

mongoose.connect

//	Steps to setup Passport
	// 1) initialize
	// 2) setup and endpoint (express in your server.js)
			// a) call passport to authenticate (http://passportjs.org/guide/username-password/) look under the route section
	// 3) Test the endpoint with postman
	// 4) Create a form/inputs in the html to accept username and password (check)
	// 5) Add inputs to the model of a controller (check)
	// 6) Create a service that can make a call to the endpoint you created
	// 6) Within your controller call the service to pass the username and password into the endpoint
	// 7) Test it





// //delete this
// function Passport(){
// ///...
// 	done(error, loginornot, options){
// 		// does something
// 		// returns somthing
// 	}


// }


    // User.findOne({ username: username }, function(err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });






// var queryColumns = { username: username }

// var doneFunction = function(err, user) {
//   if (err) { return done(err); }
//   if (!user) {
//     return done(null, false, { message: 'Incorrect username.' });
//   }
//   if (!user.validPassword(password)) {
//     return done(null, false, { message: 'Incorrect password.' });
//   }
//   return done(null, user);

// };

// var strategyFunction = function(username, password, done){
// 	User.findOne(queryColumns, doneFunction );	// lookup an entry in the User table 
// 	if username == "bob"
// 		return done(null,true)
// 	else
// 		return done(null,false)
// }

// var strategy = new LocalStrategy(strategyFunction);	// basically says use username and password strategy

// passport.use(strategy);
