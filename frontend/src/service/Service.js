// ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES ARTICLES 
export async function retrieveArticle() {
  const response = await fetch('http://localhost:3001', {
    method: 'GET'
  });
  const body = await response.text();
  const articles = body === "" ? {} : JSON.parse(body);
  return articles;
}

export async function addArticle(article) {
  const response = await fetch('http://localhost:3001', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: article
  });
  console.log(article);
  const body = await response.text();
  const message = body === "" ? {} : JSON.parse(body);
  return message;
}

export async function deleteArticle(id) {
  const response = await fetch(`http://localhost:3001/${id}`, {
    method: 'DELETE'
  });
  const body = await response.text();
  const message = body === "" ? {} : JSON.parse(body);
  return message;
}

export async function updateArticle(id, { article }) {
  const response = await fetch(`http://localhost:3001/${id}`, {
    method: 'PUT',
    body: article
  });
  const body = await response.text();
  const message = body === "" ? {} : JSON.parse(body);
  return message;
}

//CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES

export async function retrieveCategories() {
  const response = await fetch('http://localhost:3001/categories', {
    method: 'GET'
  });
  const body = await response.text();
  const categories = body === "" ? {} : JSON.parse(body);
  return categories;
}

export async function addCategory(category) {
  const response = await fetch('http://localhost:3001/categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: category
  });
  console.log(category);
  const body = await response.text();
  const message = body === "" ? {} : JSON.parse(body);
  return message;
}