import { useContext } from "react"

const Task = ({ id, title, context }) => {
    const completed = false
    const dispatch = useContext(context)
    return (
        <div className="mb-4">
            <input type="checkbox" checked={completed} onChange={() => ''} />

            <p className="inline px-4">#{id}: {title}</p>
            <button
                className="px-6 py-2  shadow-lg "
                onClick={() => dispatch({ type: 'REMOVE-TASK', payload: id })}
            >
                Remove</button>
        </div>
    )
}
export default Task