import { useTheme } from "../contexts/ThemeContext";

// internal imports

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={theme === "dark" ? "dark-theme" : ""}>
        <header>
          <h1>i-woman</h1>
          <p>
            The woman's business hub creates an inclusive culture to
            successfully harness entrepreneur's potential to truly transform
            society.
          </p>
          <button>Join Us</button>
        </header>
        <section>
          <div>
            <h3>Unite</h3>
            <p>
              Aliqua magna aute officia duis proident enim quis culpa qui quis
              amet ea.
            </p>
            <button>Join Us</button>
          </div>
          <div>
            <h3>Network</h3>
            <p>
              Aliqua magna aute officia duis proident enim quis culpa qui quis
              amet ea.
            </p>
            <button>Join Us</button>
          </div>
          <div>
            <h3>Progress</h3>
            <p>
              Aliqua magna aute officia duis proident enim quis culpa qui quis
              amet ea.
            </p>
            <button>Join Us</button>
          </div>
        </section>
        <section>
          <h2>Join Our Groups</h2>
          <p>Explore our groups to see what you can learn and contribute.</p>
          <button>Explore Groups</button>
        </section>
      </div>
    </>
  );
};

export default Home;
