import { useDispatch } from "react-redux"
import { addNewUser } from "../action"


const AddUser = () => {
    const dispatch = useDispatch()

    const formHandler = (event) => {
        event.preventDefault()
        const data = event.target.elements
        dispatch(addNewUser(data.passport.value, data.name.value, data.age.value));
    }

    return (
        <form onSubmit={formHandler}>
            <div>
                <input type="text" name="passport" defaultValue="" placeholder="passport"/>
            </div>
            <div>
                <input type="text" name="name" defaultValue="" placeholder="name"/>
            </div>
            <div>
                <input type="number" name="age" defaultValue="" placeholder="age"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddUser