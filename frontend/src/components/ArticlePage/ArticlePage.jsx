import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import { retrieveArticle } from "../../service/Service";
import { useParams } from "react-router-dom";
import Article from "../Article/Article";
import '../../bootstrap.min.css';

const ArticlePage = (props) => {

    const [article, setArticle] = useState({});
    const { id } = useParams();

    async function getArticle() {
        const data = await retrieveArticle(id);
        setArticle(data);
        console.log(data);
    }

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <div className="d-flex justify-content-center align-items-center">
                <Article id={article.id}
                    title={article.title}
                    author={article.author}
                    content={article.content}
                    date={article.date}
                />

            </div>

            <Footer></Footer>
        </>
    );
}

export default ArticlePage;