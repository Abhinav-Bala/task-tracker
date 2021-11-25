import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Waterloo Supplemental App :(',
        day: 'Feb 18th at 12:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Laurier Application',
        day: 'Feb 5th at 12:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Trig Chapter 5 Test',
        day: 'November 30th at 12:20pm',
        reminder: true,
    },
    {
        id: 4,
        text: 'Personal Physics Project',
        day: 'Jan 28th at 11:59pm',
        reminder: false,
    },
] )

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id=== id ? {...task, reminder: !task.reminder}:task))
  }

  //Show add button
  const changeAddState = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div style={{padding: '20px', backgroundImage: `url("https://wallpaperaccess.com/full/1201167.jpg")`, minHeight: 1080}}>
      <div className='container'>
        <Header addState={showAddTask}title='Task Tracker' changeTaskState={changeAddState} />
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length> 0 ? <Tasks onToggle={toggleReminder} tasks = {tasks} onDelete = {deleteTask}/> : <h2 style={{alignContent: 'center'}}>No Tasks</h2>}
      </div>
    </div>
    
  );
}

export default App;
