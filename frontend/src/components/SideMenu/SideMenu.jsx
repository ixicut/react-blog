import './SideMenu.css';

const SideMenu = () => {
    return (
        <nav class="col-md-2 d-none d-md-block sidebar">
                <div class="position-sticky pt-3">
                    <h5 class="text-uppercase mr-1">Categories</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default SideMenu;
