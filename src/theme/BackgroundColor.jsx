import { useThemeContext } from "../context/theme-context";

const BackgroundColor = ({ className }) => {
  const { themeState, themeHandler } = useThemeContext();

  return (
    <button
      className={(themeState.background === className ? 'active ' : '') + className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

export default BackgroundColor;
