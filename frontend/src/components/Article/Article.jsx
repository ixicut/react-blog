import "./Article.css"
import React from 'react';
import '../../bootstrap.min.css';

const Article = (article) => {
  return (

    <div key={article.id} class="col-md-6 col-lg-3 mb-4 d-flex">
      <div class="card">
        <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="..."></img>
        <div class="card-body acticle-size">
          <h5 class="card-title">{article.title}</h5>
          <h6 class="card-title">{article.date}</h6>
          <h6 class="card-title">{article.author}</h6>
          <p class="card-text">{article.content}</p>
        </div>
        <div class="card-footer bg-transparent">
          <a href="#" class="btn btn-success">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default Article;