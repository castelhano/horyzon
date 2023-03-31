import Head from 'next/head'
import {Navbar, NavbarItem} from '__/layout/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar titulo="Meu foo">
          <NavbarItem text={<i className="bi-alarm"></i>} onclick={() => console.log('Ola mundo...')} />
          <NavbarItem text="meu item" onclick={() => console.log('Fooo')} />
      </Navbar>
    </>
  )
}
