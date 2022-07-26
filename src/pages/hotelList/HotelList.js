/** @format */

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { DateRange } from "react-date-range";
import SearchResultItem from "../../components/searchResultItem/SearchResultItem";
import "./hotelList.css";

const HotelList = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [searchDate, setSearchDate] = useState(location.state.searchDate);
  const [openSearchDate, setOpenSearchDate] = useState(false);
  const [searchOptions, setSearchOptions] = useState(
    location.state.searchOptions
  );

  return (
    <div>
      <Navbar />
      <Header type="hotelList" />
      <div className="hotelListContainer">
        <div className="hotelListWrapper">
          <div className="hotelListSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span
                onClick={() => setOpenSearchDate(!openSearchDate)}
              >{`${format(searchDate[0].startDate, "MMM,dd yyyy")} to ${format(
                searchDate[0].endDate,
                "MMM,dd yyyy"
              )}`}</span>
              {openSearchDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setSearchDate([item.selection])}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={searchDate}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={searchOptions.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={0}
                    placeholder={searchOptions.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={searchOptions.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="hotelListResult">
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
