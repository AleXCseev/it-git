import Header from "./Header/Header"
import Main from "./Main/Main"
import Sidebar from "./Main/Sidebar"
import Footer from "./Footer/Footer"
import './App.css';

const site = {
	site_name : "react test",
	site_title : "my first site with react",
	nav : [
    { "link": "nav1", "text": "my link" },
    { "link": "nav2", "text": "my link 2" },
    { "link": "nav3", "text": "my link 3" },
  ]
}

function App() {
  return (
		<>
			<Header site={ site }></Header>
			<Main></Main>
			<Sidebar></Sidebar>
			<Footer site={ site }></Footer>
		</>
  );
}

export default App;

