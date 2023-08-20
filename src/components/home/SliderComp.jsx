import React from "react";

import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className=" ">
            <div className="text-5xl font-bold">En Kaliteli Ayakkabılar</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              saepe fuga eaque! Ipsum molestias consequatur repudiandae sint?
              Hic nobis voluptatum inventore molestias dolores totam vero sit id
              impedit, nemo error.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 ">
              İncele
            </div>
          </div>
          <img
            src="https://img-sneaksupincommerce.mncdn.com/mnresize/746/746/Content/Images/Originals/0145625_0.jpeg"
            alt=""
            className="w-[600px] h-[600px]"
          />
        </div>

        <div className="!flex items-center bg-gray-100 px-6">
          <div className=" ">
            <div className="text-5xl font-bold">En Kaliteli Ayakkabılar</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              saepe fuga eaque! Ipsum molestias consequatur repudiandae sint?
              Hic nobis voluptatum inventore molestias dolores totam vero sit id
              impedit, nemo error.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 ">
              İncele
            </div>
          </div>
          <img
            src="https://img-sneaksupincommerce.mncdn.com/mnresize/746/746/Content/Images/Originals/0145376_0.jpeg"
            alt=""
            className="w-[600px] h-[600px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
