import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useThemeStore } from "../stores/useThemeStore";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Pressable onPress={toggleTheme} style={{ padding: 8 }}>
      <MaterialCommunityIcons
        name={theme === "dark" ? "white-balance-sunny" : "moon-waning-crescent"}
        size={26}
        color="#FFD700"
      />
    </Pressable>
  );
}
