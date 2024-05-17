import { Button, Divider, Flex, Group, Modal, Text } from "@mantine/core";

interface IProps {
  opened: boolean;
  title: string;
  positiveButtonText: string;
  negativeButtonText: string;
  handlePositiveButton?: () => void;
  handleNegativeButton?: () => void;
  children: React.ReactNode;
}
const ModalUI = ({
  opened,
  title,
  positiveButtonText,
  negativeButtonText,
  handlePositiveButton,
  handleNegativeButton,
  children,
}: IProps) => {
  return (
    <Modal
      styles={{
        title: { fontWeight: 500, fontSize: 20 },
      }}
      opened={opened}
      onClose={handleNegativeButton}
      title={title}
      centered
      radius="md"
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 3,
      }}
    >
      <Divider />
      <Flex direction="column" p="24px">
        {children}
        {/* start: button group */}
        <Group mt="lg" gap="md" justify="flex-end">
          <Button
            variant="outline"
            radius="sm"
            fw={500}
            size="sm"
            onClick={handleNegativeButton}
          >
            <Text fz={14}> {negativeButtonText} </Text>
          </Button>
          <Button radius="sm" fw={500} size="sm" onClick={handlePositiveButton}>
            <Text fz={14}>{positiveButtonText} </Text>
          </Button>
        </Group>
        {/* end: button group */}
      </Flex>
    </Modal>
  );
};

export default ModalUI;
