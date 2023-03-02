import './App.css';
import { retrieveArticle } from './service/Service';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {

  const [articles, setArticle] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await retrieveArticle();
      setArticle(data);
    }
    fetchData();
  }, [articles]);

  return (
    <div>
      <NavBar></NavBar>
      <Main articles={articles}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
