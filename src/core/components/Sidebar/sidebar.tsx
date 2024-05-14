import {
  Group,
  Code,
  ScrollArea,
  rem,
  UnstyledButton,
  Avatar,
  Text,
  Box,
  Image,
  Flex,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./sidebar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../authentication/Logout";
import Logo from "../../../assets/TaskTracker-Logo.png";

export function Sidebar() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <nav className={classes.navbar}>
      <Box
        px={16}
        style={{ borderBottom: "1px solid var(--mantine-color-gray-3)" }}
        className={classes.header}
      >
        <Group justify="space-between" my={16}>
          <Image h={30} w="auto" src={Logo} />
        </Group>
      </Box>
      <Flex h={"100%"} direction="column">
        {isAuthenticated && (
          <UnstyledButton p={18} className={classes.user}>
            <Group gap={8}>
              <Avatar src={user?.picture} radius="sm" />

              <div style={{ flex: 1 }}>
                <Text size="sm" fw={500}>
                  {user?.name}
                </Text>

                <Text c="dimmed" size="xs">
                  {user?.email}
                </Text>
              </div>

              <IconChevronRight
                style={{ width: rem(14), height: rem(14) }}
                stroke={1.5}
              />
            </Group>
          </UnstyledButton>
        )}
        <Box
          style={{ borderTop: "1px solid var(--mantine-color-gray-3)" }}
          className={classes.footer}
        >
          {isAuthenticated && <Logout></Logout>}
        </Box>
      </Flex>
    </nav>
  );
}
