import "./Article.css"
import React from 'react';

const Article = (article) => {
  return (

    <div key={article.id} class="col-md-6 col-lg-3 mb-4 d-flex">
      <div class="card">
        <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="..."></img>
        <div class="card-body acticle-size">
          <h4 class="card-title">{article.title}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{article.author}</h6>
          <p class="card-text"><small class="text-muted">{article.date}</small></p>
          <p class="card-text">{article.content}</p>
        </div>
        <div class="card-footer bg-transparent">
          <a href={article.id} class="btn btn-success">
          <div class = "read-btn">Read more</div>   
          </a>
        </div>
      </div>
    </div>
  );
}

export default Article;