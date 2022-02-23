import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>My Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
