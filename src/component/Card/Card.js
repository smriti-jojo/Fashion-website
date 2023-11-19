import React from "react";
import evan_mcdougall from "../../images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import { useState, useEffect } from "react";
const Card = (props) => {
  useEffect(() => {
    // console.log("cardValue", cardValue);
  });
  return (
    <div>
      <div className="relative w-[80%] sm:w-[100%]">
        <img
          src={props.image_src}
          class="img-fluid product-image"
          alt=""
          className=""
        />

        <div class="absolute z-20 top-[1rem] left-5 p-1 border-2 border-gray-300 rounded-md shadow-sm shadow-gray-300">
          <span class="">{props.alert}</span>

          <a href="#" class="bi-heart-fill product-icon"></a>
        </div>

        <div class="flex justify-between">
          <div className="flex-col">
            <h5 class="product-title mb-0">
              <a href="product-detail.html" class="product-title-link">
                {props.title}
              </a>
            </h5>
            <p class="product-p">{props.info}</p>
          </div>

          <div className="">
            <small class="text-xl font-bold">{props.price}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
