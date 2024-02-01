import React from 'react'
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Services.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const Services = () => {
  return (
    <div className={cn(styles.clientSection)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.headTitle)}>Services</h2>
          <div className={styles.headInfo}>
            We Turn Concepts into Reality, Blending Creativity and Technology to drive Business Growth
          </div>
        </div>
        <div className={styles.btns}>
          <Link
              className={cn("button", styles.primaryButton)}
              to="/download"
          >
            Lets Talk  
          </Link>
          <Link
              className={cn("button-stroke", styles.button)}
              to="/class02-details"
          >
              Know More
          </Link>
        </div>
        <div className={styles.row}>
          <div className={cn(styles.col, styles.col7)}>
            <ScrollParallax>
              <div className={cn(styles.colorBox, styles.bgDark)}>
                <h3 className={styles.colorBoxTitle}>Design</h3>
                <p className={styles.colorBoxInfo}>At UITOUX, design is the infinite realm that ignites our every endeavour. We are the Launchpad of your imagination, turning your concepts into captivating reality.</p>
              </div>
            </ScrollParallax>
          </div>
          <div className={cn(styles.col, styles.col5)}>
            <ScrollParallax>
              <div className={cn(styles.colorBox, styles.bgBlue)}>
                <h3 className={styles.colorBoxTitle}>Design</h3>
                <p className={styles.colorBoxInfo}>Welcome to the Cloud, where we help you soar to new heights. Our Cloud services are like your ticket to the digital stratosphere.</p>
              </div>
            </ScrollParallax>
          </div>
          <div className={cn(styles.col, styles.col5)}>
            <ScrollParallax>
              <div className={cn(styles.colorBox, styles.bgRed)}>
                <h3 className={styles.colorBoxTitle}>Development</h3>
                <p className={styles.colorBoxInfo}>Paving the path to Tomorrow, Today. We are the engines that power your digital dreams.</p>
              </div>
            </ScrollParallax>
          </div>
          <div className={cn(styles.col, styles.col7)}>
            <ScrollParallax>
              <div className={cn(styles.colorBox, styles.bgGreen)}>
                <h3 className={styles.colorBoxTitle}>Support</h3>
                <p className={styles.colorBoxInfo}>With UITOUX, you're never alone on this digital journey. Ready to make waves in the digital realm? Let's create something amazing together!</p>
              </div>
            </ScrollParallax>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Services