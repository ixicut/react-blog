import './App.css';
import Article from './components/Article/Article';
import { retrieveArticle } from './service/Service';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';

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
      {
        articles.map(article => (
          <div key={article.id}>
            <Article title={article.title} author={article.author} content={article.content} date={article.date} />
          </div>
        ))
      }
    </div>
  );
}

export default App;
