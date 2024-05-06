// eslint-disable-next-line no-unused-vars
import { BaseUrl } from '@/utils/baseUrl';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
let{id} = useParams();
const [Product, setProduct] = useState([]);
async function getProduct() {
  let { data } = await axios.get(`${BaseUrl}/products/${id}`);
  console.log(data);
  setProduct(data.data);
}
useEffect(() => {
  getProduct();
}, []);
  return <>
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <img src={Product.imageCover} className="w-100" alt="" />
      </div>
      <div className="col-md-7">
        <h3>{Product.title}</h3>
        <p>{Product.description}</p>
      </div>
    </div>
  </div>
  </>
}
