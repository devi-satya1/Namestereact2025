import { CDN_URL } from "./Utils/contents";

const RestaurentCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restro-image"
        src={CDN_URL + resData?.info?.cloudinaryImageId}></img>
      <h3>{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisines.join(", ")}</h4>
      <h4> Rating {resData?.info?.avgRating} stars</h4>
      <h4>{resData?.info?.sla?.deliveryTime} delivery time</h4>
      <h4>{resData?.info.costForTwo}</h4>
    </div>
  );
};
export default RestaurentCard;
