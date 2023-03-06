import { createRoot } from "react-dom/client";
import React from 'react';

const root = createRoot(document.getElementById("app") as HTMLElement);

const data = [
    { id: 1, title: 'First item', desc: 'A description of the first item' },
    { id: 2, title: 'Second item', desc: 'A description of the second item' },
    { id: 3, title: 'Third item', desc: 'A description of the third item' },
];


const Table = ({ data }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESC</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
const App = () => {
    return <div className="container">
        <div className="table-container">
            <Table data={data} />
        </div>
    </div>
}
root.render(<App />);