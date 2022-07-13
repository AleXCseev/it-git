const Category = ({links}) => {
    return (
		<>
			<h1>Category</h1>
			<ul>
				{links.map((link, index) => (
					<li key={index}>
						<a href={link.path}>{link.pathName}</a>
					</li>
				))}
			</ul>
		</>
	);
}



export default Category;