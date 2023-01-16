import React from "react";
import { FieldValues, useForm } from "react-hook-form";

interface TodoFormProps {
    onSubmit: (data: FieldValues) => void;
}

const TodoForm = ({onSubmit}: TodoFormProps) => {

    const { register, handleSubmit} = useForm();

    return (
        <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
            <label>
                Task name:
            <input {...register("name")} /> <br/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;