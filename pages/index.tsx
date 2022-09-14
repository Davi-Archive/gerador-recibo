import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Recibo from './recibo'
import styles from "../styles/Styles.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Gere seu Recibo!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Crie seu recibo!</h1>
        <Recibo />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://davi38.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por Davi {" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
