// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import { BaseUrl } from '@/utils/baseUrl';
export default function CategorySlider() {

const [category, setCategory] = useState([])
async function getCategorySlider(){
let{data}=await  axios.get(`${BaseUrl}/categories`)
console.log(data)
setCategory(data.data)
}
  useEffect(() => {
  getCategorySlider()
}, [])

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  autoplay:true,
};

  return <>
  <div className=" my-5 container">
    <h3>Shop Popular categories</h3>
    <Slider {...settings} autoplaySpeed={3000}>
{category.map((item )=>{
// eslint-disable-next-line react/jsx-key
return  <div key={item._id}>
    <img src={item.image} className='w-100' height={200}/>
    <h6 className=' text-center'>{item.name}</h6>
</div>
})}
    </Slider>
  </div>
  </>
}
