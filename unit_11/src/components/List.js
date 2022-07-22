
const List = (props) => {
    return (
        <ul>
            {
                props.users.map((user, index) => (
                    <li key={index}>passport: {user.passport}, name: {user.name}, age: {user.age}</li>
                ))
            }
        </ul>
    )
}

export default List