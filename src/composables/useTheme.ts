/**
 * 示例
 */
export const useTheme = () => {
  const theme = localStorage.getItem("theme") || "light";
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return { theme, toggleTheme };
};
