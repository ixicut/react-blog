import "./AddArticle.css"
import { addArticle } from "../../service/Service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../bootstrap.min.css';

const AddArticle = () => {
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
        history('/');
    }

    return (
        <form onSubmit={saveArticle}>
            <label>
                Заголовок:
                <input type="text" value={title} required pattern=".{3,30}" title="Мінімум 3 максимум 30 символів"
                    onChange={e => { setTitle(e.target.value) }} />
            </label>
            <label>
                Автор:
                <input type="text" value={author} required pattern=".{3,30}" title="Мінімум 3 максимум 30 символів"
                    onChange={e => { setAuthor(e.target.value) }} />
            </label>
            <label>
                Контент:
                <textarea value={content} required pattern=".{3}" onChange={e => { setContent(e.target.value) }} />
            </label>
            <button type="submit">Створити статтю</button>
        </form>
    );
}

export default AddArticle;