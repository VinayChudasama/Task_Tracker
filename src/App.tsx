import { Box, Container, Flex, Paper } from "@mantine/core";

import { Sidebar } from "./core/components/Sidebar/sidebar";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppRoutes from "./AppRoutes";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isLoading]);
  return (
    <Flex direction="row" h={"100%"}>
      <Sidebar />
      <Box w={"100%"} h={"100%"}  className="content-wrapper">
        <Container
          px={20}
          py={20}
          style={{ flexGrow: 1 }}
          size="1440px"
          w="100%"
        >
        
        </Container>
      </Box>
    </Flex>
  );
}

export default App;
