import { CSSVariablesResolver, createTheme } from "@mantine/core";
import {variantColorResolver} from "../../../shared/components/StatusBadge"

export const theme = createTheme({
  primaryColor: "primary",
  primaryShade: 6,
  fontFamily: "Poppins, sans-serif",
  colors: {
    primary: [
      "#e1faff",
      "#cdf0ff",
      "#9fddfb",
      "#6ccaf7",
      "#44baf4",
      "#2bb0f2",
      "#16abf2",
      "#0095d8",
      "#0084c3",
      "#0073ac",
    ],
  },
  cursorType: "pointer",
  variantColorResolver
});

export const resolver: CSSVariablesResolver = () => ({
  variables: {
    "--mantine-color-blue-filled": "#000",


  },
  dark: {
    "--mantine-color-badge-text-purple": "#ffffff",
    "--mantine-color-primary-dark": "#ffffff",
    "--mantine-color-gray-3": "#4a4a4a",
    "--button-color": "#000",
    "--text-color":"--mantine-color-white"
  },
  light: {
    "--mantine-color-gray-3": "#D4D4D2",
    "--mantine-color-blue-filled": "#000",
    "--mantine-color-gray-2": "#F5F6F7",
    "--text-color":"--mantine-color-dark-6",
    "--badge-height":"20px"
  },
});
