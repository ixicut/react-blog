import './App.css';
import Article from './components/Article/Article';
import { retrieveArticle } from './service/Service';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import SideMenu from './components/SideMenu/SideMenu';
import Main from './components/Main/Main';

function App() {

  const [article, setArticle] = useState({ title: 'SALO' });

  useEffect(() => {
    async function fetchData() {
      const data = await retrieveArticle();
      setArticle(data);
    }
    fetchData();
  }, [article]);

  return (
    <div>
      <NavBar></NavBar>
      <Main article={article}></Main>
    </div>
  );
}

export default App;
