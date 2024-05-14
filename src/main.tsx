import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { CLIENT_ID, DOMAIN_ID } from "./environments/environment.ts";
import { MantineProvider } from "@mantine/core";
import { resolver, theme } from "./core/utility/constants/core.constant.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      cacheLocation="localstorage"
      domain={DOMAIN_ID}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <MantineProvider 
        defaultColorScheme="light"
        theme={theme}
        cssVariablesResolver={resolver}
      >
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
