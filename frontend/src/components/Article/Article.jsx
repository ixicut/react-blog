import "./Article.css"
import React from 'react';

const Article = (article) => {
  return (
    <section>
    <article>
      <span class="top-right">{article.date}</span>
      <h3>{article.title}</h3>
      <h5>{article.author}</h5>
      <p>{article.content}</p>
      <a href="#">Read More</a>
    </article>
    </section>
  );
}

export default Article;