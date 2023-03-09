import Article from "../Article/Article";
import EmptyPlacer from "../EmptyPlacer/EmptyPlace";
import './ArticleList.css';
import { Link } from "react-router-dom";

function arrayIsEmpty(array) {
    if (!Array.isArray(array)) {
        return false;
    }

    if (array.length === 0) {
        return true;
    }

    return false;
}

const ArticleList = ({ articles, loading, updateCallback }) => {
    return (
        <main class="col-md-10 ms-sm-auto col-lg-10 px-md-4">
            <div
                class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-success">
                <div class="black-white-shimmer-text"><h1 class="h1">Dashboard</h1></div>
                <Link class="btn btn-success" to={"/add-article"}>Create Article</Link>
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
                            articles.map(el => (
                                <Article reloadCallback={updateCallback} article={el}
                                />
                            ))

                }
            </div>
        </main>
    );
}

export default ArticleList;