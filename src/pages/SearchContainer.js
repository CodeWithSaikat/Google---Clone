import "./Home.css";
import { Mic } from "@mui/icons-material";
import React, { useState, useDispatch } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../components/StateProvider.js";
import { actionType } from "../reducer/reducer.js";

const SearchContainer = ({ hideButton = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    // console.log("You hit the google search button:", input);

    // do something with input...
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: input,
    });

    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>

      {!hideButton ? (
        <div>
          <div className="home__button">
            <button type="submit" onClick={search}>
              Google Search
            </button>
            <button>I'm Feelling Lucky</button>
          </div>

          <div className="google__offered">
            {/* Google offered in: हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ */}
            <p>Google offered in:</p>
            <Link to={"/hindi"}>हिन्दी</Link>
            <Link to={"/bangla"}>বাংলা</Link>
            <Link to={"/odia"}>తెలుగు</Link>
            <Link to={"/marathi"}>मराठी</Link>
            <Link to={"/tamil"}>தமிழ்</Link>
            <Link to={"/gujrathi"}>ગુજરાતી</Link>
            <Link to={"/telegu"}>ಕನ್ನಡ</Link>
            <Link to={"/another-tamil"}>മലയാളം</Link>
            <Link to={"/unknow"}>ਪੰਜਾਬੀ</Link>
          </div>
        </div>
      ) : (
        <div className="home__button">
          <button
            type="submit"
            className="search__buttonHidden"
            onClick={search}
          >
            Google Search
          </button>
          <button className="search__buttonHidden">I'm Feelling Lucky</button>
        </div>
      )}
    </form>
  );
};

export default SearchContainer;
