import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function TaskApplication(){
    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        const res = await fetch("api/tasks");
        setTasks(await res.json());
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return <>
        <h1>This is a React Task application on Heroku</h1>
        {tasks.map(t => <div>{t.title}</div>)}
    </>;
}

root.render(<TaskApplication/>);