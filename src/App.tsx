import { Box, Container, Flex } from "@mantine/core";
import { Sidebar } from "./core/components/sidebar";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

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
      <Box w={"100%"} h={"100%"}  className="main-wrapper">
        <Container px={16} py={22} size="1440px" h='100%' w="100%" >
         <Outlet />
        </Container>
      </Box>
    </Flex>
  );
}

export default App;
