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

const PAGE_LIMIT = 12;

// ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES 
app.get('/articles', async (req, res) => {
  try {
    const client = await pool.connect();
    let { offset } = req.query;

    if(!Number.isInteger(parseInt(offset))) offset = 0;

    const data = await client.query(`SELECT * FROM articles offset ${offset*PAGE_LIMIT} limit ${PAGE_LIMIT}`);
    res.send(data.rows);
    client.release();
  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

app.get('/articles/count', async (req, res) => {
  try {
    const client = await pool.connect();
    const data = await client.query(`SELECT CEILING(COUNT(*)/${PAGE_LIMIT}.) as count FROM articles`);
    res.send(data.rows);
    client.release();
  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

app.get('/articles/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const client = await pool.connect();
    const data = await client.query('SELECT * FROM articles WHERE id = $1', [id]);
    res.status(200).json(data.rows[0]);
    client.release();
  } catch (exception) {
    console.error(exception);
    res.send('Error ' + exception);
  }
});

app.post('/articles', async (req, res) => {
  try {
    const client = await pool.connect();
    const { title, author, content, date } = req.body;

    if (title.trim().length === 0 || author.trim().length === 0 || content.trim().length === 0) {
      res.status(400).json({ message: 'Fields cannot be empty' });
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

app.delete('/articles/:id', async (req, res) => {
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

app.put('/articles/:id', async (req, res) => {
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

app.get(`/categories`, async (req, res) => {
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

app.post('/categories', async (req, res) => {
  try {
    const client = await pool.connect();
    const { title } = req.body;

    if (title.trim().length === 0) {
      res.status(400).json({ message: 'Fields cannot be empty' });
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

app.delete('/categories/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const client = await pool.connect();
    const data = await client.query('DELETE FROM categories WHERE id = $1', [id]);
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

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});