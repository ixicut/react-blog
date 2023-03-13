import { useContext } from 'react';
import { CountContext, LoadingContext } from '../../App';
import './PaginationPanel.css';

const PaginationPanel = ({ currentPage, onPrev, onNext }) => {
    const pageCount = useContext(CountContext);
    const loading = useContext(LoadingContext);

    return (
        <div class="col-12 text-end justify-content-center">
            <span class="me-2">{currentPage + 1} of {loading ? "..." : pageCount}</span>
            <button id="pag-prev-btn" type="button" class="btn btn-primary me-2" onClick={() => onPrev()}>Previous</button>
            <button id="pag-next-btn" type="button" class="btn btn-primary" onClick={() => onNext()}>Next</button>
        </div>
    );
}

export default PaginationPanel;