import { useForm } from "@mantine/form";

import { TextInput } from "@mantine/core";
import ModalUI from "../../../share/components/ModalUI";

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

  return (
    <ModalUI
      title="Add Task"
      opened={opened}
      positiveButtonText="Add"
      negativeButtonText="Cancel"
      handleNegativeButton={handleCancel}
    >
      <TextInput
        label="Task Name"
        placeholder="Task Name"
        key={form.key("taskName")}
        withAsterisk
        {...form.getInputProps("taskName")}
      />
    </ModalUI>
  );
};

export default AddTasks;
