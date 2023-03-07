import { useEffect, useState } from 'react';
import './PaginationPanel.css';
import '../../bootstrap.min.css';

const PaginationPanel = ({page,fetchCallBack}) => {

    const [currentPage, setCurrentPage] = useState(0);

    function onPrev() {
        setCurrentPage(currentPage -1);
        fetchCallBack(currentPage - 1);
    }

    function onNext() {
        setCurrentPage(currentPage + 1);
        fetchCallBack(currentPage + 1);
    }

    return (
            <div class="col-12 text-end">
                <span class="me-2">{currentPage}</span>
                <button type="button" class="btn btn-primary me-2" onClick={() => onPrev()}>Previous</button>
                <button type="button" class="btn btn-primary" onClick={() => onNext()}>Next</button>
            </div>
    );
}

export default PaginationPanel;