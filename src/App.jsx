import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

  return [];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Assignment");
  const [dueDate, setDueDate] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [estimatedHours, setEstimatedHours] = useState("");

  function addTask() {
    const newTask = {
      id: Date.now(),
      course: course,
      title: title,
      type: type,
     dueDate: dueDate,
      difficulty: difficulty,
      estimatedHours: estimatedHours,
     status: "Pending",
     
    };

    setTasks([...tasks, newTask]);

    setCourse("");
    setTitle("");
    setType("Assignment");
    setDueDate("");
    setDifficulty("Easy");
    setEstimatedHours("");
  }
  const [studyPlan, setStudyPlan] = useState("");

  async function generateStudyPlan() {
  const pendingTasks = tasks.filter((task) => task.status !== "Complete");

  if (pendingTasks.length === 0) {
    setStudyPlan("No pending tasks to plan.");
    return;
  }

  setStudyPlan("Generating study plan...");

  const response = await fetch("/api/generate-plan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tasks: pendingTasks }),
  });

  const data = await response.json();

  setStudyPlan(data.plan);
}
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  function completeTask(id) {
   const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        status: "Complete",
      };
    }

    return task;
  });

  setTasks(updatedTasks);
  }
  return (
    <div className="app">
      <h1>Homework Helper Hub Lite</h1>

      <p>
        A simple study planner that helps students organize assignments,
        quizzes, exams, and projects.
      </p>

      <section className="card">
        <h2>Add a School Task</h2>

        <input
          placeholder="Course name"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />

        <input
          placeholder="Task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>Assignment</option>
          <option>Quiz</option>
          <option>Exam</option>
          <option>Project</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />

        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <input
          type="number"
          placeholder="Estimated study hours"
          value={estimatedHours}
          onChange={(event) => setEstimatedHours(event.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </section>

      <section className="card">
        <h2>Your Tasks</h2>

        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
  <li key={task.id}>
    <strong>{task.course}</strong> - {task.title} | {task.type} | Due:{" "}
    {task.dueDate} | Difficulty: {task.difficulty} | Hours:{" "}
    {task.estimatedHours} Status: {task.status}

    <button onClick={() => deleteTask(task.id)}>
      Delete
    </button>
    <button onClick={() => completeTask(task.id)}>
      Complete
    </button>
  </li>
))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2>Weekly Study Plan</h2>

       <button onClick={generateStudyPlan}>
         Generate AI Study Plan
        </button>

      <pre className="study-plan">
        {studyPlan || "Your study plan will appear here."}
       </pre>
      </section>
    </div>
  );
}

export default App;