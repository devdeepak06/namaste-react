import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  // const [listOfRestaurants, setlistOfRestaurants] = useState([
  //   {
  //     info: {
  //       id: "230670",
  //       name: "KFC",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_230670.JPG",
  //       cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
  //       avgRating: 1.2,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "230673",
  //       name: "hgKing",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_230670.JPG",
  //       cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
  //       avgRating: 3,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "230675",
  //       name: "Kingfg",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_230670.JPG",
  //       cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
  //       avgRating: 4.2,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "230676",
  //       name: "Kinug",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_230670.JPG",
  //       cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
  //       avgRating: 5.2,
  //     },
  //   },
  // ]);
const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  return (
    <>
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating < 4.3
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
