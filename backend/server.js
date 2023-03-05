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
  password: '123',
  port: 5432
});

// ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES 
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

    if(title.trim().length === 0 || author.trim().length === 0 || content.trim().length === 0){
       res.status(400).json({message: 'Fields cannot be empty'}); 
       return;
    }

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
    client.release();
  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

app.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, content } = req.body;
    const client = await pool.connect();
    const data = await client.query('UPDATE articles SET title = $1, author = $2, content = $3 WHERE id = $4', [
      title, author, content, id
    ]);
    res.status(201).json({ message: `Article with id ${id} updated` });
    client.release();
  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

//CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES 

app.get(``, async (req, res) => {
  try {
    const client = await pool.connect();
    const data = await client.query('SELECT * FROM categories');
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
    const { title } = req.body;

    if(title.trim().length === 0){
       res.status(400).json({message: 'Fields cannot be empty'}); 
       return;
    }

    const data = await client.query('INSERT INTO categories (title) VALUES ($1)', [title]);

    res.status(201).json({ message: `Category with id ${data.fields} created successfully` });
    client.release();
  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});