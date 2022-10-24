import Head from 'next/head'
import React from 'react'

import ConsultingSolutionComponent from '~/components/ConsultingSolution';

const ConsultingSolutions = () => {
  return (
    <>
      <Head>
        <title>Giải pháp tư vấn</title>
        <meta name="description" content="Giải pháp tư vấn" />
      </Head>

      <ConsultingSolutionComponent />
    </>
  )
}

export default ConsultingSolutions;