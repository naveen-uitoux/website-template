import React from "react";
import cn from "classnames";
import styles from "./Quality.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Year founded",
    counter: "2015",
    images: "/images/content/home/count/calendar.svg",
    alt: "user",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Team members",
    counter: "80+",
    images: "/images/content/home/count/teams.svg",
    alt: "electrical-plus",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Successful Projects",
    counter: "200+",
    images: "/images/content/home/count/projects.svg",
    alt: "flag",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Happy clients",
    counter: "50+",
    images: "/images/content/home/count/clients.svg",
    alt: "facebook",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
];

const Quality = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.sectionTitle)}>UITOUX Today</h2>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.preview}>
                <img src={x.images} alt={x.alt} />
              </div>
              <div className={styles.counter}>{x.counter}</div>
              <div className={styles.title}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
