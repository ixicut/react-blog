export async function retrieveArticle() {
  const response = await fetch('http://localhost:3001', {
    method: 'GET'
  });
  const body = await response.text();
  const articles = body === "" ? {} : JSON.parse(body);
  return articles;
}

export async function addArticle(article) {
  const response = await fetch(`http://localhost:3001`, {
    method: 'POST',
    body: article
  });

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

export async function updateArticle(id, article) {
  const response = await fetch(`http://localhost:3001/${id}`, {
    method: 'PUT',
    body: article
  });
  const body = await response.text();
  const message = body === "" ? {} : JSON.parse(body);
  return message;
}