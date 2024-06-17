import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enterdTask, setEnteredTask] = useState('');

    const handleChange = e => {
        setEnteredTask(e.target.value);
    }

    const handleClick = () => {
        if (enterdTask.trim() === ''){
            return; // 공백일때에는 태스크가 실행되지않게
        }
        onAdd(enterdTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enterdTask}
            />
            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}