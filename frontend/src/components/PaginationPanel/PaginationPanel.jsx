import { useEffect, useState } from 'react';
import './PaginationPanel.css';
import '../../bootstrap.min.css';

const PaginationPanel = ({fetchCallBack,pageCount}) => {

    const [currentPage, setCurrentPage] = useState(0);

    function onPrev() {
        const page = currentPage - 1;
        setCurrentPage(page);
        fetchCallBack(page);
    }

    function onNext() {
        setCurrentPage(currentPage + 1);
        fetchCallBack(currentPage + 1);
    }

    function checkIfLessZero(pageIndex) {
        const prevBtn = document.getElementById("pag-prev-btn");
        (pageIndex < 0) ? prevBtn.disabled = true : prevBtn.disabled = false;    
    }

    useEffect(() => {
        const prevBtn = document.getElementById("pag-prev-btn");
        const nextBtn = document.getElementById("pag-next-btn");
        currentPage === 0 ? prevBtn.disabled = true : prevBtn.disabled = false; 
        currentPage + 1 == pageCount ? nextBtn.disabled = true : nextBtn.disabled = false; 
      }, [currentPage]);

    return (
            <div class="col-12 text-end">
                <span class="me-2">{currentPage + 1} of {pageCount}</span>
                <button id = "pag-prev-btn" type="button" class="btn btn-primary me-2" onClick={() => onPrev()}>Previous</button>
                <button id = "pag-next-btn" type="button" class="btn btn-primary" onClick={() => onNext()}>Next</button>
            </div>
    );
}

export default PaginationPanel;