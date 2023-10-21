var express = require('express');
var router = express.Router();
var users = require('../models/userModel');
var passport = require('passport');
var localStrategy = require('passport-local')

passport.use(new localStrategy(users.authenticate()));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/*user authentication routes */
router.post('/register', function (req, res, next) {
  var newUser = {
    username: req.body.username,
    email: req.body.email
  };
  users.register(newUser, req.body.password)
    .then(function (result) {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/profile')
      })
    })
    .catch((err) => {
      res.send(err)
    })

});
router.get('/auth', function (req, res, next) {
  res.render('register');
});
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}), function (req, res, next) {

});

router.get('/logout', function (req, res, next) {
  if(req.isAuthenticated())
  req.logOut((err)=>{
if(err) res.send(err)
else res.redirect('/')
})
else{
  res.redirect('/')
}
});

/*user authentication routes */

module.exports = router;
