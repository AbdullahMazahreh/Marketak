import React, { Fragment, useContext } from "react";
import { allData } from "../../context/Context";
import Card from "../card/Card";
import "./featuredproducts.css"

function Featuredproducts() {
  const { imageSliderData } = useContext(allData);

  return (
    <Fragment>
      <div className="all-cards-container">
        {imageSliderData.map((item) => {
          return (
            <Card
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default Featuredproducts;
