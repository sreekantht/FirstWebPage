/**
 * Created by Kaloyan on 12/2/2014.
 */
/**
 * Created by Valentina on 11/26/2014.
 */
var mongoose = require('mongoose');
var model = require('../model/db');
var teamModel = mongoose.model('teams');
var commModel = mongoose.model('comments');

function getAllTeams(callback) {
    model.TeamsModel.find({})
        .exec(function (err, teams) {
            if (err) {

                return callback(err);
            }
            callback(null, teams);
        });
}

function getTeamById(teamName, callback) {
    model.CommentsModel.find({team: teamName})
        .populate('team')
        .exec(function (err, details) {
            if (err) {
                callback(err);
            }
            callback(null, details);
        });

}

function getAllCommentsByTeamId(name,callback) {
    model.CommentsModel.find({team: name})
        .exec(function (err, comments) {
            if (err) {

                return callback(err);
            }
            callback(null, comments);
        });
}

function getCommentById(id, callback) {
    model.CommentsModel.find({_id: id})
        .exec(function (err, details) {
            if (err) {
                callback(err);
            }
            callback(null, details);
        });

}

//function saveOrder(comment,callback){
//    p = new model.CommentsModel(comment);
//    p.save(function(err,createdComment){
//        if(err){
//            return callback(err);
//        }
//        callback(null,createdComment);
//    });
//};
//
//function updateVotes(order,callback){
//    model.TeamsModel.update({_id: order._id}, {$set: {votes : order.votes + 1}}).exec();
//}
//
//function updateComment(comment, callback){
//    model.CommentsModel.update({_id : comment._id}, {$set: {comm : comment.comm}}).exec();
//}

model.exports = {
    getAllTeams : getAllTeams,
    getAllCommentsByTeamId : getAllCommentsByTeamId,
    getTeamById : getTeamById,
    //saveOrder : saveOrder,
    //updateVotes : updateVotes,
    //updateComment :updateComment,
    getCommentById : getCommentById
}