import logo from "./logo.svg";
import "./App.css";
import RedDress from "./imageInSrc.jpg";
function App() {
    return (
        <div className="App">
            <div className="elm">
                <h1 className="titlered">HI ! I'm Khawla </h1>
                <div>
                    <img src={RedDress} alt="red dress" />
                </div>
                <div>
                    <img src="/imageInPublic.jpg" alt="red shoes" />
                </div>
            </div>

            <video width="320px" height="240px" controls>
                <source src="myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
