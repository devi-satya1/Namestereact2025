import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import restobj from "./Utils/mocdata";
const Body = () => {
  const [ListOfRestaurents, setListOfRestaurents] = useState(restobj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = ListOfRestaurents.filter(
              (res) => res?.info?.avgRating >= 4.5
            );
            console.log(filteredlist);
            setListOfRestaurents(filteredlist);
          }}>
          Filter by top rating restaurents
        </button>
      </div>
      <div className="search">search</div>
      <div className="res-container">
        {ListOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
