import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import SvgComponent from "../components/Icons/Login";
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";

export default function Home() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   onAuthStateChanged(setUser);
  // }, []);

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        // const { avatar, username, email } = user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Devter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Devter</a>
        </h1>
        <p className={styles.text}>Bienvenido a la comunidad Dev</p>
        {user === null ? (
          <Button onClick={handleClick}>
            <SvgComponent fill="#fff" />
            Login
          </Button>
        ) : (
          <div>
            <img src={user.avatar} />
            <strong>{user.username}</strong>
          </div>
        )}
        {/* <nav>
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
        </nav> */}
      </main>
    </div>
  );
}
