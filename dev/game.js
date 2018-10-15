function Game() {
  this.logs = [];
  this.onNewAction = null;
}

Game.prototype.newAction = function(action) {
  const id = this.logs.length;
  const actionData = {
    ...action,
    time: Date.now(),
    id,
  }
  this.logs.push(actionData);

  if (this.onNewAction) this.onNewAction(actionData)

  return id;
}

Game.prototype.newGame = function() {
  this.logs = [];
}

Game.prototype.getLogs = function(size = 5) {
  return this.logs.slice(-size);
}


module.exports = Game;