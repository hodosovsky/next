// import Image from "next/image";
// import youtubeImg from "../../public/youtube.png";
import Layout from "@/components/Layout";
import "@/styles/globals.scss";
// import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image
        src={youtubeImg}
        width={800}
        alt="youtubeImg"
        placeholder="blue"
        priority="false"
      /> */}
    </Layout>
  );
}
