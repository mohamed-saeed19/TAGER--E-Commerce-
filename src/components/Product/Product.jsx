// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { BaseUrl } from "@/utils/baseUrl";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Product() {
  const [Products, setProducts] = useState([]);
  async function getProducts() {
    let { data } = await axios.get(`${BaseUrl}/products`);
    setProducts(data.data);
  } 
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {Products.map((item) => {
            return (
              <div key={item._id} className="col-md-3">
                <div className="product">
                  <Link to={'/Product-details/'+item._id} className="link">
                  <img src={item.imageCover} className=" w-100 mt-3" />
                  <h6 className=" text-main mt-4"> {item.category.name}</h6>
                  <p className=" fw-bolder">
                    {item.title.split(" ").slice(0, 2).join(" ")}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>{item.price} EGP</span>
                    <span>
                      <i className="fa-solid fa-star rating-color"></i>
                      {item.ratingsAverage}
                    </span>
                  </div>
                  <button className="btn bg-main text-white w-100">
                    Add To Card
                  </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
