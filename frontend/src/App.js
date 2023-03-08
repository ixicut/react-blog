import './App.css';
import { retrieveArticles, retrieveArticleCount } from './service/Service';
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
  const [loading,setLoading] = useState(true);
  const [pageCount,setPageCount] = useState(0);

  async function fetchData(page) {
    setLoading(true);
    const data = await retrieveArticles(page);
    const pages = await retrieveArticleCount();
    setArticle(data);
    setPageCount(pages);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(0);
  }, []);

  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Main articles={articles} updateCallback = {fetchData} count = {pageCount} loading = {loading}/>} />
      <Route path="/add-article" element={<AddArticle onSave={fetchData} />} />
      <Route path="/:id" element={<ArticlePage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
