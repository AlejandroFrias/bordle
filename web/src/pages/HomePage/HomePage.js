import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Bordle</h1>
      <p>Welcome to Bordle!</p>
    </>
  )
}

export default HomePage
