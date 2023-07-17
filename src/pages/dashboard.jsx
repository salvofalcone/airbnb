 import Head from "next/head";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { auth } from "@/mocks/auth";
import { BiLogOut } from "react-icons/bi";

import styles from "../styles/Dashboard.module.scss";

const Dashboard = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(() => {
      if (!JSON.parse(localStorage.getItem("auth"))) {
        router.push("/login");
      }
      return JSON.parse(localStorage.getItem("auth"));
    });
  }, []);

  const logOut = () => {
    localStorage.setItem("auth", false);
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Air B&B - Dashboard</title>
        <meta name="description" content="Air b&B clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Dashboard}>
        <h2>Dashboard</h2>
        <p>Welcome back, {auth.name}! </p>

        <div className={styles.Logout} onClick={logOut}>
          <BiLogOut />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
