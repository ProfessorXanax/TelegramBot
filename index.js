const Express = require('express');
const App = Express();

App.get('/', function(req, res) {
  res.send('Hello World!');
});

App.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});