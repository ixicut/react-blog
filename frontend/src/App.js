import './App.css';
import Article from './components/Article/Article';
import { retrieveArticle } from './service/Service';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [article, setArticle] = useState({title: 'SALO'});

  useEffect(() => {
    async function fetchData() {
      const data = await retrieveArticle();
      setArticle(data);
    }
    fetchData();
  }, [article]);

  return (
    <div className="App"> 
    <NavBar></NavBar>
     <Article title={article.title} author={article.author} content={article.content} date={article.date} />
    </div>
  );
}

export default App;
