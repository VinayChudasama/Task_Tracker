import { useForm } from "@mantine/form";

import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useAddTaskMutation } from "../utility/service/taskList.service";
interface IAddTask {
  opened: boolean;
  close: () => void;
}

const AddTasks = ({ opened, close }: IAddTask) => {
  const [addTask] = useAddTaskMutation();
  const form = useForm({
    initialValues: {
      TaskName: "",
      AssignTo: "Altu Faltu",
      Status: "New",
      CreatedAt: new Date(),
    },
  });
  const handleCancel = () => {
    form.reset();
    close();
  };
  const handleFormSubmit = (values: any) => {
    addTask(values);
    close();
  };

  return (
    <Modal
      styles={{
        title: { fontWeight: 500, fontSize: 20 },
      }}
      opened={opened}
      onClose={handleCancel}
      title="Add New Task"
      centered
      radius="md"
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 3,
      }}
    >
      <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
        <TextInput
          label="Task Name"
          placeholder="Task Name"
          key={form.key("TaskName")}
          withAsterisk
          {...form.getInputProps("TaskName")}
        />
        <Group justify="flex-end" mt="lg">
          <Button variant="default" onClick={handleCancel} type="submit">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Modal>
  );
};

export default AddTasks;
