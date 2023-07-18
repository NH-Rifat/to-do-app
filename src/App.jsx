import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return <del key={index}>{task}</del>;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <>
      <section className="w-9/12 m-auto text-center mt-28">
        <h1 className="text-base md:text-xl text-blue-500 mb-8 underline">
          To Do List
        </h1>
        <div>
          <input
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            type="text"
            className="outline-blue-600 rounded-lg py-2 max-w-xl block px-3 mb-3 w-full m-auto text-lg border border-blue-600 focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 rounded-lg py-1 px-5 text-lg text-white border"
            id="add-item-btn"
          >
            Add Item
          </button>
        </div>
        <div className="text-center mt-16">
          <div className="text-center mt-16 mb-16" id="parent-div">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task, index) => (
                <li key={index}>
                  <div className="rounded-md shadow-md bg-gray-200 flex flex-col gap-8 justify-center p-4 items-center">
                    <span className="text-xl">To-do: {index + 1}</span>
                    <span className="text-xl flex-1">{task}</span>
                    <div>
                      <button
                        className="bg-red-600 rounded py-1 px-3 md:px-4 mr-1 text-base md:text-xl text-white"
                        onClick={() => removeTask(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-sky-600 rounded py-1 px-3 md:px-4 mr-1 text-base md:text-xl text-white"
                        onClick={() => completeTask(index)}
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
