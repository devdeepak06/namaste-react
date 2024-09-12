import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  // console.log(resData.info);
  return (
    <div
      className="res-card"
      id={"restaurantCard-" + id}
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="margin0">{name}</h3>
      <h4 className="margin0">{cuisines.join(", ")}</h4>
      <p className="add-info margin0">
        <span>{avgRating}</span>
        <span>{costForTwo}</span>
        <span>{deliveryTime}</span>
      </p>
    </div>
  );
};

export default RestaurantCard;
