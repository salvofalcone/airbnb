import { useReducer } from "react";

import Head from "next/head";

import styles from "@/styles/Home.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "decremented_age": {
      return {
        name: state.name,
        age: state.age - 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { name: "Salvo", age: 25 });

  function addYear(what) {
    dispatch({ type: "incremented_age" });
  }

  function removeYear(what) {
    dispatch({ type: "decremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  return (
    <>
      <Head>
        <title>Air B&B</title>
        <meta name="description" content="Air b&B clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        {/* <h1> sono la home page</h1> */}
        <div className={styles.GlobalState}>
          <div className={styles.year}>

          <button onClick={removeYear}>-</button>
          <p>
            Hello, {state.name}! You are {state.age}.
          </p>
          <button onClick={addYear}>+</button>
          </div>
          <p>Cambia nome:</p>
          <input value={state.name} onChange={handleInputChange} />
        </div>
      </main>
    </>
  );
}
