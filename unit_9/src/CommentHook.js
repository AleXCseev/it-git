import React, { useState } from "react"

const CommentHook = () => {

    const [posts, setPosts] = useState([]);

    const selectHandler = (event) => {
        fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPosts(data)
            });
    }

    return (
        <>
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            {posts.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </>
    )
}

export default CommentHook;