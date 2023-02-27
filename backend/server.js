const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json({ type: "/" }));
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blog',
  password: 'petrov',
  port: 5432
});

app.get(``, async (req, res) => {
  try {
    const client = await pool.connect();
    const data = await client.query('SELECT * FROM articles');
    res.send(data.rows);
    client.release();
  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

app.post('', async (req, res) => {
  try {
    const client = await pool.connect();
    const { title, author, content, date } = req.body;

    const data = await client.query('INSERT INTO articles (title, author, content, date) VALUES ($1, $2, $3, $4)',
      [title, author, content, date]);

    res.status(201).json({ message: `Article with id ${data.fields} created successfully` });
    client.release();
  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

app.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const client = await pool.connect();
    const data = await client.query('DELETE FROM articles WHERE id = $1', [id]);
    if (data.rowCount === 1) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Article not found' });
    }

  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});