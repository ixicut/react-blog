import ArticleList from '../ArticleList/ArticleList';
import SideMenu from '../SideMenu/SideMenu';
import './Body.css';
import '../../bootstrap.min.css';
import Footer from '../Footer/Footer';

const Body = ({ articles }) => {
    return (
        <div class="container-fluid">
            <div class="row">
                <SideMenu></SideMenu>
                <ArticleList articles={articles}></ArticleList>
                <Footer></Footer> 
            </div>
        </div>
    );
}

export default Body;
