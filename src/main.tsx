import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@mantine/core/styles.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { CLIENT_ID, DOMAIN_ID } from "./environments/environment.ts";
import { MantineProvider } from "@mantine/core";
import { resolver, theme } from "./core/utility/constants/core.constant.ts";
// import { variantColorResolver } from "./shared/common-components/StatusBadge.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import AppRoutes from "./AppRoutes.tsx";

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
      <Provider store={store}>
        <MantineProvider
          defaultColorScheme="light"
          theme={theme}
          cssVariablesResolver={resolver}
        >
          <AppRoutes />
        </MantineProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
