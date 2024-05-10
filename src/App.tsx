import Login from "./core/components/authentication/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { Image, Text } from "@mantine/core";
import Logout from "./core/components/authentication/Logout";

function App() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user?.role[0]);

  return (
    <>
      {!isAuthenticated && <Login></Login>}
      <Image radius="md" h={200} w="auto" fit="contain" src={user?.picture} />
      <Text> {user?.name}</Text>
      {isAuthenticated && <Logout></Logout>}
    </>
  );
}

export default App;
