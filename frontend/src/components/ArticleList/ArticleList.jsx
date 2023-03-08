import Article from "../Article/Article";
import EmptyPlacer from "../EmptyPlacer/EmptyPlace";
import '../../bootstrap.min.css';
import './ArticleList.css';

function arrayIsEmpty(array) {
    if (!Array.isArray(array)) {
        return false;
    }

    if (array.length === 0) {
        return true;
    }

    return false;
}

const ArticleList = ({ articles, loading }) => {
    return (
        <main class="col-md-10 ms-sm-auto col-lg-10 px-md-4">
            <div
                class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-success">
                <div class="black-white-shimmer-text"><h1 class="h1">Dashboard</h1></div>
                <a class="btn btn-success" href="/add-article">Create Article</a>
            </div>

            <div class="row">
            {
                loading ? <div class="d-flex justify-content-center align-items-center loading-cont-height">
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div> :
                    arrayIsEmpty(articles) ?
                        <EmptyPlacer caption={"There is no blogs"} /> :
                        articles.map(article => (
                            <Article id={article.id}
                                title={article.title}
                                author={article.author}
                                content={article.content}
                                date={article.date}
                            />
                        ))
                
            }
            </div>
        </main>
    );
}

export default ArticleList;