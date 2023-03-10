import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import './Main.css';

const Main = ({ articles, updateCallback,deleteCallBack, count, loading }) => {
    return (
        <div class="wrapper background">
            <NavBar></NavBar>
            <Body articles={articles} 
            updateCallBack={updateCallback} 
            deleteCallBack={deleteCallBack}
            count={count} 
            loading={loading}>
            </Body>
            <Footer></Footer>
        </div>
    );
}

export default Main;