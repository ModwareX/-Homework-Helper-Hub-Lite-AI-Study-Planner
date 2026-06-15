import { useEffect, useState } from "react";
import "./App.css";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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

  const [availability, setAvailability] = useState(() => {
    const savedAvailability = localStorage.getItem("availability");

    if (savedAvailability) {
      return JSON.parse(savedAvailability);
    }

    const empty = {};
    DAYS.forEach((day) => {
      empty[day] = "";
    });
    return empty;
  });

  useEffect(() => {
    localStorage.setItem("availability", JSON.stringify(availability));
  }, [availability]);

  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Assignment");
  const [dueDate, setDueDate] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [estimatedHours, setEstimatedHours] = useState("");
  const [error, setError] = useState("");

  function addTask() {
    if (!course.trim() || !title.trim() || !dueDate || !estimatedHours) {
      setError("Please fill in course, title, due date, and study hours.");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (dueDate < today) {
      setError("Due date cannot be in the past.");
      return;
    }

    if (Number(estimatedHours) <= 0) {
      setError("Estimated study hours must be greater than 0.");
      return;
    }

    setError("");

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
  const [loading, setLoading] = useState(false);

  async function generateStudyPlan() {
    const pendingTasks = tasks.filter((task) => task.status !== "Complete");

    if (pendingTasks.length === 0) {
      setStudyPlan("No pending tasks to plan.");
      return;
    }

    setLoading(true);
    setStudyPlan("Generating study plan...");

    try {
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tasks: pendingTasks, availability }),
      });

      const data = await response.json();

      setStudyPlan(data.plan || "Could not generate a study plan.");
    } catch (err) {
      console.error(err);
      setStudyPlan("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

  const pendingCount = tasks.filter((task) => task.status !== "Complete").length;

  return (
    <div className="app">
      <h1>Homework Helper Hub Lite</h1>

      <br />

      <p className="subtitle">
        A simple study planner that helps students organize assignments,
        quizzes, exams, and projects.
      </p>

      <section className="card">
        <h2>1. Add a School Task</h2>

        <div className="form-grid">
          <label>
            Course name
            <input
              placeholder="e.g. Math"
              value={course}
              onChange={(event) => setCourse(event.target.value)}
            />
          </label>

          <label>
            Task title
            <input
              placeholder="e.g. Chapter 5 Exam"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <label>
            Task type
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option>Assignment</option>
              <option>Quiz</option>
              <option>Exam</option>
              <option>Project</option>
            </select>
          </label>

          <label>
            Due date
            <input
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </label>

          <label>
            Difficulty
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </label>

          <label>
            Estimated study hours
            <input
              type="number"
              min="0"
              placeholder="e.g. 4"
              value={estimatedHours}
              onChange={(event) => setEstimatedHours(event.target.value)}
            />
          </label>
        </div>

        {error && <p className="error">{error}</p>}

        <button className="primary" onClick={addTask}>
          Add Task
        </button>
      </section>

      <section className="card">
        <h2>2. Your Weekly Availability</h2>

        <p className="hint">
          Enter when you are free to study each day (for example: "6 PM - 8 PM").
          Leave a day blank if you are not free.
        </p>

        <div className="availability-grid">
          {DAYS.map((day) => (
            <label key={day}>
              {day}
              <input
                placeholder="e.g. 6 PM - 8 PM"
                value={availability[day]}
                onChange={(event) =>
                  setAvailability({ ...availability, [day]: event.target.value })
                }
              />
            </label>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>3. Your Tasks</h2>

        {tasks.length === 0 ? (
          <p className="hint">No tasks added yet.</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={task.status === "Complete" ? "task done" : "task"}
              >
                <div className="task-info">
                  <strong>{task.course}</strong> — {task.title}
                  <div className="task-meta">
                    <span className="badge">{task.type}</span>
                    <span className="badge">{task.difficulty}</span>
                    <span>Due {task.dueDate}</span>
                    <span>{task.estimatedHours} hr</span>
                    <span
                      className={
                        task.status === "Complete"
                          ? "status status-done"
                          : "status status-pending"
                      }
                    >
                      {task.status}
                    </span>
                  </div>
                </div>

                <div className="task-actions">
                  {task.status !== "Complete" && (
                    <button
                      className="complete"
                      onClick={() => completeTask(task.id)}
                    >
                      Complete
                    </button>
                  )}
                  <button
                    className="delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2>4. Weekly Study Plan</h2>

        <p className="hint">
          {pendingCount > 0
            ? `${pendingCount} task(s) to plan. Click below to create your weekly schedule.`
            : "Add some tasks first, then generate your plan."}
        </p>

        <button
          className="primary"
          onClick={generateStudyPlan}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate AI Study Plan"}
        </button>

        <pre className="study-plan">
          {studyPlan || "Your study plan will appear here."}
        </pre>
      </section>
    </div>
  );
}

export default App;