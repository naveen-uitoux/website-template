import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Explore & Dream",
    color: "#3772FF",
    images: "/images/content/home/steps/dream.svg",
    content:
      "Imagine your digital dream, share your vision and we brainstorm possibilities.",
  },
  {
    title: "Design Magic",
    color: "#9757D7",
    images: "/images/content/home/steps/design.svg",
    content:
      "Our designers do their magic to bring your vision to life. Collaborate, tweak, and perfect!",
  },
  {
    title: "Code Symphony",
    color: "#EF466F",
    images: "/images/content/home/steps/code.svg",
    content:
      "Our coding wizards work their spells, ensuring code quality through rigorous testing.",
  },
];
const list = [
  {
    title: "Launchpad",
    color: "#45B26B",
    images: "/images/content/home/steps/launchpad.svg",
    content:
      "Countdown to launch begins as your creation takes off. Celebrate the launch with fireworks!",
  },
  {
    title: "Cosmic Support",
    color: "#FB993E",
    images: "/images/content/home/steps/chat.svg",
    content:
      "We're your 24/7 cosmic companions, covering updates and seamless support - we have got the galaxy covered.",
  },
  {
    title: "Explore New Horizons",
    color: "#0B0033",
    images: "/images/content/home/steps/explore.svg",
    content:
      "Reflect on your success, dream bigger, and envision the future as we explore new horizons with you!",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>The power to achieve excellence</h2>
          <div className={styles.info}>How?</div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              {/* <div className={styles.number}>Step {index + 1}</div> */}
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
        <div className={styles.space}></div>
        <div className={styles.list}>
          {list.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              {/* <div className={styles.number}>Step {index + 1}</div> */}
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
