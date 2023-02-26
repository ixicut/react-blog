const express = require('express');
const app = express();

app.get('/article', (req, res) => {
  const article = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'John Doe',
    publicationDate: '2022-02-25'
  };

  res.json(article);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});