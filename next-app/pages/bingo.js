import Head from 'next/head'
import Button from '@mui/material/Button'
import Bingo from 'components/Bingo/index'


export default function bingo() {
  return (
    <>
      <Head>
        <title> Bingo </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
        <link rel="manifest" href="../site.webmanifest"/>
        <link rel="mask-icon" href="../safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#9f00a7"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:image" content="../thumbnail.png"/>
      </Head>
      <main>
        <h1> Bingo </h1>
          <center>
            <Bingo />
          </center>
      </main>
    </>
  )
}
