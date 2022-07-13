import { NavLink } from "react-router-dom";

const Header = ({links}) => {
    return (
		<nav>
			<ul>
                {links.map((link, index) => (
                    <li key={index}><NavLink to={ link.path }>{link.pathName}</NavLink></li>
                ))}
			</ul>
		</nav>
	);
}


export default Header;