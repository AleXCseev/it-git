
import React, { useState } from "react"
// import CommentsListHook from "./CommentListHook";
import Comment2ListHook from "./Comment2ListHook"

const Comment2Hook = () => {

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
        <div>
            <p>Choose post ID:</p>
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                {/* <CommentsListHook data={posts}/> */}
                <Comment2ListHook data={posts} />
            </div>
        </div>
    )
}

export default Comment2Hook;