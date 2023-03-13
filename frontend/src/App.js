import './App.css';
import { retrieveArticles, retrieveArticleCount, deleteArticle } from './service/Service';
import { useEffect, useState, createContext } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom'
import AddArticle from './components/AddArticle/AddArticle';
import Main from './components/Main/Main';
import ArticlePage from './components/ArticlePage/ArticlePage';
import LoginModal from './components/LoginDialog/LoginDialog';

export const RefreshCallbackContext = createContext(() => { });
export const DeleteCallbackContext = createContext(() => { });
export const LoadingContext = createContext(null);
export const ArticlesContext = createContext([]);
export const CountContext = createContext(0);

function App() {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  async function fetchData(page) {
    console.log("RELOADED");
    setLoading(true);
    const data = await retrieveArticles(page);
    const pages = await retrieveArticleCount();
    setArticle(data);
    setPageCount(pages);
    setLoading(false);
  }

  async function deleteData(id, currentPage) {
    await deleteArticle(id);
    fetchData(currentPage);
  }

  useEffect(() => {
    fetchData(0);
  }, []);

  return (
    <div>
      <CountContext.Provider value={pageCount}>
        <ArticlesContext.Provider value={articles}>
          <LoadingContext.Provider value={loading}>
            <RefreshCallbackContext.Provider value={fetchData}>
              <DeleteCallbackContext.Provider value={deleteData}>
                <Routes>
                  <Route exact path="/" element={<Main />} />
                  <Route path="/add-article" element={<AddArticle />} />
                  <Route path="/:id" element={<ArticlePage />}></Route>
                  <Route path="/login" element={<LoginModal></LoginModal>}></Route>
                </Routes>
              </DeleteCallbackContext.Provider>
            </RefreshCallbackContext.Provider>
          </LoadingContext.Provider>
        </ArticlesContext.Provider>
      </CountContext.Provider>
    </div>
  );
}

export default App;
