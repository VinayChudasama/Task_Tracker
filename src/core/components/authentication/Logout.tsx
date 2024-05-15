import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";

function Logout() {
  const { logout } = useAuth0();

  return (
    <Button
      fullWidth
      my={16}
      className="logout-btn"
      variant="transparent"
      size="md"
      justify="flex-start"
      fw={500}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      leftSection={<IconLogout size={18} />}
    >
      Log Out
    </Button>
  );
}

export default Logout;
