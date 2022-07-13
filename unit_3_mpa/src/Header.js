
const Header = ({links}) => {
    return (
		<nav>
			<ul>
                {links.map((link, index) => (
                    <li key={index}><a href={ link.path }>{link.pathName}</a></li>
                ))}
			</ul>
		</nav>
	);
}


export default Header;