import { useForm } from "@mantine/form";

import { Button, Group, Modal, TextInput } from "@mantine/core";

const AddTasks = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const form = useForm({
    initialValues: {
      taskName: "",
    },
  });
  const handleCancel = () => {
    form.reset();
    close();
  };
  const handleFormSubmit = (values: any) => {
    console.log(values);
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
      <form
        onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
      >
      <TextInput
        label="Task Name"
        placeholder="Task Name"
        key={form.key("taskName")}
        withAsterisk
        {...form.getInputProps("taskName")}
      />
       <Group justify="flex-end" mt="lg">
                      <Button
                        variant="default"
                        onClick={handleCancel}
                        type="submit"
                      >
                        Cancel
                      </Button>
                      <Button  type="submit">
                       Submit
                      </Button>
                    </Group>
      </form>
    </Modal>
  );
};

export default AddTasks;
