import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import VerticalScrollButton from "../../../components/VerticalScrollButton";

const Hero = ({ scrollToRef }) => {
    return (
        <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    {/* <div className={cn("stage", styles.stage)}>
                        Train smarter. get stronger
                    </div> */}
                    <h1 className={cn("h1", styles.title, styles.dFlex)}>
                        <span className={styles.textNoWrap}>Let’s Build</span>
                        <VerticalScrollButton /> 
                        <span>World Class</span>
                    </h1>
                    <h1 className={cn("h1", styles.title)}>Enterprise Products</h1>
                    <div className={styles.text}>
                        Elevating User Experience with Advanced Software solutions for Business Success
                    </div>
                    <div className={styles.btnsWrap}>
                        <div className={styles.btns}>
                            <Link
                                className={cn("button", styles.button)}
                                to="/download"
                            >
                                Book an Appointment &nbsp; 👋
                            </Link>
                        </div>
                        <div className={styles.redBoxWrap}>
                            <div className={styles.redBox}></div>
                            <div className={styles.emptyBox}></div>
                            <div className={styles.systemBox}>
                                <div className={styles.systemBoxIcon}>
                                    <Image 
                                        src="/images/content/home/hero/system.svg"
                                        srcDark="/images/content/home/hero/system.svg"
                                        alt="System"
                                    />
                                </div>
                                <div className={styles.systemBoxCaption}>IDEAS</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image
                            srcSet="/images/content/watch@2x.png 2x"
                            srcSetDark="/images/content/watch-dark@2x.png 2x"
                            src="/images/content/watch.png"
                            srcDark="/images/content/watch-dark.png"
                            alt="Watch"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/ball@2x.png 2x"
                            src="/images/content/ball.png"
                            alt="Ball"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/bottle@2x.png 2x"
                            src="/images/content/bottle.png"
                            alt="Bottle"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/ball-black@2x.png 2x"
                            src="/images/content/ball-black.png"
                            alt="Ball black"
                        />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Hero;
