import { Link } from "react-router-dom"

const Category = ({links}) => {
    return (
		<>
			<h1>Category</h1>
			<ul>
				{links.map((link, index) => (
					<li key={index}>
						<Link to={link.path}>{link.pathName}</Link>
					</li>
				))}
			</ul>
		</>
	);
}



export default Category;