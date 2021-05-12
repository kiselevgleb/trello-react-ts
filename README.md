# Trello-react TS repository with front:
https://github.com/kiselevgleb/trello-react-ts

Back server https://trello-back.herokuapp.com/

Front REACT TS (github) + Back node JS koa (heroku)

## Repository with back server:
https://github.com/kiselevgleb/trello-back

## Back server running Locally
For this Koa app to run you must be running node 0.11.*.
PROD:
REACT_APP_ALL_URL=https://trello-back.herokuapp.com/?method=allTickets
REACT_APP_POSTTASK_URL=https://trello-back.herokuapp.com/?method=createTicket
DEV:
REACT_APP_ALL_URL_DEV=http://localhost:7070/?method=allTickets
REACT_APP_POSTTASK_URL_DEV=http://localhost:7070/?method=createTicket

## Front server running Locally
You need Webpack 4.41.6 or higher.
    "prestart": "npm install",
    "start": "forever server.js",
    "watch": "forever -w server.js"
Running on localhost:7070