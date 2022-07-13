import {useParams} from "react-router-dom"

const CategoryDescription = () => {
    const params = useParams()
    return (
		<>
			<a href="/cat">Назад</a>
			<h1>Category: {params.catName}</h1>
		</>
	);
}


export default CategoryDescription;