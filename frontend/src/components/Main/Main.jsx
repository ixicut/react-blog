import ArticleList from '../ArticleList/ArticleList';
import SideMenu from '../SideMenu/SideMenu';
import './Main.css';

const Main = ({ articles }) => {
    return (
        <main>
            <ArticleList articles={articles}></ArticleList>
            <div><SideMenu></SideMenu></div>
        </main>
    );
}

export default Main;
