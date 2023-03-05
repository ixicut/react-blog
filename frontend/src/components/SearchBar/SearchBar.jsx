import './SearchBar.css';
import '../../bootstrap.min.css';

const SearchBar = () => {
    return (
            <form class="search-form">
                <input type="text" class="search-box" placeholder="Search"></input>
                <button type="submit" class="search-btn">
                    <img src="search.svg" alt="srch"></img>
                </button>
            </form>
    );
}

export default SearchBar;
