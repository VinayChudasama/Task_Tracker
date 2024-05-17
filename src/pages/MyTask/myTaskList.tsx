import { useEffect, useState } from "react";
import DataTable from "../../shared/components/DataTable";
import { taskTableData } from "./components/tableData";
import { useGetTasksQuery } from "./utility/service/taskList.service";
import { ITask } from "./utility/models/task.model";
import Breadcrumb from "../../shared/components/Breadcrumb";
import { Box, Button, Flex } from "@mantine/core";
import { IconFileArrowRight, IconPlus } from "@tabler/icons-react";
import * as XLSX from "xlsx";
import SearchBox from "../../shared/components/SearchBox";

function MyTaskList() {
  const { data: tableData } = useGetTasksQuery();
  const [tableList, setTableList] = useState<ITask[]>([]);
  const Breadcrumbitems = [{ title: "My Tasks", href: "#" }];

  // Function to Export Data to Excel Sheet
  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const sheetData = [taskTableData.map((column) => column.key)];
    // Filter out columns to exclude
    const columnsToExclude = ["Actions"]; // Replace with the keys of columns to exclude
    const filteredTableData = tableList.map((row) => {
      return Object.fromEntries(
        Object.entries(row).filter(([key]) => !columnsToExclude.includes(key))
      );
    });

    filteredTableData.forEach((row) => {
      const rowData = taskTableData.map((column) => row[column.key]);
      sheetData.push(rowData);
    });
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);

    // Calculate column widths based on content
    const columnWidths = sheetData[0].map((col, i) => {
      return sheetData.reduce((acc, row) => {
        const cellValue = row[i] ? row[i].toString().length * 1.2 : 10;
        return cellValue > acc ? cellValue : acc;
      }, 0);
    });

    // Apply calculated column widths to worksheet
    worksheet["!cols"] = columnWidths.map((width) => ({ width }));

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "Tasklist.xlsx");
  };

  useEffect(() => {
    if (tableData) {
      const updatedList = Object.values(tableData).map(
        (data: any, index: number) => {
          const tempData = Object.keys(tableData);
          return {
            Id: tempData[index],
            TaskName: data.TaskName,
            AssignTo: data.AssignTo,
            Status: data.Status,
            CreatedAt: data.CreatedAt,
            Actions: tempData[index],
          };
        }
      );
      setTableList(updatedList);
    }
  }, [tableData]);

  return (
    <Flex direction="column" h="100%">
      <Breadcrumb data={Breadcrumbitems}></Breadcrumb>
      <Flex
        direction={"column"}
        style={{
          border: "1px solid var(--mantine-color-gray-3)",
          overflow: "hidden",
        }}
        h={"100%"}
        className="content-wrapper"
      >
        <Flex
          p={16}
          style={{ borderBottom: "1px solid var(--mantine-color-gray-3)" }}
        >
          <Box w={'100%'} mr={16}> <SearchBox data={tableList}></SearchBox></Box>
         
          <Button
            ml="auto"
            size="sm"
            variant="filled"
            style={{flexShrink:'0'}}
            onClick={exportToExcel}
            leftSection={<IconFileArrowRight size={16} />}
          >
            Export Data
          </Button>
          <Button
            ml={16}
            size="sm"
            style={{flexShrink:'0'}}
            variant="filled"
            leftSection={<IconPlus size={16} />}
          >
            Add New Task
          </Button>
        </Flex>
        <Box h={"100%"} style={{ overflow: "auto" }}>
          <DataTable data={tableList} columns={taskTableData}></DataTable>
        </Box>
      </Flex>
    </Flex>
  );
}
export default MyTaskList;
