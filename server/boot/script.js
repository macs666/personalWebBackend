module.exports = function(app) {

  app.post('/submitMessage', function(req, res) {
    if(req.body.name != undefined || req.body.email != undefined || req.body.message != undefined) {
      var name = req.body.name
    var email = req.body.email
    var message = req.body.message
      var responseObj = { message: name+" with email "+email+" sent "+message}
      res.send(responseObj)
    }
    else {
      res.send(404)
    }
  });

}