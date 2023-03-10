import "./Article.css"
import React from 'react';
import { deleteArticle } from "../../service/Service";

const Article = ({ article, updateCallback }) => {
  var isLoggedIn = localStorage.getItem('isLoggedIn');

  async function onDelete(event) {
    event.preventDefault();
    await deleteArticle(article.id);
    updateCallback(0);
  }

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
        <div className="card-footer bg-transparent d-flex justify-content-between">
          <a href={article.id} className="btn btn-success">
            <div className="read-btn">Read more</div>
          </a>
          {(isLoggedIn === "true") &&
            <button className="btn btn-danger" onClick={(e) => onDelete(e)}>
              Delete
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Article;