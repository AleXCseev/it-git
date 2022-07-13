import {useParams, Link} from "react-router-dom"

const CategoryDescription = () => {
    const params = useParams()
    return (
		<>
			<Link to="/cat">Назад</Link>
			<h1>Category: {params.catName}</h1>
		</>
	);
}


export default CategoryDescription;