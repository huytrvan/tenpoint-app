const colors = {
  WHITE: "#fff",
  GRAY_50: "#F9FAFB",
  GRAY_100: "#F3F4F6",
  GRAY_200: "#E5E7EB",
  GRAY_300: "#D1D5DB",
  GRAY_400: "#9CA3AF",
  GRAY_500: "#6B7280",
  GRAY_600: "#4B5563",
  GRAY_700: "#374151",
  GRAY_800: "#1F2937",
  GRAY_900: "#111827",
  ORANGE_50: "#FFF7ED",
  ORANGE_100: "#FFEDD5",
  ORANGE_200: "#FED7AA",
  ORANGE_300: "#FDBA74",
  ORANGE_400: "#FB923C",
  ORANGE_500: "#F97316",
  ORANGE_600: "#EA580C",
  ORANGE_700: "#C2410C",
  ORANGE_800: "#9A3412",
  ORANGE_900: "#7C2D12",
  RED_600: "#DC2626",
};

const fontWeights = {
  FONT_THIN: "100",
  FONT_EXTRALIGHT: "200",
  FONT_LIGHT: "300",
  FONT_REGULAR: "400",
  FONT_MEDIUM: "500",
  FONT_SEMIBOLD: "600",
  FONT_BOLD: "700",
  FONT_EXTRABOLD: "800",
  FONT_BLACK: "900",
};

const fontSizes = {
  TEXT_XS: 8,
  TEXT_SM: 12,
  TEXT_BASE: 14,
  TEXT_LG: 16,
  TEXT_XL: 20,
  TEXT_2XL: 28,
};

export default {
  ...colors,
  ...fontWeights,
  ...fontSizes,
}