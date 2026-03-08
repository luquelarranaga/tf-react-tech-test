import { Priority } from "./types";

interface SelectPriorityProp {
  priority: Priority
  setPriority: React.Dispatch<React.SetStateAction<Priority>>;
}

function SelectPriority({priority, setPriority}: SelectPriorityProp ) {
    return (
        <select value={priority} onChange={(e) => {setPriority(e.target.value as typeof priority)}}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
    )
}

export default SelectPriority;