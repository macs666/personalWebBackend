module.exports = function(app) {

  app.post('/submitMessage', function(req, res) {
    if(req.body.name != undefined || req.body.email != undefined || req.body.message != undefined || req.body.subject) {
      var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var subject = req.body.subject
      var responseObj = { 
        name : name,
        email : email,
        subject : subject,
        message: message
      }
      res.send(responseObj)
    }
    else {
      res.send(404)
    }
  });

}