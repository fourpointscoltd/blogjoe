import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.img1}>
      <a href='https://youtube.com/@localguide_japan?sub_confirmation=1'><img src='/yt_logo_rgb_light.png'></img></a>
      <a href='https://www.instagram.com/localguide_japan/'><img src='/Instagram_Glyph_Gradient.webp'></img></a>
      <a href='https://www.tiktok.com/@localguide_japan'><img src='/tiktok-logo-B9AC5FE794-seeklogo.png'></img></a>
      </div>
      <p className={styles.cr}>©Local Guide Japan. All Rights Reserved.</p>
    </footer>
  );
}

