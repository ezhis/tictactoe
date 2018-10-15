const express = require('express');
const app = new express();

const Game = require('./game');

app.use(express.json());

const game = new Game();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/new-game', (req, res) => {
  game.newGame();
  res.json({
    note: 'New game started'
  });
});

app.post('/log-action', (req, res) => {
  const id = game.newAction(req.body);
  res.json({
    note: 'Action was logged',
    id,
  });
});

app.get('/events', (req, res) => {
  let id = 0;
  game.onNewAction = (action) => {
    id ++;
    res.write(`data: ${JSON.stringify(action)}\n\n`);
  }

  res.writeHead(200, {
    'Content-type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  res.write('\n');
});

app.get('/logs', (req, res) => {
  const size = req.query.size || 5;
  res.json({
    note: 'Game logs',
    logs: game.getLogs(size),
  });
});

const port = process.env.PORT || 8080;
app.listen(port, ()=> {
  console.log(`App is running on port ${port}`);
})

module.exports = app;