import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={theme === "dark" ? "dark-theme" : ""}>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default Home;
