import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

import newsData from '~/components/News/data.json';
import NewsDetail from '~/components/News/NewsDetail';
import { toSlug } from '~/helpers';

const SlugNews = () => {
  const router = useRouter();
  const findItem = newsData.newsDetail.find(news => toSlug(news.title) === router.query.slug)

  return (
    <>
      <Head>
        <title>{findItem?.title}</title>
        <meta name="description" content={findItem?.title} />
      </Head>

      <NewsDetail news={findItem} />
    </>
  )
}

export default SlugNews;
