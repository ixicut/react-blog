import ArticleList from '../ArticleList/ArticleList';
import SideMenu from '../SideMenu/SideMenu';
import PaginationPanel from '../PaginationPanel/PaginationPanel';
import './Body.css';
import '../../bootstrap.min.css';

const Body = ({ articles, updateCallBack, count, loading}) => {
    return (
        <div class="container-fluid">
            <div class="row">
                <SideMenu></SideMenu>
                <ArticleList articles={articles}></ArticleList>
            </div>
            <div class="row mb-3">
                <PaginationPanel fetchCallBack = {updateCallBack} pageCount = {count} loading = {loading}></PaginationPanel>
            </div>             
        </div>
    );
}

export default Body;
