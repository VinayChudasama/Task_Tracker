import { Flex, Skeleton } from "@mantine/core";

function SkeletonUI({ type }: {type:String}) {
  // Skeleton UI for Data Table : TaskList
  const tableSkeleton = (
    <Flex
      direction={"row"}
      py={14}
      mt={12}
      align={"center"}
      justify={"space-between"}
      style={{
        border: "1px solid var(--mantine-color-gray-3)",
        borderRadius: "6px",
      }}
    >
      <Skeleton height={25} w={"2%"} mx={10} radius="sm" />
      <Skeleton height={25} w={"30%"} mx={10} radius="sm" />
      <Skeleton height={25} w={"20%"} mx={10} radius="sm" />
      <Skeleton height={25} w={"20%"} mx={10} radius="sm" />
      <Skeleton height={25} w={"15%"} mx={10} radius="sm" />
    </Flex>
  );

  // Show Skeleton based on type
  if (type == "table") {
    return (
      <>
        {tableSkeleton}
        {tableSkeleton}
        {tableSkeleton}
        {tableSkeleton}
      </>
    );
  }
}
export default SkeletonUI;
