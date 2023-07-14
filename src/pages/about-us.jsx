import Head from "next/head";

import styles from "../styles/About.module.scss";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Air B&B - About Us</title>
        <meta name="description" content="Air b&B clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.About}>
        <h1>About Us section</h1>
      </main>
    </>
  );
};

export default AboutUs;
