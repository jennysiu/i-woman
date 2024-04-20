import { useNavigate } from "react-router-dom";

// Bootstrap
import Button from "react-bootstrap/Button";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faHandshakeSimple,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

// internal imports
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  const navigate = useNavigate();

  const exploreGroupsNavigation = () => {
    navigate("/groups");
  };

  const findOutMoreNavigation = () => {
    navigate("/about");
  };

  return (
    <>
      <div>
        {/* HEADER */}
        <header>
          <h3 className="header-h3">Make Your Mark</h3>
          <h1> I-WOMAN</h1>
          <p>
            The woman's business hub creates an inclusive culture to
            successfully harness entrepreneur's potential to truly transform
            society.
          </p>
          <Button variant="primary">Join Us</Button>{" "}
        </header>

        <hr />

        {/* GOALS SECTION */}
        <section className="goals-section">
          <div className="goals">
            <div className="goal">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                size="3x"
                className="goal-icon"
              />
              <h3>Unite</h3>
              <p>
                Aliqua magna aute officia duis proident enim quis culpa qui quis
                amet ea.
              </p>
              {/* <Button variant="primary">Join Us</Button>{" "} */}
            </div>
            <div className="goal">
              <FontAwesomeIcon
                icon={faHandshakeSimple}
                size="3x"
                className="goal-icon"
              />
              <h3>Network</h3>
              <p>
                Aliqua magna aute officia duis proident enim quis culpa qui quis
                amet ea.
              </p>
              {/* <Button variant="primary">Join Us</Button>{" "} */}
            </div>
            <div className="goal">
              <FontAwesomeIcon
                icon={faListCheck}
                size="3x"
                className="goal-icon"
              />
              <h3>Progress</h3>
              <p>
                Aliqua magna aute officia duis proident enim quis culpa qui quis
                amet ea.
              </p>
            </div>
          </div>

          <Button variant="primary" onClick={findOutMoreNavigation}>
            Find Out More
          </Button>
        </section>

        <hr />

        {/* JOIN OUR GROUPS SECTION */}
        <section>
          <h2>Join Our Groups</h2>
          <p>Explore our groups to see what you can learn and contribute.</p>
          <Button variant="primary" onClick={exploreGroupsNavigation}>
            Explore Groups
          </Button>{" "}
        </section>
      </div>
    </>
  );
};

export default Home;
