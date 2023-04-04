import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading from "@/components/Heading";
import Head from "next/head";

const Error = () => {
  const router = useRouter();
  console.log("router:", router);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Heading tag="h2" text="404" />
      <p>Page not found</p>
    </>
  );
};

export default Error;
