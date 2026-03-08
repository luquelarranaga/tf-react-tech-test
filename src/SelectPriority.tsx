import { SelectPriorityProp } from "./types";

function SelectPriority({priority, setPriority}: SelectPriorityProp ) {
    return (
        <div>
          <label htmlFor="priority-selector">Select priority</label>
          <select id="priority-selector" value={priority} onChange={(e) => {setPriority(e.target.value as typeof priority)}}>
          <option id="low" value="low" style={{color:"red"}}>low</option>
          <option id="medium" value="medium">medium</option>
          <option id="high" value="high">high</option>
        </select>
        </div>
    )
}

export default SelectPriority;