import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav class="navbar">
            <ul class="navbar-nav">
                <a class="logo nav-link" href='test'>
                <embed src='blog.svg' class = "logo-embed"></embed>
                React Blog
                </a>
                <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
            </ul>
            <SearchBar></SearchBar>
        </nav>
    );
}

export default NavBar;
