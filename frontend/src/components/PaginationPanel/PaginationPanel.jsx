import './PaginationPanel.css';
import '../../bootstrap.min.css';

const PaginationPanel = ({currentPage,onPrev,onNext}) => {
    return (
            <div class="col-12 text-end">
                <span class="me-2">{currentPage}</span>
                <button type="button" class="btn btn-primary me-2">Previous</button>
                <button type="button" class="btn btn-primary">Next</button>
            </div>
    );
}

export default PaginationPanel;