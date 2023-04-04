import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Heading from "@/components/Heading";
import Socials from "@/components/Socials";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
      return { notFound: true };
    }
    return {
      props: { socials: data },
    };
  } catch (error) {
    return {
      props: { socials: null },
    };
  }
};

export default function Home({ socials }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Hello World" />
      <Socials socials={socials} />
    </div>
  );
}
