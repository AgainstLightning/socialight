import type { NextPage } from 'next'
import Loader from '../components/Loader'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main>
      <h1>HOME</h1>
      <Loader show />
    </main>
  )
}

export default Home
