import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const Main = (articles) => {
    return (
        <>
            <NavBar></NavBar>
            <Body articles={articles}></Body>
            <Footer></Footer>
        </>
    );
}

export default Main;