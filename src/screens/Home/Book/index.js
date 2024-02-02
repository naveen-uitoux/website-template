import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Book.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "TVSOne",
    info: "Membership plan selling application for a pioneer in most automobile vehicle trade and parts manufacturing. ONE is a mobile application with a hybrid development model which can work on both android and iOS.",
    item: [
      {
        title: "TVS Mobility",
        color: "#45B26B",
        images: "/images/content/user.svg",
        alt: "user",
        content: "Clients",
      },
      {
        title: "UX Designer, Project Manager, Full Stack Developer.",
        color: "#9757D7",
        images: "/images/content/medal-1.svg",
        alt: "medal",
        content: "Team",
      },
      {
        title: "tvsone.com",
        color: "#3772FF",
        images: "/images/content/lightning.svg",
        alt: "lightning",
        content: "Project Links",
      },
    ]
  }, 
  {
    title: "DEMS",
    info: "Membership plan selling application for a pioneer in most automobile vehicle trade and parts manufacturing. ONE is a mobile application with a hybrid development model which can work on both android and iOS.",
    item: [
      {
        title: "tvsone.com",
        color: "#3772FF",
        images: "/images/content/lightning.svg",
        alt: "lightning",
        content: "Project Links",
      },
      {
        title: "UX Designer, Project Manager, Full Stack Developer.",
        color: "#9757D7",
        images: "/images/content/medal-1.svg",
        alt: "medal",
        content: "Team",
      },
      {
        title: "TVS Mobility",
        color: "#45B26B",
        images: "/images/content/user.svg",
        alt: "user",
        content: "Clients",
      },
    ]
  },
];

const iconItems = [
  {
    images: "/images/content/mobile.svg",
    alt: "Mobile"
  },
  {
    images: "/images/content/desktop.svg",
    alt: "Desktop"
  }
]

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Book = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.headTitle)}>Our Finest Work</h2>
          <div className={styles.headInfo}>
          Creating game-changing products that invoke a sense of excitement, closeness and satisfaction for the user.
          </div>
        </div>
      </div>
      <div className={cn("container")}>
        <Slider className="app-slider" {...settings}>
          {items?.map((data, ind) => (
            <div className={cn(styles.container, styles.relative)}>
              <div className={styles.gallery}>
                <div className={styles.preview}>
                  <Image
                    srcSet="/images/content/book-pic@2x.png 2x"
                    srcSetDark="/images/content/book-pic-dark@2x.png 2x"
                    src="/images/content/book-pic.png"
                    srcDark="/images/content/book-pic-dark.png"
                    alt="Book pic"
                  />
                </div>
                <ScrollParallax
                  className={styles.preview}
                  animateIn="fadeInUp"
                  offset={300}
                >
                  <img
                    srcSet="/images/content/ball@2x.png 2x"
                    src="/images/content/ball.png"
                    alt="Ball"
                  />
                </ScrollParallax>
                <ScrollParallax
                  className={styles.preview}
                  animateIn="fadeInUp"
                  offset={300}
                >
                  <img
                    srcSet="/images/content/ball-green@2x.png 2x"
                    src="/images/content/ball-green.png"
                    alt="Ball"
                  />
                </ScrollParallax>
                <ScrollParallax
                  className={styles.preview}
                  animateIn="fadeInUp"
                  offset={300}
                >
                  <img
                    srcSet="/images/content/dumbbells@2x.png 2x"
                    src="/images/content/dumbbells.png"
                    alt="Dumbbells"
                  />
                </ScrollParallax>
              </div>

              <div className={styles.wrap}>
                <div className={styles.flex}>
                  <h5 className={cn("h5", styles.subTitle)}>E - COMMERCE</h5>
                  <div className={styles.iconFlex}>
                    {iconItems.map((icon, i) => (
                      <img src={icon?.images} alt={icon?.alt} key={i} />
                    ))}
                  </div>
                </div>
              
              
                
                <div className={styles.sliderContent} key={ind}>
                  <h3 className={cn("h3", styles.title)}>{data?.title}</h3>
                  <div className={styles.info}>{data?.info}</div>
                  <div className={styles.list}>
                    {data?.item?.map((x, index) => (
                      <div className={styles.item} key={index}>
                        <div
                          className={styles.icon}
                          style={{ backgroundColor: x.color }}
                        >
                          <img src={x.images} alt={x.alt} />
                        </div>
                        <div className={styles.details}>
                          <div className={styles.content}>{x.content}</div>
                          <div className={styles.subtitle}>{x.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
              
              
                {/* <div className={styles.note}>
                  <strong className={styles.green}>10% Discount</strong> if you’re
                  already using the{" "}
                  <strong className={styles.black}>Fitness Pro</strong> on App Store
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.btns}>
          <Link className={cn("button", styles.button)} to="/class02-details">
            <span>More Works</span>
            {/* <Icon name="arrow-right" size="10" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
