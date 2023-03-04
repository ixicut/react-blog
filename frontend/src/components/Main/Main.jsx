import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";

const Main = ({articles}) => {
    return (
        <>
            <NavBar></NavBar>
            <Body articles={articles}></Body>
        </>
    );
}

export default Main;