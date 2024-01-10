import { useThemeContext } from "../context/theme-context";

const PrimaryColor = ({ className }) => {
  const { themeState, themeHandler } = useThemeContext();

  return (
    <button
      className={(themeState.primary === className ? 'active ' : '') + className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

export default PrimaryColor;
