import "./Article.css"
import React from 'react';

const Article = (article) => {
  return (
    <div className="article">
      <div className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-author">{article.author}</div>
        <div className="article-date">{article.date}</div>
      </div>
      <div className="article-content">
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default Article;