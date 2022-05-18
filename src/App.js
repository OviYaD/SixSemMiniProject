import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import IntroSection from "./components/intro_section/intro_section";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      {/* <IntroSection></IntroSection> */}
      <Home></Home>
    </div>
  );
}

export default App;
