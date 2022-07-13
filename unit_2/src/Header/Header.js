import Nav from "./Nav"; 

const Header = ({ site }) => {
    return (
        <header>
            <h1>{ site.site_name }</h1>
            <h2>{ site.site_title}</h2>
            <Nav nav={ site.nav } />
        </header>
    )
}

export default Header;