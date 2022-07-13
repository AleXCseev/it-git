import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Footer from "./Footer";
import CategoryDescription from "./CategoryDescription";
import Error from "./Erorr";
import './App.css';

const links = [
	{ path: "/", pathName: "Главная" },
	{ path: "/about", pathName: "О сайте" },
	{ path: "/cat", pathName: "Категории" },
]; 

const catLinks = [
	{ path: "/cat/notebook", pathName: "Ноутбуки" },
	{ path: "/cat/monitor", pathName: "Мониторы" },
	{ path: "/cat/cellphone", pathName: "Мобильные телефоны" },
]; 

function App() {
  return (
    <>
      <Router>
        <Header links={links}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cat" element={<Category links={catLinks} />}/>
            <Route path="/cat/:catName" element={<CategoryDescription/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;












