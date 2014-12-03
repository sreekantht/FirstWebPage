var mongoose = require( 'mongoose' );

/*

 Note:
 To this test project as it is:

 Start your MongoDB database.
 Start mongo.exe and do:
 use testdb
 db.testusers.insert({userName : "Lars", email :"lam@cphbusiness.dk",pw: "test",created : new Date()})
 db.testusers.insert({userName : "Henrik", email :"hsty@cphbusiness.dk",pw: "test",created : new Date()})
 db.testusers.insert({userName : "Tobias", email :"tog@cphbusiness.dk",pw: "test",created : new Date()})
 db.testusers.insert({userName : "Anders", email :"aka@cphbusiness.dk",pw: "test",created : new Date()})

 */
var dbURI;

//This is set by the backend tests
if( typeof global.TEST_DATABASE != "undefined" ) {
  dbURI = global.TEST_DATABASE;
}
else{
  dbURI = 'mongodb://vala:vala@ds056727.mongolab.com:56727/semproject';
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  global.mongo_error = "Not Connected to the Database";
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});


/** User SCHEMA **/
/** Replace this Schema with your own(s) **/
var TeamsSchema = new mongoose.Schema({
  _id : Number,
  teamName : String,
  votes: Number
});

exports.TeamsModel = mongoose.model('teams', TeamsSchema);

var CommentsSchema = new mongoose.Schema({
  _id : Number,
  comm : String,
  team : {type : String, ref : 'teams'}
})

exports.CommentsModel = mongoose.model('comments', CommentsSchema);



