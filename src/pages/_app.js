import { createContext } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.css";

export const GlobalContext = createContext({
  user: {
    name: "Salvo",
    surname: "Falcone",
    age: 25,
  },
  shoppingList: [
    { id: 1, items: 24 },
    { id: 2, items: 34 },
    { id: 3, items: 44 },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
