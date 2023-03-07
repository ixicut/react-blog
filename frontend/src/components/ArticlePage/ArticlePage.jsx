import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import { retrieveArticle } from "../../service/Service";
import { useParams } from "react-router-dom";
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
            <div class="wrapper background">
                <NavBar></NavBar>
                <div key={article.id} className="container article-container">
                    <div className="container article-container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="display-4 article-title">{article.title}</div>
                                <div className="h4 article-info">{article.author}</div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="text-md-right article-info">{article.date}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="article-content border py-3 px-2">{article.content}</div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer></Footer>
            </div>
        </>
    );
}

export default ArticlePage;