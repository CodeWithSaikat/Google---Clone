import React from "react";
import { Link } from "react-router-dom";
import SearchContainer from "./SearchContainer.js";
import SearchIcon from "@mui/icons-material/Search";
import { MoreVert, Newspaper } from "@mui/icons-material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";

import "./Search.css";
import { useStateValue } from "../components/StateProvider.js";
import useGoogleSearch from "../useGoogleSearchHook.js";

const Search = () => {
  const [{ term }] = useStateValue();
  // console.log(term);

  const { data } = useGoogleSearch(term);
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="searchPage__body">
          <SearchContainer hideButton className="SearchBar" />
          <div className="searchPage__OptionLeft">
            <div className="searchPage__options">
              <SearchIcon />
              <Link to={"/all"}>All</Link>
            </div>{" "}
            <div className="searchPage__options">
              <Newspaper />
              <Link to={"/all"}>News</Link>
            </div>{" "}
            <div className="searchPage__options">
              <ImageOutlinedIcon />
              <Link to={"/all"}>Images</Link>
            </div>{" "}
            <div className="searchPage__options">
              <LocationOnOutlinedIcon />
              <Link to={"/all"}>Location</Link>
            </div>{" "}
            <div className="searchPage__options">
              <OndemandVideoOutlinedIcon />
              <Link to={"/all"}>Videos</Link>
            </div>{" "}
            <div className="searchPage__options">
              <MoreVert />
              <Link to={"/all"}>More</Link>
            </div>
            <div className="searchPage__Optionright">
              <div className="searchPage__options">
                <Link to={"/tools"}>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div className="searchPage__results">
          <div className="searchPage__resultCount">
            <p>
              About {data?.searchInformation.formattedTotalResults} result (
              {data.searchInformation.formattedSearchTime} seconds)
            </p>
          </div>
          {data.items.map((item) => {
            return (
              <div className="searchPage__results_details">
                <div className="searchPage__result_details_title">
                  <a href={item.link} className="searchResult">
                    <p className="url"> {item.formattedUrl} </p>
                    <h5 className="title">{item.title}</h5>
                  </a>
                  <p className="intro">{item.snippet}</p>
                  <p className="last_visit"></p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
