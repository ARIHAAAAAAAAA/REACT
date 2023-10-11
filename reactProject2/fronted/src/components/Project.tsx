// import React from 'react';
import { Project } from '../App';

function MyProject(props: Project) {
    return (
        <div>
            <h2>{props.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Due date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.name}</td>
                            <td>{task.status}</td>
                            <td>{task.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyProject;
