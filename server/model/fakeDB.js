/**
 * Created by Valentina on 12/4/2014.
 */
var war = require('./db');
function dropData(){
    war.TeamsModel.remove({}).exec();
    war.CommentsModel.remove({}).exec();

}
function createTheData(){

    var team = new war.TeamsModel({_id :  2, teamName : "bla" , votes : 3});
    team.save(function(err){
        console.log(err);
    })
    var comm = new war.CommentsModel({_id : 1, comm: "efrsgdth", team : "bla"});
    comm.save(function(err){
        console.log(err);
    })

    var comm = new war.CommentsModel({_id : 2, comm: "fuck", team : "bla"});
    comm.save(function(err){
        console.log(err);
    })
}

//dropData();
createTheData();