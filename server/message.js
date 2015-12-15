var Messages = function(){
  this.results = [{text : 'message', username : 'Randy', roomname : '6th floor'}];
};

Messages.prototype.addMessage = function(username, content){
  var container = {
    username : username,
    text : content,
    roomname : 'lobby'
    //postedAt : new Date()
  }
  this.results.push(container);
}

Messages.prototype.getMessages = function(){
  return this;
};

var msg = new Messages();


var Rooms = function(){
  this.rooms = {};
}

Rooms.prototype.addRoom = function(roomname){
  this.rooms[roomname] = new Message();
}
module.exports = msg; 