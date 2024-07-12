"use client"
import { useReducer, useState } from "react";
import TaskAction from "./_taskAction/TaskAction";
import TaskView from "./_taskView/TaskView";
import './style/style.css'
import './style/button.css'
import './style/item.css'

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

function tasksReducer(tasks: Task[], action: { type: string, text?: string, id: number }) {
  switch (action.type) {
    case 'addTask': {//添加任务
      if (!action.text) {
        console.error("没有任务内容");
        return tasks;//没有任务内容，直接返回
      }
      const newTask: Task = {
        id: new Date().getTime(),
        text: action.text,
        done: false
      }
      return [...tasks, newTask];
    };
    case 'delTask': {//删除任务
      if (!action.id) {
        console.error("选择任务序号");
        return tasks;//没有任务序号，直接返回
      }
      return tasks.filter((task) => task.id !== action.id);
    };
    case 'finishTask': {//完成任务
      if (!action.id) {
        console.error("选择任务序号");
        return tasks;//没有任务序号，直接返回
      }
      tasks.map((task) => {
        if (task.id === action.id) {
          console.log(task);
          if (task.done === true) {
            task.done = false;
          } else task.done = true;
        }
      })

      return [...tasks];
    };
    case 'changeTask': {//修改任务
      if (!action.id) {
        console.error("选择任务序号");
        return tasks;//没有任务序号，直接返回
      }
      if (!action.text) {
        console.error("没有任务内容");
        return tasks;//没有任务内容，直接返回
      }
      tasks.map((task) => {
        if (task.id === action.id) {
          task.text = action.text as string;
        }
      })
    }
    default:
      return tasks;
  }
}

export default function () {
  // 任务代办列表
  const defaultTasks: Task[] = [{
    id: 1,
    text: "学习",
    done: true
  },{
    id: 2,
    text: "吃饭",
    done: false
  },{
    id: 3,
    text: "睡觉",
    done: false
  },{
    id: 4,
    text: "游戏",
    done: false
  }];
  const [tasks, dispatch] = useReducer(tasksReducer, defaultTasks);
  const [filter, setFilter] = useState('all');//默认展示所有任务

  function toggleFilter(filter: string) {
    setFilter(filter);
  }

  // 展示数据过滤
  function showTasks(tasks: Task[], filter: string): Task[] {
    if (filter === 'done') return tasks.filter((task) => task.done === true);
    else if (filter === 'undone') return tasks.filter((task) => task.done === false);
    else return tasks;
  }

  return (
    <div className="container">
      <div className="content">
        <span className="title">任务清单</span>
        <TaskAction dispatch={dispatch} toggleFilter={toggleFilter}></TaskAction>
        <TaskView tasks={showTasks(tasks, filter)} dispatch={dispatch}></TaskView>
      </div>

    </div>
  )
}
