import Article from "../Article/Article";
import '../../bootstrap.min.css';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
    return (
        <main class="col-md-10 ms-sm-auto col-lg-10 px-md-4">
            <div
                class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-success">
                <div class = "black-white-shimmer-text"><h1 class="h1">Dashboard</h1></div>
                <a class="btn btn-success" href="/add-article">Create Article</a>
            </div>

            <div class="row">
                {
                    articles.map(article => (
                        <Article id={article.id} title={article.title} author={article.author} content={article.content} date={article.date}/>
                    ))
                }
            </div>
        </main>
    );
}

export default ArticleList;