import {
  Group,
  UnstyledButton,
  Avatar,
  Text,
  Box,
  Image,
  Flex,
  Switch,
  useMantineColorScheme,
  Burger,
} from "@mantine/core";
import {
  IconLayoutDashboard,
  IconList,
  IconMoon,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./sidebar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../authentication/Logout";
import Logo from "../../../assets/TaskTracker-Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  const { user, isAuthenticated } = useAuth0();
  const [active, setActive] = useState("Home");
  const [collapsed, setCollapsed] = useState(false);
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  // setColorScheme('light');
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
    console.log(colorScheme);
  };
  const data = [
    { link: "/", label: "Home", icon: IconLayoutDashboard },
    { link: "/", label: "My Tasks", icon: IconUsers },
    { link: "/", label: "My Team", icon: IconList },
    { link: "/", label: "Settings", icon: IconSettings },
  ];
  const links = data.map((item, index) => (
    // For navigation routes added link
    <Link style={{ textDecoration: "none" }} to={item.link} key={index}>
      <li
        className={classes.link}
        data-active={item.label === active || undefined}
        key={item.label}
        onClick={() => {
          setActive(item.label);
        }}
      >
        <item.icon className={classes.linkIcon} size={20} stroke={1.3} />
        {item.label}
      </li>
    </Link>
  ));
  return (
    <nav className={collapsed ? classes.navbarCollapsed : classes.navbar}>
      <Box
        px={16}
        style={{ borderBottom: "1px solid var(--mantine-color-gray-3)" }}
        className={classes.header}
      >
        <Group justify="space-between" my={16}>
          <Image h={25} w="auto" src={Logo} />
          <Burger
            size={"sm"}
            onClick={() => {
              setCollapsed(collapsed ? false : true);
            }}
            aria-label="Toggle navigation"
          />
        </Group>
      </Box>
      <Flex h={"100%"} px={18} pt={18} direction="column">
        {isAuthenticated && (
          <UnstyledButton className={classes.user}>
            <Group gap={8}>
              <Avatar src={user?.picture} radius="sm" />
              {!collapsed && (
                <div style={{ flex: 1 }}>
                  <Text size="sm" fw={500}>
                    {user?.name}
                  </Text>

                  <Text c="dimmed" fz={12}>
                    {user?.email}
                  </Text>
                </div>
              )}
            </Group>
          </UnstyledButton>
        )}
        <ul
          style={{
            paddingLeft: "0",
            paddingTop: "10px",
            borderTop: "1px solid var(--mantine-color-gray-3)",
          }}
        >
          {links}
        </ul>
        <Flex align={"center"} mt={"auto"} px={16} mb={16}>
          {!collapsed && (
            <>
              <IconMoon size={18}></IconMoon>
              <Text ml={10} fz={14}>
                Dark Theme
              </Text>
            </>
          )}

          <Switch ml={"auto"} onChange={() => toggleColorScheme()} />
        </Flex>
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
