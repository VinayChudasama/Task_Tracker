import { VariantColorsResolverInput, defaultVariantColorsResolver, rem } from "@mantine/core";

export const variantColorResolver = (input: VariantColorsResolverInput) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  // Completely override Badge variant
  if (input.variant === "new") {
    return {
      background: "#d7ecfd",
      hover: "#f8f9fa",
      border: `${rem(1)} solid transparent`,
      color: "#0d83e0",
    };
  }
  if (input.variant === "completed") {
    return {
      background: "#cfffd9",
      hover: "#f8f9fa",
      border: `${rem(1)} solid transparent`,
      color: "#14ad2f",
    };
  }
  if (input.variant === "inProgress") {
    return {
      background: "#fff1d6",
      hover: "#f8f9fa",
      border: `${rem(1)} solid transparent`,
      color: "#FF9800",
    };
  }

  return defaultResolvedColors;
};