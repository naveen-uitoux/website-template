import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Clients.module.sass";
import ScrollParallax from "../ScrollParallax";

const list = [
  {
    title: "rotashow",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "waves",
    url: "/images/content/waves.svg",
  },
  {
    title: "rotashow",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "travelers",
    url: "/images/content/travelers.svg",
  },
  {
    title: "waves",
    url: "/images/content/waves.svg",
  },
  {
    title: "travelers",
    url: "/images/content/travelers.svg",
  },
  {
    title: "rotashow",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "waves",
    url: "/images/content/waves.svg",
  },
  {
    title: "rotashow",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "travelers",
    url: "/images/content/travelers.svg",
  },
  {
    title: "waves",
    url: "/images/content/waves.svg",
  },
  {
    title: "travelers",
    url: "/images/content/travelers.svg",
  }
];

const Clients = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1369,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          centerPadding: "45px",
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          centerPadding: "16px",
        }
      },
    ]
};
  return (
    <div className={styles.clients}>
      <div className={cn("container-fluid", styles.container)}>
        <ScrollParallax className={styles.title} initiallyVisible={true}>
          Happy Clients 
        </ScrollParallax>
        {/* <div className={styles.list}>
          {list.map((x, index) => (
            <div className={styles.logo} key={index}>
              <img src={x.url} alt={x.title} />
            </div>
          ))}
        </div> */}
        <Slider className="clients-slider" {...settings}>
          {list.map((x, index) => (
            <div className={styles.logo} key={index}>
              <img src={x.url} alt={x.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
