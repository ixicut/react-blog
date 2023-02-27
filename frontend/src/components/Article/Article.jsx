import "./Article.css"
import React from 'react';

const Article = (article) => {
  return (
    <div class="article">
      <div class="article-header">
        <h1 class="article-title">{article.title}</h1>
        <div class="article-author">{article.author}</div>
        <div class="article-date">{article.date}</div>
      </div>
      <div class="article-content">
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default Article;