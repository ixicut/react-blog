import './App.css';
import Article from './components/Article/Article';
import { retrieveArticle } from './service/Service';
import { useEffect, useState } from 'react';

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
    <Article title={article.title} author={article.author} content={article.content} date={article.date} />
  );
}

export default App;
