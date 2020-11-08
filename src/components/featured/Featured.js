import React, {Component} from 'react'
import Item from './item/Item'
import Slider from "react-slick";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Featured.scss';
import "slick-carousel/slick/slick.css"; 
/* import "slick-carousel/slick/slick-theme.css"; */

import img from "../../assets/featured_img_default.jpg";

function NextArrow(props) {
    console.log("test");
    const { customClass, onClick } = props;
    return (
      <div
        className={customClass}
        onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight}/>
        </div>
    );
  }
  
  function PrevArrow(props) {
    const { customClass, onClick } = props;
    return (
      <div
        className={customClass}
        onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
    );
  }


class Featured extends Component {


    render() {

        const items = [
            {image: img, name: "Almost new sofa", vendor: "John S.", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has", price: 300},
            {image: img, name: "Almost new sofa", vendor: "John S.", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has", price: 300},
            {image: img, name: "Almost new sofa", vendor: "John S.", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has", price: 300},
            {image: img, name: "Almost new sofa", vendor: "John S.", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has", price: 300},
            {image: img, name: "Almost new sofa", vendor: "John S.", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has", price: 300},
            {image: img, name: "Almost new sofa", vendor: "John S.", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has", price: 300},
            {image: img, name: "Almost new sofa", vendor: "John S.", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has", price: 300},
        ];

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            nextArrow: <NextArrow customClass="custom__arrow custom__arrow--next" />,
            prevArrow: <PrevArrow customClass="custom__arrow custom__arrow--prev" />,
            responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                }
              },{
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
            }]
          };


        return (
            <section className="featured">
                <div className="featured__header">
                    <h2 className="featured__header__title section-title">
                        Featured items
                    </h2>
                </div>
                <Slider {...settings}>
                    {items.map((value, index) => {
                        return <Item key={index} data={value}/>
                    })}
                </Slider>

            </section>
        )
    }
} 


export default Featured;