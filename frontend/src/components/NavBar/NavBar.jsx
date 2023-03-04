import '../../bootstrap.min.css';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg sticky-top navbar-light navbar-theme">
        <div class="container-fluid">
            <a class="navbar-brand logo" href='/'>
                <img src='blog.svg' class="logo-embed" alt="logo"></img>
                React Blog
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <SearchBar></SearchBar>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;
