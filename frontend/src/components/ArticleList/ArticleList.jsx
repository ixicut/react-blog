import Article from "../Article/Article";

const ArticleList = ({ articles }) => {
    return (
        articles.map(article => (
            <Article id={article.id} title={article.title} author={article.author} content={article.content} date={article.date} />
        ))
    );
}

export default ArticleList;