import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./About.module.sass";
/* import Icon from "../../../components/Icon"; */
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Customer-Centric Approach: It's All About You!",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#9757D7",
  },
  {
    title: "Innovation & Excellence: Where Every Day is Extraordinary!",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#EF466F",
  },
  {
    title: "Integrity & Transparency: The Trust Tango!",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#45B26B",
  },
  {
    title: "Long-Term Commitment: Sustainability is Our Jam!",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#B24545",
  },
];

const About = () => {
  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            {/* <div className={cn("stage", styles.stage)}>fitness pro</div> */}
            <h2 className={cn("h2", styles.title)}>
              A Global UI/UX Designing Agency
            </h2>
          </div>
          <div className={styles.col}>
            <div className={styles.info}>
            At UITOUX, we’re the masters of Strategic Business Solutions, making global success effortlessly attainable. Our experts, customise every product just for you, Whether it's a stunning website or a seamless mobile app development, we've got your back. We enhance functionality to craft experiences that are pure joy. Our UI/UX designers are a fan of details, we know how to keep your audience hooked. We're not just passionate; we're design superheroes, here to elevate your brand, wow your audience, and fuel your growth
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div
                    className={styles.number}
                    style={{ backgroundColor: x.color }}
                  >
                    0{index + 1}
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  {/* <div className={styles.content}>{x.content}</div> */}
                </ScrollParallax>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.bg}>
              <img
                srcSet="/images/content/home-about.png 2x"
                src="/images/content/home-about.png"
                alt="About pic"
              />
              {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                <img
                  srcSet="/images/content/plate@2x.png 2x"
                  src="/images/content/plate.png"
                  alt="Plate"
                />
              </ScrollParallax> */}
              {/* <button className={cn("play", styles.play)}>
                <Icon name="play" size="21" />
              </button> */}
            </div>
          </div>
        </div>
        <div className={styles.endInfo}>
          <h4 className={cn("h4", styles.endTitle)}>“Where Values Aren't Just Words; They're Our Way of Life. “</h4>
          <Link className={cn("button-stroke", styles.button)} to="/class02-details">Know more</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
