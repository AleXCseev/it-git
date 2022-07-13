import Nav from "../Header/Nav"

const Footer = ({ site }) => {
    return (
        <footer>
            <h3>{ site.site_name }</h3>
            <Nav nav={ site.nav } />
        </footer>
    )
}

export default Footer;