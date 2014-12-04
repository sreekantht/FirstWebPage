var express = require('express');
var router = express.Router();
var weNeedThis = require("../model/facadeTime").facade;

var mongoose = require('mongoose');

router.get('/teams', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }

  weNeedThis.getAllTeams(function (err, wikis) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
    res.header("Content-type","application/json");
    res.end(JSON.stringify(wikis));
  });
});

router.get('/getTeam/:teamName', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  var title = req.params.teamName;
  weNeedThis.getTeamById(title , function (err, wikis) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
    res.header("Content-type","application/json");
    res.end(JSON.stringify(wikis));
    return;
  });
});

router.get('/getComments/:teamName', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  var title = req.params.teamName;
  weNeedThis.getAllCommentsByTeamId(title , function (err, wikis) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
    res.header("Content-type","application/json");
    res.end(JSON.stringify(wikis));
    return;
  });
});

router.put('/updateVotes/:teamName', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  var title = req.params.team;
  weNeedThis.getTeamById(title , function (err, wikis) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));

    }

    wikis.updateVotes(title , function (err, wikis) {
      if (err) {
        res.status(err.status || 400);
        res.end(JSON.stringify({error: err.toString()}));
        return;
      }
      res.header("Content-type","application/json");
      res.end(JSON.stringify(wikis));
      return;
    });
  });
});

router.put('/updateComment/:commentId', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  var title = req.params._id;
  weNeedThis.getCommentById(title , function (err, wikis) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));

    }

    wikis.updateComment(title , function (err, wikis) {
      if (err) {
        res.status(err.status || 400);
        res.end(JSON.stringify({error: err.toString()}));
        return;
      }
      res.header("Content-type","application/json");
      res.end(JSON.stringify(wikis));
      return;
    });
  });
});


router.post('/addComment/teamId/:comment', function(req, res){
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  var comm = req.params.comm;
  weNeedThis.saveOrder(comm , function (err, wikis) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
    res.header("Content-type","application/json");
    res.end(JSON.stringify(wikis));
    return;
  });
})


module.exports = router;
