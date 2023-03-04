import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import '../../bootstrap.min.css';

const Main = ({articles}) => {
    return (
        <>
            <NavBar></NavBar>
            <Body articles={articles}></Body>
        </>     
    );
}

export default Main;