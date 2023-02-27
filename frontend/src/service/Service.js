export async function retrieveArticle() {
    const response = await fetch('http://localhost:3001', {
        method: 'GET'
      });
      const body = await response.text();
      const article = body === "" ? {} : JSON.parse(body);
      return article;
}