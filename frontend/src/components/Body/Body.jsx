import { createContext, useContext, useEffect, useState } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import SideMenu from '../SideMenu/SideMenu';
import PaginationPanel from '../PaginationPanel/PaginationPanel';
import './Body.css';
import { CountContext, RefreshCallbackContext } from '../../App';

export const CurrentPageContext = createContext(0);

const Body = () => {

    const [currentPage, setCurrentPage] = useState(0);

    const updateCallBack = useContext(RefreshCallbackContext);
    const count = useContext(CountContext);

    function onPrev() {
        document.documentElement.scrollTop = 0;
        const page = currentPage - 1;
        setCurrentPage(page);
        updateCallBack(page);
    }

    function onNext() {
        document.documentElement.scrollTop = 0;
        setCurrentPage(currentPage + 1);
        updateCallBack(currentPage + 1);
    }

    useEffect(() => {
        const prevBtn = document.getElementById("pag-prev-btn");
        const nextBtn = document.getElementById("pag-next-btn");
        currentPage === 0 ? prevBtn.disabled = true : prevBtn.disabled = false;
        (currentPage + 1) == count ? nextBtn.disabled = true : nextBtn.disabled = false;
    }, [currentPage, count]);

    return (
        <CurrentPageContext.Provider value={currentPage}>
            <div class="container-fluid">
                <div class="row">
                    <SideMenu></SideMenu>
                    <ArticleList>
                        currentPage= {currentPage}
                    </ArticleList>
                </div>
                <div class="row mb-3">
                    <PaginationPanel
                        currentPage={currentPage}
                        onPrev={onPrev}
                        onNext={onNext}></PaginationPanel>
                </div>
            </div>
        </CurrentPageContext.Provider>
    );
}

export default Body;
