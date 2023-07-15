import ClientReviews from '../components/ClientReviews';
import Doubts from '../components/Doubts';
import Expertise from '../components/Expertise';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';


import React from 'react'

export default function Home() {
  return (
    <main>
        <Header />
        <Main />
      <Expertise />
      <ClientReviews />
      <Doubts />
      <Footer />
    </main>
  )
}
