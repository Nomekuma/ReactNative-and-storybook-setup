import { StyleProp, ViewProps } from "react-native";

export type ToggleType = "icon" | "text" | "custom";

export interface ThemeToggleProps extends ViewProps {
  toggleType?: ToggleType;
  onToggle?: (theme: "light" | "dark") => void;
  lightThemeIcon?: React.ReactNode;
  darkThemeIcon?: React.ReactNode;
  lightThemeText?: string;
  darkThemeText?: string;
  children?: React.ReactNode;
  customToggle?: React.ReactNode;
  customToggleStyle?: StyleProp<ViewProps>;
  style?: object;
}
