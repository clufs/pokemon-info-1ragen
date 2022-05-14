import Head from "next/head"
import { useRouter } from "next/router"
import { Navbar } from "../ui"

interface props {
  children: JSX.Element | JSX.Element[]
  title?: string
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin)

export const Layout = ({children, title='Anasheeeee'}:props) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="autho" content="Nahuel Bautista"/>
        <meta name="description" content="informacion sobre el pokemon"/>
        <meta name="keywords" content="XXXX ,pokemon, pokemon app, pokemon app"/>
        <meta property="og:title" content={`informacion sobre ${title}`} />
        <meta property="og:description" content="Esta es una pagina sobre un pokemon en especifico" />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{
        padding: '0px 20px', 
      }}>
        {children}
      </main>
    </>
  )
}

