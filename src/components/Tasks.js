import Task from './Task'

export const Tasks = ({tasks, onDelete, onToggle}) => {
    

    return (
        <>
            {tasks.map((task) => (<Task onToggle={onToggle} onDelete={onDelete} key={task.id} task={task}/>))}
        </>
    )
}

export default Tasks;
