import { useEffect, useState } from "react";


const PlaceholderPostHook = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPosts(data)
            });
    }, [])

    return(
        <>
            {
                posts.map( item => (
                    <section key={item.id}>
                        <h2>{item.id}. {item.title}</h2>
                        <p>{item.body}</p>
                    </section>
                ))
            }
        </>
    )
}

export default PlaceholderPostHook;