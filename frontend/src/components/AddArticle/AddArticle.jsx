import "./AddArticle.css"

const AddArticle = () => {
    return (
        <form >
            <label>
                Заголовок:
                <input type="text" />
            </label>
            <label>
                Автор:
                <input type="text" />
            </label>
            <label>
                Контент:
                <textarea />
            </label>
            <button type="submit">Створити статтю</button>
        </form>
    );
}

export default AddArticle;