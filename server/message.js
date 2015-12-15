var Messages = function(){
  this.results = [];
};

Messages.prototype.addMessage = function(username, content){
  var container = {
    username : username,
    message : content,
    //postedAt : new Date()
  }
  this.results.push(container);
}

Messages.prototype.getMessages = function(){
  return this;
};

var msg = new Messages();
module.exports = msg; 