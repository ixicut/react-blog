import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import '../../bootstrap.min.css';
import './Main.css';

const Main = ({articles,updateCallback}) => {
    return (
        <div class = "wrapper background">
            <NavBar></NavBar>
            <Body articles={articles} updateCallBack = {updateCallback}></Body>
            <Footer></Footer> 
        </div>    
    );
}

export default Main;