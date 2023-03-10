import "./AddArticle.css"
import { addArticle } from "../../service/Service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const AddArticle = (props) => {
    const history = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        const formattedDate = year + '-' + month + '-' + day;

        return formattedDate;
    }

    const saveArticle = async (event) => {
        event.preventDefault();
        console.log('popa');
        await addArticle(JSON.stringify({
            title: title.toString(),
            author: author.toString(),
            content: content.toString(),
            date: getCurrentDate()
        }));
        props.onSave();
        history('/');
    }

    return (
        <div class="wrapper background">
            <NavBar></NavBar>
            <div class="container my-5 justify-content-center align-items-center">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <form onSubmit={saveArticle} class="bg-success p-5">
                            <div class="form-group row mb-3">
                                <label class="font-weight-bold text-white col-sm-3 col-form-label h1">
                                    Заголовок:
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        type="text"
                                        value={title}
                                        required
                                        pattern=".{3,30}"
                                        title="Мінімум 3 максимум 30 символів"
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }}
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-3">
                                <label class="font-weight-bold text-white col-sm-3 col-form-label">
                                    Автор:
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        type="text"
                                        value={author}
                                        required
                                        pattern=".{3,30}"
                                        title="Мінімум 3 максимум 30 символів"
                                        onChange={(e) => {
                                            setAuthor(e.target.value);
                                        }}
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-3">
                                <label class="font-weight-bold text-white col-sm-3 col-form-label">
                                    Контент:
                                </label>
                                <div class="col-sm-9">
                                    <textarea
                                        value={content}
                                        required
                                        pattern=".{3}"
                                        onChange={(e) => {
                                            setContent(e.target.value);
                                        }}
                                        class="form-control"
                                    ></textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-sm-9 offset-sm-3">
                                    <button type="submit" className="btn btn-success btn-lg btn-shine">
                                        Створити статтю
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default AddArticle;