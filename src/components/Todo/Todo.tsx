import React, {useState} from "react";
import { FieldValues } from "react-hook-form";
import "./todo.css";

import Table from "../Table/Table";
import { TodoItem } from "./Todo.types";
import TodoForm from "./TodoForm";

const initialTasks: TodoItem[] =
     [
        {id: 1, name: "give cat food"},
        {id: 2, name: "do todo app"},
        {id: 3, name: "go gym"}
     ]

const Todo = () => {
    const [tasks, setTasks] = useState<TodoItem[]>(initialTasks);

    const onSubmit = (data: FieldValues) => {
        const resultObject = {id: tasks.length+1, name: data.name };
        setTasks((currentTasks) => [...currentTasks, resultObject]);
    } 

    return (
    <div className="container">
            <main>
                <h1>Your TODO list:</h1>
                <Table data={tasks}/>
                <TodoForm onSubmit={onSubmit}/>
            </main>
    </div>
    )
}

export default Todo;