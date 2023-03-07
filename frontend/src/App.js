import './App.css';
import { retrieveArticles } from './service/Service';
import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom'
import AddArticle from './components/AddArticle/AddArticle';
import Main from './components/Main/Main';
import ArticlePage from './components/ArticlePage/ArticlePage';

function App() {
  const [articles, setArticle] = useState([]);

  async function fetchData() {
    const data = await retrieveArticles();
    setArticle(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Main articles={articles}/>} />
      <Route path="/add-article" element={<AddArticle onSave={fetchData} />} />
      <Route path="/:id" element={<ArticlePage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
