import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";
const images = [
  "/img/featured.png",
  "/img/5a34b8b475ef58.7736671015134045964831.png",
  "/img/kisspng-junk-food-fast-food-hamburger-french-fries-pizza-junk-food-png-transparent-images-5aaeabbe9ce113.9834250315213966706426.png",
];

const Featured = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction: "l" | "r") => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
