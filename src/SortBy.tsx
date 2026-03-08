import { useState } from "react";
import { SortByProps } from "./types";

function SortBy ({setSortBy}: SortByProps) {
    const [selected, setSelected] = useState("created at")
    const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelection = e.target.value
        setSelected(newSelection)

        newSelection === "created at" ? setSortBy("sortBy=createdAt") : setSortBy("sortBy=priority")
    }
    return (
    <select value={selected} onChange={handleSortBy}>
        <option value="created at">created at</option>
        <option value="priority">priority</option>
    </select>)
}

export default SortBy