import { Checkbox } from "@mantine/core";
import { IColumn } from "../utility/models/task.model";

const selectAll = <Checkbox></Checkbox>
export const taskTableData : IColumn[] = [
    { key: "Id", label: selectAll},
    { key: "TaskName", label: "Task Name"},
    { key: "AssignTo", label: "Assigned By"},
    { key: "Status", label: "Status"},
    { key: "CreatedAt", label: "Created At"},
    { key: "Actions", label: ""}
]