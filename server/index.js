const express = require('express');
let app = express();
let port = 3000;
// console.log(__dirname + '/../public');
app.use(express.static(__dirname + '/../public'));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});