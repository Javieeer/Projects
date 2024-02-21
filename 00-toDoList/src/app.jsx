import { useEffect, useState } from "react"

export default function App() {

    const [id, setId] = useState(0)
    const [tareas, setTareas] = useState([])
    
    const AddNewTask = () => {
        
        const newTask = document.getElementById('NewTask')

        if (newTask.value.length > 0) {
            setTareas([...tareas,
                {
                    id: id,
                    tarea: newTask.value,
                    completado: false
                }
            ])

            setId(id + 1)
            newTask.value = ""
        } else {
            console.log("Error, No introducio ninguna tarea")
        }
    }
    
    const TaskList = () => {

        const withTask = tareas.length > 0
    
        return (
            <>
                {withTask && <h4>Lista de tareas</h4>}
                <ul>
                    {withTask && tareas.map((tarea) => { 
                        return (                            
                            <li key={tarea.id}>
                                <p className={tarea.completado ? "completa" : "incompleta"}>
                                    {`${tarea.id + 1}. ${tarea.tarea}.`}
                                </p>
                                <div className="inputs">
                                    <input 
                                        type="checkbox"
                                        checked={tarea.completado}
                                        onChange={() => {handleCheck(tarea.id)}}/>
                                    <button onClick={() => deleteTask(tarea.id)}>Delete</button>
                                </div>
                            </li>
                        )                           
                    })}
                </ul>
            </>
        )
    }

    const deleteTask = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id))
    }


    const handleCheck = (id) => {
        setTareas(tareas.map(tarea => {
            if (tarea.id === id) {
                return {...tarea, completado: !tarea.completado}
            } else {
                return tarea
            }
        }))
    }
    
    return (
        <main>
            <header>
                <h1>Interactive ToDo List</h1>
            </header>
            <div className="form">
                <input type="text" id="NewTask" />
                <button onClick={AddNewTask}>Add New Task</button>
            </div>
            <TaskList />
        </main>
    )
}