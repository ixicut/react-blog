import './SideMenu.css';

const SideMenu = () => {
    return (
        <aside>
            <h2 class = "side-menu-title">Categories</h2>
            <ul>    
                <li><a class = "cat-link" href="#">Category 1</a></li>
                <li><a class = "cat-link" href="#">Category 2</a></li>
                <li><a class = "cat-link" href="#">Category 3</a></li>
                <li><a class = "cat-link" href="#">Category 4</a></li>
            </ul>
        </aside>
    );
}

export default SideMenu;
