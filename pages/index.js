import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';

import slidebar from './components/slidebar'
import nav from './components/nevbar'

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homely from './components/home'


import toast, { Toaster, ToastBar } from 'react-hot-toast';

const notify = () => toast.success('Welcome', {
  position: "bottom-right"
})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="main">
      <Head>
        <title>Home - NiceKun</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* bootstrap */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> */}

{/* Meta Tags */}
<meta name="title" content="NiceKun - Vtuber Reporter" />
<meta name="description" content="Because VTuber will crash. So this website was born." />

{/* Open Graph / Facebook */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://nicemc.xyz/" />
<meta property="og:title" content="NiceKun - Vtuber Reporter" />
<meta property="og:description" content="Because VTuber will crash. So this website was born." />
<meta property="og:image" content="https://media.discordapp.net/attachments/1090140099724980346/1104427369634201690/R_2.png?width=469&height=268" />

{/* Twitter */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://nicemc.xyz/" />
<meta property="twitter:title" content="NiceKun - Vtuber Reporter" />
<meta property="twitter:description" content="Because VTuber will crash. So this website was born." />
<meta property="twitter:image" content="https://media.discordapp.net/attachments/1090140099724980346/1104427369634201690/R_2.png?width=469&height=268" />

      </Head>
      <slidebar />
      <div className='glass'>
        <center><h1 className='title'>ดูเหมีอนมีปัญหาเกิดขี้น</h1></center>
        <br></br>
        <center><button onClick={notify} className='bg-indigo-500 rounded-full'>Try click me!</button></center>
      </div>
      <div className='main48'></div>
      <Toaster />
    </main>
  )
}
