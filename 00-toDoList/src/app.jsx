import { useEffect, useState } from "react"

export default function App() {

    const [id, setId] = useState(0)
    const [tareas, setTareas] = useState([])

    useEffect(() => {

    },[])
    
    
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

    console.log(tareas)
    
    
    const ListaDeTareas = () => {

        const withTask = tareas.length > 0
    
        return (
            <ul>
                {withTask && (
                    <>
                        <h4>Lista de tareas</h4>
                        {tareas.map((tarea) => {
                            <li>
                                {`${tarea.id + 1}. ${tarea.tarea}.`}
                                <input type="checkbox" name="" id="" />
                                <button>Delete</button>
                            </li>
                        })}
                    </>
                )}
            </ul>
        )
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
            <ListaDeTareas />
        </main>
    )
}