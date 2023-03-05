import { useEffect, useState } from 'react';
import '../../bootstrap.min.css';
import { retrieveCategories } from '../../service/Service';
import './SideMenu.css';

const SideMenu = () => {

    const [categories, setCategories] = useState([]);

    async function fetchData() {
      const data = await retrieveCategories();
      setCategories(data);
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <nav class="col-md-2 d-none d-md-block sidebar">
                <div class="position-sticky pt-3">
                    <h5 class="text-uppercase mr-1 ">Categories</h5>
                    <ul class="nav flex-column">
                        {
                            categories.map(category =>(
                                <li key = {category.id} class="nav-item text-truncate">
                                    <a class="nav-link text-truncate cat-text-lengh" href="#">{category.title}</a>
                                </li> 
                            ))
                        }
                    </ul>
                </div>
            </nav>
    );
}

export default SideMenu;
