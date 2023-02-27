import "./Article.css"
import React from 'react';

const Article = (article) => {
  return (
    <article>
      <span class="top-right">{article.date}</span>
      <h3>{article.title}</h3>
      <h5>{article.author}</h5>
      <p>{article.content}</p>
    </article>
  );
}

export default Article;