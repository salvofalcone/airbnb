import Head from "next/head";

import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

import styles from "@/styles/location.module.scss";

const Location = (props) => {
  const room = props.data;
  const router = useRouter();
  const onHandleClick = () => router.back();

  return (
    <>
      <Head>
        <title>Air B&B </title>
        <meta name="description" content="Air b&B clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.Card}>
          {/* <span onClick={onHandleClick} className={styles.GoBack}>
            <BiArrowBack />
          </span> */}

          <div className={styles.Card__Top}>
            <h2 className={styles.Card__Title}>{room.name}</h2>
            <p className={styles.Card__Location}>{room.location}</p>
          </div>
          <div className={styles.Card__Images}>
            {/* aggiungere altre immagini + swiper */}
            <img
              className={styles.Card__Img}
              src={room.imageLocation}
              alt={room.name}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Location;

export async function getServerSideProps(context) {
  const queryId = context.query.id - 1;

  const res = await fetch(
    `https://api.npoint.io/4c36ad988e444043179b/${queryId}`
  );
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
