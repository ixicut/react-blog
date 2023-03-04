import Article from "../Article/Article";
import '../../bootstrap.min.css';

const ArticleList = ({ articles }) => {
    return (
        <main class="col-md-10 ms-sm-auto col-lg-10 px-md-4">
            <div
                class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-success">
                <h1 class="h1">Dashboard</h1>
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