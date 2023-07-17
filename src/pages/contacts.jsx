import { useContext } from "react";
import { GlobalContext } from "./_app";

import Head from "next/head";

import styles from "../styles/Contacts.module.scss";

const Contacts = () => {
  const context = useContext(GlobalContext);

  return (
    <>
      <Head>
        <title>Air B&B - Contacts</title>
        <meta name="description" content="Air b&B clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Contacts}>
        <h1>Contacts</h1>
        {/* test uso stato globale */}
        <div>
          <span>Contact </span>
          <a href="https://www.linkedin.com/in/salvofalcone/">
            <span>
              {context.user.name} {context.user.surname}
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
