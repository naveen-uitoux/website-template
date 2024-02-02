import React, { useState } from 'react'
import cn from "classnames";
import styles from "./Sights.module.sass";
import History from "./History";
import Item from "./Item";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Lifestyle",
    items: [
      {
        url: "/article",
        title: "7 Impossibly Hard Yoga Moves to Master",
        avatar: "/images/content/avatar-5.png",
        author: "Porter Daniel",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-1.png",
        image2x: "/images/content/lifestyle-photo-1@2x.png",
        category: "red",
        categoryContent: "fitness",
      },
      {
        url: "/article",
        title: "Keep It Chill: How To Do a Water Salutation",
        avatar: "/images/content/avatar-2.png",
        author: "Clemens Reilly",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-2.png",
        image2x: "/images/content/lifestyle-photo-2@2x.png",
        category: "green",
        categoryContent: "yoga",
      },
      {
        url: "/article",
        title: "Keep It Chill: How To Do a Water Salutation",
        avatar: "/images/content/avatar-3.png",
        author: "Lorine Parker",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-3.png",
        image2x: "/images/content/lifestyle-photo-3@2x.png",
        category: "pink",
        categoryContent: "new",
      },
      {
        url: "/article",
        title: "7 Impossibly Hard Yoga Moves to Master",
        avatar: "/images/content/avatar-1.png",
        author: "Felipa Kub",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-4.png",
        image2x: "/images/content/lifestyle-photo-4@2x.png",
        category: "black",
        categoryContent: "featured",
      },
      {
        url: "/article",
        title: "Fun Pose Friday: Half Camel With Raised Toe Pose",
        avatar: "/images/content/avatar-4.png",
        author: "Porter Daniel",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-5.png",
        image2x: "/images/content/lifestyle-photo-5@2x.png",
        category: "red",
        categoryContent: "fitness",
      },
      {
        url: "/article",
        title: "7 Impossibly Hard Yoga Moves to Master",
        avatar: "/images/content/avatar-2.png",
        author: "Clemens Reilly",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-6.png",
        image2x: "/images/content/lifestyle-photo-6@2x.png",
        category: "green",
        categoryContent: "fitness",
      },
    ],
  },
  {
    title: "Fitness",
    items: [
      {
        url: "/article",
        title: "Keep It Chill: How To Do a Water Salutation",
        avatar: "/images/content/avatar-2.png",
        author: "Clemens Reilly",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-2.png",
        image2x: "/images/content/lifestyle-photo-2@2x.png",
        category: "green",
        categoryContent: "yoga",
      },
      {
        url: "/article",
        title: "Keep It Chill: How To Do a Water Salutation",
        avatar: "/images/content/avatar-3.png",
        author: "Lorine Parker",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-3.png",
        image2x: "/images/content/lifestyle-photo-3@2x.png",
        category: "pink",
        categoryContent: "new",
      },
      {
        url: "/article",
        title: "7 Impossibly Hard Yoga Moves to Master",
        avatar: "/images/content/avatar-1.png",
        author: "Felipa Kub",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-4.png",
        image2x: "/images/content/lifestyle-photo-4@2x.png",
        category: "black",
        categoryContent: "featured",
      },
      {
        url: "/article",
        title: "Fun Pose Friday: Half Camel With Raised Toe Pose",
        avatar: "/images/content/avatar-4.png",
        author: "Porter Daniel",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-5.png",
        image2x: "/images/content/lifestyle-photo-5@2x.png",
        category: "red",
        categoryContent: "fitness",
      },
      {
        url: "/article",
        title: "7 Impossibly Hard Yoga Moves to Master",
        avatar: "/images/content/avatar-2.png",
        author: "Clemens Reilly",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-6.png",
        image2x: "/images/content/lifestyle-photo-6@2x.png",
        category: "green",
        categoryContent: "fitness",
      },
    ],
  },
  {
    title: "Mindfulness",
    items: [
      {
        url: "/article",
        title: "7 Impossibly Hard Yoga Moves to Master",
        avatar: "/images/content/avatar-5.png",
        author: "Porter Daniel",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-1.png",
        image2x: "/images/content/lifestyle-photo-1@2x.png",
        category: "red",
        categoryContent: "fitness",
      },
      {
        url: "/article",
        title: "Keep It Chill: How To Do a Water Salutation",
        avatar: "/images/content/avatar-2.png",
        author: "Clemens Reilly",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-2.png",
        image2x: "/images/content/lifestyle-photo-2@2x.png",
        category: "green",
        categoryContent: "yoga",
      },
      {
        url: "/article",
        title: "Keep It Chill: How To Do a Water Salutation",
        avatar: "/images/content/avatar-3.png",
        author: "Lorine Parker",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-3.png",
        image2x: "/images/content/lifestyle-photo-3@2x.png",
        category: "pink",
        categoryContent: "new",
      },
      {
        url: "/article",
        title: "7 Impossibly Hard Yoga Moves to Master",
        avatar: "/images/content/avatar-1.png",
        author: "Felipa Kub",
        date: "Feb 03, 2021",
        time: "3 Min Read",
        image: "/images/content/lifestyle-photo-4.png",
        image2x: "/images/content/lifestyle-photo-4@2x.png",
        category: "black",
        categoryContent: "featured",
      },
    ],
  },
];

const Sights = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Insights</h2>
        <div className={styles.info}>
          Illuminate Your Software Ventures with Actionable Insights, Gaining Invaluable Understanding for Informed Decisions.
        </div>
        <History />
        <div className={styles.nav}>
          {items.map((x, index) => (
            <button
              className={cn(styles.btn, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x.title}
            </button>
          ))}
        </div>
        <div className={styles.list}>
          {items[activeIndex].items.map((x, index) => (
            <ScrollParallax className={styles.box} key={index}>
              <Item item={x} className={styles.item} />
            </ScrollParallax>
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            Browse more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sights