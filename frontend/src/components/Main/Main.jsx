import Article from '../Article/Article';
import SideMenu from '../SideMenu/SideMenu';
import './Main.css';

const Main = ({ article }) => {
    return (
        <main>
            <Article title={article.title} author={article.author} content={article.content} date={article.date} />
            <div><SideMenu></SideMenu></div>
        </main>
    );
}

export default Main;
