import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import SearchContainer from "./SearchContainer.js";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerRight">
          {/* Link */}
          <Link to={"/gmail"}>Gmail</Link>
          <Link to={"/images"}>Images</Link>
          {/* Icon */}
          <AppsIcon />
          {/* Avatar */}
          <Avatar />
        </div>

        <div className="home__body">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt=""
          />
          <div className="home__inputContainer">
            <SearchContainer />
          </div>
        </div>

        <div className="home_footer_location">
          <h4>India</h4>
        </div>

        <div className="home__footer">
          <div className="footer_left">
            {/* LInk */}
            <Link to={"/about"}>About</Link>
            <Link to={"/advertising"}>Advertising</Link>
            <Link to={"/business"}>Business</Link>
            <Link to={"/howsearchworks"}>How Search works</Link>
          </div>
          <div className="footer_right">
            <Link to={"/privacy"}>Privacy</Link>
            <Link to={"/Terms"}>Terms</Link>
            <Link to={"/settings"}>Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
