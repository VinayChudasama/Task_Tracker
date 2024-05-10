import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";

function Logout() {
  const { logout } = useAuth0();

  return (
    <Button
      type="button"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
}

export default Logout;
