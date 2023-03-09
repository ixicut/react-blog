import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import './Main.css';

const Main = ({ articles, updateCallback, count, loading }) => {

    const reloadPage = () => {
        this.forceUpdate();
    }

    return (
        <div class="wrapper background">
            <NavBar onLogout={reloadPage}></NavBar>
            <Body articles={articles} updateCallBack={updateCallback} count={count} loading={loading}></Body>
            <Footer></Footer>
        </div>
    );
}

export default Main;