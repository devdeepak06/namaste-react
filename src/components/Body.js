import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchResList();
  }, []);
  console.log("Body rendered");
  const fetchResList = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5555687&lng=77.3417748&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants =
        data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants); // initialize filtered list
      } else {
        console.error("Unexpected data structure", data);
      }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleSearch = () => {
    const searchFiltered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchFiltered);
  };

  const getFilteredList = () => {
    const topRated = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.2
    );
    setFilteredRestaurants(topRated);
  };

  return (
    <>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search Restaurant
          </button>
        </div>
        <button className="filter-button" onClick={getFilteredList}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </>
  );
};

export default Body;
