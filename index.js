const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//app.use('/public', express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, 'project.html'));
});

app.get('/education', (req, res) => {
  res.sendFile(path.join(__dirname, 'education.html'));
});

app.get('/achivements', (req, res) => {
  res.sendFile(path.join(__dirname, 'achivements.html'));
});



app.listen(port, () => {
  console.log(`Digi-Dine listening on http://localhost:${port}`);
});