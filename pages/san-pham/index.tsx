import Head from "next/head";
import React from "react";
import ProductionComponent from "~/components/Production";

const Production = () => {
  return (
    <>
      <Head>
        <title>Sản phẩm</title>
        <meta name="description" content="Sản phẩm" />
      </Head>

      <ProductionComponent />
    </>
  );
};

export default Production;
