import "./AddArticle.css"
import { useState } from "react";

const AddArticle = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    return (
        <form >
            <label>
                Заголовок:
                <input type="text" value={title} onChange={e => { setTitle(e.target.value) }} />
            </label>
            <label>
                Автор:
                <input type="text" value={author} onChange={e => { setAuthor(e.target.value) }} />
            </label>
            <label>
                Контент:
                <textarea value={content} onChange={e => { setContent(e.target.value) }} />
            </label>
            <button type="submit">Створити статтю</button>
        </form>
    );
}

export default AddArticle;