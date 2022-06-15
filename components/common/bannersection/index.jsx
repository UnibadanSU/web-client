// banner styles in css modules
import styles from "./style.module.css";

export default function BannerSection({ text }) {
  return (
    <div className= {styles.bannerSection}>
      <span>{text}</span>
    </div>
  );
}
