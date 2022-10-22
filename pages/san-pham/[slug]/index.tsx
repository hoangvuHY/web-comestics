import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import ProductionDetail from '~/components/Production/ProductionDetail';

import { toSlug } from '~/helpers';
import productionData from '~/components/Production/data.json'

const SlugNews = () => {
  const router = useRouter();
  const findItem = productionData.productions.find(production => toSlug(production.name) === router.query.slug)

  return (
    <>
      <Head>
        <title>{findItem?.name}</title>
        <meta name="description" content={findItem?.name} />
      </Head>

      <ProductionDetail production={findItem} />
    </>
  )
}

export default SlugNews;
