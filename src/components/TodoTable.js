import React from 'react';


export default function TodoTable(props) {
    return (
<div>      
        <table>
                <tbody>
                <tr>
                    <th>Date</th>
                <th>Description</th></tr>
                {
                    props.todos.map((todo, index) => 
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button onClick={() => props.deleteTodo(todo.id)}>Delete</button></td>
                    </tr>
                    )
                }
                </tbody>
        </table>
    </div>  
    );
}
