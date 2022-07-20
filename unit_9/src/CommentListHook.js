

const CommentsListHook = ({data}) => {
    return (
        <div>
            {data.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </div>
    )
}

export default CommentsListHook;