import React from "react";
import { TodoItem } from "../Todo/Todo.types";
import Row from './Row/Row'

interface TableProps {
    data: TodoItem[];
}

const Table = ({data}: TableProps) => {

    return (
        <table>
        <tbody>
            {data.map((row, index) => 
                <Row
                key={`key-${index}`}
                id={row.id}
                name={row.name}
                />
            )}
        </tbody>
    </table>
    )
}

export default Table;