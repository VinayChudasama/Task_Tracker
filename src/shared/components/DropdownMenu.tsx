import { Menu, rem, UnstyledButton } from "@mantine/core";
import { IconTrash, IconDotsVertical, IconPencil } from "@tabler/icons-react";
import { useDeleteTaskMutation } from "../../pages/MyTask/utility/service/taskList.service";

function DropdownMenu({taskId}:{taskId:string}) {
    const [deleteTask] = useDeleteTaskMutation();

    function handleDelete(){
        deleteTask(taskId);
        console.log(taskId);
        
    }
  return (
    <Menu shadow="md" position="bottom-end" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <IconDotsVertical
            style={{ width: rem(18), height: rem(18) }}
          ></IconDotsVertical>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconPencil style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Edit
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={()=>handleDelete()}
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default DropdownMenu;
