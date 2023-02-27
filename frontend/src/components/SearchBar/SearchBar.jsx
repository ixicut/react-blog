import './SearchBar.css';

const SearchBar = () => {
    return (
        <form class="search-form">
                <input type="text" class="search-box" placeholder="Search"></input>
                <button type="submit" class="search-btn">
                    <i class="fa fa-search"></i>
                </button>
            </form>
    );
}

export default SearchBar;
