var Messages = function(){
  this.results = [];
};

Messages.prototype.addMessage = function(username, message){
  var content = {
    username : username,
    message : message,
    //postedAt : new Date()
  }
  this.results.push(content);
}

Messages.prototype.getMessages = function(){
  return this;
};

var msg = new Messages();
module.exports = msg; 