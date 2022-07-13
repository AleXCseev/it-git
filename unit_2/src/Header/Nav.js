const Nav = ({ nav }) => {
    return (
        <nav>
            <ul className="main-navigation">
                { nav.map(((item, index) => {
                    return (
						<li key={ index }>
							<a href={ item.link }>{ item.text }</a>
						</li>
					);
                }))}
            </ul>
        </nav>
    )
}


export default Nav;