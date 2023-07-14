import Head from "next/head";

import styles from "../styles/Contacts.module.scss";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Air B&B - Contacts</title>
        <meta name="description" content="Air b&B clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Contacts}>
        <h1>Contact section</h1>
      </div>
    </>
  );
};

export default Contacts;
