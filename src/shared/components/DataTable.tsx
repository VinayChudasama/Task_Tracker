import { Avatar, Badge, Checkbox, Group, Table, Text } from "@mantine/core";
import { IColumn } from "../../pages/MyTask/utility/models/task.model";
import classes from "../../assets/styles/table/table.module.css";
import SkeletonUI from "./SkeletonUI";
import { IconPointFilled } from "@tabler/icons-react";
import { format } from "date-fns";
import DropdownMenu from "./DropdownMenu";

interface IProps {
  data: any;
  columns: IColumn[];
}

function DataTable({ data, columns }: IProps) {
  return (
    <>
      {data && (
        <Table className={`${classes.dataTable}`} stickyHeader stickyHeaderOffset={10}>
          <Table.Thead>
            <Table.Tr>
              {columns.map((column, index) => (
                <Table.Th py={12} key={index}>{column.label}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.length > 0 ? (
              data.map((row: any, index: number) => (
                <Table.Tr key={index}>
                  {columns.map((column) => (
                    <Table.Td key={column.key}>
                      {renderCell(row, column)}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td
                  style={{ borderWidth: "0", paddingTop: "0" }}
                  colSpan={columns.length}
                >
                  <SkeletonUI type="table" />
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      )}
    </>
  );
}

function renderCell(row: any, column: IColumn) {
  const cellValue = row[column.key];
  if (column.key == "AssignTo") {
    return (
      <Group>
        <Avatar size={32} variant="light" color="#005ba9" radius="sm">
          {cellValue
            .split(" ")
            .map((name: any) => name.charAt(0).toUpperCase())
            .join("")}
        </Avatar>
        <Text fz={14}>{cellValue}</Text>
      </Group>
    );
  } else if (column.key == "Id") {
    return <Checkbox value={cellValue} label="" />;
  } else if (column.key == "Status") {
    return (
      <Badge
        leftSection={<IconPointFilled size={14} />}
        variant={
          cellValue === "New"
            ? "new"
            : cellValue === "In Progress"
            ? "inProgress"
            : "completed"
        }
        radius="lg"
        py={12}
      >
        {cellValue}
      </Badge>
    );
  } else if (column.key == "CreatedAt") {
    return <>{format(cellValue, "MMM d, yyyy")}</>;
  } else if (column.key == "Actions") {
    return <DropdownMenu taskId={cellValue}></DropdownMenu>;
  } else {
    return cellValue;
  }
}

export default DataTable;
