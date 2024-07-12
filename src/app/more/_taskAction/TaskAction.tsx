import { useRef } from "react";


export default function ({dispatch,toggleFilter}:{ dispatch: Function,toggleFilter:Function}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function addTask() {
    if(inputRef.current?.value != null){
      dispatch({type: 'addTask', text:inputRef.current?.value})
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <div className="input">
        <input type="text" placeholder="任务名称" ref={inputRef} style={{width:'70%'}} />
        <button onClick={addTask}>添加</button>
      </div>
      <div className="select">
        <button onClick={()=>toggleFilter('all')}>全部</button>
        <button onClick={()=>toggleFilter('undone')}>待完成</button>
        <button onClick={()=>toggleFilter('done')}>已完成</button>
      </div>
    </div>
  )
}