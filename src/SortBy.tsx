import { useState } from "react";

interface SortByProps {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

function SortBy ({setSortBy}: SortByProps) {
    const [selected, setSelected] = useState("created at")
    const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelection = e.target.value
        setSelected(newSelection)
    }

    selected === "created at" ? setSortBy("created at") : setSortBy("due date")

    return (
    <select value={selected} onChange={handleSortBy}>
        <option value="created at">created at</option>
        <option value="due date">due date</option>
    </select>)
}

export default SortBy