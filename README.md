# Tic Tac Toe 
### (backend)

backend part for Tic Tac Toe game. 
Game repo: https://github.com/ezhis/tictactoe-game

GET `/new-game` Starts new game, all logs will be cleared.

POST `/log-action` saves a provided body object.

GET `/events` returns stream of events.

GET `/logs` returns latest evet. accepts query param `size`. 

## Build docker image
```
docker build -t <image-tag> .
```

## Run docker image
Inside application default port is 8080.

```
docker run -p 8080:8080 <image-tag>
```