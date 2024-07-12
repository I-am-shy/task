import { useRef, useState } from "react";
import { Task } from "../page";

export default function ({ task, dispatch }: { task: Task, dispatch: Function }) {
  const [isChange, setIsChange] = useState(false);//默认非修改状态
  const [text, setText] = useState(task.text);//设置默认文本

  function changeTask() {
    if (isChange) {
      dispatch({ type: 'changeTask', id: task.id, text: text });
      setIsChange(false);

    } else {
      setIsChange(true);
    }
  }

  return (
    <div>
      <li>
        <div id="checklist">
          {
            isChange ? <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> :
              <>
                <input id={String(task.id)} type="checkbox" checked = {task.done} onChange={() => { dispatch({ type: 'finishTask', id: task.id }) }}></input>
                <label htmlFor={String(task.id)}>{task.text}</label>
              </>
          }
          <button onClick={changeTask}>{isChange ?  '完成':'更改'}</button>
          <button onClick={() => { dispatch({ type: 'delTask', id: task.id }) }}>删除</button>
        </div>
      </li>
    </div>
  )
}