const Game = require('../game');

it('adds new action', () => {
  const game = new Game();
  game.newGame();
  game.newAction({});
  expect(game.logs.length).toEqual(1);
});

it('starts new game', () => {
  const game = new Game();
  game.newGame();
  game.newAction({});
  game.newGame()
  expect(game.logs.length).toEqual(0);
});