import { useEffect, useState } from 'react';
import './PaginationPanel.css';
import '../../bootstrap.min.css';

const PaginationPanel = ({fetchCallBack}) => {

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const prevBtn = document.getElementById("pag-prev-btn");
        currentPage === 0 ? prevBtn.disabled = true : prevBtn.disabled = false; 
      }, [currentPage]);

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

    return (
            <div class="col-12 text-end">
                <span class="me-2">{currentPage + 1}</span>
                <button id = "pag-prev-btn" type="button" class="btn btn-primary me-2" onClick={() => onPrev()}>Previous</button>
                <button type="pagi-next-btn" class="btn btn-primary" onClick={() => onNext()}>Next</button>
            </div>
    );
}

export default PaginationPanel;