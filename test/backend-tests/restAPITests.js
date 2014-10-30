var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
describe('rest api for name', function () {
  //Start the Server before the TESTS
  before(function (done) {
    testServer = app.listen(testPort, function () {
      console.log("Server is listening on: " + testPort);
      done();
    }).
    on('error',function(err){
        console.log(err);
      });
  })
  after(function(){  //Stop server after the test
    testServer.close();
  })
  it("Should get Donald Duck", function (done) {
    http.get("http://localhost:"+testPort+"/api/name",function(res){
      res.setEncoding("utf8");//response data is now a string
      res.on("data",function(chunk){
        var n = JSON.parse(chunk);
        n.name.should.equal("Donald Duck");
        done();
      });
    })
  });
});
