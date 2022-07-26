/** @format */

import React, { Fragment, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faMapLocationDot,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openSearchDate, setOpenSearchDate] = useState(false);
  const [searchDate, setSearchDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openSearchOptions, setOpenSearchOptions] = useState(false);
  const [searchOptions, setSearchOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const searchOptionCounterHandler = (searchOptionItem, operation) => {
    setSearchOptions((prev) => {
      return {
        ...prev,
        [searchOptionItem]:
          operation === "i"
            ? searchOptions[searchOptionItem] + 1
            : searchOptions[searchOptionItem] - 1,
      };
    });
  };

  const searchHandler = () => {
    navigate("/hotels", {
      state: {
        destination,
        searchDate,
        searchOptions,
      },
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "hotelList" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "hotelList" && (
          <Fragment>
            <h1 className="headerTitle">
              A Lifetime Of Discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free account.
            </p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerSearchIcon"
                />
                <span
                  onClick={() => setOpenSearchDate(!openSearchDate)}
                  className="headerSearchText"
                >{`${format(
                  searchDate[0].startDate,
                  "MMM,dd yyyy"
                )} to ${format(searchDate[0].endDate, "MMM,dd yyyy")}`}</span>
                {openSearchDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setSearchDate([item.selection])}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    ranges={searchDate}
                    className="searchDate"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
                <span
                  onClick={() => setOpenSearchOptions(!openSearchOptions)}
                  className="headerSearchText"
                >{`${searchOptions.adult} adult | ${searchOptions.children} children | ${searchOptions.room} room`}</span>
                {openSearchOptions && (
                  <div className="searchOptions">
                    <div className="searchOptionItem">
                      <span className="searchOptionText">Adult</span>
                      <div className="searchOptionCounter">
                        <button
                          disabled={searchOptions.adult <= 1}
                          className="searchOptionCounterBtn"
                          onClick={() =>
                            searchOptionCounterHandler("adult", "d")
                          }
                        >
                          -
                        </button>
                        <span className="searchOptionCounterNumber">
                          {searchOptions.adult}
                        </span>
                        <button
                          className="searchOptionCounterBtn"
                          onClick={() =>
                            searchOptionCounterHandler("adult", "i")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="searchOptionItem">
                      <span className="searchOptionText">Children</span>
                      <div className="searchOptionCounter">
                        <button
                          disabled={searchOptions.children <= 0}
                          className="searchOptionCounterBtn"
                          onClick={() =>
                            searchOptionCounterHandler("children", "d")
                          }
                        >
                          -
                        </button>
                        <span className="searchOptionCounterNumber">
                          {searchOptions.children}
                        </span>
                        <button
                          className="searchOptionCounterBtn"
                          onClick={() =>
                            searchOptionCounterHandler("children", "i")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="searchOptionItem">
                      <span className="searchOptionText">Room</span>
                      <div className="searchOptionCounter">
                        <button
                          disabled={searchOptions.room <= 1}
                          className="searchOptionCounterBtn"
                          onClick={() =>
                            searchOptionCounterHandler("room", "d")
                          }
                        >
                          -
                        </button>
                        <span className="searchOptionCounterNumber">
                          {searchOptions.room}
                        </span>
                        <button
                          className="searchOptionCounterBtn"
                          onClick={() =>
                            searchOptionCounterHandler("room", "i")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={searchHandler}>
                  Search
                </button>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
