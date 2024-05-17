import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

function SearchBox({ data }: { data: any }) {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event: any) => {
    const value = event.target.value;

    // Filter Data based on TaskName
    const filtered = data.filter((item: { TaskName: string }) => {
      return item.TaskName.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredData(filtered);
  };
  console.log("Result:", filteredData);

  return (
    <Input
      leftSection={<IconSearch color="#000" size={16} />}
      placeholder="Search Task Here...."
      onChange={handleSearch}
    />
  );
}

export default SearchBox;
