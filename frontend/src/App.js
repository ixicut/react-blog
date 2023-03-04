import './App.css';
import { retrieveArticle } from './service/Service';
import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom'
import AddArticle from './components/AddArticle/AddArticle';
import Main from './components/Main/Main';

function App() {
  const [articles, setArticle] = useState([]);

  async function fetchData() {
    const data = await retrieveArticle();
    setArticle(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Main articles={articles} />} />
      <Route path="/add-article" element={<AddArticle />} />
    </Routes>

  );
}

export default App;
