import ArticleList from '../ArticleList/ArticleList';
import SideMenu from '../SideMenu/SideMenu';
import './Body.css';

const Body = ({ articles }) => {
    return (
        <main>
            <ArticleList articles={articles}></ArticleList>
            <div><SideMenu></SideMenu></div>
        </main>
    );
}

export default Body;
