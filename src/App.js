import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
import HomeContainer from "./components/HomeContainer";

function App() {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
