import ArticleList from '../ArticleList/ArticleList';
import SideMenu from '../SideMenu/SideMenu';
import './Body.css';

const Body = ({ articles }) => {
    return (
        <div class="container-fluid">
            <div class="row">
                <SideMenu></SideMenu>
                <ArticleList articles={articles}></ArticleList>
            </div>
        </div>
    );
}

export default Body;
