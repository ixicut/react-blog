import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import '../../bootstrap.min.css';
import './Main.css';

const Main = ({articles}) => {
    return (
        <div class = "wrapper">
            <NavBar></NavBar>
            <Body articles={articles}></Body>
            <Footer></Footer> 
        </div>    
    );
}

export default Main;