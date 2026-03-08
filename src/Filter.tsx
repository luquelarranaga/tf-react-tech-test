import { useState } from "react";

interface FilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function Filter ({setFilter}: FilterProps) {
    const [selectedFilter, setSelectedFilter] = useState("all tasks")

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelection = e.target.value
        setSelectedFilter(newSelection)
        newSelection === "completed" ? setFilter("completed=true") : setFilter("completed=false")
        console.log("new selection in handle filter", newSelection)
        console.log("setFilter in handle filter", setFilter)
    }

    return (
        <select value={selectedFilter} onChange={handleFilter}>
            <option value="all tasks">all tasks</option>
            <option value="completed">completed</option>
        </select>
    )
}

export default Filter