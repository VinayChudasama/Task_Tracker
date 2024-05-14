import {
  Button,
  Flex,
  Group,
  Paper,
  useMantineColorScheme,
} from "@mantine/core";

import { Sidebar } from "./core/components/Sidebar/sidebar";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { setColorScheme } = useMantineColorScheme();
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isLoading]);
  return (
    <Flex direction="row" h={"100%"}>
      <Sidebar />
      <Paper>
        <Group>
          <Button variant="light" onClick={() => setColorScheme("light")}>
            Light
          </Button>
          <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        </Group>
      </Paper>
    </Flex>
  );
}

export default App;
