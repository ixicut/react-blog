import Article from "../Article/Article";

const ArticleList = ({ articles }) => {
    return (
        articles.map(article => (
            <Article title={article.title} author={article.author} content={article.content} date={article.date} />
        ))
    );
}

export default ArticleList;