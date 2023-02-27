const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ type: "/" }));

app.get(``, (req, res) => {
  const article = {
    id: 1,
    title: 'About salo',
    author: 'Kabanchik',
    content: 'Salo to ahyenna shtyka. Realno zaebis, smakota sho pizdec. Im kozen den.',
    date: '2023-7-2'
  };

  res.json(article);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});