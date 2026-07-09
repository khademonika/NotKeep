import { CalendarDays, CheckSquare, Plus, Square, Trash2 } from "lucide-react";
import { useState } from "react";
import { INITIAL_TODOS } from "../data/static.data";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-[#E5E5E5] bg-white px-4 py-3">
      <button onClick={() => onToggle(todo.id)} className="shrink-0 text-[#1E1E1E]">
        {todo.completed ? (
          <CheckSquare className="h-[18px] w-[18px]" />
        ) : (
          <Square className="h-[18px] w-[18px] text-[#9A988F]" />
        )}
      </button>
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-[13.5px] font-medium ${
            todo.completed ? "text-[#B7B5AC] line-through" : "text-[#1E1E1E]"
          }`}
        >
          {todo.title}
        </p>
      </div>
      {todo.dueDate && (
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#F5F3EE] px-2.5 py-1 text-[11px] font-medium text-[#8A8880]">
          <CalendarDays className="h-3 w-3" /> {todo.dueDate}
        </span>
      )}
      <button
        onClick={() => onDelete(todo.id)}
        className="shrink-0 rounded-lg p-1.5 text-[#C9C7BE] opacity-0 transition-opacity duration-150 hover:bg-[#FBEAEA] hover:text-[#B23B3B] group-hover:opacity-100"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

const TodoPage=()=> {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  const addTodo = () => {
    if (!newTitle.trim()) return;
    setTodos((prev) => [
      { id: Date.now(), title: newTitle.trim(), dueDate: newDate.trim(), completed: false },
      ...prev,
    ]);
    setNewTitle("");
    setNewDate("");
  };

  const toggleTodo = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  const deleteTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  const pending = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 md:px-8 md:py-8">
      <h1 className="mb-6 text-[20px] font-semibold text-[#1E1E1E]">Todo</h1>

      <div className="mb-8 flex flex-col gap-2 rounded-2xl border border-[#E5E5E5] bg-white p-3 sm:flex-row sm:items-center">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a task..."
          className="flex-1 bg-transparent px-1 text-[13.5px] text-[#1E1E1E] placeholder:text-[#9A988F] focus:outline-none"
        />
        <input
          value={newDate}
          type="date"
          onChange={(e) => setNewDate(e.target.value)}
          placeholder="Due date (optional)"
          className="w-full rounded-lg border border-[#E5E5E5] bg-[#FAF8F5] px-2.5 py-1.5 text-[12px] text-[#4A4A47] placeholder:text-[#9A988F] focus:outline-none sm:w-36"
        />
        <button
          onClick={addTodo}
          className="flex items-center justify-center gap-1.5 rounded-lg bg-[#1E1E1E] px-3.5 py-2 text-[12.5px] font-medium text-[#FAF8F5] hover:opacity-90"
        >
          <Plus className="h-3.5 w-3.5" /> Add
        </button>
      </div>

      <section className="mb-8">
        <h2 className="mb-3 text-[12.5px] font-semibold uppercase tracking-wide text-[#9A988F]">
          Pending ({pending.length})
        </h2>
        <div className="flex flex-col gap-2">
          {pending.map((t) => (
            <TodoItem key={t.id} todo={t} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
          {pending.length === 0 && (
            <p className="text-[12.5px] text-[#9A988F]">Nothing pending. Nice work.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-[12.5px] font-semibold uppercase tracking-wide text-[#9A988F]">
          Completed ({completed.length})
        </h2>
        <div className="flex flex-col gap-2">
          {completed.map((t) => (
            <TodoItem key={t.id} todo={t} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
          {completed.length === 0 && (
            <p className="text-[12.5px] text-[#9A988F]">Nothing completed yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}


export default TodoPage