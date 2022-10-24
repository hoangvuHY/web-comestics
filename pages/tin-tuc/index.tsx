import Head from "next/head";
import React from "react";
import NewsComponent from "~/components/News";

const News = () => {
  return (
    <>
      <Head>
        <title>Tin Tức</title>
        <meta name="description" content="Tin Tức" />
      </Head>

      <NewsComponent />
    </>
  );
};

export default News;
