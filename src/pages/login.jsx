import Head from "next/head";

import { auth } from "@/mocks/auth";

import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Login.module.scss";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    try {
      if (auth.username === username && auth.password === password) {
        localStorage.setItem("auth", true);
        router.push("/dashboard");
      } else {
        alert("Qualcosa è andato storto!");
        throw new Error("Credenziali non valide");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Air B&B - Login</title>
        <meta name="description" content="Air b&B clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Login}>
        <form onSubmit={onHandleSubmit} className={styles.Login__Form}>
          <h2>Log In</h2>
          <input
            /* value={username} */
            type="text"
            placeholder="Username"
            onChange={onHandleUsername}
            required
          />
          <input
            /* value={password} */
            type="password"
            placeholder="Password"
            onChange={onHandlePassword}
            required
          />
          <input
            type="submit"
            value="Log In"
            className={styles.Login__Submit}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
