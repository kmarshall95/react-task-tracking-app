import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Collect Code Knowledge',
            day: 'April 14th at 8:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: '*Finish Brainstorming*',
            day: 'April 15th at 9:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Profits',
            day: 'April 16th at 10:30pm',
            reminder: false,
        },
    ])

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //Deletes task(s)
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/> : ('No Tasks Added Yet. Click +')}
    </div>
  )
}

export default App
