const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const public_dev_path = __dirname + "/dist/";

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
app.use(express.static(public_dev_path));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'index.html'));
  res.sendFile(path.resolve(public_dev_path, 'index.html'));
});

app.listen(port);
