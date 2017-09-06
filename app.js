var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});



// App Set //
app.set('port', (process.env.PORT || 3004));

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
