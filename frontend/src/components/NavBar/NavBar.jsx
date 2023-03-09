import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const NavBar = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const [loggedIn, setLoggedIn] = useState(isLoggedIn);

    return (
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark justify-content-between navbar-theme">
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
                    <ul class="navbar-nav me-auto">
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
                    <div class="r-p"></div>
                    {loggedIn ?
                        <button type="but" class="btn btn-primary" onClick={e => {
                            e.preventDefault();
                            localStorage.setItem('isLoggedIn', false);
                            setLoggedIn(false);
                        }}>Logout</button> :
                        <Link to={"/login"} type="button" class="btn btn-primary">
                            Login
                        </Link>

                    }
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
