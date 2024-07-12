import TaskItem from "../_taskItem/TaskItem";
import { Task } from "../page";

export default function ({tasks,dispatch}:{tasks:Task[],dispatch:Function}) {
  
  return(
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem task={task}  dispatch={dispatch} key={task.id} />
        ))}
      </ul>
    </div>
  )
}