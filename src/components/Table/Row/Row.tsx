import React from "react";

interface RowProps {
    id: number;
    name: string;
}

const Row = ({id, name}: RowProps) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
        </tr>
    )
}

export default Row;