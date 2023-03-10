import './PaginationPanel.css';

const PaginationPanel = ({ fetchCallBack, currentPage, pageCount, loading, onPrev,onNext}) => {

    return (
        <div class="col-12 text-end justify-content-center">
            <span class="me-2">{currentPage + 1} of {loading ? "..." : pageCount}</span>
            <button id="pag-prev-btn" type="button" class="btn btn-primary me-2" onClick={() => onPrev()}>Previous</button>
            <button id="pag-next-btn" type="button" class="btn btn-primary" onClick={() => onNext()}>Next</button>
        </div>
    );
}

export default PaginationPanel;