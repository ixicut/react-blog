import './EmptyPlacer.css';
import '../../bootstrap.min.css';

const EmptyPlacer = ({ caption }) => {
    return (
        <div class="d-flex justify-content-center align-items-center empty-placer empty-placer">
            <h1>{caption}</h1>
        </div>
    );
}

export default EmptyPlacer;