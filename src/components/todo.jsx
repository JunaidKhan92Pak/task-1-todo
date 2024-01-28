import { useEffect, useState } from 'react'

export default function Todo() {
    let [task, setTask] = useState([])
    let [compTask, setComTask] = useState([])
    let [input, setInput] = useState('')

    const addValue = (e) => {
        setInput(e.target.value)
    }
    // ----- function for add new task---
    const addTask = () => {
        let Value = document.getElementById('Input').value
        if (Value === "") {
            window.alert("Please Enter any Task ")
        }
        else {
            setTask(task => [input, ...task]);
            setInput("")
        }
    }
    // ----- function for delete task---
    const deleteTask = (index) => {
        let currentIndex = index
        const delTask = task.filter((value, index) => {
            return index !== currentIndex
        })
        setTask(delTask)
    }
    // ----- function for complete task---
    const completedTask = (index) => {
        let currentIndex = index
        const remaingTask = task.filter((value, index) => {
            return index !== currentIndex
        })
        const delTask = task.filter((value, index) => {
            return index === currentIndex
        })
        setComTask(compTask => [delTask, ...compTask])
        setTask(remaingTask)

    }
    // ----- function for popup screen to edit task---
    const editOption = (index) => {
        document.getElementById("modal").style.display = "flex";
        let currentIndex = index
        const currentValue = task.filter((value, index) => {
            return (
                index == currentIndex
            )
        })
        document.getElementById("modalInput").value = currentValue[0]
        document.getElementById("modalInput").name = currentIndex

    }
    // ----- function for addEdit task------>
    const addEditTask = (index) => {
        let editTask = document.getElementById("modalInput").value
        let currentIndex = document.getElementById("modalInput").name
        task.splice(currentIndex, 1, editTask)
        document.getElementById("modal").style.display = "none"
        setTask([...task]);
    }

    // ----- function for delet task---
    const deleteCompTask = (index) => {
        let currentIndex = index
        const delTask = compTask.filter((value, index) => {
            return index !== currentIndex
        })
        setComTask(delTask)
    }

    return (
        <>
            {/*----- POPUP SCREEN FOR EDIT TASK */}
            <div id="modal" className="fixed inset-0 bg-gray-500 bg-opacity-75 hidden justify-center items-center z-10">
                <div className="bg-white p-8 rounded shadow-md w-1/3">
                    <label htmlFor="modalInput" className="block text-gray-700 text-sm font-bold mb-2">Task:</label>
                    <input type="text" id="modalInput" name="" className="w-full border rounded py-2 px-3 mb-2" />

                    <button onClick={() => addEditTask()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ok
                    </button>

                    <button onClick={() => document.getElementById("modal").style.display = "none"} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
                        Close
                    </button>
                </div>
            </div>
            {/* POPUP SCREEN FOR EDIT TASK-------> */}

            {/* Todolist main container--------> */}
            <div className="p-2 bg-[#ECF8F9] flex flex-col items-center gap-2" >
                <div className="sm:w-[50%] w-[95%] bg-[#30A2FF] flex justify-center items-center flex-col gap-3 py-2">
                    <div className="sm:w-[80%] w-[90%]  border-b-2 sm:pb-2 pb-1 sm:pl-4  pl-2 my-4">
                        <h1 className=" font-roboto sm:text-[40px] text-[28px]  font-bold text-[white]" >Todo List</h1>
                        <p className="sm:text-[16px] text-[14px] text-[white] font-roboto" >A Simple React Todo List App</p>

                    </div>
                    <div className="w-[100%] flex flex-col gap-4  pb-2 mt-5">
                        <div className="w-[100%] p-2 flex sm:gap-2 gap-1 justify-around">
                            <input id="Input" type="text" value={input} onChange={addValue} placeholder="Add Todo here" className="sm:w-[70%] font-roboto sm:text-[20px] text-[16px] pl-3 h-[40px]"></input>
                            <button type="button" onClick={addTask}
                                className="sm:w-[25%] bg-white border-2 font-Kanit border-[#3A98B9] text-[#3A98B9] font-semibold sm:text-[18px] text-[14px] px-2 sm:px-5 py-1 
                              hover:bg-[#3A98B9]  hover:border-white  hover:text-[white]"
                            >Add Task</button>
                        </div>
                    </div>

                    <div className="w-[100%] h-[420px]  flex flex-col gap-3 overflow-hidden pt-5">
                        {task.map((task, index) => {
                            return (
                                <div className="w-[100%] sm:h-[55px]  h-[45px] sm:pl-5 pl-2 flex justify-between items-center  bg-white bg-opacity-60 backdrop-blur-lg drop-shadow-xl" key={index}>
                                    <li className=" font-Kanit list-disc  sm:text-[18px] text-[15px] pl-1 text-[white]">{task}</li>
                                    <div className="flex gap-4 p-2">
                                        <svg  onClick={() => completedTask(index)} xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#2ccc00" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                                        <svg onClick={() => deleteTask(index)} xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#ff0000" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                        <svg onClick={() => editOption(index)}  xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512"><path fill="#003c8a" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"/></svg>
                                    </div>
                                </div>
                            ) 
                        })}
                    </div>

                    <div className="w-[100%] flex flex-col gap-3 overflow-hidden pt-5">
                        <h2 className=" font-roboto text-[24px] text-[white] p-2 border-t-2 text-center">Completed Task</h2>

                        {compTask.map((task, index) => {
                            return (
                                <div className="w-[100%] sm:h-[55px] h-[45px]  sm:pl-5  pl-2 flex justify-between items-center  bg-[#9CFF2E] bg-opacity-80 backdrop-blur-xl drop-shadow-lg" key={index}>
                                    <li className=" font-Kanit list-disc  text-[15px] sm:text-[18px] pl-1 text-[blue] line-through">{task}</li>
                                    <div className="flex gap-2 p-2 mr-4">
                                        <svg onClick={() => deleteCompTask(index)} xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#ff0000" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* Todolist main container--------> */}
        </>
    )
}